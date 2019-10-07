import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import ContactPage from './main/contact';
import BookPage from './main/book';
import Footer from './footer/footer';
import Nav from './nav/navigation';
import { Router, Switch, Route, Link} from 'react-router-dom';

function App() {
  return (
    <div className="App">

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

        <Nav />

        <main>

        </main>

        <Footer />

    </div>
  );
}

export default App;
