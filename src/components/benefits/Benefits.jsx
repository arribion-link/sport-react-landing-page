import { FaRegDotCircle } from "react-icons/fa";
import { BiDish } from "react-icons/bi";
import { TbShirtSport } from "react-icons/tb";

const Benefits = () => {
  return (
    <section className="py-6 my-[5em] m-4 min-h-[65vh]">
      <div className="flex flex-col md:flex-row  md:justify-between pt-[5em]">
        <div>
          <span className="flex gap-2.5 items-center">
            <FaRegDotCircle />
            THE BENEFIT
          </span>
          <h1 className="font-bold text-4xl">
            Explore our flexible of activity.
          </h1>
          <div className="flex justify-between md:justify-around my-4">
            <span className="flex gap-2 items-center bg-white shadow p-4 rounded-2xl">
              <BiDish />
              Eating After the Game
            </span>
            <span className="flex gap-2 items-center  bg-white shadow p-4 rounded-2xl">
              <TbShirtSport /> Game Jersey
            </span>
          </div>
        </div>
        <div className="bg-white shadow rounded-2xl px-4 py-4 min-h-[80vh]">
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
  );
};

export default Benefits;
