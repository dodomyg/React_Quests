import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        fetch("https://dummyjson.com/products")
          .then((res) => {
            res.json().then((res) => setProducts(res.products));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div className="grid grid-cols-4 gap-10 place-items-center">
      {products &&
        products.map((p, i) => (
          <div
            onClick={() => navigate(`/products/${p.id}`)}
            className="cursor-pointer text-3xl border border-black"
            key={i}
          >
            <p>{p.title}</p>
            <p>{p.price} "Rs"</p>
            <img src={p.images[0]} alt="Alt" className="h-72 w-72" />
          </div>
        ))}
    </div>
  );
};

export default ProductPage;
