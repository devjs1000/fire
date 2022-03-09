import {
  House,
  Journal,
  Hammer,
  People,
  Image,
  HeartHalf,
  Book,
  ChatRight,
  PieChart,
} from "react-bootstrap-icons";

const bluePrint = [
  {
    name: "Home",
    icon: <House />,
    path: "/",
  },
  {
    name: "organisational chart",
    icon: <PieChart />,
    path: "/our-team/organisational-chart",
  },


  { name: "product gallery", icon: <Hammer />, path: "/our-products/gallery" },
  {
    name: "product description",
    icon: <Hammer />,
    path: "/our-products/description",
  },
  {
    name: "technical write up",
    icon: <Hammer />,
    path: "/our-products/technical-write-up",
  },

  { name: "Introduction", icon: <People />, path: "/about-us/introduction" },
  { name: "Machinery List", icon: <Book />, path: "/about-us/machinery-list" },
];

export default bluePrint;
