import { Card, CardContent, CardMedia, FormControlLabel, Radio, Typography } from "@mui/material";
import React from "react";
import { ReactComponent as Unchecked } from "../../Images/svg/Unchecked.svg"
import { ReactComponent as Checked } from "../../Images/svg/Checked.svg"

const Checkbox = ({ value, label, imagem, align }) => {

    return (
        <FormControlLabel sx={{ color: "primary.main", alignItems: align }} value={value} control={<Radio icon={<Unchecked width="50%" />}
            checkedIcon={<Checked width="50%" />} />} label={imagem ? <img alt={imagem} src={require(`../../Images/${imagem}.png`)} /> : <Typography sx={{ fontWeight: 700, fontSize: "36px" }}>{label}</Typography>} />
    );
}

export default Checkbox;