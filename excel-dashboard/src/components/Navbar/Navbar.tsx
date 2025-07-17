import { Theme } from "./Theme"
import { Link } from "react-router-dom"

export const Navbar =  ()=>{
    return(
       <nav className=" w-full px-6 py-4 flex items-center justify-between bg-blue-600 dark:bg-blue-700 shadow-sm transition-colors ">
            <div>
                <Link to="/">
                <span className="text-white font-bold text-xl">SheetVision</span>
                </Link>
            </div>
            <div>
                <Theme/>
            </div>
       </nav>
    )
}