import React, { useContext } from 'react';
import AuthenticationContext from '../../Context/AuthenticationContext';

const Login = () => {
	const authContext = useContext(AuthenticationContext)
	return (
		<div>
			<button onClick={authContext.facebookAuth}>Facebook</button>
			<button onClick={authContext.googleAuth}>Google</button>
			<button>Anno</button>
			<button onClick={authContext.signOut}>Sign out</button>
		</div>
	)
};

export default Login
