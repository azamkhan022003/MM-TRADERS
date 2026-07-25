import { db } from "../firebase";
import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

const STORAGE_KEY_ORDERS = "mm_traders_admin_orders";
const STORAGE_KEY_CONTACTS = "mm_traders_admin_contacts";

// Default Initial Seed Data if both LocalStorage & Firestore are empty
const INITIAL_ORDERS = [
  {
    id: "ord_101",
    name: "Rajesh Sharma",
    phone: "+91 9826012345",
    email: "rajesh.sharma@gmail.com",
    company: "Sharma Infra Projects",
    product: "MS Structure",
    quantity: "15 Tons",
    city: "Gwalior",
    message: "Requirement for warehouse structural framework. Urgent quote needed.",
    date: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "Pending",
  },
  {
    id: "ord_102",
    name: "Vikram Singh",
    phone: "+91 9425188899",
    email: "vikram@singhconstructions.com",
    company: "Singh Builders",
    product: "MS Pipe",
    quantity: "500 Meters",
    city: "Indore",
    message: "Heavy-duty 4-inch MS pipes needed for industrial plumbing.",
    date: new Date(Date.now() - 3600000 * 24).toISOString(),
    status: "Contacted",
  },
  {
    id: "ord_103",
    name: "Amit Patel",
    phone: "+91 9752044321",
    email: "amit.p@patelsteel.in",
    company: "Patel Steel Corp",
    product: "Profile Sheet",
    quantity: "2000 Sq Ft",
    city: "Bhopal",
    message: "Color coated roofing profile sheets required.",
    date: new Date(Date.now() - 3600000 * 48).toISOString(),
    status: "Completed",
  },
];

const INITIAL_CONTACTS = [
  {
    id: "cnt_201",
    name: "Suresh Gupta",
    phone: "+91 9111223344",
    email: "suresh.g@gmail.com",
    message: "Do you supply customized MS Angle sizes and carry out site delivery in Gwalior?",
    date: new Date(Date.now() - 3600000 * 5).toISOString(),
    status: "Pending",
  },
  {
    id: "cnt_202",
    name: "Priya Mehta",
    phone: "+91 9893011223",
    email: "priya.mehta@techpark.org",
    message: "We need GST invoices and credit terms for bulk steel structural orders.",
    date: new Date(Date.now() - 3600000 * 30).toISOString(),
    status: "Contacted",
  },
];

// Helper: Local Storage operations
const getLocalData = (key, defaultData) => {
  try {
    const data = localStorage.getItem(key);
    if (!data) {
      localStorage.setItem(key, JSON.stringify(defaultData));
      return defaultData;
    }
    return JSON.parse(data);
  } catch (err) {
    console.warn("LocalStorage read error:", err);
    return defaultData;
  }
};

const saveLocalData = (key, data) => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (err) {
    console.warn("LocalStorage save error:", err);
  }
};

// Seed LocalStorage initially if empty
getLocalData(STORAGE_KEY_ORDERS, INITIAL_ORDERS);
getLocalData(STORAGE_KEY_CONTACTS, INITIAL_CONTACTS);

// === ORDER MANAGEMENT ===

export const saveOrder = async (orderData) => {
  const newOrder = {
    ...orderData,
    date: new Date().toISOString(),
    status: "Pending",
  };

  // Save to LocalStorage immediately
  const currentLocal = getLocalData(STORAGE_KEY_ORDERS, INITIAL_ORDERS);
  const localWithNew = [{ ...newOrder, id: `ord_${Date.now()}` }, ...currentLocal];
  saveLocalData(STORAGE_KEY_ORDERS, localWithNew);

  // Sync with Firestore if possible
  try {
    const docRef = await addDoc(collection(db, "orders"), newOrder);
    return docRef.id;
  } catch (error) {
    console.warn("Firestore save order fallback to local storage:", error.message);
    return localWithNew[0].id;
  }
};

export const getOrders = async () => {
  let ordersList = [];
  try {
    const q = query(collection(db, "orders"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      ordersList.push({ id: docSnap.id, ...docSnap.data() });
    });
  } catch (error) {
    console.warn("Firestore fetch orders failed, loading local cache:", error.message);
  }

  if (ordersList.length === 0) {
    ordersList = getLocalData(STORAGE_KEY_ORDERS, INITIAL_ORDERS);
  } else {
    // Sync back to local storage cache
    saveLocalData(STORAGE_KEY_ORDERS, ordersList);
  }
  return ordersList;
};

