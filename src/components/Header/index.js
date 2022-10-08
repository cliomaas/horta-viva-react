import React from "react";
import LoginModal from "../Login";
import ResponsiveMenu from "../Nav";
import RegisterModal from "../Register";

const Header = () => {
    const [open, setOpen] = React.useState(false)
    const [openRegister, setOpenRegister] = React.useState(false)

    const handleCloseLogin = (page) => {
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
            <ResponsiveMenu handleCloseLogin={handleCloseLogin} handleCloseRegister={handleCloseRegister} />
            <LoginModal handleClose={handleCloseLogin} open={open} setOpen={setOpen} />
            <RegisterModal handleClose={handleCloseRegister} open={openRegister} setOpen={setOpenRegister} />
        </>
    )
}
export default Header;