import { useEffect, useState } from "react";


const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
    window.localStorage.setItem('theme', theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  },[])


  if(theme === "light"){
    return (
      <div
        aria-label="Toggle Theme"
        onClick={toggleTheme}
        className="toggle-theme fixed bottom-3 left-3 z-50"
      >
      <i className="fi fi-rr-moon-stars text-xl font-500 text-blue-300"></i>
      
      </div>
    );
  }

  return (
    <div
      onClick={toggleTheme}
      className="toggle-theme fixed bottom-3 left-3 z-50"
    >
    <i className="fi fi-rr-brightness text-xl font-bold text-orange-300"></i>
     
    </div>
  );
};

export default ThemeToggle;