import React from "react";
import product from "../../data/products.json";
function Banner(props) {
  let findImgById = () => {
    const products = product.products; // Truy cập vào mảng products trong tệp JSON
    for (const product of products) {
      if (product.type === props.data) {
        // So sánh Type
        return product.img; // Trả về hình ảnh nếu tìm thấy
      }
    }

    return ""; // Trả về chuỗi rỗng nếu không tìm thấy
  };
  return (
    <div className="banner">
      <div className="container">
        <div className="row">
          <div className="col-sm-6 order-2 order-sm-1">
            <h1 className="fw-bold display-4">Transforming Technology</h1>
            <p>
              Discover Apple's cutting-edge products that revolutionize the tech
              industry, from the iconic iPhone to the powerful Mac. Experience
              innovation at its finest with Apple's sleek designs and
              unparalleled performance.
            </p>
            <a href="#" className="btn btn-primary">
              {" "}
              Learn More
            </a>
          </div>
          <div className="col-sm-6 order-1 order-sm-2">
            <img src={findImgById()} className="img-fluid" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
