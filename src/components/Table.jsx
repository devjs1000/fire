import { Children, useEffect } from "react";

export default ({ thData, tbData, heading }) => {
  
  return (
    <div >
          <h2 className="text-2xl px-2 my-5">{heading}</h2>

        <table className="text-left w-full">
          <thead className="bg-black text-white w-full">
            <tr className=" w-full h-[3rem] ">
              {Children.toArray(
                thData.map((a) => <th className="p-4 w-1/4">{a}</th>)
              )}
            </tr>
          </thead>
          <tbody className=" overflow-y-scroll w-full">
            {Children.toArray(
              tbData?.map((a) => {
                return (
                  <tr className="  w-full h-[3rem] bg-white">
                    {Children.toArray(
                      a.map((b) => (
                        <td className="p-4 border border-[1px] hover:bg-blue-100">{b}</td>
                      ))
                    )}
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
    </div>
  );
};
