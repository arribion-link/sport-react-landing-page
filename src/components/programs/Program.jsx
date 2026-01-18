import { CiBasketball } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import {FaRegDotCircle} from "react-icons/fa"
const Program = () => {
  return (
    <section className="bg-white shadow rounded-2xl min-h-screen mx-4 my-20 px-4 py-16">
      <div className="flex flex-col-reverse justify-between">
        <div className="flex gap-6 p-4 mb-8">
          <span className="items-center flex gap-2.5 px-4 py-1 bg-gray-400 rounded-2xl">
            <CiBasketball />
            <h2>Virtual Challages</h2>
          </span>
          <span className="items-center flex gap-2.5 px-4 py-1 bg-gray-400 rounded-2xl">
            <IoTrophyOutline />
            <h2>Community Tournaments</h2>
          </span>
        </div>
        <div className="flex gap-1.5 font-bold items-center">
          <FaRegDotCircle />
          <h2>The Program</h2>
        </div>
      </div>
      <div className="flex flex-col justify-between md:grid md:grid-cols-3 gap-8">
        <div className="w-full">
          <div>
            <span className="text-7xl ">01</span>
            <span className="text-gray-700">/B</span>
            <span className="text-gray-700">
              Upcoming <br />
              Events
            </span>
          </div>
          <div className="flex gap-4">
            <FaRegArrowAltCircleLeft size={45} />
            <FaRegArrowAltCircleRight size={45} />
          </div>
        </div>
        <div className="bg-black text-white rounded-2xl p-4 w-full h-96">
          <h1>The coach experts and simple software for better sportinment.</h1>
          <div className="flex justify-between m-2.5">
            <div className="flex gap-4 items-center">
              <BsBroadcast />
              <h3>Live</h3>
            </div>
            <div>
              <button className="border border-white rounded-2xl py-1 px-4">
                basketit.com
              </button>
            </div>
          </div>
        </div>
        <div className="bg-[url(../assets/field.jpg)] min-h-80 rounded-2xl p-4 w-full bg-no-repeat bg-cover">
          <h4>1.20K Membership</h4>
          <h1>
            Chemistry <br /> Sport Partner
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Program;
