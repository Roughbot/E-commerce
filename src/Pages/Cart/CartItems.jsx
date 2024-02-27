import { ChevronDown, ChevronUp } from "../../assets/icons";
import { useDispatch } from "react-redux";
import {
  removeItem,
  increaseCount,
  decreaseCount,
} from "../../state/cartSlice";

const CartItems = ({ id, thumbnail, title, price, amount }) => {
  const dispatch = useDispatch();

  return (
    <article className="grid items-center grid-cols-[auto,1fr,auto] gap-x-6 my-6">
      <img className="object-cover w-20 h-20" src={thumbnail} alt={title} />
      <div>
        <h4 className=" font-medium mb-2 ">{title}</h4>
        <h4>${price}</h4>
        <button
          onClick={() => dispatch(removeItem(id))}
          className="border-none cursor-pointer text-1xl bg-transparent mt-3.5 hover:text-red-500 transition-shadow"
        >
          remove
        </button>
      </div>
      <div>
        <button
          onClick={() => {
            dispatch(increaseCount(id));
          }}
          className="bg-transparent cursor-pointer w-6 border-none"
        >
          <ChevronUp />
        </button>
        <p className="text-center text-lg">{amount}</p>
        <button
          onClick={() => {
            dispatch(decreaseCount(id));
          }}
          className="bg-transparent cursor-pointer w-6 border-none"
        >
          <ChevronDown />
        </button>
      </div>
    </article>
  );
};

export default CartItems;
