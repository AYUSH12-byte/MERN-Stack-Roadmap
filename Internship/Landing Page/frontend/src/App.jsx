import "./App.css";
import Footer from "./components/common/Flooter/Footer";
import Navbar from "./components/common/navbar";
import Course from "./pages/courses/Course";
import Landing from "./pages/landing/Landing";

import {BrowserRouter,Routes,Route} from "react-router-dom"



const App = () => {
  return (
    <BrowserRouter>
      <div className="bg-gray-100 min-h-screen">
        <Navbar />

        <Routes>
           <Route path="/" element={<Landing />} />
           <Route path="/" element={<Course />} />

        </Routes>

        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;