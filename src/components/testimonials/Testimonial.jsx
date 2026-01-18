import { PiChatsCircleBold } from "react-icons/pi";
import { GoDotFill } from "react-icons/go";

const Testimonial = () => {
  return (
    <section className="min-h-screen mx-4 my-20 ">
      <div className="flex justify-between ">
        <div className="">
          <h1 className="text-3xl">
            What people are honestly saying right now
          </h1>
        </div>
        <div>
          <span className="text-2xl">Testimonial</span>
          <div className="flex gap-4 items-center bg-white py-1 px-4 my-4 rounded-4xl ">
            <PiChatsCircleBold />
            <h5>Customer Says</h5>
          </div>
        </div>
      </div>
      <div className="bg-white shadow rounded-2xl grid grid-cols-2 min-h-[80vh] ">
        <div className="p-4">
          <div className="font-bold flex gap-2">
            <GoDotFill  className="animate-pulse"  size={30}/>
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
        <div className="bg-[url(../assets/tennis.jpg)] bg-gray-200 bg-no-repeat bg-cover bg-center rounded-r-2xl"></div>
      </div>
    </section>
  );
};

export default Testimonial;
