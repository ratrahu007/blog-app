import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Posts from "./pages/Posts";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";



function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
          <Route path="/posts" element={<Posts />} />
          <Route path="/" element={<Home/>} />
          <Route path="about" element={<About/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
