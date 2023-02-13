import { createTheme } from '@mui/material/styles';

export const colors = {
        primary: {
            100: "#2d2d35",
            200: "#ffffff",
  },
  secondary: {
            100: "#bae299",
            200: "#bce19a",
  },
  
  other: {
            100: "#5b55c0",
            200: "#f9f9f9",
  },
  background: {
            100: "#0E0E18",
  },
        
    } 

export const themeSettings = {
      palette: {
              primary: {
                main: colors.primary[100],
              },
              secondary: {
                main: colors.secondary[100],
              },
              neutral: {
                dark: colors.other[100],
              },
              background: {
                default: colors.background[100],
              },
            },
      typography: {
        fontFamily: ["Lato", "sans-serif"].join(","),
        fontSize: 12,
        h1: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 40,
        },
        h2: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 32,
        },
        h3: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 24,
        },
        h4: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 20,
        },
        h5: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 16,
        },
        h6: {
          fontFamily: ["Lato", "sans-serif"].join(","),
          fontSize: 14,
        },
      },
      components: {
        MuiButtonBase: {
          defaultProps: {
            disableRipple: true
          }
        }
      }
    };
  
 export const theme = createTheme(themeSettings);
