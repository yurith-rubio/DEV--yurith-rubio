import { createContext, useState } from "react";

const ThemeContext = createContext();

function ThemeProvider(props) {
  const [theme, setTheme] = useState("inactive");
  const [showJobs, setShowJobs] = useState(false);
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

  function toggleAbout() {
    if (showJobs == false) {
      setShowJobs(true);
      console.log("See about me");
    } else {
      setShowJobs(false);
      console.log("See experience");
    }
  }
  
  const value = {
    theme: theme,
    toggleTheme: toggleTheme,
    showJobs: showJobs,
    toggleAbout: toggleAbout,
    activeMenu: activeMenu
  };

  return (
    <ThemeContext.Provider value={value}>
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };