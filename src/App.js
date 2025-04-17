import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import EasySteps from "./components/easySteps/easySteps.jsx";


function App() {
  return (
    <div className="App">
      <h1>React app test</h1>
      <Header />
       
       <EasySteps/>

      <Footer />
    </div>
  );
}

export default App;
