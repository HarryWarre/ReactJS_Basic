import React from "react";
import { Divider } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../features/product/ProductSlice";
import ProductCard from "../../features/product/ProductCard";
import { Link } from "react-router-dom";

function Models(props) {
  const type = props.data;
  const dispatch = useDispatch();
  const filteredProducts = useSelector(
    (state) => state.product.products
  ).filter((product) => product.type === type);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (productId) => {
    dispatch(setSelectedProduct(productId));
  };

  return (
    <div>
      <Divider style={{ borderColor: "black" }}>
        <h3 className="text-secondary">Current Models</h3>
      </Divider>
      <section>
        <div className="container py-5">
          <div className="row">
            {filteredProducts.map((product) =>
              product.models.map((model) => (
                <div
                  className="col-md-12 col-lg-4 mb-4 mb-lg-5"
                  key={model.id}
                  onClick={() => {
                    handleProductClick(model.id);
                  }}>
                  <Link
                    to={{
                      pathname: `/${product.type}/${model.id}`,
                    }}
                    className="text-decoration-none">
                    <ProductCard data={model.id} />
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Models;
