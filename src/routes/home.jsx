import { Link } from "react-router-dom";


const products = [
  {
    id: 1,
    title: "Product 1",
  },
  {
    id: 2,
    title: "Product 2",
  },
  {
    id: 3,
    title: "Product 3",
  },
  {
    id: 4,
    title: "Product 4",
  },
  {
    id: 5,
    title: "Product 5",
  },
  {
    id: 6,
    title: "Product 6",
  },
];




export default function Home() {
    return (
      <main>
        <h1>Homepage</h1>


        
      <div>
        {products.map((product) => (
          <Link key={product.id} to={`/products/${product.id}`}>
            <div>{product.title}</div>
          </Link>
        ))}
      </div>
      </main>

    );
  }