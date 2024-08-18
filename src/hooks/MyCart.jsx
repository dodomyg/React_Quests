import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { removeFromCart } from "../redux/slice/cartSlice";

const MyCart = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const remove = (id) => {
    dispatch(removeFromCart(id));
  };

  const cost = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <div className="px-3 py-2">
      <button onClick={() => navigate(-1)}>🔙</button>

      <h1 className="text-3xl">My Cart</h1>

      <div className="flex flex-col justify-start gap-5">
        {cart.length === 0 && <h1>Your cart is empty</h1>}
        {cart.length > 0 &&
          cart?.map((d, i) => (
            <div className="border border-black" key={i}>
              <img src={d?.image} alt={i} className="h-72 w-72" />
              <h1>{d?.title}</h1>
              <h1>${d?.price} x {d?.quantity}</h1>
              <button
                onClick={() => remove(d?.id)}
                className="bg-light-blue-300 text-black"
              >
                Remove from Cart
              </button>
            </div>
          ))}
      </div>

      {cart.length > 0 && <h1>Total Cost: ${cost}</h1>}
    </div>
  );
};

export default MyCart;
