import { useState } from "react";
import "./App.css";
import Profile from "./components/Profile.tsx";
import About from "./components/About.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  const [menuSelection, setMenuSelection] = useState("contact");
  
  const renderContent = () => {
    switch (menuSelection) {
      case "contact":
        return <Profile />;
      case "about":
        return <About />;
      case "projects":
        return <Projects />;
      default:
        return null;
    }
  };


  return (
    <>
      <div style={{ columnGap: 30 }} className="container">
        
        <div style={{width: 260}} className="container-column">
          {renderContent()}
        </div>

        <div className="container-column">
          <div style={{ textAlign: "left" }} className="container-column">
            <h4
              className={
                menuSelection === "contact"
                  ? "menu-option-selected"
                  : "menu-option"
              }
              onClick={() => {
                setMenuSelection("contact");
              }}
            >
              ▮ contacts + links
            </h4>
            <h4
              className={
                menuSelection === "about"
                  ? "menu-option-selected"
                  : "menu-option"
              }
              onClick={() => {
                setMenuSelection("about");
              }}
            >
              ▮ about
            </h4>
            <h4
              className={
                menuSelection === "projects"
                  ? "menu-option-selected"
                  : "menu-option"
              }
              onClick={() => {
                setMenuSelection("projects");
              }}
            >
              ▮ featured projects
            </h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
