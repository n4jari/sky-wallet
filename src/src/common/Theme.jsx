import { createTheme } from "@mui/material";
import rtlPlugin from 'stylis-plugin-rtl';
import createCache from '@emotion/cache';
import { prefixer } from 'stylis';



export const lightTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "light"
  },
  typography: {
    fontFamily: "Changa"
  }
})


export const darkTheme = createTheme({
  direction: "rtl",
  palette: {
    mode: "dark"
  },
  typography: {
    fontFamily: "Changa"
  }
})

export const cacheRtl = createCache({
  key: 'muirtl',
  stylisPlugins: [prefixer, rtlPlugin],
});

