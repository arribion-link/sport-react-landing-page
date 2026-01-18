import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/partials/Footer"
import PageNotFound from "./utils/PageNotFound"
const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*"  element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App
