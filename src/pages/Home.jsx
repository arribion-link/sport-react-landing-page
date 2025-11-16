import Header from "../components/partials/Header"
import { LuCrown } from "react-icons/lu";
// import hero_image from "../assets/hero.png"
import { FaRegDotCircle } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { TbShirtSport } from "react-icons/tb";
import { CiBasketball } from "react-icons/ci";
import { IoTrophyOutline } from "react-icons/io5";
// import { FaRegDotCircle } from "react-icons/di";
const Home = () => {
  return (
    <>
      <div className="hero-container">
        <Header />
        <section>
          <div>
            <h1>A new species of sportinment.</h1>
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

      <section className="bg-white rounded-2xl min-h-100 m-6">
        <div className="flex justify-between">
          <div className="flex gap-4">
            <span>
              <CiBasketball />
              <h2>Virtual Challages</h2>
            </span>
            <span>
              <IoTrophyOutline />
              <h2>Community Tournaments</h2>
            </span>
          </div>
          <div>
            <FaRegDotCircle />
            <h2>The Program</h2>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home
