import { createContext, useEffect, useState } from "react";
import { AppLightTheme, AppDarkThem } from "./theme";
import { ThemeProvider, useMediaQuery } from "@mui/material";

const ThemeContext = createContext();
export default ThemeContext;

export const ThemeContextProvider = ({ children }) => {
    const [themeMode, setThemeMode] = useState("light");
    const [theme, setTheme] = useState(AppLightTheme);
    const System_Theme = useMediaQuery("(prefers-color-sheme: dark)")
        ? "dark"
        : "light";

    useEffect(()=>{
        const themeModePref = _getThemeModePref();
        setThemeMode(themeModePref);
    })

    useEffect(() => {
        switch (themeMode) {
            case "light":
                setTheme(AppLightTheme);
                break;
            case "dark":
                setTheme(AppDarkThem);
                break;
            case "System":
                switch (System_Theme) {
                    case "light":
                        setTheme(AppLightTheme);
                        break;
                    case "dark":
                        setTheme(AppDarkThem);
                        break;
                }
                break;
            default:
                setTheme(AppLightTheme);
        }
    }, [themeMode, System_Theme]);

    const _getThemeModePref = (mode) => {
        const themeModePref = localStorage.getItem("themeMode" , mode);
        if(themeModePref)return themeModePref;
    }

    const _setThemeModeToPref = (mode) => {
        localStorage.setItem("themeMode", mode);
    };

    const switchThemeMode = (mode) => {
        setThemeMode(mode);
        _setThemeModeToPref(mode);
    };
    return (
        <ThemeContext.Provider value={{ themeMode, switchThemeMode, theme }}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ThemeContext.Provider>
    );
};
