import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Modal, RadioGroup, Select, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { LoginContext } from '../../contexts/loginContext';
import { CartContext } from '../../contexts/cartContext';
import FlexBox from '../FlexBox';
import Checkbox from '../Checkbox';


const CartModal = (props) => {
    const { open, setOpen } = props;
    const { cart, setCart } = React.useContext(CartContext);
    const [tipo, setTipo] = React.useState("");
    const [nome, setNome] = React.useState('')
    const [nascimento, setNascimento] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [email, setEmail] = React.useState('')
    const { showPassword, setShowPassword } = React.useContext(LoginContext);
    const handleClickShowPassword = () => setShowPassword(!showPassword);


    const handleButton = () => {
        setOpen(!open)
    }

    function getCurrentDate(separator = '/') {

        let newDate = new Date()
        let date = newDate.getDate();
        let month = newDate.getMonth() + 1;
        let year = newDate.getFullYear();

        return `${date}${separator}${month < 10 ? `0${month}` : `${month}`}${separator}${year}`
    }
    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: '#f8f8f8',
        borderRadius: '40px',
        boxShadow: 2,
        width: "50vw",
        p: { xs: 2, md: 4 },
    };

    const handleChangeTipo = (event) => {
        setTipo(event.target.value);
    }

    const handleTrash = () => {
        setCart({
            tamanho: '',
            tipo: ''
        })

        setOpen(!open)
    }
    return (
        <>
            <Modal
                open={open}
                onClose={handleButton}
                aria-labelledby="modal-login"
                aria-describedby="modal-description"
                sx={{
                    mx: { xs: '30px' }
                }}
            >
                <Box sx={boxStyle}>
                    <FlexBox justify="space-between" >
                        <FlexBox>
                            <ShoppingCartOutlinedIcon color="primary" sx={{ fontSize: "30px" }} />
                            <Typography id="modal-modal-title" variant="h5" component="h3" color="primary.main" sx={{ fontWeight: 700, pl: 3 }}>
                                Carrinho
                            </Typography>
                        </FlexBox>
                        <CloseIcon color="primary" onClick={handleButton} sx={{ cursor: 'pointer' }} />
                    </FlexBox>
                    <Box sx={{ display: "flex", flexDirection: "column", backgroundColor: "white", borderRadius: "10px", p: 3 }}>
                        <FlexBox justify="space-between" mb={3}>
                            <Typography color="primary.main">{getCurrentDate()}</Typography>
                            <DeleteOutlineOutlinedIcon sx={{ mr: "16px" }} color="primary" onClick={handleTrash} />
                        </FlexBox>
                        <FlexBox>
                            <FlexBox direction="column" width="30vw" >
                                <Typography variant="h6" color="primary.main" sx={{ fontWeight: 700 }}>
                                    {`Cesta ${cart.tamanho}`}
                                </Typography>
                                <Typography variant="p" color="primary.main" sx={{ fontFamily: 'Montserrat' }}>
                                    {cart.tipo}
                                </Typography>
                                <Typography variant="small" color="primary.main" sx={{ fontFamily: 'Montserrat' }}>
                                    {cart.tamanho == 'Individual' ? '3Kg' : cart.tamanho == 'Casal' ? '5Kg' : '7Kg'}
                                </Typography>
                            </FlexBox>
                            <Box sx={{ display: "flex", maxWidth: "100%", flexDirection: "column", alignItems: "center" }}>
                                <FormControl sx={{ width: '100%', alignItems: "flex-end", gap: 6 }}>
                                    <RadioGroup
                                        aria-labelledby="demo-radio-buttons-group-label"
                                        name="radio-buttons-group"
                                        onChange={handleChangeTipo}
                                        value={tipo}
                                        row
                                        sx={{ justifyContent: { xl: "space-between", md: "space-evenly" }, gap: 4 }}
                                    >
                                        <Checkbox align="flex-start" value="Unitário" width="60%" label={<FlexBox pl={3} align="flex-end" direction="column">
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Pedido Unitário</Typography>
                                            <Typography variant="p" sx={{ fontWeight: 700, fontFamily: 'Montserrat' }}>R$ 74,00</Typography>
                                        </FlexBox>} />
                                        <Checkbox align="flex-start" value="Mensal" width="60%" label={<FlexBox pl={3} align={{ md: "flex-start", xl: "flex-end" }} direction="column">
                                            <Typography variant="h6" sx={{ fontWeight: 600 }}>Pedido Mensal</Typography>
                                            <Typography variant="p" sx={{ fontWeight: 700, fontFamily: 'Montserrat' }}>R$ 65,00</Typography>
                                        </FlexBox>} />
                                    </RadioGroup>
                                </FormControl>
                                <Typography sx={{ mt: 3 }}>
                                    {tipo == "Unitário" ? "Pedido unitário: Você receberá essa cesta apenas uma vez." : "Pedido mensal: Você receberá essa cesta todo mês na data escolhida"}
                                </Typography>
                            </Box>
                        </FlexBox>
                    </Box>
                </Box>
            </Modal >
        </>
    )
}

export default CartModal;