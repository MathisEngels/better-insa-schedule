import { CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@mui/system";
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

const darkTheme = createTheme({
    palette: {
        mode: "dark",
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
