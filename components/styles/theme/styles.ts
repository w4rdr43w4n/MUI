import { createTheme, ThemeOptions } from "@mui/material";
import {
  blue,
  blueGrey,
  grey,
} from "@mui/material/colors";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#f5f5f5",
      paper: "#ffffff",
    },
    text: {
      primary: blueGrey[900],
    },
  },
  components: {
    MuiToolbar: {
      variants: [
        {
          props: { variant: "HeaderToolBar" },
          style: {
            padding: "5px",
            backgroundColor: blue[800],
            margin: 0,
            width: "100%",
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "HeaderButton" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: blue[700],
            },
          },
        },
        {
          props: { variant: "MenuButton" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ActionButton" },
          style: {
            border: "none",
            color:'#fff',
            backgroundColor: blue[700],
            "&:hover": {
              backgroundColor: blue[900],
            },
          },
        },
      ],
    },
  },
};

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: grey[900],
      paper: grey[800],
    },
    text: {
      primary: grey[200],
      secondary: grey[100],
    },
  },
  components: {

    MuiToolbar: {
      variants: [
        {
          props: { variant: "HeaderToolBar" },
          style: {
            padding: "5px",
            backgroundColor: blueGrey[800],
          },
        },
      ],
    },
    MuiButton: {
      variants: [
        {
          props: { variant: "HeaderButton" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: blueGrey[700],
            },
          },
        },
        {
          props: { variant: "MenuButton" },
          style: {
            border: "none",
            backgroundColor: "transparent",
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
        {
          props: { variant: "ActionButton" },
          style: {
            border: "none",
            color:'#fff',
            backgroundColor: blueGrey[900],
            "&:hover": {
              backgroundColor: blueGrey[800],
            },
          },
        },
      ],
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
