import { Avatar, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LoginContext } from "../../contexts/loginContext";
import FlexBox from "../FlexBox";

const Colaborador = () => {
    const { logged, setLogged, name } = React.useContext(LoginContext);
    return (
        <Box sx={{ padding: '210px', py: 15, display: { xs: 'none', md: 'flex' } }}>
            <FlexBox>
                <FlexBox>
                    <Avatar sx={{ width: 230, height: 230, fontSize: 80 }} alt={name} src="/static/images/avatar/2.jpg" />
                    <FlexBox direction='column'>
                        <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                            Olá, {name}
                        </Typography>
                        <Typography variant='p' component='p' align="left" color="primary.main" sx={{ fontWeight: 600 }}>
                            Analista de RH
                        </Typography>
                        <FlexBox direction='column'>
                            <FlexBox>
                                <Typography variant='h6' color='primary.main' component='h6'>Carteira</Typography>
                                <Typography variant='h6' color='primary.main' component='h6' sx={{ fontWeight: 600 }}>R$ 350/800</Typography>
                            </FlexBox>
                            <LinearProgress variant="buffer" value={65} />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <FlexBox>
                <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                    Seus dados
                </Typography>
            </FlexBox>
        </Box >
    )
}

export default Colaborador;