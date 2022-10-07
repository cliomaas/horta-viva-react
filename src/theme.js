import { createTheme, darkScrollbar } from "@mui/material";


export const theme = createTheme({
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
        header: {
            main: "rgba(255, 255, 255, 0.9)"
        }
    },
    typography: {
        fontFamily: '"Montserrat","Helvetica","Arial",sans-serif'
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: '30px',
                    textTransform: 'none'
                },
                outlined: {
                    border: '2px solid #437346',
                    textTransform: 'none',
                    '&:hover': {
                        border: '2px solid #437346'
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