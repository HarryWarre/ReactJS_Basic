import React from "react";
import Nav from "../../Navigation/Nav";
import Banner from "../BannerPhone/BannerPhone";
import Models from "../Models/Models";
import ListItem from "../../features/product/Item/ItemList";
import Footer from "../../Footer/Footer";
function Iphone() {
  let type = "Iphone";
  return (
    <div className="Home">
      <Nav />
      <div className="mt-5">
        <Banner data={type} />
      </div>
      <div>
        <Models data={type} />
      </div>
      <div>
        <ListItem data={type} />
      </div>
      <Footer />
    </div>
  );
}

export default Iphone;
