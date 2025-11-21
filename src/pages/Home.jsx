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
import { VscJersey } from "react-icons/vsc";
import { CiCloudSun } from "react-icons/ci";
import { FaBasketballBall } from "react-icons/fa";
import { DiDotnet } from "react-icons/di";
const Home = () => {
  return (
    <>
      <div className="bg-[url(../assets/hero.jpg)] min-h-screen bg-no-repeat bg-cover bg-center top-0 left-0">
        <Header />
        <section className="m-4 pt-16">
          <div className="text-3xl text-yellow-500 ">
            <h1 className="text-blue text-7xl font-bold p-4 ">
              A new species <br /> of sportinment.
            </h1>
            <div className="flex gap-4 items-center bg-white text-blue-700 rounded-2xl p-4">
              <LuCrown />
              <h3>Improve your health - performance well</h3>
            </div>
          </div>
        </section>
      </div>

      <section className="py-6 min-h-[65vh]">
        <div className="flex justify-around pt-[5em]">
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
          <div className="bg-white rounded-2xl px-4 py-4 min-h-[50vh]">
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

      <section className="bg-white rounded-2xl h-screen m-6 px-4 py-16">
        <div className="flex justify-between">
          <div className="flex gap-6 p-4 mb-8">
            <span className="items-center flex gap-2.5 bg-gray-400 rounded-2xl">
              <CiBasketball />
              <h2>Virtual Challages</h2>
            </span>
            <span className="items-center flex gap-2.5 bg-gray-400 rounded-2xl">
              <IoTrophyOutline />
              <h2>Community Tournaments</h2>
            </span>
          </div>
          <div className="flex gap-1.5 font-bold items-center">
            <FaRegDotCircle />
            <h2>The Program</h2>
          </div>
        </div>
        <div className="flex justify-between gap-8">
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
            <h1>
              The coach experts and simple software for better sportinment.
            </h1>
            <div className="flex justify-between m-2.5">
              <div className="flex gap-4 items-center">
                <BsBroadcast />
                <h3>Live</h3>
              </div>
              <div>
                <button className="border border-white rounded-2xl">
                  basketit.com
                </button>
              </div>
            </div>
          </div>
          <div className="bg-[url(../assets/hero.jpg)] rounded-2xl p-4 w-full min-h-4/5 bg-no-repeat bg-cover">
            <h4>1.20K Membership</h4>
            <h1>
              Chemistry <br /> Sport Partner
            </h1>
          </div>
        </div>
      </section>

      <section className="h-screen bg-gray-100 grid grid-cols-2 m-4">
        <div className="p-[1em]">
          <div className="bg-gray-400 w-full h-full bg-[url(../assets/sports.jpg)] flex justify-center items-center rounded-2xl">
            <div className="bg-white rounded-2xl w-[6em] h-[6em]"></div>
          </div>
        </div>
        <div>
          <div>
            <span className="font-bold">FEATURED FEATURES</span>
            <h1 className="text-5xl text-black mb-2 ">Stay motivated with activity tracking</h1>
            <div className="flex gap-2">
              <VscJersey size={45} className="p-2 bg-white rounded-4xl" />
              <CiCloudSun size={45} className="p-2 bg-white rounded-4xl" />
              <FaBasketballBall
                size={45}
                className="p-2 bg-white rounded-4xl"
              />
              <span className="bg-orange-400 p-2 rounded-4xl">8 +</span>
            </div>
          </div>
          <div className="grid grid-cols-2 rounded-2xl bg-no-repeat bg-center bg-cover mt-[5em]">
            <div>
              <h2>Record - activities to boost your performance</h2>
              <p className="font-bold">WITH GPT 4.0</p>
              <BsArrowUpRightCircleFill size={70} color="orange" />
            </div>
            <div className="bg-[url(./assets/kick.jpg)] w-full h-[15em] "> 

            </div>
          </div>
        </div>
      </section>

      <section className="bg-black text-white rounded-2xl p-8 m-5 h-[60vh] ">
        <div className="grid grid-cols-[ifr, 2fr] gap-9">
          <div>
            <span>CURRENT EVENTS</span>
          </div>
          <div>
            <h1 className="font-bold text-4xl">
              To win over sports-minded consumers with products own technology
              and excellent.
            </h1>
          </div>
        </div>
        <div>
          <div></div>
        </div>
      </section>

      <section className="h-screen m-4">
        <div className="flex justify-between">
          <div>
            <h1>What people are honestly saying right now</h1>
          </div>
          <div>
            <span className="bg-white p-2 rounded-4xl m-4">Testimonial</span>
            <div className="flex gap-4 bg-white p-2 rounded-4xl ">
              <PiChatsCircleBold />
              <h5>Customer Says</h5>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-2xl h-[70vh]  mt-8 grid grid-cols-2">
          <div className="p-4">
            <div className="font-bold flex gap-2">
              <DiDotnet />
              <p><span>1</span>/<span>20</span></p>
            </div>

            <h2>
              "The activity tracker keeps me on track, and the community pushes me to keep
              Me going. It's the perfect mix of fun and fitness"
            </h2>

            <div>

            </div>
          </div>
          <div className="bg-[url(../assets/tennis.jpg)] bg-no-repeat bg-cover bg-center rounded-2xl">

          </div>
        </div>
      </section>
    </>
  );
}

export default Home
