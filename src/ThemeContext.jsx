import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("inactive");
  const [showAbout, setShowAbout] = useState(true);
  const [showExperience, setShowExperience] = useState(false);
  const [showStudies, setShowStudies] = useState(false);
  const [activeMenu, setActiveMenu] = useState(false);

  function toggleTheme() {
    if (theme == "inactive") {
      setTheme("active");
      console.log("Pop up is opened");
    } else {
      setTheme('inactive');
      console.log("Pop up is closed");
    }
  }

  function selectInfo(selected) {
    console.log("Theme context: ", selected)
    if (selected == "about") {
      setShowAbout(true);
      setShowExperience(false);
      setShowStudies(false);
    } else if (selected == "experience") {
      setShowAbout(false);
      setShowExperience(true);
      setShowStudies(false);
    } else {
      setShowAbout(false);
      setShowExperience(false);
      setShowStudies(true);
    }
  }
  
  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
    showAbout: showAbout,
    showExperience: showExperience,
    showStudies: showStudies,
    selectInfo: selectInfo,
    activeMenu: activeMenu
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };