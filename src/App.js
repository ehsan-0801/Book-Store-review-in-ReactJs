import Header from "./Components/Header/Header";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Reviews from "./Components/Reviews/Reviews";
import Dashboard from "./Components/Dashboard/Dashboard";
import Blog from "./Components/Blog/Blog";
import About from "./Components/About/About";
import NotFound404 from "./Components/NotFound404/NotFound404";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/home" element={ <Home /> }></Route>
        <Route path="/reviews" element={ <Reviews /> }></Route>
        <Route path="/dashboard" element={ <Dashboard /> }></Route>
        <Route path="/blog" element={ <Blog /> }></Route>
        <Route path="/about" element={ <About /> }></Route>
        <Route path="*" element={ <NotFound404 /> }></Route>
      </Routes>
    </div>
  );
}

export default App;
