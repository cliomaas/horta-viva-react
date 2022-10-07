import { Box, Button, Modal, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { LoginContext } from '../../contexts/loginContext';

const LoginModal = (props) => {
    const { open, setOpen } = props
    const [email, setEmail] = React.useState('')
    const { setLogged } = React.useContext(LoginContext);

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
        const passwordStorage = localStorage.getItem("senha")

        const input = email
        if (!email) {
            alert('Preencha as informações corretamente')
        } else {
            if (!emailStorage) {
                alert('Usuário não cadastrado')
            }
            else {
                alert('Usuário autenticado')
                setLogged(true);
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
                        <TextField fullWidth={true} onChange={e => setEmail(e.target.value)} value={email} id="outlined-search" label="Email" type="text" />
                        <TextField fullWidth={true} id="outlined-search" label="Senha" type="password" />
                        <Button sx={buttonStyle} onClick={handleSubmit} variant="contained" >Continuar</Button>
                    </Box>
                </Box>
            </Modal>
        </>
    )
}

export default LoginModal;