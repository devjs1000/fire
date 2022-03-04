import Table from "../../components/Table";
import { Children } from "react";
export default () => {
  return (
    <>
      <div className=" grid place-item-center px-2 sm:px-10">
        <Table
          heading={`DESCRIPTION OF ITEMS AND RANGE FOR WITCH ENLISTMENT IS SOUGHT`}
          thData={["ITEM CODE", "ITEM DESCRIPTION"]}
          tbData={[
            [`71 AA`, `FITTING BLOCK FORGE – CARBON STEEL`],
            [`71 AB`, `FITTING BLOCK FORGE – ALLOY STEEL`],
            [`71 AC`, `FITTING BLOCK FORGE – STAINLESS STEEL`],
            [`72AA`, `FITTING FROM SEAMLESS PIPE – CARBON STEEL`],
            [`72AB`, `FITTING FROM SEAMLESS PIPE – ALLOY STEEL`],
            [`72AC`, `FITTING FROM SEAMLESS PIPE – STAINLESS STEEL`],
            [`75AA`, `FITTINGS PIPE CAP- CARBON STEEL`],
            [`75AB`, `FITTINGS PIPE CAP- ALLOY STEEL`],
            [`75AC`, `FITTINGS PIPE CAP- STAINLESS STEEL`],
          ]}
        />
        <Table
          heading={`SOCKET WELD AND THREADED FITTING 71AA, 71AB, 71AC`}
          thData={["DISCRIPTION", "SIZE"]}
          tbData={[
            [
              `ELBOW 900
            AND 450`,
              `1/8’’ TO 4’’`,
            ],
            [`EQUAL AND UNEQUAL TEE`, `1/8’’ TO 4’’`],
            [`COUPLING(FULL, HALF, REDUCING)`, `1/8’’ TO 4’’`],
            [`SOCKOLET`, `1/8’’ TO 4’’ `],
            [`WELDOLET`, `1/8’’ TO 4’’ `],
            [`UNION`, ` 1/8’’ TO 4’’`],
            [`PLUG`, `1/8’’ TO 4’’`],
            [`THREADOLET`, `1/8’’ TO 4’’`],
          ]}
        />
        <Table
          heading={`BUTT WELD FITTING 72AA, 72AB, 72AC, 75AA, 75AB, 75AC`}
          thData={["DISCRIPTION", "SIZE"]}
          tbData={[
            [
              `ELBOW 900
            AND 450
            (LR/SR)`,
              `½’’ TO 18’’`,
            ],
            [`EQUAL AND UNEQUAL TEE`, `½’’ TO 18’’`],
            [`CONCENTRIC /ECCENTRIC REDUCER`, `½’’ TO 18’’`],
            [`END CAP`, ` ½’’ TO 18’’`],
          ]}
        />
       
      </div>
    </>
  );
};
