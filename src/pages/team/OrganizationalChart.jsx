import { useEffect } from "react";
import { Tree, TreeNode } from "react-organizational-chart";
import QualityControlChartOrganizational from "./QualityControlChartOrganizational";

const Label = ({ title, about }) => {
  return (
    <div className="hover:shadow-lg inline-block px-5 py-2 ">
      <span className="text-slate-800 hover:text-teal-400 ">{title}</span>
      <br />
      <span className="text-500xl bg-slate-100 px-2 py-1 hover:bg-slate-200">
        {about}
      </span>
    </div>
  );
};
export default () => {
  useEffect(() => {}, []);
  return (
    <div className=" w-full text-center py-10">
      <h1 className="text-2xl sm:text-4xl text-center my-10">
        <span className="text-teal-400">ORGANISATION CHART OF </span>
        ARTFIT FORGE
      </h1>
      <Tree
        label={
          <Label
            title={"TECHNICAL DIRECTOR"}
            about={"Mr. MAHESH MALATPURE(B.E.)"}
          />
        }
      >
        <TreeNode
          label={
            <Label
              title={"PLANT INCHARGE"}
              about={"Mr.K.L.Bhandari (D.M.E.)"}
            />
          }
        >
          <TreeNode
            label={
              <Label
                title={"OPERATION, PURCHASE,MARKETING"}
                about={"Mr. UMESH KHANDARE (B.E.)"}
              />
            }
          >
            <TreeNode label={<Label title={`PRODUCTION`} about={`Mr. MORE`} />}>
              <TreeNode
                label={<Label title={``} about={`Mr. RAVI`} />}
              ></TreeNode>
            </TreeNode>
          </TreeNode>
          <TreeNode
            label={<Label title={"INSPECTION"} about={"Mr. ASHOK LEKURWADE"} />}
          ></TreeNode>
          <TreeNode
            label={
              <Label
                title={"SPECTRO CHEMICAL LAB"}
                about={"Mr. RAICHUR/ SHAIESH RANE"}
              />
            }
          >
            <TreeNode
              label={<Label title={`NDT SERVICE`} about={`Mr. UMAJI`} />}
            >
              <TreeNode
                label={<Label title={`PHYSICAL`} about={`Mr. PATHAK`} />}
              ></TreeNode>
            </TreeNode>
          </TreeNode>
        </TreeNode>
        <TreeNode
          label={
            <Label title={"SR. ACCOUNTANT"} about={"Mr. SIDDHESHWAR KOLI "} />
          }
        >
          <TreeNode
            label={<Label title={"ACCOUNTANT"} about={"Mrs. DEEPTI"} />}
          ></TreeNode>
        </TreeNode>
      </Tree>
      <div className="h-20 bg-slate-100"></div>
      <QualityControlChartOrganizational />
      <hr />
    </div>
  );
};
