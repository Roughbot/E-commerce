import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Preview = ({ mensShirt: data, isLoading }) => {
  if (isLoading) {
    return <div>Loading</div>;
  }

  return (
    <div>
      <br />
      <div className="flex flex-col lg:items-start  sm:justify-center sm:items-center  mx-5 my-3">
        <div>
          {!isLoading && (
            <div className="grid lg:grid-cols-5 justify-center md:grid-cols-3  sm:grid-cols-2 gap-3 mt-3">
              {data.products.map((product) => (
                <ProductCard key={product.id} products={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Preview;
