import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const {id} = useParams()

  return (
    <main>
      <h1>Product Detail page</h1>

      <h2>Show info of product {id}</h2>
    </main>
  );
}