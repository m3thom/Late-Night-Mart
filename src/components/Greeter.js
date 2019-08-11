import React from 'react';
import { translate } from 'react-polyglot';

const Greeter = ({ user, t }) => (
	<h3>{t("welcome.m", { user })}</h3>
);

export default translate()(Greeter);
