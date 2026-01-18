import quick_chart from "../../assets/quick-chart.jpg"
import { VscJersey } from "react-icons/vsc";
import { CiCloudSun } from "react-icons/ci";
import { FaBasketballBall } from "react-icons/fa";
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Features = () => {
  return (
    <section className="min-h-screen my-[15em] flex flex-col-reverse md:grid md:grid-cols-2 bg-gray-100 m-4">
      <div className="p-[1em]">
        <div className="bg-gray-400 w-full min-h-40 md:min-h-[94vh] bg-[url(../assets/sports.jpg)] flex justify-center items-center rounded-2xl">
          <div className="bg-white rounded-2xl min-w-[6em] min-h-[6em]">
            <img
              src={quick_chart}
              alt=""
              className="rounded-2xl max-w-[20em] "
            />
          </div>
        </div>
      </div>
      <div>
        <div>
          <span className="font-bold">FEATURED FEATURES</span>
          <h1 className="text-5xl text-black mb-2 ">
            Stay motivated with activity tracking
          </h1>
          <div className="flex gap-2">
            <VscJersey size={45} className="p-2 bg-white shadow rounded-4xl" />
            <CiCloudSun size={45} className="p-2 bg-white shadow rounded-4xl" />
            <FaBasketballBall
              size={45}
              className="p-2 bg-white shadow rounded-4xl"
            />
            <span className="bg-orange-400 p-2 shadow rounded-4xl">8 +</span>
          </div>
        </div>
        <div className="grid grid-cols-2 rounded-2xl bg-no-repeat bg-center bg-cover mt-[5em]">
          <div className="flex justify-between items-end">
            <div>
              <h2>Record - activities to boost your performance</h2>
              <p className="font-bold">WITH GPT 4.0</p>
            </div>
            <BsArrowUpRightCircleFill size={70} color="orange" />
          </div>
          <div className="bg-[url(../assets/kick.jpg)] min-w-20 min-h-[15em] rounded-2xl m-4"></div>
        </div>
      </div>
    </section>
  );
};

export default Features;
