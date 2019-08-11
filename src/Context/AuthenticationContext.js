import { createContext } from 'react';

const AuthenticationContext = createContext({
	user: null,
	isAuthFecthing: true,
	facebookAuth: () => { },
	googleAuth: () => { },
	anonymousAuth: () => { },
});

export default AuthenticationContext;