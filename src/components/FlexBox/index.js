import { Box } from "@mui/material";
import React from "react";


const FlexBox = ({ children, direction, justify, align, padding, pl, pr, pt, py, pb, background, gap, width, wrap }) => {
    const style = {
        display: 'flex',
        flexWrap: wrap,
        flexDirection: direction,
        justifyContent: justify,
        alignItems: align,
        px: padding,
        pl: pl,
        pr: pr,
        pt: pt,
        backgroundColor: background,
        py: py,
        pb: pb,
        gap: gap,
        width: width,
    }
    return (
        <Box sx={style}>
            {children}
        </Box>
    )
}

export default FlexBox;