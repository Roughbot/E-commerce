import { addItem } from "../../state/cartSlice";
import { useDispatch } from "react-redux";
import Stars from "../Stars/Stars";
const ProductCard = ({ products }) => {
  const { title, price, rating, thumbnail } = products;

  const dispatch = useDispatch();

  let times = Math.floor(rating);

  return (
    <div>
      <div className="max-w-md border-solid border-2 p-3 transform transition-transform duration-500 hover:scale-110">
        <div className="flex flex-row justify-center">
          <img src={thumbnail} alt={title} className="w-54 h-40 object-cover" />
        </div>
        <h5 className="text-xl my-3 font-semibold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <div className="mb-1 mt-1 flex  items-center">
          <Stars times={times} />
          <span className="ml-3 mr-2 s rounded bg-cyan-100 px-2.5 py-0.5 text-xs font-semibold text-cyan-800 mb-3">
            {rating}
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-3xl my-2 font-bold text-gray-900 dark:text-white">
            ${price}
          </span>
          <a
            onClick={() => {
              dispatch(addItem(products));
            }}
            className="rounded-lg bg-cyan-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-cyan-800 focus:outline-none focus:ring-4 focus:ring-cyan-300 "
          >
            Add to cart
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
