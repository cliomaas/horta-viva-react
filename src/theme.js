import { createTheme, darkScrollbar } from "@mui/material";


export const theme = createTheme({
    breakpoints: {
        keys: [
            'xs', 'sm', 'md', 'lg', 'xl'
        ],
        values: {
            xs: 0,
            sm: 600,
            md: 900,
            lg: 1200,
            xl: 1900
        }
    },
    palette: {
        primary: {
            main: "#437346",
            light: "#D9F2D5",
            highlight: "#97BF95",
            transparency: "rgba(255, 255, 255, 0.9)"
        },
        secondary: {
            main: "#F2A950",
        },
        gray: {
            600: '#666666'
        },
        header: {
            main: "rgba(255, 255, 255, 0.9)"
        },
        whiteFooter: {
            main: "#FFF"
        }
    },
    typography: {
        fontFamily: '"Montserrat","Helvetica","Arial",sans-serif'
    },
    shadows: [...createTheme({}).shadows, ' 0px 4px 35px rgba(0, 0, 0, 0.18)'],
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    textTransform: 'none'
                },
                outlined: {
                    border: '1px solid #437346',
                    textTransform: 'none',
                    '&:hover': {
                        border: '1px solid #437346'
                    }
                },

            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: '20px',
                },
                notchedOutline: {
                    border: '3px solid #437346'
                }
            }
        },
        MuiTextField: {
            styleOverrides: {
                root: {
                    borderRadius: '20px'
                }
            }
        },
        MuiFormLabel: {
            styleOverrides: {
                root: {
                    fontWeight: 400,
                    color: '#97BF95'
                }
            }
        }
    },
})