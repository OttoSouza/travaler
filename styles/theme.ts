import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  fonts: {
    heading: "RobotoSlab",
    body: "RobotoSlab",
  },

  colors: {
    orange: {
      "400": "#F25D27",  
    },
    gray: {
      "200": "#F5F8FA"
    },
    cyan: {
      "100": "#DCE2E6", 
      "300": "#DDE9F0", 
      "400": "#A0ACB2", 
      "600": "#617480",         
      "900": "#123952", 
    } 
  },

  styles: {
    global: {
      body: {
        bg: "gray.200",
        color: "blue.900",
      },
    },
  },
});
