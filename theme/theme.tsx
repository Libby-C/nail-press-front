import { createTheme, MantineColorsTuple, MantineProvider } from '@mantine/core';

const primary: MantineColorsTuple = [
  "#f6efff",
  "#e6def4",
  "#cabae1",
  "#ac94cf",
  "#9274c0",
  "#8260b6",
  "#7b56b3",
  "#69469d",
  "#5d3e8e",
  "#51347e"
];

const accent: MantineColorsTuple = [
  "#fff4e1",
  "#ffe8cc",
  "#fed09b",
  "#fdb766",
  "#fca13a",
  "#fc931d",
  "#fc8a08",
  "#e17800",
  "#c86a00",
  "#af5a00"
];

const neutral: MantineColorsTuple = [
  "#f4f3f6",
  "#e5e5e6",
  "#cac7ce",
  "#ada8b6",
  "#958da1",
  "#857c95",
  "#7e738f",
  "#6c627c",
  "#605770",
  "#1a171f"
];

const error: MantineColorsTuple = [
  "#fceeee",
  "#f2d8d8",
  "#e9adad",
  "#e27f7e",
  "#db5957",
  "#d8423e",
  "#d73631",
  "#be2924",
  "#aa231f",
  "#661111"
];

const warning: MantineColorsTuple = [
  "#fff7e1",
  "#fdeece",
  "#f8dba1",
  "#f3c76f",
  "#eeb138",
  "#edac2a",
  "#eca619",
  "#d2910a",
  "#bb8000",
  "#a26e00"
]

const success: MantineColorsTuple = [
  "#e7fdf2",
  "#d8f4e6",
  "#b3e6cd",
  "#8cd8b2",
  "#6bcc9b",
  "#55c48c",
  "#49c185",
  "#37aa71",
  "#2c9763",
  "#198353"
]

// can change alert clours later if needed depending on usage in app etc


export const theme = createTheme({
  colors: {
    primary,
    accent,
    neutral,
    error,
    warning,
    success,
    gray: neutral,
    blue: primary,
    red: error,
    yellow: warning,
    green: success
    },
  primaryColor: 'primary',
  fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif',
  headings: { fontFamily: 'Outfit, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' }, 
});