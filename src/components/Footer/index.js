import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import FlexBox from "../FlexBox";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp';

const Footer = () => {
    const areas = [
        'Sobre nós', 'Contato', 'Perguntas Frequentes',
        'Seja uma empresa ESG', 'Seja produtor parceiro', 'Seja proprietário parceiro',
        'Termos e condições de uso', 'Política de privacidade',
        'WhatsApp: (11)99999-9999', 'meajuda@hortaviva.com.br', 'Atendimento das 9h às 18h'
    ]
    return (
        <>
            <Box sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center', backgroundColor: 'primary.main', px: '210px', py: '35px', gap: { md: 5, xl: 30 } }}>
                <FlexBox direction="column" align="flex-start">
                    <Typography variant="h4" component="h5" align="left" color="white" sx={{ fontWeight: 700, mb: 2 }}>
                        HORTA-VIVA.
                    </Typography>
                    {areas.slice(0, 3).map((area) => (
                        <Typography variant="h6" key={area} component="h6" align="left" color="white" sx={{ fontWeight: 500 }}>
                            {area}
                        </Typography>
                    ))}
                </FlexBox>
                <FlexBox direction='column' justify="space-between" gap={3}>
                    <FlexBox direction="column" align="flex-start">
                        <Typography variant="h4" component="h5" color="white" align="left" sx={{ fontWeight: 700, mb: 2 }}>
                            Vamos mudar o mundo?
                        </Typography>
                        {areas.slice(3, 6).map((area) => (
                            <Typography key={area} variant="h6" component="h6" align="left" color="white" sx={{ fontWeight: 500 }}>
                                {area}
                            </Typography>
                        ))}
                    </FlexBox>
                    <FlexBox direction="column" align="flex-start">
                        <Typography variant="h4" component="h5" align="left" color="white" sx={{ fontWeight: 700, mb: 2 }}>
                            Redes Sociais
                        </Typography>
                        <FlexBox gap={5}>
                            <FacebookIcon color="whiteFooter" />
                            <InstagramIcon color="whiteFooter" />
                            <LinkedInIcon color="whiteFooter" />
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <FlexBox direction='column' gap={3} justify="space-between">
                    <FlexBox direction="column" align="flex-start">
                        <Typography variant="h4" component="h5" align="left" color="white" sx={{ fontWeight: 700, mb: 2 }}>
                            Transparência
                        </Typography>
                        {areas.slice(6, 8).map((area) => (
                            <Typography key={area} variant="h6" component="h6" color="white" sx={{ fontWeight: 500 }}>
                                {area}
                            </Typography>
                        ))}
                    </FlexBox>
                    <FlexBox direction="column" align="flex-start">
                        <Typography variant="h4" component="h5" align="left" color="white" sx={{ fontWeight: 700, mb: 2 }}>
                            Fale com a gente
                        </Typography>
                        {areas.slice(8,).map((area) => (
                            <Typography variant="h6" key={area} component="h6" align="left" color="white" sx={{ fontWeight: 500 }}>
                                {area}
                            </Typography>
                        ))}
                    </FlexBox>
                </FlexBox>
            </Box >
            <Box sx={{ display: { xs: 'flex', md: 'none' }, flexDirection: 'column', backgroundColor: 'primary.main', justifyContent: 'center', gap: 1, p: '30px' }}>
                <Typography variant="h5" sx={{ color: 'white', fontWeight: 700, }}>
                    HORTA-VIVA.
                </Typography>
                <Button sx={{ backgroundColor: 'transparent', color: 'white', borderRadius: '0' }} endIcon={<ArrowDropDownSharpIcon />}>
                    Vamos mudar o mundo?
                </Button>
                <Button sx={{ backgroundColor: 'transparent', color: 'white', borderRadius: '0' }} endIcon={<ArrowDropDownSharpIcon />}>
                    Transparência
                </Button>
                <Button sx={{ backgroundColor: 'transparent', color: 'white', borderRadius: '0' }} endIcon={<ArrowDropDownSharpIcon />}>
                    Fale com a gente
                </Button>
                <FlexBox justify="center" gap={2}>
                    <FacebookIcon color="whiteFooter" />
                    <InstagramIcon color="whiteFooter" />
                    <LinkedInIcon color="whiteFooter" />
                </FlexBox>
                {/* <Menu

                >
                    <MenuItem>
                    </MenuItem>
                </Menu> */}
            </Box>

        </>
    )
}

export default Footer