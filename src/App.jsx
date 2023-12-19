import NavBar from "./components/NavBar";
import MainCard from "./components/MainCard";
import Aside from "./components/Aside";
import Card from "./components/Card";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';

import "./App.css";

function App() {
  return (
    <>
    <NavBar/>
    <MainCard/>
    <Aside/>
    <Card/>
    <Card/>
    <Card/>
    </>
  );
}

export default App;
