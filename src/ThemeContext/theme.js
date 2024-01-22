import { createTheme } from "@mui/material/styles";
import { grey  } from "@mui/material/colors";

export const AppLightTheme = createTheme({
    palette: {
        background: {
            default: grey[50],
            paper: grey[100],
        },
    },
});

export const AppDarkThem = createTheme({
    palette: {
        mode: "dark",
        background: {
            default: grey[900],
            paper: grey[800],
        },
    },
});
