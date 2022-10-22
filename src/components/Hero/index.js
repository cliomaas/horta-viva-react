import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import Image from '../../Images/background.png';
import { ReactComponent as Saiba } from '../../Images/svg/Saiba.svg'

const Hero = () => {

    const styles = {

        boxStyle: {
            backgroundImage: `url(${Image})`,
            position: 'relative',
            top: -130,
            zIndex: -1000,
            width: '100vw',
            height: 'auto',
            backgroundPosition: '0% 100%',
            backgroundSize: 'cover',
            pt: { xs: 20, md: 40 },
            backgroundRepeat: 'no-repeat',
            pb: 8,
            px: { xs: '20px', md: '210px' },
            boxSizing: 'border-box',
            marginBottom: -13
        },
        titleStyle: {
            fontWeight: 800,
            color: 'white',
            fontSize: {
                xs: '24px',
                md: '60px'
            },
            pb: 3,
        },
        dividerStyle: {
            borderColor: 'white',
            maxWidth: '50%',
            margin: '0 auto',
            mb: 3
        },
        description: {
            color: 'white'
        }
    }

    return (
        <Box sx={styles.boxStyle}>
            <Typography sx={styles.titleStyle} variant="h3" component="h3">Como cultivar mais saúde e sustentabilidade para seus colaboradores?</Typography>
            <Divider sx={styles.dividerStyle} variant="middle" />
            <Typography sx={styles.description} variant="h6" component="h6">Nós da Horta-Viva temos a solução para introduzir a sua empresa na cultura ESG e desenvolver formas de incentivar seus colaboradores!</Typography>
            <Saiba style={{ marginTop: '40px' }} />
        </Box>
    )
}

export default Hero;