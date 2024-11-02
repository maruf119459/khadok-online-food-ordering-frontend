const { createTheme } = require("@mui/material");

export const colorTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#FFD1B2",
        },
        secondary: {
            main: "#5A20CB",
        },
        background: {
            main: "#FEE4D2",
            default: "#FEE4D2",
            paper: "#FEE4D2"
        },
        textColor: {
            main: "#000000"
        }
    },
});
