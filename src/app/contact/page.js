"use client";
import React from "react";
import NavbarWithDropdown from "../components/navbar";
import { Carousel } from "react-daisyui";
// import { Carousel } from "flowbite-react";

function page() {
  const args = {
    className: "w-64 rounded-box",
  };
  return (
    <>
      <NavbarWithDropdown />
    {/* <div style={{margin: '100px'}}>
      <Carousel slide={false}>
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-4.svg"
        />
        <img
          alt="..."
          src="https://flowbite.com/docs/images/carousel/carousel-5.svg"
        />
      </Carousel>
      </div> */}

      {/* <Carousel className="absolute w-full h-96">
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 1
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 2
      </div>
      <div className="flex h-full items-center justify-center bg-gray-400 dark:bg-gray-700 dark:text-white">
        Slide 3
      </div>
    </Carousel> */}
    </>
  );
}

export default page;
