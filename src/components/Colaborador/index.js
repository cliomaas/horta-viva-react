import { Avatar, Card, CardContent, LinearProgress, Rating, Typography } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
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
import CardPedido from "../CardPedido";

const Colaborador = () => {
    const { name } = React.useContext(LoginContext);
    const content = [{
        image: '01',
        title: 'Cesta Individual',
        description: 'Frutas',
        price: 'R$ 29,00'
    },
    {
        image: '02',
        title: 'Cesta Casal',
        description: 'Mista',
        price: 'R$ 59,00'
    },
    {
        image: '03',
        title: 'Cesta Família',
        description: 'Mista',
        price: 'R$ 79,00'
    }
    ]
    return (
        <div>
            {/* DISPLAY DESKTOP */}
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
            <Box sx={{
                px: '210px', pb: 4, display: { xs: 'none', md: 'flex' }, flexDirection: 'column'
            }}
            >
                <Typography variant='h6' align='left' color='primary.main' sx={{ pb: 3 }} component='h6'>Seus Pedidos:</Typography>
                <FlexBox direction='column'>
                    {content.map((c) => (
                        <CardPedido image={c.image} title={c.title} description={c.description} price={c.price} />
                    ))}
                </FlexBox>
            </Box>
            {/* DISPLAY MOBILE */}
            <Box sx={{ pt: 3, px: '30px', display: { xs: 'flex', md: 'none' }, flexDirection: 'column' }}>
                <FlexBox gap={3}>
                    <Avatar sx={{ width: 135, height: 135, fontSize: 50 }} alt={name} src="/static/images/avatar/2.jpg" />
                    <FlexBox direction="column" pt={3}>
                        <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600, mb: 2 }}>
                            Olá, {name}
                        </Typography>
                        <Rating
                            sx={[{
                                '& .MuiRating-iconFilled': {
                                    color: 'primary.highlight',
                                },
                                '& .MuiRating-iconEmpty': {
                                    color: 'primary.light',
                                }
                            }, { fontSize: '30px' }]}
                            name="simple-controlled"
                            value={4}
                            readOnly
                            size="large"
                            emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                        />
                    </FlexBox>
                </FlexBox>
                <Typography variant='h5' align="left" component='h5' color="primary.main" sx={{ fontWeight: 700, mb: 2 }}>
                    Bio
                </Typography>
                <Card variant="outlined" sx={{ border: '1px solid', borderColor: 'primary.main' }}>
                    <CardContent>
                        <Typography color='primary.main' variant="h6" component="p" sx={{ fontStyle: 'italic', fontWeight: 500 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et</Typography>
                    </CardContent>
                </Card>
                <FlexBox direction='column' pt={4}>
                    <Typography variant='h4' align="left" component='h4' color="primary.main" sx={{ fontWeight: 600 }}>
                        Seus dados
                    </Typography>
                    <FlexBox wrap='wrap' gap={3} pb={5}>
                        <FlexBox align='center' gap={'3px'}>
                            <SvgLocalizacao width={30} height={30} />
                            <Typography sx={{ fontFamily: 'Montserrat', textDecoration: 'underline', fontWeight: 600 }} variant='p' color='primary.main' component='a'>30456-865</Typography>
                        </FlexBox>
                        <FlexBox align='center' gap={'3px'}>
                            <SvgEscrita width={30} height={30} />
                            <Typography sx={{ fontFamily: 'Montserrat', textDecoration: 'underline', fontWeight: 600 }} variant='p' color='primary.main' component='a'>Editar Cadastro</Typography>
                        </FlexBox>
                        <FlexBox align='center' gap={'3px'}>
                            <SvgEstrela width={30} height={30} />
                            <Typography sx={{ fontFamily: 'Montserrat', textDecoration: 'underline', fontWeight: 600 }} variant='p' color='primary.main' component='a'>Avaliações</Typography>
                        </FlexBox>
                        <FlexBox align='center' gap={'3px'}>
                            <SvgCoracao width={30} height={30} />
                            <Typography sx={{ fontFamily: 'Montserrat', textDecoration: 'underline', fontWeight: 600 }} variant='p' color='primary.main' component='a'>Favoritos</Typography>
                        </FlexBox>
                        <FlexBox align='center' gap={'3px'}>
                            <SvgTelefone width={30} height={30} />
                            <Typography sx={{ fontFamily: 'Montserrat', textDecoration: 'underline', fontWeight: 600 }} variant='p' color='primary.main' component='a'>Atendimento</Typography>
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </Box>
        </div >
    )
}

export default Colaborador;