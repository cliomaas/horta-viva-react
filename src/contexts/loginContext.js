import React from 'react';

const LoginContext = React.createContext();

function LoginProvider({ children }) {
    const [logged, setLogged] = React.useState(false);
    const name = localStorage.getItem('nome');
    return (
        <LoginContext.Provider value={({ logged, setLogged, name })}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider };