'use client'
import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog"
import { SearchCepContext } from "@/context/SearchContext";
import { DialogClose } from "@radix-ui/react-dialog";
import { useContext } from "react";

export default function Li() {
    const { history, theme } = useContext(SearchCepContext);

    return (
        <div className="flex flex-col gap-2">
            {history.map((e: { search: string, result: string }, index: number) => (

                <Dialog key={index}>

                    <DialogTrigger>
                        <li className="flex items-center p-2">
                            <svg data-id="19" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="w-4 h-4 mr-2"><path d="m9 18 6-6-6-6"></path></svg>
                            {e.search}
                        </li>
                    </DialogTrigger>

                    <DialogContent className={`max-w-md w-full rounded-lg p-6 shadow-lg border-none 
                        ${theme && 'bg-[#2C2C2E] text-white'}`}>
                        <h2 className="text-2xl font-bold mb-2">
                            Details for {e.search}
                        </h2>

                        <div className="p-4">
                            <p className="font-medium">{e.search}</p>
                            <p className="text-[#717173]">{e.result}</p>
                        </div>

                        <div className="flex justify-end">
                            <DialogClose asChild>
                                <button className="flex justify-center items-center h-10 font-medium text-sm py-2 px-4 border rounded-md">
                                    Close
                                </button>
                            </DialogClose>
                        </div>
                    </DialogContent>
                </Dialog>
            ))}
        </div>
    )
}