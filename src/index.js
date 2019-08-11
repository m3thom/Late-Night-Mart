import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'; 
import * as serviceWorker from './serviceWorker';
import LocaleProvider from './config/locale/LocaleProvider';
import AuthenticationProvider from './containers/Authentication/AuthenticationProvider';

ReactDOM.render(
	<LocaleProvider>
		<AuthenticationProvider>
			<App />
		</AuthenticationProvider>
	</LocaleProvider>
	, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
