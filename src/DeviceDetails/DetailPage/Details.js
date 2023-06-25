import React from "react";
import Nav from "../../Navigation/Nav";
import { Button } from "antd";
import { useState } from "react";
import Footer from "../../Footer/Footer";

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchItemWithID } from "../../features/product/Item/ItemSlice";

function Details() {
  const [size] = useState("large");
  const url = window.location.href;
  const id = url.split("/")[3];

  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.item.itemList);

  useEffect(() => {
    dispatch(fetchItemWithID(id));
  }, [dispatch, id]);

  const device = itemList[0];
  return (
    <div>
      <Nav />
      <section className="py-5 mb-5">
        <div className="container px-4 px-lg-5 my-5">
          <div className="row gx-4 gx-lg-5 align-items-center">
            <div className="col-md-6">
              <img
                className="card-img-top mb-5 mb-md-0"
                src={device.img}
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <h1 className="display-5 fw-bolder">{device.name}</h1>
              <div className="fs-5 mb-5">
                <span>${device.price}</span>
              </div>

              <div className="d-flex">
                <Button type="primary" size={size} danger>
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="mt-5">
        <Footer />
      </div>
    </div>
  );
}

export default Details;
