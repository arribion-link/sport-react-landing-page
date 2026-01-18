import { PiChatsCircleBold } from "react-icons/pi";
import { DiDotnet } from "react-icons/di";

const Testimonial = () => {
  return (
    <section className="min-h-screen m-4">
      <div className="flex justify-between ">
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
      <div className="bg-white rounded-2xl h-[70vh]  mt-8 flex flex-col-reverse md:flex-row md:justify-between">
        <div className="p-4">
          <div className="font-bold flex gap-2">
            <DiDotnet />
            <p>
              <span>1</span>/<span>20</span>
            </p>
          </div>

          <h2>
            "The activity tracker keeps me on track, and the community pushes me
            to keep Me going. It's the perfect mix of fun and fitness"
          </h2>

          <div></div>
        </div>
        <div className="bg-[url(../assets/tennis.jpg)] bg-no-repeat bg-cover bg-center rounded-2xl"></div>
      </div>
    </section>
  );
};

export default Testimonial;
