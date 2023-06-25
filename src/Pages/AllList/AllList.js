import { Divider } from "antd";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllItemList } from "../../features/product/Item/ItemSlice";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

function AllList() {
  //Import function allList from ItemSlice
  const dispatch = useDispatch();
  const itemList = useSelector((state) => state.item.itemList);

  useEffect(() => {
    dispatch(fetchAllItemList());
  }, [dispatch]);
  return (
    <div>
      <Divider style={{ borderColor: "black" }}>
        <h3 className="text-secondary">Some Thing may you may like</h3>
      </Divider>
      {/* List will here */}
      <section>
        <div className="container py-5">
          <div className="row list-item-row">
            {itemList.map((item) => (
              <div className="col-6 col-sm-4 mb-4 list-item-col" key={item.id}>
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
}

export default AllList;
