import { createContext } from 'react';

const ChangeLanguageContext = createContext({
	language: 'en-US',
	changeToTHLanguage: () => { },
	changeToENLanguage: () => { },
});

export default ChangeLanguageContext;
