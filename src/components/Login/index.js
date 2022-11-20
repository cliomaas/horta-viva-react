import { Alert, Box, Button, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
} from "firebase/auth";
import { auth } from "../../firebase-config";
const LoginModal = (props) => {
    const { open, setOpen } = props
    const [errors, setErrors] = React.useState('');
    const [categoria, setCategoria] = React.useState('');
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const { logged, setLogged } = React.useContext(LoginContext);
    const { showPassword, setShowPassword } = React.useContext(LoginContext);
    const navigate = useNavigate();
    const handleClickShowPassword = () => setShowPassword(!showPassword);

    const boxStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'background.paper',
        borderRadius: '40px',
        boxShadow: 2,
        p: { xs: 2, md: 4 },
    };

    const boxFlexHorizontalStyle = {
        my: 2,
        display: 'flex',
        flexWrap: 'wrap',
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
    const buttonFlexStyle = {
        width: { xs: '100%', md: 'auto' }
    }


    const handleChange = (e) => {

        setEmail(e.target.value);
    }

    React.useEffect(() => {
        const emailStorage = localStorage.getItem("email");
        const categoriaStorage = localStorage.getItem("categoria");
        if (email === emailStorage) {
            setCategoria(categoriaStorage)
        } else (
            setCategoria('')
        )
    }, [email])

    const handleSelect = React.useCallback((e) => {
        switch (categoria) {
            case ('colaborador'):
                return <>
                    <Button sx={buttonFlexStyle} id="colaborador" variant='contained'>
                        Sou Colaborador
                    </Button>
                    <Button sx={buttonFlexStyle} id="empresa" variant='outlined'>
                        Sou Empresa
                    </Button>
                    <Button sx={buttonFlexStyle} id="produtor" variant='outlined'>
                        Sou Produtor
                    </Button></>;
            case ('empresa'):
                return <>
                    <Button sx={buttonFlexStyle} id="colaborador" variant='outlined'>
                        Sou Colaborador
                    </Button>
                    <Button sx={buttonFlexStyle} id="empresa" variant='contained'>
                        Sou Empresa
                    </Button>
                    <Button sx={buttonFlexStyle} id="produtor" variant='outlined'>
                        Sou Produtor
                    </Button>
                </>;
            case ('produtor'):
                return <>
                    <Button sx={buttonFlexStyle} id="colaborador" variant='outlined'>
                        Sou Colaborador
                    </Button>
                    <Button sx={buttonFlexStyle} id="empresa" variant='outlined'>
                        Sou Empresa
                    </Button>
                    <Button sx={buttonFlexStyle} id="produtor" variant='contained'>
                        Sou Produtor
                    </Button>
                </>;
            default:
                return <>
                    <Button sx={buttonFlexStyle} id="colaborador" variant='outlined'>
                        Sou Colaborador
                    </Button>
                    <Button sx={buttonFlexStyle} id="empresa" variant='outlined'>
                        Sou Empresa
                    </Button>
                    <Button sx={buttonFlexStyle} id="produtor" variant='outlined'>
                        Sou Produtor
                    </Button>
                </>
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [categoria])

    React.useEffect(() => {
        handleSelect();
    }, [categoria, email, handleSelect])

    const handleButton = () => {
        setOpen(!open)
    }
    const handleSubmit = (e) => {
        const emailStorage = localStorage.getItem("email")
        const senhaStorage = localStorage.getItem("senha")
        if (!email || !senha) {
            setErrors('Preencha as informações corretamente')
        } else {
            if (!emailStorage || email !== emailStorage) {
                setErrors('Usuário não cadastrado')
            }
            else if (email === emailStorage) {
                if (senha !== senhaStorage) {
                    setErrors('Email ou senha incorretos')
                } else {
                    setErrors('')
                    // setLogged(true);
                    navigate('/perfil')
                    setOpen(!open)
                }
            }
        }
    }
    const login = async () => {
        try {
            const user = await signInWithEmailAndPassword(
                auth,
                email,
                senha
            );
            console.log(user);
        } catch (error) {
            setErrors('Email ou senha incorretos')
        }
    };

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
                    <Alert sx={{ display: errors ? 'flex' : 'none', mb: 3, borderRadius: '40px' }} severity={errors.includes('incorretos') ? 'error' : 'warning'}>{errors}</Alert>
                    <CloseIcon onClick={handleButton} sx={{ cursor: 'pointer' }} />
                    <Typography sx={[titleStyle, { fontWeight: 400 }]} id="modal-modal-title" variant="h6" component="h3">
                        Login
                    </Typography>
                    <Typography sx={titleStyle} id="modal-modal-title" variant="h4" component="h3">
                        Que bom que você voltou!
                    </Typography>
                    <Box sx={boxFlexHorizontalStyle}>
                        {handleSelect()}
                    </Box>
                    <Box sx={boxFlexVerticalStyle}>
                        <TextField fullWidth={true} onChange={e => handleChange(e)} value={email} id="email" label="Email" type="email" />
                        <TextField
                            fullWidth={true}
                            id="senha"
                            label='Senha'
                            type={showPassword ? "text" : "password"}
                            onChange={e => setSenha(e.target.value)}
                            value={senha}
                            sx={{ backgroundColor: 'transparent' }}
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
                        <Button sx={buttonStyle} onClick={login} variant="contained" >Continuar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal;