import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Footer from "./components/partials/Footer"
import PageNotFound from "./utils/PageNotFound"
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const App = () => {
 useEffect(() => {
   AOS.init({duration: 2500,
     
     once: false, // Re-animate every time it scrolls into view
     offset: 0, // Trigger immediately when visible
   });
 }, []);// Empty dependency array ensures it runs once on mount

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App
