import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchItemList } from "./ItemSlice";
import CardItem from "./CardItem";
import { Divider } from "antd";
import "./ListItem.css";
import { Link } from "react-router-dom";

const ItemList = (props) => {
  const type = props.data;
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.item.itemList);

  useEffect(() => {
    dispatch(fetchItemList(type));
  }, [dispatch, type]);

  return (
    <div>
      <Divider style={{ borderColor: "black" }}>
        <h3 className="text-secondary">Hot Sales</h3>
      </Divider>

      <section>
        <div className="container py-5">
          <div className="row list-item-row">
            {itemList
              .filter((item) => item.id.startsWith(type)) // Lọc danh sách item dựa trên tiền tố của id so với biến type
              .map((item) => (
                <div
                  className="col-6 col-sm-4 mb-4 list-item-col"
                  key={item.id}>
                  <div className="list-item-card">
                    <Link
                      to={{
                        pathname: `/${item.id}`,
                      }}
                      className="text-decoration-none text-secondary">
                      <CardItem item={item} />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ItemList;
