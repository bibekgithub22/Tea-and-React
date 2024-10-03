import React from "react";

function Cards(props) {
  return (
    <>
      <div className="flex justify-center mt-5">
        <div className="w-64 h-80 rounded-lg overflow-hidden shadow-lg bg-gray-800 transition-shadow duration-300 ease-in-out hover:shadow-xl flex flex-col">
          <div className="relative h-full w-full flex justify-center items-center bg-gray-200 overflow-hidden">
            <img
              className="mx-auto w-[100%] my-auto h-full object-cover object-center text-center hover:scale-105 duration-[0.4s]"
              src={
                props.img ||
                "https://www.svgrepo.com/show/508699/landscape-placeholder.svg"
              }
              alt="Product Image"
            />
          </div>
          <div className="px-4 py-3 flex flex-col flex-grow">
            <h2 className="font-bold text-lg mb-2 text-slate-200">
              {props.title || "Title"}
            </h2>
            <p className="text-gray-300 text-sm mb-3 flex-grow">
              {props.para || "description"}
            </p>
            <button className="w-full py-2 px-4 bg-transparent border border-gray-600 text-gray-300 rounded transition-colors duration-300 ease-in-out  hover:bg-gray-700">
              Explore
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
