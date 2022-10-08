import { Avatar, LinearProgress, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { LoginContext } from "../../contexts/loginContext";
import FlexBox from "../FlexBox";
import { ReactComponent as Graph } from '../../Images/svg/Graph.svg'
import SvgLocalizacao from "../../Images/components/Localizacao";
import SvgEscrita from "../../Images/components/Escrita";
import SvgEstrela from "../../Images/components/Estrela";
import SvgCoracao from "../../Images/components/Coracao";
import SvgTelefone from "../../Images/components/Telefone";

const Colaborador = () => {
    const { name } = React.useContext(LoginContext);
    return (
        <Box sx={{ padding: '210px', py: 15, display: { xs: 'none', md: 'flex' }, gap: { md: 20, xl: 40 } }}>
            <FlexBox direction='column' gap={8}>
                <FlexBox gap={4}>
                    <Avatar sx={{ width: 230, height: 230, fontSize: 80 }} alt={name} src="/static/images/avatar/2.jpg" />
                    <FlexBox direction='column' pt={4}>
                        <FlexBox direction='column'>
                            <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                                Olá, {name}
                            </Typography>
                            <Typography variant='p' component='p' align="left" color="primary.main" sx={{ fontWeight: 600 }}>
                                Analista de RH
                            </Typography>
                        </FlexBox>
                        <FlexBox direction='column'>
                            <FlexBox pb={2} width='360px' justify='space-between'>
                                <Typography variant='h6' color='primary.main' component='h6'>Carteira</Typography>
                                <Typography variant='h6' color='primary.main' component='h6' sx={{ fontWeight: 600 }}>R$ 350/800</Typography>
                            </FlexBox>
                            <LinearProgress sx={{ height: 8 }} variant="buffer" value={65} />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <FlexBox direction='column' align='flex-start'>
                    <Typography variant='h6' color='primary.main' component='h6'>Consumo</Typography>
                    <Graph></Graph>
                </FlexBox>
            </FlexBox>
            <FlexBox direction='column' pt={4}>
                <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                    Seus dados
                </Typography>
                <FlexBox wrap='wrap' gap={8}>
                    <FlexBox align='center'>
                        <SvgLocalizacao width={84} height={84} />
                        <Typography sx={{ textDecoration: 'underline' }} variant='h6' color='primary.main' component='a'>30456-865</Typography>
                    </FlexBox>
                    <FlexBox align='center'>
                        <SvgEscrita width={84} height={84} />
                        <Typography sx={{ textDecoration: 'underline' }} variant='h6' color='primary.main' component='a'>Editar Cadastro</Typography>
                    </FlexBox>
                    <FlexBox align='center'>
                        <SvgEstrela width={84} height={84} />
                        <Typography sx={{ textDecoration: 'underline' }} variant='h6' color='primary.main' component='a'>Avaliações</Typography>
                    </FlexBox>
                    <FlexBox align='center'>
                        <SvgCoracao width={84} height={84} />
                        <Typography sx={{ textDecoration: 'underline' }} variant='h6' color='primary.main' component='a'>Favoritos</Typography>
                    </FlexBox>
                    <FlexBox align='center'>
                        <SvgTelefone width={84} height={84} />
                        <Typography sx={{ textDecoration: 'underline' }} variant='h6' color='primary.main' component='a'>Atendimento</Typography>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        </Box >
    )
}

export default Colaborador;