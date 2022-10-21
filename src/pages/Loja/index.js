import { FormControl, FormControlLabel, FormLabel, Paper, Radio, RadioGroup, Typography } from "@mui/material";
import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

import Carousel from "../../components/Carousel";
import Store from "../../components/Store";
import Checkbox from "../../components/Checkbox";
import { CartContext } from "../../contexts/cartContext";
const Loja = () => {

    const { cart, setCart } = React.useContext(CartContext)


    return (
        <>
            <Header />
            <Paper square sx={{
                backgroundColor: "primary.light_background", m: 0, position: 'relative',
                top: -70,
                zIndex: -1000,
                pt: 12
            }}>
                <Typography variant="h2" component="h1" color="white" sx={{ display: { xs: "none", md: "block" }, fontWeight: "700", textAlign: "left", pb: 5, ml: "210px" }}>
                    Produtos frescos e saudáveis
                </Typography>

                <Typography variant="h4" component="h1" color="white" sx={{ display: { xs: "block", md: "none" }, fontWeight: "700", textAlign: "left", pb: 5, ml: "30px" }}>
                    Nossa Loja
                </Typography>
            </Paper>
            {/* <Carousel /> */}
            <Store cart={cart} setCart={setCart} />


            <Footer />
        </>
    )
}

export default Loja;