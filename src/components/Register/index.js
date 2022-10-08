import { Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const RegisterModal = (props) => {
    const { open, setOpen } = props
    const [nome, setNome] = React.useState('')
    const [nascimento, setNascimento] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const [categoria, setCategoria] = React.useState('')
    const [email, setEmail] = React.useState('')
    const { showPassword, setShowPassword } = React.useContext(LoginContext);
    const handleClickShowPassword = () => setShowPassword(!showPassword);
    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: { xs: 'auto', md: 600 },
        bgcolor: 'background.paper',
        borderRadius: '40px',
        boxShadow: 2,
        p: 4,
    };

    const boxFlexHorizontalStyle = {
        mt: 2,
        display: 'flex',
        justifyContent: 'center',
        gap: 3

    };

    const boxFlexVerticalStyle = {
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 3

    };

    const titleStyle = {
        fontWeight: 700,
        textAlign: 'center',
        color: 'primary.main'
    }

    const buttonStyle = {
        fontWeight: 600,
        textAlign: 'center',
        width: 300,
        px: 3,
        py: 2
    }

    const handleButton = () => {
        setOpen(!open)
    }
    const handleSubmit = (e) => {
        console.log(nome, nascimento, email, senha, categoria)
        if (nome != '' & nascimento != '' & email != '' & categoria != '' & senha != '') {
            localStorage.setItem('nome', nome)
            localStorage.setItem('email', email)
            localStorage.setItem('senha', senha)
            localStorage.setItem('categoria', categoria)
            alert(localStorage.getItem('email'))

            setOpen(!open)
        } else {
            alert("stop")
        }
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
                    <CloseIcon onClick={handleButton} sx={{ cursor: 'pointer' }} />
                    <Typography sx={titleStyle} id="modal-modal-title" variant="h4" component="h3">
                        Complete seu cadastro:
                    </Typography>
                    <Box sx={boxFlexVerticalStyle}>
                        <TextField fullWidth={true} onChange={e => setNome(e.target.value)} value={nome || ''} id="outlined-search" label="Nome Completo" type="text" />
                        <TextField fullWidth={true} onChange={e => setNascimento(e.target.value)} value={nascimento || ''} id="outlined-search" label="Data de nascimento" type="date" InputLabelProps={{
                            shrink: true
                        }} />
                        <TextField fullWidth={true} onChange={e => setEmail(e.target.value)} value={email || ''} id="outlined-search" label="Email" type="email" />
                        <TextField
                            fullWidth={true}
                            id="outlined-search"
                            label='Senha'
                            type={showPassword ? "text" : "password"}
                            onChange={e => setSenha(e.target.value)}
                            value={senha}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                        >
                                            {showPassword ? <VisibilityOffIcon /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                )
                            }}
                        />
                        <FormControl fullWidth>
                            <InputLabel id="demo-simple-select-label">Sou:</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={categoria}
                                label="Sou:"
                                onChange={e => setCategoria(e.target.value)}
                            >
                                <MenuItem value={'colaborador'}>Colaborador</MenuItem>
                                <MenuItem value={'empresa'}>Empresa</MenuItem>
                                <MenuItem value={'produtor'}>Produtor</MenuItem>
                            </Select>
                        </FormControl>
                        <Button sx={buttonStyle} onClick={handleSubmit} variant="contained" >Continuar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default RegisterModal;