import { Link } from "react-router-dom"
import image_not_found from "../../assets/page-not-found.jpg"
const PageNotFound = () => {
  return (
    <section>
      <img src={image_not_found} alt="" className="max-w-[25em]" />
      <Link to="/" className="m-4">
        <h1>Go back to safety</h1>
      </Link>
      
    </section>
  )
}

export default PageNotFound
