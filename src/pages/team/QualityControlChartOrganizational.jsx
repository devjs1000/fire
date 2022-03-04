import { useEffect } from "react";
import { Tree, TreeNode } from "react-organizational-chart";

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
    <div className="w-full text-center py-10">
      <h1 className="text-2xl sm:text-4xl text-center my-10">
        <span className="text-teal-400"> QUALITY CONTROL </span>
        ORGANISATIONAL CHART
      </h1>

      <Tree
        label={
          <Label title={"QUALITY ASSURANCE HEAD"} about={"Mr.K.L.Bhandari"} />
        }
      >
        <TreeNode
          label={
            <Label
              title={"QUALITY INSPECTOR"}
              about={"Mr. ASHOK LEKURWADE & Mr.PARMESHWAR AUSEKAR"}
            />
          }
        ></TreeNode>
        <TreeNode
          label={
            <Label
              title={"SPECTRO CHEMICAL LAB"}
              about={"Mr. RAICHUR / Mr. SHAILESH RANE"}
            />
          }
        >
          <TreeNode
            label={<Label title={"PHYSICAL "} about={"Mr. PATHAK"} />}
          ></TreeNode>
        </TreeNode>
        <TreeNode
          label={<Label title={"NDT SERVICES"} about={"Mr. UMAJI"} />}
        ></TreeNode>
      </Tree>
    </div>
  );
};
