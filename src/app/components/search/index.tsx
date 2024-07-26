'use client'
import { SearchCepContext } from "@/context/SearchContext"
import { useContext } from "react"

export default function Search() {
    const { handleChange, inputValue, searchAddress, theme } = useContext(SearchCepContext);
    
    return (
        <div className="flex items-center mb-6 gap-4" data-id="4">
            <input
                className={`flex-1 w-full h-10 py-2 px-3 rounded-md text-sm border text-[#57585C] border-[#CECECE]
                    ${theme && 'bg-[#2F2F2F] text-white'}`}
                placeholder="Enter a postal code or address"
                value={inputValue} 
                onChange={handleChange} 
            />
            <button
                onClick={() => {
                    searchAddress();
                }}
                className="font-medium text-sm h-10 py-2 px-4 rounded-md text-white bg-green-700"
            >
                Search
            </button>
        </div>
    )
}