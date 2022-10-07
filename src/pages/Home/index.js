import { Box } from '@mui/material';
import React from 'react';
import LoginModal from '../../components/Login';
import ResponsiveMenu from '../../components/Nav';
import Header from '../../components/Header';
import CardInfo from '../../components/Card';
import { useTheme } from '@mui/material';
import FlexBox from '../../components/FlexBox';
const Home = () => {
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(!open)
    }

    console.log(useTheme())
    return (
        <div>
            <div>
                <ResponsiveMenu handleClose={handleClose} />
                <LoginModal handleClose={handleClose} open={open} />
                <Header></Header>
                <FlexBox direction={{ md: 'row', xs: 'column' }} justify='space-around' padding={{ xd: 'auto', md: '210px' }}>

                    <CardInfo margin={{ xs: 80, md: 85 }} number='01'
                        description="Cadastre-se em nossa plataforma e comece a desfrutar de nossos benefícios." />
                    <CardInfo margin={{ xs: 3, md: 85 }} number='02'
                        description="Indique para seus colaboradores as melhores formas de consumo saudável e sustentável."
                    />
                    <CardInfo margin={{ xs: 3, md: 85 }} number='03'
                        description="Ajude famílias produtoras de alimentos organicos promovendo consumo sustentável."
                    />
                </FlexBox>
            </div>
        </ div >
    );
};

export default Home;