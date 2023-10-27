"use client";
import Image from "next/image";
import Navbar from "./components/navbar";
import carousel1 from "../../public/farmer.png";
import carousel2 from "../../public/pumpkin.png";
import carousel3 from "../../public/orange.png";
import content1 from "../../public/dragon_fruite.png";
import content2 from "../../public/farm_field5.png";
import content3 from "../../public/irrigation.png";
import content4 from "../../public/macs.png";
import content5 from "../../public/damage_leaf.png";
import content6 from "../../public/spraying.png";
import content7 from "../../public/gom.png";
import leaves from "../../public/leaves.png";
import vector from "../../public/vector_2.png";
import bg from "../../public/farmer.jpeg";
import { RiArrowRightDoubleLine } from "react-icons/ri";
import Link from "next/link";
import Footer from "./components/Footer";

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
        <div className="flex items-center justify-center gap-5">
          <div className="h-16 py-5 px-9 bg-hoverGreen mt-4">
            <span className="text-gray-50">For Whom</span>
          </div>
          <div className="h-16 py-5 px-9 bg-hoverGreen mt-4">
            <span className="text-gray-50">Kinds of Service</span>
          </div>
          <div className="h-16 py-5 px-9 bg-hoverGreen mt-4">
            <span className="text-gray-50">About Us</span>
          </div>
        </div>
      </div>

      {/* option Arrow system start */}
      <div className="flex ms-5 mt-10 items-center justify-center">
        <button className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Customer
          </div>
          <Link href="#" className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </Link>
        </button>
        <button className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Merchant
          </div>
          <Link href="#" className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </Link>
        </button>
        <button className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Producer
          </div>
          <Link href="#" className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </Link>
        </button>
        <button className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Importer
          </div>
          <Link href="#" className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </Link>
        </button>
        <button className="flex mr-5">
          <div className="w-32 h-16 bg-lightGreen px-9 py-5 text-darkGreen">
            Exporter
          </div>
          <Link href="#" className="w-16 h-16 bg-darkerGreen px-3 py-3">
            <RiArrowRightDoubleLine className="text-4xl text-gray-50" />
          </Link>
        </button>
      </div>
      {/* Option Arrow system end */}

      {/* Farmers Gallery Start */}
      <div className="flex gap-7 mt-20">
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
      {/* Farmers Gallery End */}

      {/* Farmers Content Start */}
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div
          style={{
            backgroundImage: `url(${content1.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div className="w-[800px] bg-pinkish h-[228px] relative">
          <div className="ms-4 mt-4 z-0">
            <h3 className="text-xl font-medium">
              INTRODUCTION OF NEW VARIETIES
            </h3>
            <p className="mt-9 mr-4">
              We want to be different and that is why we are committed to the
              introduction of new varieties with high added value in the
              agricultural sector, these respond to new market trends, ensuring
              the success of the farmer.
            </p>
            <div className="z-10 absolute right-0">
              <Image src={leaves} alt="leaves" height={300} width={200} />
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div className="w-[800px] bg-pinkish h-[228px] ">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">
              DEVELOPMENT OF FERTILIZATION PLANS
            </h3>
            <p className="mt-9 mr-4">
              We make the appropriate fertilization plans for the crop and the
              type of soil, to optimize the application of fertilizer products,
              avoiding phenomena such as the leaching of nitrites into the soil.
              We are committed to the use of bio fertilizers and new
              fertilization methods to achieve sustainable agriculture.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${content2.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div className="w-[800px] bg-pinkish h-[228px] ">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">IRRIGATION SCHEDULES</h3>
            <p className="mt-9 mr-4">
              Preparation of irrigation schedules for all kinds of crops, taking
              into account an appropriate water application to the needs of the
              plant and the irrigation supplies that are available. Each case is
              special, which is why our technicians visit the plantation on site
              in order to better understand what your true needs are.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${content3.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div
          style={{
            backgroundImage: `url(${content4.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div className="w-[800px] bg-pinkish h-[228px] ">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">UPDATE OF FIELD NOTEBOOKS</h3>
            <p className="mt-9 mr-4">
              Keeping up to date all the information related to the application
              of phytosanitary products, management of empty containers,
              inspection certificates of application equipment and analysis of
              residues of phytosanitary products.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div className="w-[800px] bg-pinkish h-[228px] ">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">
              INTRODUCTION OF NEW VARIETIES
            </h3>
            <p className="mt-9 mr-4">
              We want to be different and that is why we are committed to the
              introduction of new varieties with high added value in the
              agricultural sector, these respond to new market trends, ensuring
              the success of the farmer.
            </p>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${content5.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center">
        <div
          style={{
            backgroundImage: `url(${content6.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
        <div className="w-[800px] bg-pinkish h-[228px] ">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">
              INTRODUCTION OF NEW VARIETIES
            </h3>
            <p className="mt-9 mr-4">
              We want to be different and that is why we are committed to the
              introduction of new varieties with high added value in the
              agricultural sector, these respond to new market trends, ensuring
              the success of the farmer.
            </p>
          </div>
        </div>
      </div>
      <div className="flex gap-7 mt-20 items-center justify-center mb-28">
        <div className="w-[800px] bg-pinkish h-[228px] relative">
          <div className="ms-4 mt-4">
            <h3 className="text-xl font-medium">
              INTRODUCTION OF NEW VARIETIES
            </h3>
            <p className="mt-9 mr-4">
              We want to be different and that is why we are committed to the
              introduction of new varieties with high added value in the
              agricultural sector, these respond to new market trends, ensuring
              the success of the farmer.
            </p>
          </div>
          <div className="z-10 absolute inset-x-0 end-0">
            <Image src={vector} alt="leaves" height={400} width={400} />
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${content7.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            width: "30vw",
            height: "30vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        ></div>
      </div>
      {/* Farmers Content End */}

      <Footer/>
    </>
  );
}
