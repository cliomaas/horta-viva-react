import { Box } from '@mui/material';
import React from 'react';
import LoginModal from '../../components/Login';
import ResponsiveMenu from '../../components/Nav';
import Header from '../../components/Header';

const Home = () => {
    const [open, setOpen] = React.useState(false)

    const handleClose = () => {
        setOpen(!open)
    }


    return (
        <div>
            <ResponsiveMenu handleClose={handleClose} />
            <LoginModal handleClose={handleClose} open={open} />
            <Header></Header>
        </ div >
    );
};

export default Home;