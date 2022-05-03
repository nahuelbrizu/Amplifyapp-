import React from "react";
import "../App.css"

const themes={
    light: {
        foreground: "#000000",
        background: "#eeeeee"
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222"
    }
}

const ThemeContext = React.createContext(themes.light)

function HookUseContext()  {
return(
    <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
    </ThemeContext.Provider>
)
}
function Toolbar(props){
    return (
        <div>
            <ThemedButton />
        </div>
    )
}
    function ThemedButton() {
    const theme= React.useContext(ThemeContext);
        return(
        <button style={{background: theme.background, color: theme.foreground}}>
            Hola
        </button>
        );
}


export default HookUseContext;