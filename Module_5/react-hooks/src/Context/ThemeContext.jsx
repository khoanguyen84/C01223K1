import React, { createContext, useState } from "react";
const ThemeContext = createContext();

function ThemeProvider({ children }) {
    const [theme, setTheme] = useState('dark')
    const handleChangeTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    const data = {
        theme,
        handleChangeTheme
    }
    return (
        <ThemeContext.Provider value={data}>
            {children}
        </ThemeContext.Provider>
    )
}
export { ThemeContext };
export default ThemeProvider;