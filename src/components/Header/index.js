import React from "react";
import { useNavigate } from "react-router-dom";
import CartModal from "../CartModal";
import LoginModal from "../Login";
import ResponsiveMenu from "../Nav";
import RegisterModal from "../Register";

const Header = () => {
    const [open, setOpen] = React.useState(false)
    const [openCart, setOpenCart] = React.useState(false)
    const [openRegister, setOpenRegister] = React.useState(false)
    const navigate = useNavigate();

    const handleCartOpen = () => {
        setOpenCart(!openCart);
    }
    const handleNavClick = (page) => {
        switch (page.target.innerText) {
            case 'Login':
                setOpen(!open);
                break;
            case 'Loja':
                navigate('/loja');
                break;
            default:
                return null;

        }
        if (page.target.innerText === 'Login') {
            setOpen(!open)
        }
    }
    const handleCloseRegister = (page) => {
        if (page.target.innerText === 'Cadastre-se') {
            setOpenRegister(!openRegister)
        }
    }
    return (
        <>
            <ResponsiveMenu handleNavClick={handleNavClick} handleCloseRegister={handleCloseRegister} handleOpenCart={handleCartOpen} />
            <LoginModal handleClose={handleNavClick} open={open} setOpen={setOpen} />
            <RegisterModal handleClose={handleCloseRegister} open={openRegister} setOpen={setOpenRegister} />
            <CartModal open={openCart} setOpen={setOpenCart}></CartModal>
        </>
    )
}
export default Header;