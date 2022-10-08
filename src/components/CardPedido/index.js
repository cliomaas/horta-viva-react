import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Button, Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import SvgLampada from "../../Images/components/Lampada";
import SvgAcordo from "../../Images/components/Acordo";
import SvgFolha from "../../Images/components/Folha";

const CardPedido = ({ image, title, description, price, margin }) => {

    const style = {
        card: {
            mt: margin,
            boxShadow: 25,
            mb: 4,
            p: 5,
            height: '150px',
            justifyContent: 'center'
        }
    }

    return (
        <Card sx={style.card}>
            <CardContent sx={[{ padding: '0' }, {
                "&:last-child": {
                    paddingBottom: 0
                }
            }]}>
                <FlexBox direction='row' justify='space-between' align='center'>
                    <img src={require(`../../Images/${image}.png`)} />
                    <FlexBox direction='column'>
                        <Typography variant="h6" color='primary.main' component="h6">{title}</Typography>
                        <Typography color='primary.main'>{description}</Typography>
                    </FlexBox>
                    <Typography color='primary.main' variant="h6" component="h6" sx={{ fontWeight: 800 }}>{price}</Typography>
                    <Button variant="outlined">Comprar novamente</Button>
                </FlexBox>
            </CardContent>
        </Card>
    )
}

export default CardPedido;