import {
  House,
  Journal,
  Hammer,
  People,
  Image,
  HeartHalf,
} from "react-bootstrap-icons";

const bluePrint = [
  {
    name: "Home",
    icon: House,
    path: "/",
    
  },
  {
    name: "Our Certifications",
    icon: Journal,
    path: "/our-certifications",
    child: [
      { name: "organisational chart", path: "/our-team/organisational-chart" },
    ],
  },
  {
    name: "Our Products",
    icon: Hammer,
    path: "/our-products",
    child: [
      { name: "product gallery", path: "/our-products/gallery" },
      { name: "product description", path: "/our-products/description" },
      { name: "technical write up", path: "/our-products/technical-write-up" },

    ],
  },
  {
    name: "About Us",
    icon: People,
    path: "/about-us",
    child: [
      { name: "Introduction", path: "/about-us/introduction" },
      { name: "Machinery List", path: "/about-us/machinery-list" },
    ],
  },
  
  {
    name: "Our Team",
    icon: HeartHalf,
    path: "/our-team",
    child: [
      { name: "organizational chart", path: "/our-team/organisational-chart" },
    ],
  },
];

export default bluePrint;
