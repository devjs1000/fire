import certificateImg from "../images/certificates.svg";
import lloydRegister from "../images/lloyd-register.png";
import ibrApproved from "../images/ibr-approved.png";
import iso from "../images/iso.jpg";
import bureau from "../images/bureau.jpg";

export default () => {
  return (
    <>
       
        <div className="flex flex-wrap gap-[5rem] justify-center my-10">
          <img src={lloydRegister} alt="" className="h-20 w-40 object-contain" />
          <img src={ibrApproved} alt="" className="h-20 w-40 object-contain" />
          <img src={iso} alt="" className="h-20 w-40 object-contain" />
          <img src={bureau} alt="" className="h-20 w-40 object-contain" />

        </div>
    </>
  );
};
