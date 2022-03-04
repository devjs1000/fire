import Table from "../../components/Table";
import plantLayoutImg from "../../images/companyLayout.png";

export default () => {
  return (
    <div className="grid gap-5">
      <Table
        thData={["PLANT CAPACITY–"]}
        tbData={[
          [
            `Shop activities and layout is organized in such a manner that it is able to produce
1Ton/Shift`,
          ],
          [
            `Forging activities is ably supported by a 500KG capacity forging furnace along with
heat treatment furnace`,
          ],
          [
            "To maintain an uninterrupted supply of LDOTank–12000Liters is always available",
          ],
        ]}
      />

      <h2 className="text-xl">
        PLANT LAYOUT–
        <img src={plantLayoutImg} alt="plant layout" />
      </h2>

      <Table
        thData={["COMPETITIVE ADVANTAGE"]}
        tbData={[
          [`Large production capacity`],
          [`In-house testing facilities.`],
          [`Good financial position `],
        ]}
      />
      <Table
        thData={["MAJOR CLIENT"]}
        tbData={[
          [`Thermax Ltd`],
          [`Thyssenkrupp India Pvt Ltd`],
          [`KSB Pumps.`],
          [`Forbes Marshall Ltd`],
          [`Alfa Laval`],
          [`L & T (MHPS TURBINE GENERATOR LTD )`],
          [`Fluid control Pvt Ltd.`],
          [`Pal Engineering corporation`],
          [`ISGEC`],
          [`Hydac (India) limited`],
        ]}
      />
      <Table
        thData={["QUALITY AND CERTIFICATES"]}
        tbData={[
          [`Well known forge maker`],
          [`IBR`],
          [`ISO 9001-2008`],
          [`Bureau veritas`],
          [`Lloyds register`],
        ]}
      />
    </div>
  );
};
