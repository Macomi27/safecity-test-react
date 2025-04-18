import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import EasySteps from "./components/easySteps/easySteps.jsx";

// import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div className="App">
      <Header />

      <EasySteps />

      {/* <Footer /> */}
    </div>
  );
}

export default App;
