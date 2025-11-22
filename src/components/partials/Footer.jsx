import { Link } from "react-router-dom"
import { BsArrowUpRightCircleFill } from "react-icons/bs";
const Footer = () => {
  return (
    <>
      <footer className="text-white bg-black min-h-[70vh] pt-[7em] p-4">
        <div className="flex justify-around">
          <div className="bg-[url(../assets/last.jpg)] bg-no-repeat bg-cover  rounded-2xl min-w-[10em] min-h-[10em]">
            <span>NEW EXPERIENCE</span>
            <h2>Explore More</h2>
            <BsArrowUpRightCircleFill size={40} color="white" />
          </div>
          <div>
            <p className="text-4xl mb-2">
              We're doing eevrything <br /> for future healthiness
            </p>
            <div>
              <span className="text-black  py-1 px-4 ml-2 bg-white rounded-4xl">
                Trainer & Coach Access
              </span>
              <span className="text-black py-1 px-4 ml-2 bg-white rounded-4xl">
                Priority Event
              </span>
              <span className="text-black py-1 px-4 ml-2 bg-white rounded-4xl">
                badgets
              </span>
            </div>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">Program</Link>
              </li>
              <li>
                <Link to="/">Product</Link>
              </li>
              <li>
                <Link to="/">Events</Link>
              </li>
              <ul>
                <li>
                  <Link to="/">X(Twitter)</Link>
                </li>
                <li>
                  <Link to="/">Instagram</Link>
                </li>
                <li>
                  <Link to="/">About</Link>
                </li>
              </ul>
            </ul>
          </div>
          <div>
            <ul>
              <li>
                <Link to="/">X(Twitter)</Link>
              </li>
              <li>
                <Link to="/">Instagram</Link>
              </li>
              <li>
                <Link to="/">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>
        <hr className="my-4 text-gray-900" />
        <div className="flex justify-between mt-16">
          <div>
            <p>Nairobi - Kenya</p>
            <p>Kirinyaga - Kenya</p>
          </div>
          <div>
            <h1 className="text-blue-500">Arribion@gmail.com</h1>
            <h1>
              {" "}
              &copy; <span>{new Date().getFullYear()}</span> Developed by Jeff
              Arribion - @codnify.dev
            </h1>
          </div>
        </div>
        <hr className="my-4 text-gray-900" />
        <div className="flex justify-between">
          <div>
            <h1>Private Policy</h1>
          </div>
          <div>MY PROJECTS - 2025</div>
          <div>
            <h1>TERMS & CONDITIONS</h1>
          </div>
        </div>
        <div className="bg-[url(../assets/footer.jpg)] bg-no-repeat bg-center bg-cover min-h-[10em] w-full rounded-2xl"></div>
        <div className="flex justify-around">
          <div>
            <Link to="https://github.com/arribion-link" target="_blank">
              <h1>Explore More Projects</h1>
            </Link>
          </div>
          <div>&copy; {new Date().getFullYear()} All Rights Reserved.</div>
        </div>
      </footer>
    </>
  );
}

export default Footer
