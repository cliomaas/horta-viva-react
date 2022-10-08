import { Button, Card, CardContent, TextField, Typography } from "@mui/material";
import React from "react";
import FlexBox from "../FlexBox";


const ContactForm = () => {
    const [emailForm, setEmailForm] = React.useState('')
    const [nameForm, setNameForm] = React.useState('')
    const [telForm, setTelForm] = React.useState('')
    return (
        <Card variant="outlined" sx={{ border: '1px solid', borderColor: 'primary.main', borderRadius: '50px', p: 5 }}>
            <CardContent>
                <Typography color='primary.main' sx={{
                    fontSize: { xs: '16px', md: '32px' },
                    fontWeight: 500
                }}>
                    Preencha os dados abaixo, vamos iniciar uma conversa com você por meio desses dados de contato.
                </Typography>
                <FlexBox direction="column" gap={3} align="flex-end">
                    <TextField fullWidth={true} onChange={e => setEmailForm(e.target.value)} value={emailForm} id="outlined-search" label="Escreva seu email" type="email" />
                    <TextField fullWidth={true} onChange={e => setNameForm(e.target.value)} value={nameForm} id="outlined-search" label="Escreva seu nome completo" type="text" />
                    <TextField fullWidth={true} onChange={e => setTelForm(e.target.value)} value={telForm} label="Escreva seu telefone com ddd" type="tel" />
                    <Button sx={[{ backgroundColor: 'secondary.main', color: 'primary', fontWeight: '700', fontSize: { xs: '14px', md: '24px' }, borderRadius: '30px', width: '50%', mt: 3 }, {
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'primary.light'
                        }
                    }]}>Enviar</Button>
                </FlexBox>
            </CardContent>
        </Card >
    )
}

export default ContactForm;