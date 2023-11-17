import { Outlet } from "react-router-dom";
import Footer from "../conponents/footer";
import Header from "../conponents/header";

export default function Root() {
  return (
    <>
      <Header></Header>

      <Outlet></Outlet>

      <Footer></Footer>
    </>
  );
}
