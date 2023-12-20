/* eslint-disable react/no-unknown-property */
import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import Aside from "./components/Aside";
import Card from "./components/Card";
import Footer from "./components/Footer.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.js";


function App() {
  return (
    <>
      <div className="container">
        <NavBar />
        <div className="main-container mt-5">
          <div className="main-card" >
            <MainCard/>
          </div>
          <aside className="aside">
            <Aside />
          </aside>
          <div className="card-left">
            <Card
              num={"01"}
              anchor={"Reviving Retro PCs"}
              text={"What happens when old PCs are given modern upgrades?"}
              image={"/images/image-retro-pcs.jpg"}
            />
          </div>
          <div className="card-center">
            <Card
              num={"02"}
              anchor={"Top 10 Laptops of 2022"}
              text={"Our best picks for various needs and budgets."}
              image={"/images/image-top-laptops.jpg"}
            />
          </div>
          <div className="card-right">
            <Card
              num={"03"}
              anchor={"The Growth of Gaming"}
              text={"How the pandemic has sparked fresh opportunities."}
              image={"/images/image-gaming-growth.jpg"}
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
