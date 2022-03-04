import Table from "../../components/Table";
import { Children } from "react";
import writeUp from '../../images/write-up.svg'
export default () => {
  return (
    <>
      <div className=" mx-5 mx-5  " >

        <h1 className="text-3xl font-semibold">TECHNICAL WRITE UP ON</h1>
        <div className=" ">        <img src={writeUp} className='w-[25rem]' alt="" />
</div>
        <h2 className="text-xl mt-10">PRODUCT MANUFACTURED AT OUR WORKS</h2>
        <ul className="ml-8">
          <li className="my-4">
            A) Material Specification
            <ul className="ml-8">
              <li className="">
                1) ASTM(A-234) - Cover carbon and Alloy Steel material grades
              </li>
              <li className="">
                2) ASTM(A-403) – Cover low and stainless grades
              </li>
              <li className="">
                3) ASTM(A-420) – Cover A carbon and alloy steel grades for low
                tem service
              </li>
            </ul>
          </li>
          <li className="my-4">
            Dimensional specification
            <ul  className="ml-8">
              <li className="">
                1) ANSI(B-16.9) This standard covers dimensions, tolerances,
                pressure ratings, marking and bevel requirement of steel butt
                welding fitting from 1’’ to 18’’
              </li>
              <li className="">
                2) ANSI (B-16.28): Wrought steel butt welding short radius elbow
                and returns
              </li>
              <li className="">
                3) ANSI (B-16.11) : Establishes dimensions, tolerances, pressure
                ratings, marking of forge steel fittings, socket welding and
                threaded
              </li>
            </ul>
          </li>
          <li className="my-4">
            C) Forge Steel Fittings: Socket welded, threaded and forge material
            specification
            <ul  className="ml-8 ">
              <li className="">
                1) ASME (SA-105): Covers material manufacturing methods, Heat
                treatment etc. Forge steel socket weld/ screwed fitting and
                carbon steel used in high temperature service.
              </li>
              <li className="">2) Alloy Steel - SA 182 (F11/F22)</li>
              <li className="">
                3) Stainless steel- SA 182 (F316/ F316L, F304/ F304L)
              </li>
            </ul>
          </li>
        </ul>
        </div>

    </>
  );
};
