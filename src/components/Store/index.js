import React from "react";
import { Box, Button, Divider, FormControl, FormLabel, Paper, RadioGroup, Typography } from "@mui/material";
import FlexBox from "../FlexBox";
import Checkbox from "../Checkbox";
import { CartContext } from "../../contexts/cartContext";


const Store = ({ cart, setCart }) => {
    const [tamanho, setTamanho] = React.useState("");
    const [calculo, setCalculo] = React.useState(false);
    const [tipo, setTipo] = React.useState("");
    const { cartAdd, setCartAdd } = React.useContext(CartContext)
    const handleChangeTamanho = (event) => {
        setTamanho(event.target.value);
    }
    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    }
    React.useEffect(() => {
        setCart(
            {
                tamanho: tamanho,
                tipo: tipo
            }
        );
    }, [tipo, tamanho, setCart])

    const handleClick = () => {
        if (cart.tamanho !== '' && cart.tipo !== '') {
            setCalculo(true)
        }
    }

    const handleClickCart = () => {
        if (cart.tamanho !== '' && cart.tipo !== '') {
            setCartAdd(true)
        }
    }
    return (
        <>
            <Box sx={{ display: { xs: "none", md: "flex" }, flexDirection: "column", backgroundColor: "primary.light", py: 5, px: "210px" }}>
                <FlexBox direction="column" py={10}>
                    <Typography variant="h3" component="h2" color="primary.main" sx={{ fontWeight: 700 }}>
                        Selecione o tamanho da sua cesta:
                    </Typography>
                    <FlexBox direction="row">
                        <FormControl sx={{ width: '100vw', py: 5 }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={handleChangeTamanho}
                                value={tamanho}
                                row
                                sx={{ justifyContent: "space-between" }}
                            >
                                <FlexBox direction="column" align="flex-start">
                                    <Checkbox value="Individual" label="Individual" fontSize="36px" />
                                    <Typography>Cesta com 3kg de produtos orgânicos</Typography>
                                </FlexBox>
                                <FlexBox direction="column" align="flex-start">
                                    <Checkbox value="Casal" label="Casal" fontSize="36px" />
                                    <Typography>Cesta com 5kg de produtos orgânicos</Typography>
                                </FlexBox>
                                <FlexBox direction="column" align="flex-start">
                                    <Checkbox value="Família" label="Família" fontSize="36px" />
                                    <Typography>Cesta com 7kg de produtos orgânicos</Typography>
                                </FlexBox>
                            </RadioGroup>
                        </FormControl>
                    </FlexBox>
                </FlexBox>
                <Divider sx={{ borderBottomWidth: 6, borderColor: "primary.main" }} />
                <FlexBox direction="column" py={10}>
                    <Typography variant="h3" align="center" component="h2" color="primary.main" sx={{ fontWeight: 700 }}>
                        O que você gostaria que viesse na sua cesta?
                    </Typography>
                    <Typography variant="h6" align="left" component="h3" color="primary.highlight" sx={{ fontWeight: 700, py: 3, pl: 4 }}>
                        Atenção: Devido à sazonalidade dos produtos, para chegar tudo fresquinho na sua mesa, nossas cestas são aleatórias, ok?
                    </Typography>
                    <FlexBox direction="row">
                        <FormControl sx={{ width: '100vw', }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={handleChangeTipo}
                                value={tipo}
                                row
                                sx={{ justifyContent: { xl: "space-between", md: "space-evenly" } }}
                            >
                                <Checkbox value="Frutas" imagem="frutas" align="flex-start" />
                                <Checkbox value="Legumes" imagem="legumes" align="flex-start" />
                                <Checkbox value="Mista" imagem="mista" align="flex-start" />
                            </RadioGroup>
                        </FormControl>
                    </FlexBox>
                </FlexBox>
                {cart.tamanho !== '' || cart.tipo !== '' ? (
                    <FlexBox direction="column" gap={5}>
                        <Divider sx={{ borderBottomWidth: 6, borderColor: "primary.main" }} />
                        <FlexBox direction="column">
                            {cart.tamanho !== '' ? (
                                <FlexBox justify="space-between">
                                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }} component="h5">{cart.tamanho}</Typography>
                                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 59,00</Typography>
                                </FlexBox>
                            ) : ""}
                            {cart.tipo !== '' ? (
                                <FlexBox justify="space-between">
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500 }} component="h5">{cart.tipo}</Typography>
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500 }} component="h5">Frete R$ 15,00</Typography>
                                </FlexBox>
                            ) : ""}
                        </FlexBox>
                        {cart.tamanho !== '' && cart.tipo !== '' ? <FlexBox direction="column" gap={5}>
                            <Divider sx={{ borderBottomWidth: 3 }} />
                            <FlexBox justify="space-between">
                                <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }} component="h5">Total</Typography>
                                <FlexBox direction="column" align="flex-end">
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500 }} component="h5">Pedido Unitário</Typography>
                                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 74,00</Typography>
                                </FlexBox>
                                <FlexBox direction="column" align="flex-end">
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 500 }} component="h5">Pedido Mensal</Typography>
                                    <Typography variant="h5" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 65,00</Typography>
                                    <Typography variant="p" color="secondary.main" sx={{ fontWeight: 700 }} component="h5">Desconto de R$9,00</Typography>
                                </FlexBox>
                            </FlexBox>
                            <Button onClick={handleClickCart} variant='contained' sx={[{ margin: '0 auto', width: '30vw', boxShadow: 'none', backgroundColor: 'secondary.main', color: 'primary.main', fontWeight: '700', borderRadius: '30px', padding: '5px 50px', fontSize: 20 }, {
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'primary.light',
                                    boxShadow: 'none'
                                }
                            }]}>Adicionar ao carrinho</Button>
                        </FlexBox>
                            : ""}
                    </FlexBox>
                ) :
                    ""}
            </Box >
            <Box sx={{ display: { xs: "flex", md: "none" }, flexDirection: "column", backgroundColor: "primary.light", py: 3, px: "10px" }}>
                <FlexBox direction="column" pb={10}>
                    <Typography variant="h5" component="h2" color="primary.main" sx={{ fontWeight: 700 }}>
                        Selecione o tamanho da sua cesta:
                    </Typography>
                    <FlexBox direction="row">
                        <FormControl sx={{ width: '100vw' }}>
                            <RadioGroup
                                aria-labelledby="demo-radio-buttons-group-label"
                                name="radio-buttons-group"
                                onChange={handleChangeTamanho}
                                value={tamanho}
                                row
                                sx={{ justifyContent: "space-between", flexWrap: "nowrap" }}
                            >
                                <Checkbox width="50%" value="Individual" label="Individual" fontSize="14px" />
                                <Checkbox width="50%" value="Casal" label="Casal" fontSize="14px" />
                                <Checkbox width="50%" value="Família" label="Família" fontSize="14px" />
                            </RadioGroup>
                        </FormControl>
                    </FlexBox>
                    <Divider sx={{ borderBottomWidth: 3, borderColor: "primary.main" }} />
                    <FlexBox direction="column" py={3}>
                        <Typography variant="h5" align="center" component="h2" color="primary.main" sx={{ fontWeight: 700 }}>
                            O que você gostaria que viesse na sua cesta?
                        </Typography>
                        <Typography variant="p" align="left" component="p" color="primary.highlight" sx={{ fontWeight: 700, py: 2, fontFamily: "Montserrat" }}>
                            Atenção: Devido à sazonalidade dos produtos, para chegar tudo fresquinho na sua mesa, nossas cestas são aleatórias, ok?
                        </Typography>
                        <FlexBox direction="row" wrap="nowrap">
                            <FormControl sx={{ width: '100vw', }}>
                                <RadioGroup
                                    aria-labelledby="demo-radio-buttons-group-label"
                                    name="radio-buttons-group"
                                    onChange={handleChangeTipo}
                                    value={tipo}
                                    row
                                    sx={{ justifyContent: "center", flexWrap: "nowrap" }}
                                >
                                    <Checkbox width="40%" labelPlacement="bottom" value="Frutas" imagem="frutas" imgWidth="83px" align="flex-start" />
                                    <Checkbox width="40%" labelPlacement="bottom" value="Legumes" imagem="legumes" imgWidth="83px" align="flex-start" />
                                    <Checkbox width="40%" labelPlacement="bottom" value="Mista" imagem="mista" imgWidth="83px" align="flex-start" />
                                </RadioGroup>
                            </FormControl>
                        </FlexBox>
                    </FlexBox>
                    <Button variant='contained' onClick={handleClick} sx={[{ margin: '0 auto', width: '80vw', boxShadow: 'none', backgroundColor: 'secondary.main', color: 'primary.main', fontWeight: '700', borderRadius: '30px', padding: '5px 20px', fontSize: 15 }, {
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'primary.light',
                            boxShadow: 'none'
                        }
                    }]}>Calcular Cesta</Button>
                    {calculo ? (
                        <FlexBox direction="column" gap={5}>
                            <Divider sx={{ borderBottomWidth: 6, borderColor: "primary.main", py: 3 }} />
                            <FlexBox direction="column">
                                <FlexBox justify="space-between">
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }} component="h5">{cart.tamanho}</Typography>
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 59,00</Typography>
                                </FlexBox>
                                <FlexBox justify="space-between">
                                    <Typography variant="p" color="primary.main" sx={{ fontWeight: 500, fontFamily: "Montserrat" }} component="h5">{cart.tipo}</Typography>
                                    <Typography variant="p" color="primary.main" sx={{ fontWeight: 500, fontFamily: "Montserrat" }} component="h5">Frete R$ 15,00</Typography>
                                </FlexBox>
                            </FlexBox>
                            <FlexBox direction="column" gap={5}>
                                <Divider sx={{ borderBottomWidth: 3 }} />
                                <FlexBox justify="space-between">
                                    <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }} component="h5">Total</Typography>
                                    <FlexBox direction="column" align="flex-end">
                                        <Typography variant="p" color="primary.main" sx={{ fontWeight: 500, fontFamily: "Montserrat" }} component="h5">Unitário</Typography>
                                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 74,00</Typography>
                                    </FlexBox>
                                    <FlexBox direction="column" align="flex-end">
                                        <Typography variant="p" color="primary.main" sx={{ fontWeight: 500, fontFamily: "Montserrat" }} component="h5"> Mensal</Typography>
                                        <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }} component="h5">R$ 65,00</Typography>
                                        <Typography variant="small" color="secondary.main" sx={{ fontWeight: 700, fontFamily: "Montserrat" }} component="h5">Desconto de R$9,00</Typography>
                                    </FlexBox>
                                </FlexBox>
                            </FlexBox>
                        </FlexBox>
                    ) : ""}
                </FlexBox>
            </Box>
        </>
    )
}

export default Store;