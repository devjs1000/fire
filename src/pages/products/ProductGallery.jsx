import ProductCard from "../../components/productCard";
import bluePrint from "../../bluePrints/productPrint";
import { Children } from "react";
export default () => {
    console.log(bluePrint);
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:cols-auto">
        {Children.toArray(bluePrint.map((a) => {
            return <ProductCard title={a.title} about={'about'} image={a.image}/>
        }))}
      </div>
    </>
  );
};
