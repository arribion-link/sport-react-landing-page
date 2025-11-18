import Header from "../components/partials/Header"
import { LuCrown } from "react-icons/lu";
// import hero_image from "../assets/hero.png"
import { FaRegDotCircle } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { TbShirtSport } from "react-icons/tb";
import { CiBasketball } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
import { BsBroadcast } from "react-icons/bs";
import { FaRegArrowAltCircleLeft } from "react-icons/fa";
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
import { PiChatsCircleBold } from "react-icons/pi";
// import { FaRegDotCircle } from "react-icons/di";
const Home = () => {
  return (
    <>
      <div
        className="bg-[url(../assets/hero.jpg)] min-h-screen bg-no-repeat bg-cover bg-center top-0 left-0">
        <Header />
        <section>
          <div className="text-3xl text-blue-800 absolute right-1 top-80">
            <h1 className="text-white text-2xl font-bold ">A new species of sportinment.</h1>
            <div className="flex gap-4 items-center">
              <LuCrown />
              <h3>Improve your health - performance well</h3>
            </div>
          </div>
        </section>
      </div>

      <section>
        <div className="flex justify-around">
          <div>
            <span className="flex gap-2.5 items-center">
              <FaRegDotCircle />
              THE BENEFIT
            </span>
            <h1 className="font-bold text-4xl">
              Explore our flexible of activity.
            </h1>
            <div className="flex gap-6">
              <span className="flex gap-2 items-center bg-white p-4 rounded-2xl">
                <BiDish />
                Eating After the Game
              </span>
              <span className="flex gap-2 items-center  bg-white p-4 rounded-2xl">
                <TbShirtSport /> Game Jersey
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl px-4 py-4 min-h-50">
            <div>
              <span>EST - 1997</span>
              <h2>
                Smart features designed to move with you - fast, flexible, and
                built for everyday action
              </h2>
            </div>
            <div></div>
          </div>
        </div>
      </section>

      <section className="bg-white rounded-2xl h-screen m-6 pt-16">
        <div className="flex justify-between">
          <div className="flex gap-6">
            <span className="items-center flex gap-2.5 bg-gray-400 rounded-2xl">
              <CiBasketball />
              <h2>Virtual Challages</h2>
            </span>
            <span className="items-center flex gap-2.5 bg-gray-400 rounded-2xl">
              <IoTrophyOutline />
              <h2>Community Tournaments</h2>
            </span>
          </div>
          <div className="flex gap-1.5 font-bold">
            <FaRegDotCircle />
            <h2>The Program</h2>
          </div>
        </div>
        <div className="flex justify-between gap-8">
          <div className="w-full">
            <div>
              <span className="text-7xl ">01</span>
              <span className="text-gray-700">/B</span>
              <span className="text-gray-700">Upcoming <br />Events</span>
            </div>
            <div className="flex gap-4">
              <FaRegArrowAltCircleLeft />
              <FaRegArrowAltCircleRight/>
            </div>
          </div>
          <div className="bg-black text-white rounded-2xl p-4 w-full h-96">
            <h1>The coach experts and simple software for better sportinment.</h1>
            <div className="flex justify-between m-2.5">
              <div className="flex gap-4 items-center">
                < BsBroadcast />
                <h3>Live</h3>
              </div>
              <div>
                <button className="border border-white rounded-2xl">basketit.com</button>
              </div>
            </div>
          </div>
          <div className="bg-[url(../assets/hero.jpg)] rounded-2xl p-4 w-full min-h-4/5">
            <h4>1.20K Membership</h4>
            <h1>Chemistry <br /> Sport Partner</h1>
          </div>

        </div>
      </section>

      <section className="h-screen bg-gray-100 flex">
        <div className="">
          <div>

          </div>
        </div>
        <div>
          <div>
            <span>FEATURED FEATURES</span>
            <h1>Stay motivated with activity tracking</h1>
            <div className="flex">

            </div>
          </div>
          <div className="flex">
            <div>
              <h2>Record - activities to boost your performance</h2>
              <p className="font-bold">WITH GPT 4.0</p>
              < BsArrowUpRightCircleFill size={70} color="orange"/>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-black text-white rounded-2xl p-8 m-5 h-screen">
        <div className="flex gap-9">
          <div>
            <span>CURRENT EVENTS</span>
          </div>
          <div>
            <h1>To win over sports-minded consumers with products own technology and excellent.</h1>
          </div>
        </div>
        <div>
          <div>

          </div>
        </div>
      </section>

      <section className="h-screen">
        <div className="flex justify-between">
          <div>
            <h1>What people are honestly saying right now</h1>
          </div>
          <div>
            <span>Testimonial</span>
            <div>
              <PiChatsCircleBold/>
              <h5>Customer Says</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
