import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Footer from "./components/Footer.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";

import "./App.css";

function App() {
  return (
    <>
    <div className="container mt-5">
      <NavBar />
      <div className="main-container">
        <div className="main-card">
          <MainCard />
        </div>
        <aside className="aside">
          <Aside />
        </aside>
        <div className="card-left">
          <Card/>
        </div>
        <div className="card-center">
          <Card/>
        </div>
        <div className="card-right">
          <Card/>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}

export default App;
