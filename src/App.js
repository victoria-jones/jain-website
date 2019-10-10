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
  constructor(props) {
    super(props);
    this.state = {
      title: "Sarah Jain"
    };
    this.updateTitle = this.updateTitle.bind(this);
  }


  updateTitle(newTitle){
    this.setState({title: newTitle});
  }
  render() {
    return (
      <div className="App">

        <header className="App-header">
          <h1>{this.state.title}</h1>
        </header>
          <Router>
            <Nav changeTitle={this.updateTitle} />
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
