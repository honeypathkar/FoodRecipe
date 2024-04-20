import * as React from "react";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link } from "react-router-dom";
import Tooltip from "@mui/material/Tooltip";

export default function BottomBar({mode}){

  return (
    <footer
      className="fixed bottom-0 left-0 z-50 w-full border-t border-[#f3f4f64d] "
      style={{
        backgroundColor: mode === "light" ? "#735DA5" : "#09001c",
        color: mode === "light" ? "black" : "white",
      }}
    >
      <ul className="flex justify-evenly h-ful max-w-[100rem] mx-auto font-medium my-3">
        <Tooltip title="Home">
          <Link className="navItem" to="/home">
            <HomeIcon sx={{ fontSize: "30px" }} />
          </Link>
        </Tooltip>
        <Tooltip title="Recipe">
          <Link className="navItem" to="/recipe">
            <MenuBookIcon sx={{ fontSize: "30px" }} />
          </Link>
        </Tooltip>
        <Tooltip title="Favorite">
          <Link className="navItem" to="/favourite">
            <FavoriteIcon sx={{ fontSize: "30px" }} />
          </Link>
        </Tooltip>
        <Tooltip title="About us">
          <Link className="navItem" to="/about">
            <InfoIcon sx={{ fontSize: "30px" }} />
          </Link>
        </Tooltip>
      </ul>
    </footer>
  );
}
