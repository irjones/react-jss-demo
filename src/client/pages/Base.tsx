import React from "react";
import { ThemeProvider } from "theming";
import Landing from "./Landing";
import {lightTheme, darkTheme} from "../theme";
import Toggle from "../components/Toggle";

const Base = () => {
    const [isDarkTheme, setIsDarkTheme] = React.useState(true);
    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <Landing/>
            <Toggle 
                checkedLabel="dark"
                uncheckedLabel="light"
                isChecked={isDarkTheme}
                onChange={() => setIsDarkTheme(!isDarkTheme)}
            />
        </ThemeProvider>
    );
};

export default Base;