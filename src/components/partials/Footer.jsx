import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <footer className="text-white bg-black min-h-[70vh] pt-2 p-4">
        

        <div className="flex flex-col gap-4 justify-between">
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

        <div className="flex flex-col justify-between">
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
