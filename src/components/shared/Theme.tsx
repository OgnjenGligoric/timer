import {createTheme, ThemeProvider} from "@mui/material";
import React, {ReactNode} from "react";

export default function Theme({ children }: { children: ReactNode }){

    const theme = createTheme({
        palette: {
            mode: 'dark',
            primary: {
                main: '#ffffff',
            },
        },
        components: {
            MuiOutlinedInput: {
                styleOverrides: {
                    root: {
                        '& .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                            borderColor: 'white',
                        },
                    },
                },
            },
        },
    });

    return (<ThemeProvider theme={theme}>{children}</ThemeProvider>);
}
