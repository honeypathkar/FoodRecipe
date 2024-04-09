import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import food from "./Images/food.png";
import { Link } from "react-router-dom";
import Home from "./Images/home.png";
import Recipe from "./Images/recipe.png";
import Fav from "./Images/fav.png";
import About from "./Images/about.png";
import { Tooltip } from "@material-tailwind/react";
import LightModeTwoToneIcon from "@mui/icons-material/LightModeTwoTone";
import DarkModeTwoToneIcon from "@mui/icons-material/DarkModeTwoTone";

const navigation = [
  { src: Home, name: "Home", to: "/home" },
  { src: Recipe, name: "Recipes", to: "/recipe" },
  { src: Fav, name: "Favorite", to: "/favourite" },
  { src: About, name: "About", to: "/about" },
];

export default function Navbar(props) {
  const { mode, toggleMode } = props;
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      <header
        className="absolute inset-x-0 top-0 z-50"
        style={{ backgroundColor: mode === "light" ? "#735DA5" : "#09001c" }}
      >
        <nav
          className="flex items-center justify-between p-6 lg:px-8 fixed-top"
          style={{ backgroundColor: mode === "light" ? "#735DA5" : "#09001c" }}
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Recipe Adda</span>
              <img className="h-8 w-auto" src={food} alt="Food Logo" />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className={`-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-${
                mode === "light" ? "black" : "white"
              }`}
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.src}
                to={item.to}
                className="text-sm font-semibold leading-6 text-[#f0eef2] hover:text-[#D3C5E5]"
              >
                {" "}
                <Tooltip
                  content={item.name}
                  placement="left"
                  className="m-[52px]"
                >
                  <img src={item.src} className="h-7 w-auto hover:scale-125" />
                </Tooltip>
              </Link>
            ))}
            <Tooltip
              content={mode === "light" ? "Dark" : "Light"}
              placement="left"
              className="m-[56px]"
            >
              <div onClick={toggleMode} className="hover:scale-125">
                {mode === "light" ? (
                  <DarkModeTwoToneIcon sx={{ color: "white", fontSize: "30px" }} />
                ) : (
                  <LightModeTwoToneIcon sx={{ color: "white", fontSize: "30px" }} />
                )}
              </div>
            </Tooltip>
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel
            className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
            style={{
              backgroundColor: mode === "light" ? "#735DA5" : "#09001c",
            }}
          >
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img className="h-8 w-auto" src={food} alt="Food Logo" />
              </Link>
              <button
                type="button"
                className={`-m-2.5 rounded-md p-2.5 text-${
                  mode === "light" ? "black" : "white"
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.src}
                      to={item.to}
                      className="-mx-3 flex rounded-lg px-3 py-2 gap-4 text-base font-semibold leading-7 text-white hover:text-[#735DA5]"
                    >
                      <img
                        src={item.src}
                        className="h-7 w-auto hover:scale-125"
                      />
                      {item.name}
                    </Link>
                  ))}
                    <div onClick={toggleMode} className="px-2 py-2 flex gap-4 font-semibold text-white">
                      {mode === "light" ? (
                        <DarkModeTwoToneIcon sx={{ color: "white", fontSize: "25px" }} className="hover:scale-125" />
                      ) : (
                        <LightModeTwoToneIcon sx={{ color: "white", fontSize: "25px" }} className="hover:scale-125" />
                      )} 
                      <h1>{mode==="light"?"Dark Mode":"Ligth Mode"}</h1>
                    </div>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
}
