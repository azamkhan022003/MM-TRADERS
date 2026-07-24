

import msSteelImg from "../assets/images/ms-steel.jpg";
import msStructureImg from "../assets/images/ms-structure.jpg";
import msPipeImg from "../assets/images/ms-pipe.jpg";
import msFlatImg from "../assets/images/ms-flat.jpg";
import msAngleImg from "../assets/images/ms-angle.jpg";
import msChannelImg from "../assets/images/ms-channel.jpg";
import basePlateImg from "../assets/images/base-plate.jpg";
import profileSheetImg from "../assets/images/profile-sheet.jpg";

const products = [
  {
    id: 1,
    name: "MS Steel",
    image: msSteelImg,
    description: "Premium quality Mild Steel available in all grades.",
    grade: "IS 2062 / Fe 415",
    sizes: "6mm - 100mm",
    application: "Construction, Fabrication"
  },
  {
    id: 2,
    name: "MS Structure",
    image: msStructureImg,
    description: "Strong MS Structural Steel.",
    grade: "IS 2062 Grade A",
    sizes: "All Sizes",
    application: "Industrial Buildings"
  },
  {
    id: 3,
    name: "MS Pipe",
    image: msPipeImg,
    description: "Round MS Pipe.",
    grade: "IS 1239",
    sizes: "1/2 inch - 12 inch",
    application: "Water Supply"
  },
  {
    id: 4,
    name: "MS Flat",
    image: msFlatImg,
    description: "Premium Flat Bars.",
    grade: "IS 2062",
    sizes: "20mm - 150mm",
    application: "Fabrication"
  },
  {
    id: 5,
    name: "MS Angle",
    image: msAngleImg,
    description: "High strength MS Angle.",
    grade: "IS 2062 Grade B",
    sizes: "25x25 - 150x150",
    application: "Frames"
  },
  {
    id: 6,
    name: "MS Channel",
    image: msChannelImg,
    description: "ISMC Channels.",
    grade: "IS 2062",
    sizes: "75mm - 400mm",
    application: "Structural Support"
  },
  {
    id: 7,
    name: "Base Plate",
    image: basePlateImg,
    description: "Heavy-duty MS Base Plates for structural support.",
    grade: "IS 2062 Grade E250",
    sizes: "6mm - 50mm thickness",
    application: "Column Base, Foundations"
  },
  {
    id: 8,
    name: "Profile Sheet",
    image: profileSheetImg,
    description: "Durable profile sheets for roofing and cladding.",
    grade: "IS 513 / Galvanized",
    sizes: "Custom Lengths & Gauges",
    application: "Roofing, Wall Cladding"
  }
];

export default products;