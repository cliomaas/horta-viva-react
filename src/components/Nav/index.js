import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { LoginContext } from '../../contexts/loginContext';
import { useNavigate } from 'react-router-dom';


const pages = ['Loja', 'Como funciona', 'Login'];
const settings = ['Meu Perfil', 'Logout'];


const ResponsiveMenu = ({ handleCloseLogin, handleCloseRegister }) => {
    const { logged, setLogged, name } = React.useContext(LoginContext);
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [anchorElLogin, setAnchorElLogin] = React.useState(null);
    const navigate = useNavigate();
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };
    const handleOpenLoginMenu = (event) => {
        setAnchorElLogin(event.currentTarget);
    };

    const handleLogout = (setting) => {
        if (setting === 'Logout') {
            setLogged(false)
            navigate('/')
        }
    }
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const handleCloseLoginMenu = () => {
        setAnchorElLogin(null);
    };

    return (
        < AppBar position="static" color={'header'} >
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    {/* MENU MOBILE */}
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography color={'primary'} onClick={() => handleCloseLogin(page)} textAlign="center" sx={{ fontWeight: '600', textTransform: 'uppercase' }}>{page}</Typography>
                                </MenuItem>
                            ))}
                            <MenuItem>
                                <Button onClick={(e) => handleCloseRegister(e)} sx={{ fontWeight: '600', backgroundColor: 'secondary.main' }}>Cadastre-se</Button>
                            </MenuItem>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 900,
                            color: 'primary.main',
                            textDecoration: 'none',
                            flexGrow: '1'
                        }}
                    >
                        HORTA-VIVA.
                    </Typography>

                    {/* MENU DESKTOP */}
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 1,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 900,
                            color: 'primary.main',
                            textDecoration: 'none',
                            marginLeft: '210px',
                            fontSize: '40px'
                        }}
                    >
                        HORTA-VIVA.
                    </Typography>
                    <Box sx={[{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, marginLeft: '100px' }]}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleCloseLogin}
                                sx={[{ my: 2, color: 'primary', display: 'block', fontWeight: '600' }, {
                                    '&:hover': {
                                        textDecoration: 'underline'
                                    }
                                }]}
                            >
                                {page}
                            </Button>
                        ))}
                        <MenuItem sx={[{
                            '&:hover': {
                                backgroundColor: 'header.main'
                            }
                        }]}>
                            <Button onClick={handleCloseRegister} sx={[{ backgroundColor: 'secondary.main', color: 'primary', fontWeight: '600', borderRadius: '30px', padding: '5px 50px' }, {
                                '&:hover': {
                                    backgroundColor: 'primary.main',
                                    color: 'primary.light'
                                }
                            }]}>Cadastre-se</Button>
                        </MenuItem>
                        <MenuItem sx={[{
                            '&:hover': {
                                backgroundColor: 'header.main'
                            }
                        }]}>
                            <ShoppingCartOutlinedIcon color='primary' />
                        </MenuItem>
                    </Box>

                    {/* PROFILE */}
                    <Box sx={{ flexGrow: 0, marginRight: { md: '210px' } }}>
                        {logged ? <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                <Avatar alt={name} src="/static/images/avatar/2.jpg" />
                            </IconButton>
                        </Tooltip> : <Avatar onClick={handleOpenLoginMenu}><AccountCircleIcon /></Avatar>}
                        <Menu
                            sx={{ mt: '45px' }}
                            anchorEl={anchorElLogin}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            onClose={handleCloseLoginMenu}
                            open={Boolean(anchorElLogin)}
                        >
                            <MenuItem onClick={handleCloseNavMenu}>
                                <Typography color={'primary'} textAlign="center" sx={{ fontWeight: '600', textTransform: 'uppercase' }}>Login</Typography>
                            </MenuItem>
                            <MenuItem>
                                <Button sx={{ fontWeight: '600', backgroundColor: 'secondary.main' }}>Cadastre-se</Button>
                            </MenuItem>
                        </Menu>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography onClick={() => handleLogout(setting)} textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </ AppBar >
    );
};
export default ResponsiveMenu;
