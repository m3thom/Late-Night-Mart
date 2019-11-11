import { createContext } from 'react';

const ChangeLanguageContext = createContext({
	language: '',
	changeToTHLanguage: () => { },
	changeToENLanguage: () => { },
});

export default ChangeLanguageContext;
