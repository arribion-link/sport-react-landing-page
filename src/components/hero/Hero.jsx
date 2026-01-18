import Header from "../partials/Header";
import { LuCrown } from "react-icons/lu";

const Hero = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="mx-4 pt-16">
        <div className="text-3xl text-yellow-500 ">
          <h1 className="text-blue text-[clamp(1em, 5vw, 3em)] font-bold p-4 ">
            A new species <br /> of sportinment.
          </h1>
          <div className="flex gap-4 items-center bg-white shadow text-blue-700 rounded-2xl p-4">
            <LuCrown />
            <h3>Improve your health - performance well</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
