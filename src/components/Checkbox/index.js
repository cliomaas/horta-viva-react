import { Card, CardContent, CardMedia, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Unchecked } from "../../Images/svg/Unchecked.svg"
import { ReactComponent as Checked } from "../../Images/svg/Checked.svg"

const Checkbox = ({ value, label, imagem, align, fontSize, width, imgWidth, labelPlacement }) => {

    return (
        <FormControlLabel sx={[{ color: "primary.main", alignItems: align }, { '& .MuiButtonBase-root': { p: "5px", justifyContent: "flex-end" } }]} value={value} control={<Radio icon={<Unchecked width={width} />}
            checkedIcon={<Checked width={width} />} />} labelPlacement={labelPlacement} label={imagem ? <img alt={imagem} width={imgWidth} src={require(`../../Images/${imagem}.png`)} /> : <Typography sx={{ fontWeight: 700, fontSize: fontSize }}>{label}</Typography>} />
    );
}

export default Checkbox;