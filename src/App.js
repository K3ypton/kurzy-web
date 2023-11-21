import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import {Home, SingleCourse,  Courses} from "./pages";
import Navbar from "./components/Navbar";


function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path = "/" element = {<Home />} />
        <Route path = "/courses/:id" element = {<SingleCourse />} />
        <Route path = "/category/:category" element = {<Courses />} />
        </Routes>
    </BrowserRouter>
  );
}

export default App;
