import { BsArrowUpRightCircleFill } from "react-icons/bs";
const CallToAction = () => {
  return (
    <section className="mx-4 min-h-screen my-[15em] ">
      <div className="flex flex-col justify-around md:grid md:grid-cols-2 gap-8">
        <div className="bg-[url(../assets/last.jpg)] bg-no-repeat bg-cover  m-2 rounded-2xl min-w-[10em] min-h-screen p-4">
          <span>NEW EXPERIENCE</span>
          <h2>Explore More</h2>
          <BsArrowUpRightCircleFill size={40} color="white" />
        </div>
        <div>
          <div>
            <p className="text-4xl my-4 ">
              We're doing everything <br /> for future healthiness
            </p>
            <div className="flex gap-2">
              <div className="text-black text-[0.7em]  py-1 px-4 w-fit bg-white rounded-4xl">
                Trainer & Coach Access
              </div>
              <div className="text-black text-[0.7em] py-1 px-4 w-fit bg-white rounded-4xl">
                Priority Event
              </div>
              <div className="text-black text-[0.7em] py-1 px-4 w-fit bg-white rounded-4xl">
                badgets
              </div>
            </div>
            {/* bento sport grid */}
          </div>
          <div class="grid grid-cols-4 gap-4 mt-12 max-w-6xl mx-auto px-4">        
                <div class="col-span-2 row-span-2">
                  <img
                    src="https://media.istockphoto.com/id/1354175053/photo/two-friends-are-jumping-to-take-a-basketball-ball-on-the-center-field.jpg?s=612x612&w=0&k=20&c=wCoNrh88UdomwJM3OM4cn9xgf2T_4mUQABRr43agHK8="
                    alt="Basketball action jump"
                    class="w-full h-full object-cover rounded-2xl shadow-lg"
                  />
                </div>

              
                <div className="col-span-2">
                  <img
                    src="https://media.istockphoto.com/id/469031426/photo/soccer-player-kicking-ball-in-stadium.jpg?s=612x612&w=0&k=20&c=y0UV4Hz0zEAHGftvv21jop9pSzxmHJK-oYlyyqurMGc="
                    alt="Soccer player kicking ball"
                    class="w-full h-32 object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div>
                  <img
                    src="https://i.ytimg.com/vi/A-Hcgjz1uow/sddefault.jpg?v=5e5e4e03"
                    alt="Tennis serve action"
                    class="w-full h-32 object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div>
                  <img
                    src="https://i0.wp.com/myswimpro.com/blog/wp-content/uploads/2021/05/fares-dive-myswimpro.png?resize=858%2C525&ssl=1"
                    alt="Swimmer diving into pool"
                    class="w-full h-32 object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div>
                  <img
                    src="https://www.abacussports.com/wp-content/uploads/2023/02/runner.jpg"
                    alt="Runner sprinting on track"
                    class="w-full h-32 object-cover rounded-2xl shadow-md"
                  />
                </div>

                <div className="col-span-3">
                  <img
                    src="https://exploregeorgia.org/sites/default/files/legacy_images/upload_westgamtnbike.jpg"
                    alt="Mountain biker on trail"
                    class="w-full h-32 object-cover rounded-2xl shadow-md"
                  />
                </div>
            </div>
          </div>
      </div>
    </section>
  );
}

export default CallToAction
