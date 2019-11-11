import React, { Component } from 'react';
import AuthenticationContext from '../../Context/AuthenticationContext';
import firebase, { FacebookProvider, GoogleProvider } from '../../config/database/firebase';

class AuthenticationProvider extends Component {
	state = {
		user: null,
		isAuthFetching: true,
	}
	componentDidMount(){
		this.authSateChangeHandler()
	}
	facebookAuthenticationHandler = () => {
		firebase.auth().signInWithPopup(FacebookProvider)
			.then((result) => this.signInSuccessHandler(result))
			.catch((error) => this.signInErrorHandler(error));
	}
	googleAuthenticationHandler = () => {
		firebase.auth().signInWithPopup(GoogleProvider)
			.then((result) => this.signInSuccessHandler(result))
			.catch((error) => this.signInErrorHandler(error));

	}
	anonymousAuthenticationHander = () => {
		firebase.auth().signInAnonymously()
			.catch((error) => this.signInErrorHandler(error));
	}
	signInSuccessHandler = (result) => {
		// var token = result.credential.accessToken;
		var user = result.user;
		this.setState({ user })
	}
	signInErrorHandler = (error) => {
		// Handle Errors here.
		var errorCode = error.code;
		var errorMessage = error.message;
		// The email of the user's account used.
		var email = error.email;
		// The firebase.auth.AuthCredential type that was used.
		var credential = error.credential;
		// ...
		console.log(
			`errorCode: ${errorCode},
			errorMessage: ${errorMessage}, 
			 email: ${email},
			 credential: ${credential}`
		);
	}
	signOutHandler = () => {
		firebase.auth().signOut().then(function () {
			// Sign-out successful.
		}).catch(function (error) {
			// An error happened.
		});
	}
	authSateChangeHandler = () => {
		firebase.auth().onAuthStateChanged(function (user) {
			if (user) {
				// User is signed in.
				var isAnonymous = user.isAnonymous;
				var uid = user.uid;
				// ...
				console.log(uid)
			} else {
				// User is signed out.
				// ...
			}
			// ...
		});

	}

	render() {
		const authenVal = {
			user: this.state.user,
			facebookAuth: this.facebookAuthenticationHandler,
			googleAuth: this.googleAuthenticationHandler,
			anonymousAuth: this.anonymousAuthenticationHander,
			signOut: this.signOutHandler,
		}
		return (
			<AuthenticationContext.Provider
				value={authenVal}
			>
				{this.props.children}
			</AuthenticationContext.Provider>
		);
	};
};

export default AuthenticationProvider;
