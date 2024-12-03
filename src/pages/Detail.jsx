import React from "react";
import { useSelector } from "react-redux";

const Detail = () => {
  const detail = useSelector((state) => state.detail.detail);
  console.log(detail);

  return (
    <>
      <h1>Detail Page</h1>
      {detail ? (
        <div className="detail-container">
          <h2>{detail.name}</h2>
          <img
            src={detail.img}
            alt={detail.name}
            className="detail-image"
            style={{ width: "320px", height: "200px", objectFit: "cover" }}
          />
          <p>Price: ₹{detail.price}</p>
          <p>Rating: {detail.rating}</p>
        </div>
      ) : (
        <p>No detail available.</p>
      )}
    </>
  );
};

export default Detail;
