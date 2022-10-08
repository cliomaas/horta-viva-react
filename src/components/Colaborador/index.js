import { Avatar, Typography } from "@mui/material";
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
                        <Typography variant='h4' component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                            Olá, {name}
                        </Typography>
                        <Typography variant='h4' component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                            Analista de RH
                        </Typography>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
            <FlexBox>

            </FlexBox>
        </Box >
    )
}

export default Colaborador;