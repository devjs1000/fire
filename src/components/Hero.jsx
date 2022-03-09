import { Link } from "react-router-dom";
import bluePrint from "../bluePrints/heroPrint";
import forgeImg from '../images/forge.gif'
export default () => {
  return (
    <div
      className={
        "min-h-[70vh] overflow-hidden my-2 flex flex-wrap sm:flex-nowrap relative  " +
        bluePrint.theme
      }
    >
      <iframe
        className="h-[50vh] w-[25rem]"
        src="https://www.youtube.com/embed/8GveeXCek-c"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className=" bg-[rgba(0,0,0,.7)] h-[50vh] col-span-3  w-full text-slate-300" style={{backgroundImage:`url(${forgeImg})`}}>
        <h2 className="text-xl p-5 sm:text-justify">
          {" "}
          WHEN HAZARDOUS SERVICES, CORROSION, ABRASION, VERYING TEMPERATURE AND
          PRESSURE CONDITIONS AND TIMELY DELIVERY ARE YOUR PROBLEMS
        </h2>

        <h1 className="text-4xl text-center font-bold">ART FIT FORGE</h1>
        <div className="text-center">
          <Link
            to="/about-us/introduction"
            className="bg-teal-600 py-2 px-4  mt-4 inline-block hover:bg-teal-500 "
          >
            read more
          </Link>
        </div>
      </div>
    </div>
  );
};
