import { createContext, useContext, useEffect, useState } from "react";


type ThemeContextType ={
    theme:string;
    toggleTheme:()=>void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

 export const ThemeProvider = ({children}:{children:React.ReactNode})=>{
    const [theme,setTheme] = useState(
        (typeof window != undefined )&&localStorage.getItem("theme")||
        "dark"
    );

    useEffect(()=>{
        document.documentElement.classList.toggle("dark",theme == "dark");
        localStorage.setItem("theme",theme);
    },[theme])
    const toggleTheme = ()=>{
        setTheme(theme == "light" ?"dark":"light");
    }
    return(
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}
export const useTheme  = ()=>{
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("theme context not found");
    }
    return context
}