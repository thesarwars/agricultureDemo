"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import profileImage from "../../public/farmer.jpg";
import bg from "../../public/farmer.jpeg";
import { Button } from "flowbite-react";
import { RiArrowRightDoubleLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <Navbar />
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

      <div className="w-full h-24 bg-agGreen mt-2">
        <div className="relative w-32 h-16 bg-lightGreen">
          <div className="absolute inset-x-0 top-0 px-9 py-5 text-darkGreen">
            Profile
          </div>
        </div>
      </div>
      <div className="flex ms-5 mt-5 items-center justify-center">
        <div className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </div>
        </div>
        <div className="flex mr-5 items-center justify-center">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl" />
          </div>
        </div>
        <div className="flex mr-5 items-center justify-center">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl" />
          </div>
        </div>
        <div className="flex mr-5 items-center justify-center">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Profile
          </div>
          <div className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl" />
          </div>
        </div>
      </div>
    </>
  );
}
