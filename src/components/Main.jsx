import Explain from "./Explain";
import thermax from "../images/thermax.png";
import ksb from "../images/KSB.png";
import forbes from "../images/forbes.jpeg";
import lt from "../images/lt.png";
import palgroup from "../images/palgroup.jpg";
import thyssenkrupp from "../images/thyssenkrupp.png";
import ISGEC from "../images/ISGEC.png";
import hydac from "../images/hydac.png";
import fluidcontrol from "../images/fluidcontrol.png";
import alfalaval from "../images/alfalaval.png";
import EmailUs from "./EmailUs";
import advantageImg from "../images/advantage.jpg";
export default () => {
  return (
    <div>
      <h1 className="sm:text-5xl text-4xl my-5 font-semibold text-center">Why Choose Us?</h1>
      <Explain
        about={[
          "Large production capacity.",
          "In-house testing facilities.",
          "Good financial position ",
          "Large product line…",
        ]}
        title={"COMPETITIVE ADVANTAGE"}
        image={advantageImg}
      />
      <h2 className="text-4xl font-semibold text-center my-5">OUR MAJOR CLIENT</h2>
      <marquee className="flex h-[5rem]  my-10">
        <img
          src={thermax}
          alt="Thermax Ltd"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={ksb}
          alt="KSB Pumps."
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={forbes}
          alt="Forbes Marshall Ltd"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={lt}
          alt="L & T (MHPS TURBINE GENERATOR LTD )"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={palgroup}
          alt="Pal Engineering corporation"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={thyssenkrupp}
          alt="Thyssenkrupp India Pvt Ltd"
          className="w-[5rem] inline-block  mx-4"
        />
        <img src={ISGEC} alt="ISGEC" className="w-[5rem] inline-block  mx-4" />
        <img
          src={hydac}
          alt="Hydac (India) limited"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={fluidcontrol}
          alt="Fluid control Pvt Ltd"
          className="w-[5rem] inline-block  mx-4"
        />
        <img
          src={alfalaval}
          alt="Alfa Laval"
          className="w-[5rem] inline-block  mx-4"
        />
      </marquee>

<EmailUs />
      <div className="my-10 sm:mx-7">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d557.7340782244673!2d73.83257455211381!3d18.624073864317527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b87cf4236f01%3A0x2dfc9e321cd1de75!2sArt%20Fit%20Forge!5e0!3m2!1sen!2sin!4v1646302863752!5m2!1sen!2sin"
          className="border border-0  w-[80vw] h-[20rem] mx-auto"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};
