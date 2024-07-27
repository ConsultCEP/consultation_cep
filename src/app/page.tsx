'use client'
import Search from "./components/search"
import Li from "./components/li";
import Results from "./components/results";
import { GoSun, GoMoon } from "react-icons/go";
import { useContext } from "react";
import { SearchCepContext } from "@/context/SearchContext";


export default function Home() {
  const { theme, setTheme } = useContext(SearchCepContext);
  return (
    <main className={`flex items-center justify-center w-full min-h-screen 
      ${theme? 'bg-[#212121] text-white' : 'bg-white'}`}>

      <button onClick={() => setTheme(!theme)} className="absolute top-5 right-5">
        {theme? <GoSun /> : <GoMoon />}
      </button>
      <div className={`max-w-md w-full rounded-lg p-6 shadow-lg
        ${theme? 'bg-[#2C2C2E] text-white' : 'bg-white'}`}>

        <h1 className="text-2xl font-bold mb-4">
          Postal Code & Address Search
        </h1>

        <Search />

        <div className="flex flex-col mb-6 gap-2">
          <h2 className="text-lg font-bold">Last Search Results</h2>
          <Results />
        </div>

        <div className="flex flex-col gap-2">
          <h2 className="text-lg font-bold">Search History</h2>

          <ul>
            <Li />
          </ul>
        </div>
      </div>
    </main>
  );
}
