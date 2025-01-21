import React from "react";
import Header1 from "./Header1/page";
import Header2 from "./Header2/page";
import Category from "./Category/page";
import ProductDetailPage from "./ProductDetailPage/page";
import Homepage from "./Homepage/page";
import Cart from "./Cart/page";
import Footer from "./Footer/page";

const Home = () => {
  return (
    <div>
      <Header1 />
      <Header2 />
      <Homepage />  
      {/* <Category /> */}
      {/* <ProductDetailPage /> */}
      {/* <Cart /> */}
      <Footer />
    </div>
  );
};

export default Home;
