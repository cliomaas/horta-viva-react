import { Button, Divider, Typography } from '@mui/material';
import React from 'react';
import Hero from '../../components/Hero';
import CardInfo from '../../components/Card';
import FlexBox from '../../components/FlexBox';
import ContactForm from '../../components/Contact';
import SvgCiclico from '../../Images/components/Ciclico'
import Footer from '../../components/Footer';
import Header from '../../components/Header';
const Home = () => {

    return (
        <div>
            <Header />
            <Hero />
            {/* CARDS INFORMATIVOS */}
            <FlexBox direction={{ md: 'row', xs: 'column' }} justify='space-around' padding={{ xs: 'auto', md: '210px' }}>

                <CardInfo margin={{ xs: 80, md: 85 }} number='01'
                    description="Cadastre-se em nossa plataforma e comece a desfrutar de nossos benefícios." />
                <CardInfo margin={{ xs: 3, md: 85 }} number='02'
                    description="Indique para seus colaboradores as melhores formas de consumo saudável e sustentável."
                />
                <CardInfo margin={{ xs: 3, md: 85 }} number='03'
                    description="Ajude famílias produtoras de alimentos organicos promovendo consumo sustentável."
                />
            </FlexBox>
            {/* TEXTO INTERMEDIARIO */}
            <FlexBox direction={{ md: 'row', xs: 'column-reverse' }} align='center' background='primary.light' padding={{ xs: '30px', md: '210px' }} py={8}>
                <FlexBox direction='column' sx={{ flexGrow: 2 }} padding={{}} align='center'>
                    <Typography align="left" variant='h2' component='h2' color='primary.main' sx={{ fontWeight: 800, maxWidth: '700px', fontSize: { xs: '24px', md: '60px' }, textAlign: { xs: 'center', md: 'left' } }}>
                        Uma forma de deixar a sociedade mais colorida e saborosa.
                        <Divider orientation='horizontal' color="primary.main" sx={{
                            borderColor: 'primary.main',
                            margin: '0 auto',
                            mb: 3,
                            mt: 2
                        }}></Divider>
                    </Typography>
                    < Typography variant="h4" component="h4" align="left" color='primary.main' sx={{
                        fontWeight: 500,
                        fontSize: { xs: '14px', md: '32px' }, textAlign: { xs: 'center', md: 'left' }
                    }}>
                        Veja algumas opções que temos prontas para seus colaboradores.
                    </Typography>
                    <Button sx={[{ backgroundColor: 'secondary.main', color: 'primary', fontWeight: '700', fontSize: { xs: '14px', md: '24px' }, borderRadius: '30px', width: '50%', mt: 3 }, {
                        '&:hover': {
                            backgroundColor: 'primary.main',
                            color: 'primary.light'
                        }
                    }]}>Veja Mais</Button>
                </FlexBox>
                <img alt="cesta de frutas" src={require('../../Images/fruits.png')} width={795} height={'auto'} style={{ width: '50%' }} />

            </FlexBox>
            {/* CONTATO */}
            <FlexBox direction={{ md: 'row', xs: 'column' }} justify='space-around' align='center' padding={{ xs: '30px', md: '210px' }} py={8} gap={2}>
                <FlexBox direction='column' align='center'>
                    <SvgCiclico width={200} height={200} />
                    <Typography color='primary.main' sx={{ fontWeight: 800, fontSize: { xs: '24px', md: '60px' }, mb: 3 }}>
                        Interessado nessa transformação?
                    </Typography>
                </FlexBox>
                <ContactForm />
            </FlexBox>
            <Footer />
        </ div >
    );
};

export default Home;