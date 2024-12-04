import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import toast, { Toaster } from "react-hot-toast";

const Detail = () => {
  const detail = useSelector((state) => state.detail.detail);
  const dispatch = useDispatch();

  const handleToast = (name) => toast.success(`Added ${name} to cart!`);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    dispatch(addToCart({ ...detail, qty: 1 }));
    handleToast(detail.name);
    console.log(detail.name);
  };

  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      {detail ? (
        <div className="detail-container flex flex-col md:flex-row justify-evenly items-center p-5 rounded-lg gap-5">
          {/* Image Section */}
          <div className="w-full md:w-1/2 max-h-[380px]">
            <img
              src={detail.img || "https://via.placeholder.com/400"}
              alt={detail.name || "Product"}
              className="detail-image w-full h-full rounded-md shadow-lg"
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Details Section */}
          <div className="w-full md:w-1/2 p-5 bg-white rounded-lg shadow-md">
            <h2 className="text-4xl font-bold text-gray-800">
              {detail.name || "Product Name"}
            </h2>
            <p className="text-xl text-green-600 mt-3">
              Price: ₹{detail.price || "N/A"}
            </p>
            <p className="text-gray-600 mt-3">
              {detail.desc || "No description available."}
            </p>
            <p className="text-yellow-500 font-medium mt-3">
              Rating: {detail.rating || "N/A"}
            </p>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="mt-5 p-2 text-white bg-green-600 hover:bg-green-600 rounded-lg text-base transition-all duration-300 ease-in-out"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center h-screen">
          <p className="text-gray-500 text-lg">
            No details available. Please select a product.
          </p>
        </div>
      )}
    </>
  );
};

export default Detail;
