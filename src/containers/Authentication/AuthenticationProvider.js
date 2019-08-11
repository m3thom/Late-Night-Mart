import React, { Component } from 'react';
import AuthenticationContext from '../../Context/AuthenticationContext';

class AuthenticationProvider extends Component {
	state = {
		user: null,
		isAuthFetching: true,
	}
	facebookAuthenticationHandler = () => {
		this.setState({user: 'facebook'})
		console.log('hi')
	}
	googleAuthenticationHandler = () => {
		this.setState({ user: 'google' })
	}
	anonymousAuthenticationHander = () => {
		this.setState({ user: 'ano' })
	}
	render() {
		return (
			<AuthenticationContext.Provider
				value={{
					user: this.state.user,
					facebookAuth: this.facebookAuthenticationHandler,
					googleAuth: this.googleAuthenticationHandler,
					anonymousAuth: this.anonymousAuthenticationHander,
				}}
			>
				{this.props.children}
			</AuthenticationContext.Provider>
		);
	};
};

export default AuthenticationProvider;
