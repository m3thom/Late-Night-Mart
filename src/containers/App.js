import React from 'react';
import '../asset/stylesheets/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home_path, About_path, Contact_path } from '../config/path';
import Contact from '../components/Contact/Contact';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NoMatch from '../components/NoMatch/NoMatch';
import Greeter from '../components/Greeter/Greeter';
import ChangeLanguage from './ChangeLanguage/ChangeLanguage';
// import ChangeLanguageContext from '../Context/ChangeLanguageContext'
import { translate } from 'react-polyglot';
import Authentication from './Authentication/Authentocation';

class App extends React.PureComponent {
  // static contextType = ChangeLanguageContext
  state = {
    userName: 'Unknow'
  }
  render() {
    const { t } = this.props
    const user = 'thuan'
    return (
      <Router>
        <div>
          <Link to={Home_path}>
            {t("home")}
          </Link>/
          <Link to={About_path}>
            {t("about")}
          </Link>/
          <Link to={Contact_path}>
            {t("contact")}
          </Link>/
          <Authentication />
          <ChangeLanguage />

          <Greeter
            user={user}
          />
          <Switch>
            <Route exact path={Home_path} component={Home} />
            <Route path={About_path} component={About} />
            <Route path={Contact_path} component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>

    )
  };
}

export default translate()(App);
