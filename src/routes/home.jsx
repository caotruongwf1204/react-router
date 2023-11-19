import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Link } from "react-router-dom";
import ProductList from "../conponents/product-list";

// const products = [
//   {
//     id: 1,
//     title: "Product 1",
//   },
//   {
//     id: 2,
//     title: "Product 2",
//   },
//   {
//     id: 3,
//     title: "Product 3",
//   },
//   {
//     id: 4,
//     title: "Product 4",
//   },
//   {
//     id: 5,
//     title: "Product 5",
//   },
//   {
//     id: 6,
//     title: "Product 6",
//   },
// ];

export default function Home() {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: "products",
    queryFn: () => axios.get("https://dummyjson.com/products"),
  });

  console.log(data, isLoading, isError, error);
  return (
    <main>
      <div>
        {isLoading ? (
          <div>Loading products data ...</div>
        ) : isError ? (
          <div>Fail to load products data: {error.message}</div>
        ) : (
          <ProductList products={data?.data.products} />
        )}
      </div>
    </main>
  );
}
