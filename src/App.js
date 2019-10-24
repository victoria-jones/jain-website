import React, { Component } from 'react';
import './css/styles.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import ContactPage from './main/contact';
import BookPage from './main/book';
import Error404 from './main/404error';
import Nav from './nav/navigation';
import SocialNav from './nav/socialNav';
import Footer from './footer/footer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ScrollToTop from './js/scrolltotop';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Router>
        <ScrollToTop />
        <header className="App-header">
          <Link to="/"><h1>SJ</h1><img src="images/icons/logo.svg" alt ="Sarah Jain leaf logo" title="Sarah Jain logo"/></Link>
          <Nav />
          <SocialNav addClass="socialNavTop" />
        </header>

            <main>
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about_me" component={AboutPage} />
                  <Route path="/contact" component={ContactPage} />
                  <Route path="/booking" component={BookPage} />
                  <Route component={Error404} />
                </Switch>
            </main>
          </Router>

          <Footer />
      </div>
    );
  }
}

export default App;
