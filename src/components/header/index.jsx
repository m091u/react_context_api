// src/components/header/index.jsx

import { useContext } from "react";
import ThemeContext from "../../contexts/theme.context";

export const Header = ({ children }) => {
 const { themeState } = useContext(ThemeContext);

 const [theme, setTheme] = themeState;
  const handleToggleTheme = () => {
   setTheme((prevState) => (prevState === "modern" ? "default" : "modern"));
 };

 return (
   <header>
     {children}
     <button onClick={handleToggleTheme}> toggle theme </button>
   </header>
 );
};