import { Box } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";


const FlexBox = ({ children, direction, justify, align, padding }) => {
    const style = {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        px: padding
    }
    return (
        <Box sx={style}>
            {children}
        </Box>
    )
}

export default FlexBox;