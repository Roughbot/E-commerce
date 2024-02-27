import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import CartItems from "./CartItems";
import { clearCart } from "../../state/cartSlice";

const Cart = () => {
  const { cartItems, total, amount } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  if (amount < 1) {
    return (
      <section className="min-h-screen pt-10 pb-2.5 mt-10 w-9/10 mx-auto max-w-[var(--fixed-width)]">
        <header>
          <h2 className="uppercase text-center text-2xl mb-12">Your Bag</h2>
          <h4 className="lowercase text-[var(--clr-grey-5)] mt-4 text-center">
            is currently empty
          </h4>
        </header>
      </section>
    );
  }

  return (
    <section className="min-h-screen pt-10 pb-2.5 mt-10 w-9/10 max-w-[var(--fixed-width)] mx-24">
      <header>
        <h2 className="text-center text-2xl mb-12 uppercase">Your Bag</h2>
        <div>
          {cartItems.map((item) => {
            return <CartItems key={item.id} {...item} />;
          })}
        </div>
      </header>
      <footer className="text-center mt-16">
        <hr />
        <div className="flex justify-end mt-4">
          <h4 className="capitalize flex justify-between mt-4">
            <span>Total ${total.toFixed(2)}</span>
          </h4>
        </div>
        <div className="flex flex-row gap-6 justify-evenly mt-12">
          <Button
            variant="outlined"
            color="error"
            className="cursor-pointer inline-block"
            onClick={() => {
              dispatch(clearCart());
            }}
          >
            Clear Cart
          </Button>

          <Button variant="contained" color="success">
            CheckOut
          </Button>
        </div>
      </footer>
    </section>
  );
};

export default Cart;
