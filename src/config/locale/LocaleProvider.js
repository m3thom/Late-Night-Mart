import React, { Component } from 'react';
import { THPhrases } from "./th";
import { ENPhrases } from "./en";
import { I18n } from 'react-polyglot';
import ChangeLanguageContext from '../../Context/ChangeLanguageContext';

const localLocale = window.localStorage.getItem('locale')

class LocaleProvider extends Component {
	static contextType = ChangeLanguageContext
	state = {
		language: localLocale || navigator.language,
	}
	changeToTHHandler = () => {
		window.localStorage.setItem("locale", "th");
		this.setState({ language: "th" })
	}
	changeToENHandler = () => {
		window.localStorage.setItem("locale", "en-US");
		this.setState({ language: "en-US" })
	}
	render() {
		const { language } = this.state
		const languageVal = {
			language: this.state.language,
			changeToENLanguage: this.changeToENHandler,
			changeToTHLanguage: this.changeToTHHandler,
		}
		let messages = ENPhrases
		switch (language) {
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
				value={languageVal}
			>
				<I18n
					locale={language}
					messages={messages}
				>
					{this.props.children}
				</I18n>

			</ChangeLanguageContext.Provider>

		)
	};
};

export default LocaleProvider;
