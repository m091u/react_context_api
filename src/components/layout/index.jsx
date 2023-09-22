// src/components/layout/index.jsx

import { useContext } from "react";
import ThemeContext from "../../contexts/theme.context";
import classes from "./layout.module.css";

export const Layout = ({ children }) => {
 const { themeState } = useContext(ThemeContext);
 const [theme] = themeState;
 console.log(theme);

 return <main className={classes[`${theme}`] || "initial"}>{children}</main>;
};
