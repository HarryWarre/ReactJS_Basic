import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProducts,
  setSelectedProduct,
} from "../../features/product/ProductSlice";
import { Divider } from "antd";
import ProductCard from "../../features/product/ProductCard";
import { Link } from "react-router-dom";
function NewPr() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleProductClick = (productId) => {
    dispatch(setSelectedProduct(productId));
  };
  return (
    <div>
      <Divider style={{ borderColor: "black" }}>
        <h3 className="text-secondary">May you like it</h3>
      </Divider>
      <section>
        <div className="container py-5">
          <div className="row">
            {products.map((product) =>
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

export default NewPr;
