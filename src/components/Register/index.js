/* eslint-disable no-fallthrough */
/* eslint-disable eqeqeq */
import { Alert, Box, Button, FormControl, IconButton, InputAdornment, InputLabel, MenuItem, Modal, Select, TextField, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import { LoginContext } from '../../contexts/loginContext';
import { Visibility } from '@mui/icons-material';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import {
    createUserWithEmailAndPassword,
} from 'firebase/auth'
import { auth } from '../../firebase-config'
import axios from 'axios';
import { useForm } from '../../utils/useForm';


const valoresIniciais = {
    nome: '',
    nascimento: '',
    email: '',
    cpf: '',
    senha: ''
}

const RegisterModal = (props) => {

    axios.defaults.baseURL = 'https://horta-viva-backend.herokuapp.com/';
    const { open, setOpen } = props
    const [cpfInput, setCpfInput] = React.useState('');
    const [cpfValidate, setCpfValidate] = React.useState('')
    const [emptyFields, setEmptyFields] = React.useState(false)
    const [categoria, setCategoria] = React.useState('')
    const [errorCpf, setErrorCpf] = React.useState({})


    const { showPassword, setShowPassword } = React.useContext(LoginContext);
    const handleClickShowPassword = () => setShowPassword(!showPassword);



    const validate = (fieldValues = values) => {
        console.log(fieldValues)
        let temp = { ...errors }
        if ('nome' in fieldValues) {
            let nome = fieldValues.nome.trim();
            temp.nome = nome == '' ? '' : (/^[a-zA-Z]{4,}(?: [a-zA-Z]+){1,5}$/).test(nome) ? "" : "Por favor, preencha seu nome completo."
        } if ('email' in fieldValues)
            temp.email = (/^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i).test(fieldValues.email) ? "" : "Email inválido."
        if ('nascimento' in fieldValues) {
            let data = fieldValues.nascimento.replace(/\//g, "-");
            let data_array = data.split("-");
            temp.nascimento = (parseInt(data_array) < 1900 || parseInt(data_array) > 2022) ? "Data inválida" : ""
        }
        // if ('cpf' in fieldValues) {
        //     temp.cpf = fieldValues.cpf == '' ? '' : cpfValidate == 'valido' ? "" : "CPF inválido."
        // }
        if ('senha' in fieldValues)
            temp.senha = (/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/).test(fieldValues.senha) ? "" : fieldValues.senha == '' ? "" : "Senha deve conter no mínimo 6 caracteres, uma letra e um número."
        if ('senhaConfirma' in fieldValues)
            temp.senhaConfirma = values.senha == values.senhaConfirma ? "" : "As senhas não conferem."

        setErrors({
            ...temp
        })

        if (fieldValues == values)
            return Object.values(temp).every(x => x == "");
    }

    const {
        values,
        errors,
        setErrors,
        handleInputChange,
        resetForm
    } = useForm(valoresIniciais, true, validate, setEmptyFields);


    const cpfValidateField = () => {
        let temp = { ...errorCpf }
        temp.cpf = cpfInput == '' ? '' : cpfValidate == 'valido' ? '' : 'CPF inválido.'
        setErrorCpf({
            ...temp
        })
    }

    React.useEffect(() => {
        cpfValidateField();
    },)

    const handleCpfChange = e => {
        console.log('valor', e.target.value)
        setCpfInput(e.target.value);
        console.log('cpf salvo', cpfInput)
    }


    React.useEffect(() => {
        handleCpf(cpfInput)
    }, [cpfInput])



    const boxStyle = {
        width: { xs: '90%', md: '50%' },
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'background.paper',
        borderRadius: { xs: '10px', md: '40px' },
        boxShadow: 2,
        p: { xs: 2, md: 4 },
        overflowY: { xs: 'scroll', md: 'hidden' },
        height: { xs: '70%', md: 'auto' }
    };

    const boxFlexVerticalStyle = {
        mt: 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: { xs: '10px', md: 3 }

    };

    const titleStyle = {
        fontWeight: 700,
        textAlign: 'center',
        color: 'primary.main',
        fontSize: { xs: '20px' }
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
        resetForm()
        setCpfInput('')
    }

    const register = async () => {
        try {
            const user = await createUserWithEmailAndPassword(
                auth,
                values.email,
                values.senha
            );
            console.log(user);
        } catch (error) {
            console.log(error.message)
        }
    }


    const handleCpf = (cpf) => {
        cpf = cpf.replace(/\./g, '');
        cpf = cpf.replace('-', '');
        cpf = cpf.replace('/', '');
        axios.get('/cpf', {
            params: {
                cpf: cpf
            }
        }).then(async (response) => await setCpfValidate(() => response.data.response))
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        if (values.nome != '' & values.nascimento != '' & values.email != '' & categoria != '' & values.senha != '' & values.senhaConfirma != '') {
            if (validate()) {
                register();
                localStorage.setItem('nome', values.nome)
                localStorage.setItem('email', values.email)
                localStorage.setItem('categoria', categoria)
                alert('Cadastro realizado com sucesso!')
                setOpen(!open);
                resetForm();
                setEmptyFields(false)
            }
        } else {
            validate()
            setEmptyFields(true)
        }
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleButton}
                aria-labelledby="modal-login"
                aria-describedby="modal-description"
                sx={{ overflow: 'overlay' }}
            >
                <Box sx={boxStyle}>
                    <Alert sx={{ display: emptyFields ? 'flex' : 'none', mb: 3, borderRadius: '40px' }} severity='error'>Preencha todos os campos</Alert>
                    <CloseIcon onClick={handleButton} sx={{ cursor: 'pointer', position: { xs: 'absolute' } }} />
                    <Typography sx={titleStyle} id="modal-modal-title" variant="h4" component="h3">
                        Complete seu cadastro:
                    </Typography>

                    <form noValidate onSubmit={handleSubmit}>
                        <Box sx={boxFlexVerticalStyle}>
                            <TextField
                                fullWidth={true}
                                error={errors.nome}
                                helperText={errors.nome}
                                onChange={handleInputChange}
                                value={values.nome}
                                name="nome"
                                id="outlined-search"
                                label="Nome Completo"
                                type="text"
                                required
                            />
                            <TextField
                                fullWidth={true}
                                error={errors.nascimento}
                                helperText={errors.nascimento}
                                onChange={handleInputChange}
                                value={values.nascimento}
                                name="nascimento"
                                id="outlined-search"
                                label="Data de nascimento"
                                type="date"
                                InputLabelProps={{
                                    shrink: true
                                }}
                                required
                            />
                            <TextField
                                fullWidth={true}
                                error={errors.email}
                                helperText={errors.email}
                                onChange={handleInputChange}
                                value={values.email}
                                name="email"
                                id="outlined-search"
                                label="Email"
                                type="text"
                                required
                            />
                            <TextField
                                error={errorCpf.cpf}
                                helperText={errorCpf.cpf}
                                fullWidth={true}
                                onChange={handleCpfChange}
                                value={cpfInput}
                                id="outlined-search"
                                label="CPF"
                                name="cpf"
                                type="text"
                                required
                            />
                            <TextField
                                error={errors.senha}
                                helperText={errors.senha || "Senha deve conter no mínimo 6 caracteres, uma letra e um número."}
                                fullWidth={true}
                                id="outlined-search"
                                label='Senha'
                                name="senha"
                                type={showPassword ? "text" : "password"}
                                onChange={handleInputChange}
                                value={values.senha}
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
                                required
                            />
                            <TextField
                                error={errors.senhaConfirma}
                                helperText={errors.senhaConfirma}
                                fullWidth={true}
                                id="outlined-search"
                                label='Confirme sua senha'
                                name="senhaConfirma"
                                type={showPassword ? "text" : "password"}
                                onChange={handleInputChange}
                                value={values.senhaConfirma}
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
                                required
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
                            <Button sx={buttonStyle} type="submit" variant="contained" >Continuar</Button>
                        </Box>
                    </form>
                </Box>
            </Modal>
        </>
    )
}

export default RegisterModal;