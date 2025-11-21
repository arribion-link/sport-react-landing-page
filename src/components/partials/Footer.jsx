import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <>
      <div>
        <div className=""></div>
        <div>
          
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
      <hr />
    </>
  );
}

export default Footer
