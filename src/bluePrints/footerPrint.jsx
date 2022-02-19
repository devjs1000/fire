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
      title: "work",
      list: [
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
      ],
    },
    {
      title: "work",
      list: [
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
        { title: "Our Projects" },
        { title: "Medical & Health" },
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
