import { Link } from "react-router-dom";
import useApiCall from "./useApiCall";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, decreamentQuantity } from "../redux/slice/cartSlice";

const Cart = () => {
  const { data, loading, error } = useApiCall(
    "https://fakestoreapi.com/products"
  );

  const { cart } = useSelector((state) => state.cart);

  const dispach = useDispatch();

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;

  var len = 0;
  var totalLen = cart.length === 0 ? 0 : cart.forEach(element => {
      len+=element.quantity
  });
  return (
    <div className="m-2">
      <div className="flex w-[97%] z-10 items-center justify-between top-2 fixed bg-black text-white">
        <h1>{"Redux Shopping"}</h1>
        <Link to={"/cart"}>🛒({len})</Link>
      </div>

      <div className="grid grid-cols-4 gap-3 place-items-center ">
        {data?.map((d, i) => (
          <div className="border w-[300px] border-black" key={i}>
            <img className="w-[300px] h-[300px]" src={d.image} alt={d.title} />
            <h1>{d.title}</h1>
            <div>
              <button
                className="bg-black text-white p-2 rounded-xl"
                onClick={() => dispach(decreamentQuantity(d))}
              >
                -
              </button>
              <span className="mx-2">
                {cart.find((i) => i.id === d.id)?.quantity || 0}
              </span>

              <button
                className="bg-black text-white p-2 rounded-xl"
                onClick={() => dispach(addToCart(d))}
              >
                +
              </button>
            </div>
            <button
              className="bg-black text-white p-2 rounded-xl"
              onClick={() => dispach(addToCart(d))}
            >
              Add to cart
            </button>
            <h1>${d.price}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
