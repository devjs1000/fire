import {
  Facebook,
  Twitter,
  Youtube,
  Google,
} from "react-bootstrap-icons";

const bluePrint = {
  brandName: "XcitEducation",
  description: "",
  lists: [
    {
      title: "address",
      list: [
        { title: "PUNE-26 MAHARASHTRA" },
       
      ],
    },
    {
      title: "pages",
      list: [
        { title: "HOME", path:'/' },
        { title: "PRODUCT GALLERY" , path:'/our-products/gallery'},
        { title: "PRODUCT DESCRIPTION" , path:'/our-products/description'},
        { title: "TECHNICAL WRITE UP" , path:'/our-products/technical-write-up'},
        { title: "INTRODUCTION" , path:'/about-us/introduction'},
        { title: "MACHINERY LIST" , path:'/about-us/machinery-list'},
        { title: "ORGANISATIONAL CHART" , path:'/our-team/organisational-chart'},

      ],
    },
  ],

  socialIcons: [
    <Facebook className="h-[1.5rem] w-[1.5rem] rounded-full hover:opacity-[50%] my-2" />,
    <Twitter className="h-[1.5rem] w-[1.5rem] rounded-full hover:opacity-[50%] my-2" />,
    <Youtube className="h-[1.5rem] w-[1.5rem] rounded-full hover:opacity-[50%] my-2" />,
    <Google className="h-[1.5rem] w-[1.5rem] rounded-full hover:opacity-[50%] my-2" />,
  ],
};

export default bluePrint;
