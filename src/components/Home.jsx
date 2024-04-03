import React from "react";
import { Link } from "react-router-dom";
import TypeIt from "typeit-react";

export default function Home() {
  return (
    <div>
      <div className="relative isolate px-6 pt-14 lg:px-8 mb-0">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Presenting first recipe searching app{" "}
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              <TypeIt
              options={{loop: true}}
                getBeforeInit={(instance) => {
                  instance
                    .type("Recipe Finder Find recipe of any Food ! &#127857;")
                    .pause(750)
                    .delete(8)
                    .pause(750)
                    .type("Dishes ! &#128523;")
                   
                  // Remember to return it!
                  return instance;
                }}
              />
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              An amazing recipe finder website where you can find any recipe in
              an instant of search or in a blink of eyes. You can add recipe to
              your favourite list so you can watch it letter if you want.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                to ="/recipe"
                className="rounded-md btn bg-[#D3C5E5] border border-black hover:border-white hover:bg-[#735DA5] hover:text-white "
              >
                Find Recipe
              </Link>
              <Link
                to="https://github.com/honeypatkar/FoodRecipe"
                className="text-sm font-semibold leading-6 text-gray-900"
                target="_blank"
              >
                  Github Repo <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
