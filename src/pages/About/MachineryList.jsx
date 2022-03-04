import Table from "../../components/Table";
export default () => {
  return (
    <>
      <Table
        heading={`LIST OF MACHINES AVAILABLE IN SHOP`}
        thData={[`MACHINE NAME`, `M/CIDNO.`, `CAPACITY`]}
        tbData={[
          ["HYDRAULIC PRESS", "P1", "350 TON"],
          ["HYDRAULIC PRESS", "p3", "250 TON"],
          ["BEND SAW M/C", "C1", '12"'],
          ["BEND SAW M/C", "C2", '12"'],
          ["BEND SAW M/C", "C3", '6"'],
          ["BLADE WELDING MACHINE", "W1", ""],
          ["DRILLM/C", "D1", "DIA 32MM,SWING1MTR"],
          ["LATHEM/C", "L1", "SWING20”X12’LONG"],
          ["LATHEM/C", "L2", "SWING18”X12’LONG"],
          ["LATHEM/C", "L3", "SWING20”X12’LONG"],
          ["LATHEM/C", "L4", "SWING14”X12’LONG"],
          ["LATHEM/C", "L5", "SWING6”X12’LONG"],
          ["LATHEM/C", "L6", "SWING10”X12’LONG"],
          ["BENCH GRINDER", "B1", "1HP"],
          ["PUNCHING M/C", "M1", "1HP"],
          ["OIL FIRED FURNACE(NORMALISING)", "F1", "1TON"],
          ["GIB CRANE", "", "1TON"],
          ["COMPRESSOR", "R1", "25 KGF"],
        ]}
      />

      <Table
        heading={`FOR SOLID FORGING`}
        thData={[`MACHINE NAME`, `M/CIDNO.`, `CAPACITY`]}
        tbData={[
          ["HAMMER", "H1+", "1.5 TON"],
          ["POWER PRESS", "P2", "150 TON"],
          ["OIL FIRED FURNACE", "F2", "500KG"],
          ["BELT GRINDER", "G3", "3HP"],
          ["COMPRESSOR", "R2", "25 KGF"],
        ]}
      />
    </>
  );
};
