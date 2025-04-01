import Image from "next/image";
import Link from "next/link";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <p>Home</p>
      <p className="text-black text-center text-3xl py-8 font-bold">
        Our Services
      </p>
      <div className="">
        <div className="flex justify-between w-[84%] ml-auto mr-auto mb-8">
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-1.png"
              alt="Image 1"
              width={50}
              height={50}
              className=" py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">Garden</p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-2.png"
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg  py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">
              Planting and Upgrade
            </p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-3.png"
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg  py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">Bonsol Core</p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
        </div>
        <div className="flex justify-between w-[84%] ml-auto mr-auto">
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-4.png"
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg  py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">
              Garden Maintenance
            </p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-5.png"
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg  py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">Plant Water</p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
          <div className="hover:bg-white bg-gray-50 hover:shadow-lg  p-4 w-[32%]">
            <Image
              src="/images/img-6.png"
              alt="Image 1"
              width={50}
              height={50}
              className="rounded-lg  py-4"
            />
            <p className=" text-black text-xl font-bold mb-3">Plant Cutting</p>
            <p className=" text-gray-600 mb-4">
              It is a long established fact that a reader will be distracted by
              the readable content
            </p>
            <button className="text-green-500 font-bold pb-4">Read More</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
