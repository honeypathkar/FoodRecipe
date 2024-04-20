import * as React from "react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";
import Food from "./Images/food.png";

export default function Navbar({ mode, toggleMode }) {
  return (
    <header
      className="flex justify-between p-4 border-b border-[#f3f4f64d] left-0 w-full cursor-pointer"
      style={{
        backgroundColor: mode === "light" ? "#735DA5" : "#09001c",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <Tooltip title=" Recipe Finder">
        <Link to="/">
          <img src={Food} alt="Food" className="h-8 w-auto" />
        </Link>
      </Tooltip>
      <Tooltip title={`${mode === "light" ? "Dark" : "Light"}`}>
        <Brightness4Icon className="navItem" onClick={toggleMode} />
      </Tooltip>
    </header>
  );
}