export const updateOrderStatus = async (orderId, newStatus) => {
  // Update Local Storage
  const currentLocal = getLocalData(STORAGE_KEY_ORDERS, INITIAL_ORDERS);
  const updatedLocal = currentLocal.map((item) =>
    item.id === orderId ? { ...item, status: newStatus } : item
  );
  saveLocalData(STORAGE_KEY_ORDERS, updatedLocal);

  // Update Firestore
  try {
    const docRef = doc(db, "orders", orderId);
    await updateDoc(docRef, { status: newStatus });
  } catch (error) {
    console.warn("Firestore update order status fallback local:", error.message);
  }
};

export const deleteOrder = async (orderId) => {
  // Local Storage
  const currentLocal = getLocalData(STORAGE_KEY_ORDERS, INITIAL_ORDERS);
  const filteredLocal = currentLocal.filter((item) => item.id !== orderId);
  saveLocalData(STORAGE_KEY_ORDERS, filteredLocal);

  // Firestore
  try {
    const docRef = doc(db, "orders", orderId);
    await deleteDoc(docRef);
  } catch (error) {
    console.warn("Firestore delete order fallback local:", error.message);
  }
};

// === CONTACT MANAGEMENT ===

export const saveContact = async (contactData) => {
  const newContact = {
    ...contactData,
    date: new Date().toISOString(),
    status: "Pending",
  };

  // Local Storage save
  const currentLocal = getLocalData(STORAGE_KEY_CONTACTS, INITIAL_CONTACTS);
  const localWithNew = [{ ...newContact, id: `cnt_${Date.now()}` }, ...currentLocal];
  saveLocalData(STORAGE_KEY_CONTACTS, localWithNew);

  // Firestore sync
  try {
    const docRef = await addDoc(collection(db, "contacts"), newContact);
    return docRef.id;
  } catch (error) {
    console.warn("Firestore save contact fallback to local storage:", error.message);
    return localWithNew[0].id;
  }
};

export const getContacts = async () => {
  let contactsList = [];
  try {
    const q = query(collection(db, "contacts"), orderBy("date", "desc"));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docSnap) => {
      contactsList.push({ id: docSnap.id, ...docSnap.data() });
    });
  } catch (error) {
    console.warn("Firestore fetch contacts failed, loading local cache:", error.message);
  }

  if (contactsList.length === 0) {
    contactsList = getLocalData(STORAGE_KEY_CONTACTS, INITIAL_CONTACTS);
  } else {
    saveLocalData(STORAGE_KEY_CONTACTS, contactsList);
  }
  return contactsList;
};

export const updateContactStatus = async (contactId, newStatus) => {
  const currentLocal = getLocalData(STORAGE_KEY_CONTACTS, INITIAL_CONTACTS);
  const updatedLocal = currentLocal.map((item) =>
    item.id === contactId ? { ...item, status: newStatus } : item
  );
  saveLocalData(STORAGE_KEY_CONTACTS, updatedLocal);

  try {
    const docRef = doc(db, "contacts", contactId);
    await updateDoc(docRef, { status: newStatus });
  } catch (error) {
    console.warn("Firestore update contact status fallback local:", error.message);
  }
};

export const deleteContact = async (contactId) => {
  const currentLocal = getLocalData(STORAGE_KEY_CONTACTS, INITIAL_CONTACTS);
  const filteredLocal = currentLocal.filter((item) => item.id !== contactId);
  saveLocalData(STORAGE_KEY_CONTACTS, filteredLocal);

  try {
    const docRef = doc(db, "contacts", contactId);
    await deleteDoc(docRef);
  } catch (error) {
    console.warn("Firestore delete contact fallback local:", error.message);
  }
};

// === CSV EXPORT HELPER ===

export const exportToCSV = (data, filename) => {
  if (!data || !data.length) return;
  const headers = Object.keys(data[0]).join(",");
  const rows = data.map((obj) =>
    Object.values(obj)
      .map((val) => `"${String(val || "").replace(/"/g, '""')}"`)
      .join(",")
  );
  const csvContent = "data:text/csv;charset=utf-8," + [headers, ...rows].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `${filename}_${new Date().toISOString().slice(0, 10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
