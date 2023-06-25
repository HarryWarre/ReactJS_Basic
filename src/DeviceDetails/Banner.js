import React from "react";
import product from "../data/products.json";
function Banner(props) {
  const { id, type } = props;
  let findImgById = () => {
    const products = product.products; // Truy cập vào mảng products trong tệp JSON

    for (const product of products) {
      if (product.type === type) {
        const models = product.models; // Truy cập vào mảng models
        for (const model of models) {
          if (model.id === id) {
            return model.img; // Trả về hình ảnh nếu tìm thấy
          }
        }
      }
    }

    return ""; // Trả về chuỗi rỗng nếu không tìm thấy
  };
  return (
    <div className="banner">
      <img src={findImgById()} className="d-block w-100" alt="Img" />
    </div>
  );
}

export default Banner;
