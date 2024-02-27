import { Skeleton } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard";
import { Link } from "react-router-dom";

const Preview = ({ mensShirt: data, isLoading }) => {
  if (isLoading) {
    return (
      <div>
        <Skeleton variant="text" sx={{ fontSize: "1rem" }} />

        {/* For other variants, adjust the size with `width` and `height` */}
        <Skeleton variant="circular" width={40} height={40} />
        <Skeleton variant="rectangular" width={210} height={60} />
        <Skeleton variant="rounded" width={210} height={60} />
      </div>
    );
  }

  return (
    <div>
      <br />
      <div className="flex flex-col lg:items-start  sm:justify-center sm:items-center  mx-5 my-3">
        <h2>
          <Link className="flex pointer  text-3xl mb-2">
            {data.products[0].category.toUpperCase()}
          </Link>
          <hr />
        </h2>

        {!isLoading && (
          <div className="grid lg:grid-cols-5 justify-center md:grid-cols-3  sm:grid-cols-2 gap-3 mt-3">
            {data.products.map((product) => (
              <ProductCard key={product.id} products={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Preview;
