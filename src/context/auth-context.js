import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    login: () => {} //initialized with default help auto-completion
});

export default authContext;