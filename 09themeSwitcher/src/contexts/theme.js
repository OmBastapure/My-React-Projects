import { createContext, useContext } from "react";

//Exporting the ThemeContext object. Here we can give some default values for the context object
export const ThemeContext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
})

//Exporting ThemeProvider
export const ThemeProvider = ThemeContext.Provider

//Exporting a custom Hook
export default function useTheme(){
    return useContext(ThemeContext)
}