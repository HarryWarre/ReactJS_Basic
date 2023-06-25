import React, { useState, useEffect } from "react";
import ModelCard from "./ModelCard";
import { Divider } from "antd";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchItemList,
  fetchModelList,
} from "../../features/product/Item/ItemSlice";
function ModelList() {
  const [id, setId] = useState("");
  const [type, setType] = useState("");
  useEffect(() => {
    const currentUrl = window.location.pathname;
    const urlParts = currentUrl.split("/");
    const extractedType = urlParts[urlParts.length - 2];
    const extractedId = urlParts[urlParts.length - 1];

    setType(extractedType);
    setId(extractedId);
  }, []);

  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.item.itemList);

  useEffect(() => {
    dispatch(fetchModelList(id, type));
  }, [dispatch, id, type]);

  console.log("ID ModelList: ", id);
  return (
    <div>
      <Divider style={{ borderColor: "black" }}>
        <h3 className="text-secondary">On Sales</h3>
      </Divider>
      <section>
        <div className="container py-5">
          <div className="row list-item-row">
            {itemList.map((item) => (
              <div className="col-6 col-sm-4 mb-4 list-item-col" key={item.id}>
                <div className="list-item-card">
                  <ModelCard item={item} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ModelList;
