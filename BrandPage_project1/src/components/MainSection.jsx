import React from "react";
import Navbar from "./Navbar";

function MainSection() {
  return (
    <>
      <Navbar />
      <div className="flex mt-[100px]">
        <div className="left-side flex flex-col w-[50%] pl-[250px] ">
          <div className="head-line font-extrabold text-7xl uppercase">
            your feet deserve the best
          </div>
          <div className="description text-gray-500 font-semibold capitalize mt-[70px] text-lg">
            your feet deserve the best and we are here to help you with our
            shoes.your feet deserve the best and we are here to help you with
            our shoes .
          </div>
          <div className="buttons flex mt-[50px]">
            <div className="shop-now bg-red-600 text-white capitalize px-3 flex items-center">
              shop now
            </div>
            <div className="category border border-gray-700 capitalize px-3 mx-3  flex items-center">
              category
            </div>
          </div>
          <div className="availabitlity capitalize mt-[20px]">
            also available on
          </div>
          <div className="logos flex items-center mt-3">
            <div className="flipkart-logo">
              <img
                src="src\assets\flipkartlogo.png"
                alt=""
                srcset=""
                className="h-6"
              />
            </div>
            <div className="amazon-logo">
              {" "}
              <img
                src="src\assets\amazonlogo.png"
                alt=""
                srcset=""
                className="h-6"
              />
            </div>
          </div>
        </div>
        <div className="right-side w-[50%]">
          <img src="src\assets\shoes.png" alt="" srcset="" />
        </div>
      </div>
    </>
  );
}

export default MainSection;
