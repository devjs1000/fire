import { Children } from "react";
import bluePrint from '../bluePrints/footerPrint'
import {Link} from 'react-router-dom'

export default () => {
  return (
    <>
      <footer className="bg-gray-900 px-4 py-2 grid grid-cols-3 h-[50vh] place-items-center  text-white">
        {Children.toArray(
          bluePrint.lists.map((listData) => {
            return (
              <div>
                <h1 className="text-2xl font-bold">{listData.title.toLocaleUpperCase()}</h1>
                {Children.toArray(
                  listData.list.map((item) => {
                    console.log(item);
                    return <Link to={item?.path || ''} className="block hover:invert-[50%]">{item.title}</Link>;
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
