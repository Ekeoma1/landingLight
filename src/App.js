import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";

function App() {
  return (
    <div className="container">
      <Navbar />
      <div className="section-divider"></div>
      <SectionOne />
      <div className="section-divider"></div>
      <SectionTwo />
      <div className="section-divider"></div>
      <SectionThree />
    </div>
  );
}

export default App;
