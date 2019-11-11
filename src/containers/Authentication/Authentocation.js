import React, { useContext } from 'react';
import AuthenticationContext from '../../Context/AuthenticationContext';
import User from '../../components/User/User';
import Login from '../../components/Login/Login';

const Authentication = () => {
	const auth = useContext(AuthenticationContext);
	const info = auth.user ? <User /> : <Login />
	return (
		<div>
			{info}
		</div>
	);
}

export default Authentication
