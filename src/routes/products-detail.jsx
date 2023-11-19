import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function ProductDetail() {
  const { id } = useParams();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["product", id],
    queryFn: () => axios.get(`https://dummyjson.com/products/${id}`),
  });
  console.log(data, isLoading, isError, error);

  if (isLoading) {
    return <div>Loading product data ...</div>;
  }

  if (isError) {
    if (error.response.status === 404) {
      return <div>Product not found</div>;
    } else {
      return <div>Fail to load product data: {error.message}</div>;
    }
  }
  const product = data?.data;
  return (
    <main>
      <h1>Product Detail page</h1>

      <div className="product-detail">
        <img className="product-detail-img" src={product.thumbnail} alt="" />
        <h1>{product.title}</h1>
        <span>${product.price}</span>

        <form className="product-form">
            <div className="form-field">
              <label htmlFor="product-quantity">Quantity</label>
              <select className="product-quantity" id="product-quantity">
                {Array(product.stock)
                  .fill(null)
                  .map((_, i) => (
                    <option key={i}>{i + 1}</option>
                  ))}
              </select>
            </div>

            <div className="form-field">
              <button className="button-add-to-cart">Add to cart</button>
            </div>
          </form>
          
      </div>
    </main>
  );
}
