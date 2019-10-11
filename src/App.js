import React, { Component } from 'react';
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

class App extends Component {
  
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>SJ(logo icon goes here next to h1)</h1>
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
}

export default App;
