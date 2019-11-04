import React, { Component } from 'react';
import './css/styles.css';
import AboutPage from './main/about';
import HomePage from './main/home';
import ContactPage from './main/contact';
import BookPage from './main/book';
import Error404 from './main/404error';
import Nav from './nav/navigation';
import SocialNav from './nav/socialNav';
import Modal from './main/components/modal';
import Footer from './footer/footer';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ScrollToTop from './js/scrolltotop';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      displayModal: true
    };
    this.showModal = this.showModal.bind(this);
  }

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
            <Modal
              displayModal={this.state.displayModal}
              showModal={this.showModal}
            />
                <Switch>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/about_me" component={AboutPage} />
                  <Route path="/contact" render={(props) =>
                    <ContactPage {...props}
                      showModal={this.showModal}
                    />}
                  />
                  <Route path="/booking" render={(props) =>
                    <BookPage {...props}
                      sendModal={this.showModal}
                    />}
                  />
                  <Route component={Error404} />
                </Switch>
            </main>
          </Router>

          <Footer />
      </div>
    );
  }

  showModal(boolChange) {
    switch(boolChange) {
      case 'close':
        this.setState({
          displayModal: false
        });
        break;
      case 'open':
        this.setState({
          displayModal: true
        });
        break;
    }
  }
}

export default App;
