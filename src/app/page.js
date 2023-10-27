"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import carousel1 from "../../public/farmer.png";
import carousel2 from "../../public/pumpkin.png";
import carousel3 from "../../public/orange.png";
import bg from "../../public/farmer.jpeg";
import { Button, Carousel } from "flowbite-react";
import { RiArrowRightDoubleLine } from "react-icons/ri";
// import { Carousel } from "react-daisyui";

export default function Home() {
  return (
    <>
      <Navbar />
      {/* Cover Image */}
      <div
        style={{
          backgroundImage: `url(${bg.src})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100vw",
          height: "50vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      ></div>
      {/* Cover Image end */}

      <div className="w-full h-24 bg-agGreen mt-2">
        <div className="flex items-center justify-center">
          <div className="w-32 h-16 bg-lightGreen mt-4 px-9 py-5">
            <span className="text-darkGreen">Profile</span>
          </div>
        </div>
      </div>

      {/* option Arrow system start */}
      <div className="flex ms-5 mt-5 items-center justify-center">
        <div className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </div>
        </div>
        <div className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </div>
        </div>
        <div className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </div>
        </div>
        <div className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div
          style={{
            backgroundImage: `url(${carousel2.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${carousel1.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url(${carousel3.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "100vw",
            height: "50vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
    </>
  );
}
