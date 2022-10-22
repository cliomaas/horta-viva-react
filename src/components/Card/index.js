import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import SvgLampada from "../../Images/components/Lampada";
import SvgAcordo from "../../Images/components/Acordo";
import SvgFolha from "../../Images/components/Folha";

const CardInfo = ({ number, title, description, margin }) => {

    const style = {
        card: {
            mt: margin,
            boxShadow: 25,
            mb: 4,
            mx: 2,
            width: { xs: 'auto', md: '450px' },
            p: 5,
            height: { xs: 'auto', md: '350px' }
        }
    }

    const iconRender = () => {
        switch (number) {
            case '01':
                return <SvgLampada width='97' height='auto' />;
                break;
            case '02':
                return <SvgAcordo width='97' height='auto' />;
                break;
            case '03':
                return <SvgFolha width='97' height='auto' />;
                break;
            default:
                return null;
        }
    }
    return (
        <Card sx={style.card}>
            <CardContent sx={{ padding: '0' }}>
                <FlexBox direction='row' justify='space-between'>
                    <Typography variant="h1" component="h1" color="primary.highlight" sx={{ fontWeight: 800 }}>{number}</Typography>
                    {
                        iconRender()
                    }
                </FlexBox>
                <Typography variant="h5" align="left" component="h5" color="gray.600" sx={{ mt: 2, fontWeight: 500, wordWrap: "break-word" }}>
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardInfo;