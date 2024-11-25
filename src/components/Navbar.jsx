import React from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "../redux/slices/SearchSlice";
import bg from "../assets/cover.jpeg";
import logo from "../assets/logo.png";

const Navbar = () => {
  const dispatch = useDispatch();
  return (
    <nav
      className="flex flex-col lg:flex-row justify-between py-3  mb-10 sticky top-0 z-55  w-full h-28 items-center"
      style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: "0.9",
      }}
    >
      <div>
        <h1 className=" ml-10 ">
          <img className="w-[10%] h-[10%] " src={logo} alt="" />
        </h1>
      </div>
      <div>
        <input
          type="search"
          name="search"
          id=""
          placeholder="Search here"
          autoComplete="off"
          onChange={(e) => dispatch(setSearch(e.target.value))}
          className="p-3  border border-white text-sm text-white rounded-lg outline-none w-full lg:w-[25vw] bg-transparent mr-16"
        />
      </div>
    </nav>
  );
};

export default Navbar;
