import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  addToCart,
  decreamentQuantity,
  removeFromCart,
} from "../redux/slice/cartSlice";

const MyCart = () => {
  const { cart } = useSelector((state) => state.cart);

  const navigate = useNavigate();

  var totalCost = 0;
  const dispach = useDispatch();

  cart.forEach((element) => {
    totalCost += element.price * element.quantity;
  });

  return (
    <div className="p-2">
      <button onClick={() => navigate("/")}>🔙</button>

      <div className="grid grid-cols-3 place-content-center place-items-center gap-5">
        {cart.length === 0 && (
          <h1 className="text-4xl font-semibold">Cart is empty</h1>
        )}
        {cart.map((item) => (
          <div className="flex flex-col items-center" key={item.id}>
            <img
              className="w-[200px] h-[200px]"
              src={item.image}
              alt={item.title}
            />
            <h1>{item.title}</h1>
            <h1>{item.price}</h1>
            <button onClick={() => dispach(removeFromCart(item))}>
              Remove
            </button>

            <div className="flex items-center gap-2">
              <button
                className="text-white bg-black p-2"
                onClick={() => dispach(decreamentQuantity(item))}
              >
                -
              </button>
              <span>{item.quantity < 1 ? 0 : item?.quantity}</span>
              <button
                className="text-white bg-black p-2"
                onClick={() => dispach(addToCart(item))}
              >
                +
              </button>
            </div>
          </div>
        ))}
      </div>

      {totalCost > 0 && (
        <h1 className="text-2xl font-semibold">
          Total Cost: {totalCost.toPrecision(4)}
        </h1>
      )}
    </div>
  );
};

export default MyCart;
