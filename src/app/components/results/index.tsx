'use client'
import { SearchCepContext } from "@/context/SearchContext";
import { useContext } from "react";

export default function Results() {
    const { lastResult, isLoading, theme } = useContext(SearchCepContext);

    return (
        <>
            {
                lastResult ?
                    isLoading?
                    <span>...loading</span>
                    :
                    <div className="p-4">
                        <p className={`${isLoading && "bg-gray-500 rounded-md text-transparent"} font-medium`}>{lastResult.search}</p>
                        <p className={`${isLoading && "bg-gray-500 rounded-md text-transparent"}`}>{lastResult.result}</p>
                    </div>
                    :
                    <p className={`text-[#57585C] ${theme && 'text-white/50'}`}>No search results yet.</p>
            }
        </>
    )
}