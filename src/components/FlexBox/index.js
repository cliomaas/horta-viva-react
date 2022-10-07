import { Box } from "@mui/material";
import { flexbox } from "@mui/system";
import React from "react";


const FlexBox = ({ children, direction, justify, align, padding, pl, pr, pt, py, background, gap }) => {
    const style = {
        display: 'flex',
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        px: padding,
        pl: pl,
        pr: pr,
        pt: pt,
        backgroundColor: background,
        py: py,
        gap: gap
    }
    return (
        <Box sx={style}>
            {children}
        </Box>
    )
}

export default FlexBox;