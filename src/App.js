import { useContext, useRef } from "react";
import "./App.css";
import BuilderDashboard from "./components/BuilderDashboard";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { AppContext } from "./components/AppContext";

function App() {
  

  return (
    <div className="w-[100vw] h-[100vh] overflow-x-hidden">
      <Header 
     
      ></Header>
      <Main></Main>
      <BuilderDashboard></BuilderDashboard>
      <Footer></Footer>
    </div>
  );
}

export default App;
