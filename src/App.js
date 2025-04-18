import React from "react";
import "./App.css";
import Header from "./components/header/header.jsx";
import Footer from "./components/footer/footer.jsx";
import People from "./components/people/People.jsx";

function App() {
  return (
    <div className="App">
      <Header />
      <People />
      <Footer />
    </div>
  );
}

export default App;
