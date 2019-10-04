import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import Contactpage from './main/contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          put nav here
        </p>
      </header>
      <main>
        <p>
          Main page content goes here
          <ul>
          <li>home page content</li>
          <li>about me page content</li>
          <li>contact me page content</li>
          <li>booking page content</li>
          </ul>
        </p>
      </main>
      <p>A footer component will be added here</p>
    </div>
  );
}

export default App;
