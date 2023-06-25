import React from "react";
import Nav from "../../Navigation/Nav";
import Banner from "./Banner";
import NewPr from "./NewProducts";
import Footer from "../../Footer/Footer";
import AllList from "../AllList/AllList";

function Home() {
  return (
    <div className="Home">
      <Nav />
      <div className="mt-5">
        <Banner />
      </div>
      <div className="mt-5">
        <NewPr />
      </div>
      <div className="mt-5">
        <AllList />
      </div>
      <Footer />
    </div>
  );
}

export default Home;
