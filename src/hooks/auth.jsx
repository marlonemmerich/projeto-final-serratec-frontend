import React, {
    createContext,
    useState,
    useContext,
} from 'react';

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [data] = useState(() => {
        const usuario = localStorage.getItem('@LOGIN:usuario');

        if (usuario) {
            return { usuario: JSON.parse(usuario) };
        }

        return {};
    });

    return (
        <AuthContext.Provider
            value={{ usuario: data.usuario }}
        >
            {children}
        </AuthContext.Provider>
    );
};

function useAuth() {
    const context = useContext(AuthContext);

    if (!context) {
        throw new Error('useAuth must be used within an AuthProvider');
    }

    return context;
}

export { AuthProvider, useAuth };
