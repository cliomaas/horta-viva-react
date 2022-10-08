import React from "react";
import Colaborador from "../../components/Colaborador";
import Empresa from "../../components/Empresa";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Produtor from "../../components/Produtor";

const Perfil = () => {

    const categoria = localStorage.getItem('categoria')
    const conditionalRendering = () => {
        switch (categoria) {
            case 'colaborador':
                return <Colaborador />;
                break;
            case 'empresa':
                return <Empresa />;
                break;
            case 'produtor':
                return <Produtor />;
                break;
            default:
                return null;
        }
    }
    return (
        <>
            <Header />
            {conditionalRendering()}
            <Footer />
        </>
    )
}

export default Perfil;