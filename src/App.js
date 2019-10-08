import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import ContactPage from './main/contact';
import BookPage from './main/book';
import Error404 from './main/404error';
import Nav from './nav/navigation';
import Footer from './footer/footer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
        <Router>
          <Nav />
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

export default App;
