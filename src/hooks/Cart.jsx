import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, decrementQuantity } from "../redux/slice/cartSlice";
import { useCallback, useEffect } from "react";
import { getProducts } from "../redux/slice/apiCallSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);
  const { data, loading, error } = useSelector((state) => state.api);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const fetchData = useCallback(() => {
    dispatch(getProducts());
  }, [dispatch]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const addToCartHandler = (product) => {
    dispatch(addToCart(product));
  };

  const decreaseQuantityHandler = (product) => {
    dispatch(decrementQuantity(product));
  };

  console.log("Data:", data);
  console.log("Loading:", loading);
  console.log("Error:", error);

  if (loading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div className="px-3 py-2">
      <div className="flex items-center justify-between w-[98%] fixed bg-black text-white">
        <h1>Redux Add to cart</h1>
        <button onClick={() => navigate("/cart")}>🛒 ({cart?.length})</button>
      </div>

      <div className="grid grid-cols-4 place-items-center w-full gap-10">
        {data &&
          data.map((d, i) => (
            <div className="border border-black" key={i}>
              <img src={d?.image} alt={i} className="h-72 w-72" />
              <h1>{d?.title}</h1>
              <h1>${d?.price}</h1>
              <div>
                <button
                  onClick={() => decreaseQuantityHandler(d)}
                  className="bg-red-300 text-black px-2"
                >
                  -
                </button>
                <span className="px-4">{cart.find(item => item.id === d.id)?.quantity || 0}</span>
                <button
                  onClick={() => addToCartHandler(d)}
                  className="bg-light-blue-300 text-black px-2"
                >
                  +
                </button>
              </div>
              <button
                onClick={() => addToCartHandler(d)}
                className="bg-light-blue-300 text-black"
              >
                Add to cart
              </button>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Cart;
