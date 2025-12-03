import { IoSunnyOutline, IoMoonOutline } from 'react-icons/io5';
import { NavLink, Link } from 'react-router-dom'
const Header = () => {
  return (
    <header className="rounded-4xlc p-4  w-full backdrop:blur-lg z-50 top-0 ">
      <div className="flex justify-between items-center">
        <nav className="hidden md:flex gap-6">
          <Link to="/">
            <h4 className="">Basket-It</h4>
          </Link>
          <NavLink to="">Programs</NavLink>
          <NavLink to="">Products</NavLink>
          <NavLink to="">Events</NavLink>
          <NavLink to="">About</NavLink>
        </nav>
        <div className="light-mode flex justify-between bg-gray-100 p-2 rounded-2xl m-[1em]">
          <div>
            {/* <Link to=""> */}
              <IoSunnyOutline size={25} />
            {/* </Link> */}
          </div>
          <div>
            {/* <Link to=""> */}
              {/* <IoMoonOutline size={25} /> */}
            {/* </Link> */}
          </div>
        </div>
      </div>
      <hr className='text-white' />
      <div className='flex justify-between p-2'>
        <Link to="">
          <h3>CUSTOM WELLNESS</h3>
        </Link>
        <Link to="">
          <h3>GET IN TOUCH</h3>
        </Link>
      </div>
    </header>
  );
}

export default Header
