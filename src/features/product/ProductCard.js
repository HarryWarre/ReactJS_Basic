import React from "react";
import product from "../../data/products.json";
function ProductCard(props) {
  //Func find product
  let findNameById = () => {
    const products = product.products; // Truy cập vào mảng products trong tệp JSON

    for (const product of products) {
      const models = product.models; // Truy cập vào mảng models trong từng sản phẩm

      for (const model of models) {
        if (model.id === props.data) {
          // So sánh ID với ID đầu vào
          return model.name; // Trả về tên nếu tìm thấy
        }
      }
    }

    return ""; // Trả về chuỗi rỗng nếu không tìm thấy
  };
  let findImgById = () => {
    const products = product.products; // Truy cập vào mảng products trong tệp JSON

    for (const product of products) {
      const models = product.models; // Truy cập vào mảng models trong từng sản phẩm

      for (const model of models) {
        if (model.id === props.data) {
          // So sánh ID với ID đầu vào
          return model.img; // Trả về hình ảnh nếu tìm thấy
        }
      }
    }

    return ""; // Trả về chuỗi rỗng nếu không tìm thấy
  };

  return (
    <div className="card text-black">
      <img
        src={findImgById()}
        className="card-img-top"
        alt="Device"
        style={{ height: "250px" }} // Đặt chiều cao cố định cho ảnh
      />
      <div className="card-body">
        <div className="text-center mt-1">
          <h4 className="card-title">{findNameById()}</h4>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
