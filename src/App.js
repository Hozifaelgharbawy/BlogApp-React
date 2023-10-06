import Navbar from "./components/Navbar/navbar";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/home";
import Posts from "./components/Posts/posts";
import Postbage from './components/Posts/postbage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<Postbage />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
