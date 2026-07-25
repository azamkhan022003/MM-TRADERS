import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  getOrders,
  getContacts,
  updateOrderStatus,
  updateContactStatus,
  deleteOrder,
  deleteContact,
  exportToCSV,
} from "../services/adminService";
import {
  FaShoppingBag,
  FaEnvelope,
  FaCheckCircle,
  FaClock,
  FaWhatsapp,
  FaTrash,
  FaDownload,
  FaSearch,
  FaLock,
  FaSync,
  FaUserShield,
  FaSignOutAlt,
  FaPhoneAlt,
  FaBuilding,
  FaMapMarkerAlt,
} from "react-icons/fa";
import "./AdminPage.css";

function AdminPage() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(
    () => sessionStorage.getItem("mm_admin_auth") === "true"
  );
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState("");

  // Data States
  const [orders, setOrders] = useState([]);
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Filter and Tab States
  const [activeTab, setActiveTab] = useState("orders"); // "orders", "contacts", "analytics"
  const [statusFilter, setStatusFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const DEFAULT_PIN = "2580";

  // Load Data
  const fetchData = async () => {
    setLoading(true);
    try {
      const ordersData = await getOrders();
      const contactsData = await getContacts();
      setOrders(ordersData);
      setContacts(contactsData);
    } catch (err) {
      console.error("Error fetching admin data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  const handleLogin = (e) => {
    e.preventDefault();
    if (pinInput === DEFAULT_PIN || pinInput === "2580") {
      setIsAuthenticated(true);
      sessionStorage.setItem("mm_admin_auth", "true");
      setPinError("");
    } else {
      setPinError("Invalid Admin PIN. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    sessionStorage.removeItem("mm_admin_auth");
    setPinInput("");
  };

  // Order Actions
  const handleOrderStatusChange = async (id, newStatus) => {
    await updateOrderStatus(id, newStatus);
    setOrders((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDeleteOrder = async (id) => {
    if (window.confirm("Are you sure you want to delete this order inquiry?")) {
      await deleteOrder(id);
      setOrders((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Contact Actions
  const handleContactStatusChange = async (id, newStatus) => {
    await updateContactStatus(id, newStatus);
    setContacts((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDeleteContact = async (id) => {
    if (window.confirm("Are you sure you want to delete this contact entry?")) {
      await deleteContact(id);
      setContacts((prev) => prev.filter((item) => item.id !== id));
    }
  };

  // Filtered Lists
  const filteredOrders = orders.filter((item) => {
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    const matchesSearch =
      (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.phone && item.phone.includes(searchTerm)) ||
      (item.product && item.product.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.city && item.city.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  const filteredContacts = contacts.filter((item) => {
    const matchesStatus = statusFilter === "All" || item.status === statusFilter;
    const matchesSearch =
      (item.name && item.name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.phone && item.phone.includes(searchTerm)) ||
      (item.email && item.email.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (item.message && item.message.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesStatus && matchesSearch;
  });

  // Calculate Dashboard Metrics
  const pendingOrders = orders.filter((o) => o.status === "Pending").length;
  const pendingContacts = contacts.filter((c) => c.status === "Pending").length;
  const completedOrders = orders.filter((o) => o.status === "Completed").length;

  const formatDate = (isoString) => {
    if (!isoString) return "N/A";
    try {
      const d = new Date(isoString);
      return d.toLocaleDateString("en-IN", {
        day: "2-digit",
        month: "short",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    } catch {
      return isoString;
    }
  };

  if (!isAuthenticated) {
    return (
      <>
        <Navbar />
        <div className="admin-login-container">
          <div className="admin-login-card">
            <div className="login-icon">
              <FaUserShield />
            </div>
            <h2>MM Traders Admin Portal</h2>
            <p>Please enter your Admin PIN to access dashboard</p>

            <form onSubmit={handleLogin} className="admin-login-form">
              <div className="pin-input-group">
                <FaLock className="pin-icon" />
                <input
                  type="password"
                  placeholder="Enter Admin PIN"
                  value={pinInput}
                  onChange={(e) => setPinInput(e.target.value)}
                  maxLength={10}
                  autoFocus
                />
              </div>

              {pinError && <div className="login-error">{pinError}</div>}

              <button type="submit" className="admin-login-btn">
                Unlock Dashboard
              </button>
            </form>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="admin-dashboard">
        <div className="admin-container">
          {/* Header */}
          <div className="admin-header">
            <div>
              <span className="admin-badge">ADMIN DASHBOARD</span>
              <h1>MM Traders Management Console</h1>
              <p>Track incoming customer orders, quotations, and contact inquiries</p>
            </div>
            <div className="admin-actions">
              <button className="refresh-btn" onClick={fetchData} title="Refresh Data">
                <FaSync className={loading ? "spin" : ""} /> Refresh
              </button>
              <button className="logout-btn" onClick={handleLogout}>
                <FaSignOutAlt /> Lock Portal
              </button>
            </div>
          </div>

          {/* Metric Cards */}
          <div className="metrics-grid">
            <div className="metric-card gold">
              <div className="metric-icon">
                <FaShoppingBag />
              </div>
              <div className="metric-info">
                <h3>{orders.length}</h3>
                <p>Total Orders & Inquiries</p>
                <span className="metric-sub">{pendingOrders} Pending Action</span>
              </div>
            </div>

            <div className="metric-card blue">
              <div className="metric-icon">
                <FaEnvelope />
              </div>
              <div className="metric-info">
                <h3>{contacts.length}</h3>
                <p>Total Contacts</p>
                <span className="metric-sub">{pendingContacts} Unread / Pending</span>
              </div>
            </div>

            <div className="metric-card orange">
              <div className="metric-icon">
                <FaClock />
              </div>
              <div className="metric-info">
                <h3>{pendingOrders + pendingContacts}</h3>
                <p>Total Pending Tasks</p>
                <span className="metric-sub">Requires Follow-up</span>
              </div>
            </div>

            <div className="metric-card green">
              <div className="metric-icon">
                <FaCheckCircle />
              </div>
              <div className="metric-info">
                <h3>{completedOrders}</h3>
                <p>Completed Orders</p>
                <span className="metric-sub">Processed Successfully</span>
              </div>
            </div>
          </div>

          {/* Navigation Tabs & Controls */}
          <div className="admin-controls-card">
            <div className="admin-tabs">
              <button
                className={`tab-btn ${activeTab === "orders" ? "active" : ""}`}
                onClick={() => setActiveTab("orders")}
              >
                <FaShoppingBag /> Orders / Quotes ({orders.length})
              </button>
              <button
                className={`tab-btn ${activeTab === "contacts" ? "active" : ""}`}
                onClick={() => setActiveTab("contacts")}
              >
                <FaEnvelope /> Contact Inquiries ({contacts.length})
              </button>
            </div>

            <div className="filter-group">
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search name, phone, product, city..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              <select
                className="status-select"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="All">All Statuses</option>
                <option value="Pending">Pending</option>
                <option value="Contacted">Contacted</option>
                <option value="Completed">Completed</option>
              </select>

              {activeTab === "orders" && (
                <button
                  className="export-btn"
                  onClick={() => exportToCSV(orders, "MM_Traders_Orders")}
                >
                  <FaDownload /> Export CSV
                </button>
              )}
              {activeTab === "contacts" && (
                <button
                  className="export-btn"
                  onClick={() => exportToCSV(contacts, "MM_Traders_Contacts")}
                >
                  <FaDownload /> Export CSV
                </button>
              )}
            </div>
          </div>

          {/* Content Views */}
          {loading ? (
            <div className="admin-loading">
              <div className="loader-spinner"></div>
              <p>Loading database records...</p>
            </div>
          ) : (
            <>
              {/* TAB 1: ORDERS / QUOTES */}
              {activeTab === "orders" && (
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Customer</th>
                        <th>Product & Qty</th>
                        <th>Location / City</th>
                        <th>Requirement / Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredOrders.length === 0 ? (
                        <tr>
                          <td colSpan="7" className="no-data">
                            No orders or quotation inquiries match your search.
                          </td>
                        </tr>
                      ) : (
                        filteredOrders.map((ord) => (
                          <tr key={ord.id} className={`row-status-${ord.status?.toLowerCase()}`}>
                            <td className="date-cell">{formatDate(ord.date)}</td>
                            <td>
                              <div className="user-info font-weight-bold">{ord.name}</div>
                              {ord.phone && (
                                <div className="phone-line">
                                  <FaPhoneAlt className="tiny-icon" /> {ord.phone}
                                </div>
                              )}
                              {ord.email && <div className="email-line">{ord.email}</div>}
                              {ord.company && (
                                <div className="company-line">
                                  <FaBuilding className="tiny-icon" /> {ord.company}
                                </div>
                              )}
                            </td>
                            <td>
                              <span className="product-tag">{ord.product || "Steel Product"}</span>
                              {ord.quantity && (
                                <div className="qty-tag">Qty: {ord.quantity}</div>
                              )}
                            </td>
                            <td>
                              {ord.city ? (
                                <span>
                                  <FaMapMarkerAlt className="tiny-icon" /> {ord.city}
                                </span>
                              ) : (
                                "—"
                              )}
                            </td>
                            <td className="msg-cell">{ord.message || "No additional note."}</td>
                            <td>
                              <select
                                className={`badge-status status-${ord.status?.toLowerCase()}`}
                                value={ord.status || "Pending"}
                                onChange={(e) =>
                                  handleOrderStatusChange(ord.id, e.target.value)
                                }
                              >
                                <option value="Pending">🟡 Pending</option>
                                <option value="Contacted">🔵 Contacted</option>
                                <option value="Completed">🟢 Completed</option>
                              </select>
                            </td>
                            <td>
                              <div className="table-actions">
                                {ord.phone && (
                                  <a
                                    href={`https://wa.me/${ord.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                      `Hello ${ord.name}, regarding your order request for ${ord.product || "steel items"} at MM Traders...`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="action-btn whatsapp"
                                    title="Chat on WhatsApp"
                                  >
                                    <FaWhatsapp />
                                  </a>
                                )}
                                <button
                                  className="action-btn delete"
                                  onClick={() => handleDeleteOrder(ord.id)}
                                  title="Delete Record"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}

              {/* TAB 2: CONTACT MESSAGES */}
              {activeTab === "contacts" && (
                <div className="table-responsive">
                  <table className="admin-table">
                    <thead>
                      <tr>
                        <th>Date & Time</th>
                        <th>Name</th>
                        <th>Phone & Email</th>
                        <th>Message</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredContacts.length === 0 ? (
                        <tr>
                          <td colSpan="6" className="no-data">
                            No contact inquiries match your criteria.
                          </td>
                        </tr>
                      ) : (
                        filteredContacts.map((cnt) => (
                          <tr key={cnt.id} className={`row-status-${cnt.status?.toLowerCase()}`}>
                            <td className="date-cell">{formatDate(cnt.date)}</td>
                            <td className="font-weight-bold">{cnt.name}</td>
                            <td>
                              {cnt.phone && (
                                <div className="phone-line">
                                  <FaPhoneAlt className="tiny-icon" /> {cnt.phone}
                                </div>
                              )}
                              {cnt.email && <div className="email-line">{cnt.email}</div>}
                            </td>
                            <td className="msg-cell">{cnt.message}</td>
                            <td>
                              <select
                                className={`badge-status status-${cnt.status?.toLowerCase()}`}
                                value={cnt.status || "Pending"}
                                onChange={(e) =>
                                  handleContactStatusChange(cnt.id, e.target.value)
                                }
                              >
                                <option value="Pending">🟡 Pending</option>
                                <option value="Contacted">🔵 Contacted</option>
                                <option value="Completed">🟢 Completed</option>
                              </select>
                            </td>
                            <td>
                              <div className="table-actions">
                                {cnt.phone && (
                                  <a
                                    href={`https://wa.me/${cnt.phone.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
                                      `Hello ${cnt.name}, thank you for contacting MM Traders. How can we help you today?`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="action-btn whatsapp"
                                    title="Reply on WhatsApp"
                                  >
                                    <FaWhatsapp />
                                  </a>
                                )}
                                <button
                                  className="action-btn delete"
                                  onClick={() => handleDeleteContact(cnt.id)}
                                  title="Delete Record"
                                >
                                  <FaTrash />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))
                      )}
                    </tbody>
                  </table>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AdminPage;
