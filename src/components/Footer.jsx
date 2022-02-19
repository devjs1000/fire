import { Children } from "react";
import bluePrint from '../bluePrints/footerPrint'


export default () => {
  return (
    <>
      <footer className="bg-gray-900 px-4 py-2 grid grid-cols-3 h-[50vh] place-items-center  text-white">
        {Children.toArray(
          bluePrint.lists.map((listData) => {
            return (
              <div>
                <h1>{listData.title}</h1>
                {Children.toArray(
                  listData.list.map((item) => {
                    return <h3 className="">{item.title}</h3>;
                  })
                )}
              </div>
            );
          })
        )}

        <div>
          {Children.toArray(
            bluePrint.socialIcons.map((a) => {
              return <>{a}</>;
            })
          )}
        </div>
      </footer>
    </>
  );
};
