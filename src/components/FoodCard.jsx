import React from "react";
import { AiFillStar } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/CartSlice";
import { useNavigate } from "react-router-dom";
import { setDetail } from "../redux/slices/DetailSlice";

const FoodCard = ({ id, name, price, desc, img, rating, handleToast }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Dispatch the action to set the detail information
    dispatch(setDetail({ id, name, price, rating, img, qty: 1 }));

    // Navigate to the detail page (update with the correct path if needed)
    navigate(`/details/${id}`);
  };

  const handleAddToCart = () => {
    // Dispatch the action to add the item to the cart
    dispatch(addToCart({ id, name, price, rating, img, qty: 1 }));

    // Trigger the toast notification
    handleToast(name);
  };

  return (
    <div
      className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2 cursor-pointer"
      onClick={handleCardClick}
    >
      <img
        src={img}
        alt={name}
        className="w-auto h-[130px] hover:scale-110 transition-all duration-500 ease-in-out"
      />
      <div className="text-sm flex justify-between">
        <h2>{name}</h2>
        <span className="text-green-500">₹{price}</span>
      </div>
      <p className="text-sm font-normal">{desc.slice(0, 50)}...</p>
      <div className="flex justify-between items-center">
        <span className="flex items-center">
          <AiFillStar className="mr-1 text-yellow-400" /> {rating}
        </span>
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent click event from propagating to the parent div
            handleAddToCart();
          }}
          className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm"
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default FoodCard;
