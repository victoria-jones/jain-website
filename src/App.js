import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import ContactPage from './main/contact';
import BookPage from './main/book';
import Footer from './footer/footer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Router>
        <ul class="navigation">
          <li><Link to="/">home</Link></li>
          <li><Link to="/about_me">about me</Link></li>
          <li><Link to="/contact">contact</Link></li>
          <li><Link to="/booking">booking</Link></li>
        </ul>
        <main>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/about_me" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route path="/booking" component={BookPage} />
            </Switch>
        </main>
        </Router>

        <Footer />

    </div>
  );
}

export default App;
