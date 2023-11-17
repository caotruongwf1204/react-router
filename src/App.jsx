import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/home";
import About from "./routes/about";
import Contact from "./routes/contact";
import Login from "./routes/login";
import ShoppingCart from "./routes/shopping-cart";
import Signup from "./routes/signup";
import Collection from "./routes/collection";
import ProductDetail from "./routes/products-detail";
import Policy from "./routes/policy";
import Root from "./routes/root";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/about", element: <About></About> },
      { path: "/contact", element: <Contact></Contact> },
      { path: "/login", element: <Login></Login> },
      { path: "/shopping-cart", element: <ShoppingCart></ShoppingCart> },
      { path: "/signup", element: <Signup></Signup> },
      { path: "/policy", element: <Policy></Policy> },
      { path: "/collection", element: <Collection></Collection> },
      { path: "products/:id", element: <ProductDetail></ProductDetail> },
    ],
  },
]);

const client = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={client}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;