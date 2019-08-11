import React, { Component } from 'react';
import { THPhrases } from "./th";
import { ENPhrases } from "./en";
import { I18n } from 'react-polyglot';
import ChangeLanguageContext from '../../Context/ChangeLanguageContext';

class LocaleProvider extends Component {
	static contextType = ChangeLanguageContext
	state = {
		language: 'en-US',
	}
	changeToTHHandler = () => {
		window.localStorage.setItem("locale", "th");
		this.setState({ language: "th" })
	}
	changeToENHandler = () => {
		window.localStorage.setItem("locale", "en-Us");
		this.setState({ language: "en-US" })
	}
	render() {
		const localLocale = window.localStorage.getItem('locale')
		const locale = localLocale || navigator.language || 'en-US'
		let messages = ENPhrases
		switch (locale) {
			case 'th':
				messages = THPhrases
				break;
			case 'en-US':
				messages = ENPhrases
				break;
			default:
				break;
		}
		return (
			<ChangeLanguageContext.Provider
				value={{
					language: this.state.language,
					changeToENLanguage: this.changeToENHandler,
					changeToTHLanguage: this.changeToTHHandler,
				}}
			>
				<I18n
					locale={locale}
					messages={messages}
				>

					{this.props.children}
				</I18n>

			</ChangeLanguageContext.Provider>

		)
	};
};

export default LocaleProvider;