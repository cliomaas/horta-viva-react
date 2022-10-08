import { Box, Button, IconButton, InputAdornment, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';

const LoginModal = (props) => {
    const { open, setOpen } = props
    const [email, setEmail] = React.useState('')
    const [senha, setSenha] = React.useState('')
    const { setLogged } = React.useContext(LoginContext);
    const { showPassword, setShowPassword } = React.useContext(LoginContext);
    const navigate = useNavigate();
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

    const handleSelect = (e) => {
        e.target.style.backgroundColor = '#437346'
        e.target.style.color = 'white'
        const category = e.target.innerText
        switch (category) {
            case 'Sou Colaborador':
                localStorage.setItem("category", "colaborador");
                break;
            case 'Sou Empresa':
                localStorage.setItem("category", "empresa");
                break;
            case 'Sou Produtor':
                localStorage.setItem("category", "produtor");
                break;
            default:
                console.log("selecione")
        }
    }

    const handleButton = () => {
        setOpen(!open)
    }
    const handleSubmit = (e) => {
        const emailStorage = localStorage.getItem("email")
        const senhaStorage = localStorage.getItem("senha")
        if (!email) {
            alert('Preencha as informações corretamente')
        } else {
            if (!emailStorage || email !== emailStorage) {
                alert('Usuário não cadastrado')
            }
            else if (email === emailStorage) {
                if (senha !== senhaStorage) {
                    alert('Usuário ou senha incorretos')
                } else {
                    alert('Usuário autenticado')
                    setLogged(true);
                    navigate('/perfil')
                    setOpen(!open)
                }
            }
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
                    <Typography sx={[titleStyle, { fontWeight: 400 }]} id="modal-modal-title" variant="h6" component="h3">
                        Login
                    </Typography>
                    <Typography sx={titleStyle} id="modal-modal-title" variant="h4" component="h3">
                        Que bom que você voltou!
                    </Typography>
                    <Box sx={boxFlexHorizontalStyle}>
                        <Button onClick={e => handleSelect(e)} variant='outlined'>
                            Sou Colaborador
                        </Button>
                        <Button onClick={e => handleSelect(e)} variant='outlined'>
                            Sou Empresa
                        </Button>
                        <Button onClick={e => handleSelect(e)} variant='outlined'>
                            Sou Produtor
                        </Button>
                    </Box>
                    <Box sx={boxFlexVerticalStyle}>
                        <TextField fullWidth={true} onChange={e => setEmail(e.target.value)} value={email} id="outlined-search" label="Email" type="email" />
                        <TextField
                            fullWidth={true}
                            id="outlined-search"
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
                        <Button sx={buttonStyle} onClick={handleSubmit} variant="contained" >Continuar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal;