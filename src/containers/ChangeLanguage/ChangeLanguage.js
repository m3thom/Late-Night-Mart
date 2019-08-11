import React, { Component } from 'react';
import ChangeLanguageContext from '../../Context/ChangeLanguageContext';

class ChangeLanguage extends Component {
	static contextType = ChangeLanguageContext
	render() {
		return (
			<div>
				<button onClick={this.context.changeToTHLanguage} disabled={this.context.language === 'th'}>TH</button>
				<button onClick={this.context.changeToENLanguage} disabled={this.context.language === 'en-US'}>EN</button>
			</div>
		);
	};
};

export default ChangeLanguage
