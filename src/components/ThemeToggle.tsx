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
  };

  useEffect(() => {
    const localTheme = window.localStorage.getItem("theme");
    localTheme && setTheme(localTheme);
  },[])


  if(theme === "light"){
    return (
      <button
        onClick={toggleTheme}
        className="toggle-theme fixed bottom-3 left-3 z-50"
      >
      <i className="fi fi-rr-moon text-3xl font-bold text-gray-700"></i>
      </button>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="toggle-theme fixed bottom-3 left-3 z-50"
    >
    <i className="fi fi-rr-brightness text-3xl font-bold text-orange-500"></i>
     
    </button>
  );
};

export default ThemeToggle;