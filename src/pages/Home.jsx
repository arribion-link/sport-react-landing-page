import Header from "../components/partials/Header"
import { LuCrown } from "react-icons/lu";

import Program from "../components/programs/Program";
import Benefits from "../components/benefits/Benefits";
import Features from "../components/features/Features";
import Testimonial from "../components/testimonials/Testimonial";
const Home = () => {
  return (
    <>
      <div className="bg-[url(../assets/hero.jpg)] min-h-screen bg-no-repeat bg-cover bg-center top-0 left-0">
        <Header />
        <section className="m-4 pt-16">
          <div className="text-3xl text-yellow-500 ">
            <h1 className="text-blue text-[clamp(1em, 5vw, 3em)] font-bold p-4 ">
              A new species <br /> of sportinment.
            </h1>
            <div className="flex gap-4 items-center bg-white text-blue-700 rounded-2xl p-4">
              <LuCrown />
              <h3>Improve your health - performance well</h3>
            </div>
          </div>
        </section>
      </div>

      <Program/>
      <Benefits/>
      <Features/>
      <Testimonial/>
      
    </>
  );
}

export default Home
