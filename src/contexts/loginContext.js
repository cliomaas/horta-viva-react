import React from 'react';

const LoginContext = React.createContext();

function LoginProvider({ children }) {
    const [logged, setLogged] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false)
    const name = localStorage.getItem('nome');
    return (
        <LoginContext.Provider value={({ logged, setLogged, name, showPassword, setShowPassword })}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider };