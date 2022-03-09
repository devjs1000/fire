import { Children } from "react";
import { XLg } from "react-bootstrap-icons";
import bluePrint from "../bluePrints/sidePrint";
import { Link } from "react-router-dom";

const SideBtn = ({icon, iconName, path}) => {
  return (
    <>
      <li>
        <Link
         to={path}
          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-gray-50 text-gray-600 hover:text-gray-800 border-l-4 border-transparent hover:border-teal-500 pr-6"
        >
          <span className="inline-flex justify-center items-center ml-4">
         {icon}
          </span>
          <span className="ml-2 text-sm tracking-wide truncate">{iconName} </span>
          
        </Link>
      </li>
    </>
  );
};

function SideBar({ openSidebar, setOpenSidebar }) {
  let asideclassNamees = `fixed top-0 left-0 w-full  ${
    openSidebar ? "transform translate-x-0" : "transform translate-x-[-100%]"
  } h-full bg-white py-6 px-8 drop-shadow-lg transition ease-out duration-500 md:w-4/12 md:top-0 lg:w-1/4`;

  const closeSidebarHandler = () => {
    setOpenSidebar(!openSidebar);
    document.getElementById("root").style.filter = "blur(0)";
  };

  const disabled = { pointerEvents: "none", opacity: ".5" };
  return (
    <aside className={asideclassNamees}>
      <ul className="flex flex-col items-start gap-10 ">
        <li className="self-end cursor-pointer">
          <XLg
            className="w-12 cursor-pointer hover:rotate-180 transition-all text-3xl"
            onClick={closeSidebarHandler}
          />
        </li>
        <div className="fixed flex flex-col top-0 left-0 w-64 bg-white h-full border-r">
          <div className="flex items-center justify-center h-14 border-b"></div>
          <div className="overflow-y-auto overflow-x-hidden flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
              <li className="px-5">
                <div className="flex flex-row items-center h-8">
                  <div className="text-sm font-light tracking-wide text-gray-500">
                    Menu
                  </div>
                </div>
              </li>

              {Children.toArray(bluePrint.map(a=>{
                return <SideBtn icon={a.icon} path={a.path} iconName={a.name} />
              }))}
            </ul>
          </div>
        </div>
      </ul>
    </aside>
  );
}

export default SideBar;
