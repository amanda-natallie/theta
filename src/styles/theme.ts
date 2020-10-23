import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#7643FF",
      dark: "#362A66",
      light: "#D186FF",
    },
    secondary: {
      light: "#E3E1E8",
      main: "#706880",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#fff",
    },
  },
  overrides: {
    MuiSelect: {
      outlined: {
        paddingLeft: "40px",
        color: "#7643FF",
      },
      select: {
        padding: "12px 14px",
        
      },
    },
    MuiInputBase: {
      root: {
        borderRadius: 8,
        boxShadow: "1px 4px 12px rgba(0, 0, 0, 0.08)",
        border: 0,
        "& svg": {
          marginRight: 20,
        },
      },
    },
  },
});

export default theme;
