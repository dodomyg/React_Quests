import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleProduct = () => {
  const { id } = useParams();
  const [singlePord, setSingleProd] = useState(null);
  useEffect(() => {
    const singleProduct = async () => {
      try {
        fetch(`https://dummyjson.com/products/${id}`)
          .then((res) => {
            res.json().then((resp) => setSingleProd(resp));
          })
          .catch((err) => console.log(err));
      } catch (error) {
        console.log(error);
      }
    };
    singleProduct();
  }, [id]);

  if (!singlePord) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>Single Product</h1>

      <div>
        <h1>{singlePord.title}</h1>
        <h1>{singlePord.description}</h1>
        <h1>{singlePord.price}</h1>
        <h1>{singlePord.returnPolicy}</h1>
      </div>
    </div>
  );
};

export default SingleProduct;
