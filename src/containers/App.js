import React from 'react';
import '../asset/stylesheets/App.css';
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Home_path, About_path, Contact_path } from '../config/path';
import Contact from '../components/Contract/Contact';
import Home from '../components/Home/Home';
import About from '../components/About/About';
import NoMatch from '../components/NoMatch/NoMatch';
import Greeter from '../components/Greeter';
import ChangeLanguage from './ChangeLanguage/ChangeLanguage';
// import ChangeLanguageContext from '../Context/ChangeLanguageContext'
import AuthenticationContext from '../Context/AuthenticationContext';

class App extends React.PureComponent {
  // static contextType = ChangeLanguageContext
  static contextType = AuthenticationContext
  state = {
    userName: 'Unknow'
  }
  render() {
    const user = 'thuan'
    return (
      <Router>
        <div>
          <Link to={Home_path}>
            Home
					</Link>/
          <Link to={About_path}>
            About
					</Link>/
          <Link to={Contact_path}>
            Contact
					</Link>/
          <ChangeLanguage />

          <Greeter
            user={user}
          />
          <button onClick={this.context.facebookAuth}>{this.context.user ? this.context.user : 'login'}</button>
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

export default App;
