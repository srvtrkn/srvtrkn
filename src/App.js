import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Resume from "./Components/Resume";
import Projects from "./Components/Projects";
import resumeData from "./resumeData";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header data={resumeData.main} />
        <Contact data={resumeData.main} />
        <Resume data={resumeData.resume} />
        <Projects data={resumeData.portfolio} />
        <Footer data={resumeData.main} />
      </div>
    );
  }
}

export default App;
