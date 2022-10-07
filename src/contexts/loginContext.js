import React from 'react';

const LoginContext = React.createContext();

function LoginProvider({ children }) {
    const [logged, setLogged] = React.useState(false);

    return (
        <LoginContext.Provider value={({ logged, setLogged })}>
            {children}
        </LoginContext.Provider>
    )
}

export { LoginContext, LoginProvider };