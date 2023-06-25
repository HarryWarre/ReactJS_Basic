import React from "react";

const ModelCard = ({ item }) => {
  return (
    <div className="card">
      <div
        className="bg-image hover-zoom ripple ripple-surface ripple-surface-light"
        data-mdb-ripple-color="light">
        <img src={item.img} className="w-100 p-3" alt={item.name} />
      </div>
      <div className="card-body">
        <h6 className="card-title mb-3">{item.name}</h6>
        <p className="mb-3">${item.price}</p>
      </div>
    </div>
  );
};

export default ModelCard;
