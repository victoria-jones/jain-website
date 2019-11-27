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
      displayModal: false,
      fillModalWith: {
        thankYou: false,
        form: false,
        empty: true
      },
      displayMobileMenu: false
    };
    this.showModal = this.showModal.bind(this);
    this.showMobileMenu = this.showMobileMenu.bind(this);
  }

  componentDidMount() {
    this.mobileMenuToggle();
  }

  render() {
    return (
      <div className="App">
        <Router>
        <ScrollToTop />
        <header className="App-header">
          <Link to="/" onClick={()=> this.showMobileMenu("close")}><h1>SJ</h1><img src="images/icons/logo.svg" alt ="Sarah Jain leaf logo" title="Sarah Jain logo"/></Link>
          <div className="mobileNavBtns">
            <img onClick={()=> this.showMobileMenu("open")} src="images/icons/menu_icon.svg" id="openMenu" alt="open the navigation menu" />
            <img onClick={()=> this.showMobileMenu("close")} src="images/icons/close_icon.svg" id="closeMenu" alt="open the navigation menu" />
          </div>
          <div className="mobileNavWrap">
            <Nav
              showMobileMenu={this.showMobileMenu}
            />
            <SocialNav addClass="socialNavTop" />
          </div>
        </header>

            <main>
            <Modal
              displayModal={this.state.displayModal}
              showModal={this.showModal}
              fillModal={this.state.fillModalWith}
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

  showModal(boolChange, modalFill) {
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
    console.log(modalFill);
    this.fillModal(modalFill);
  }

  fillModal(fillWith){
    switch(fillWith) {
      case 'na':
        console.log("empty the modal");
        this.setState({
          fillModalWith: {
            thankYou: false,
            form: false,
            empty: true
          }
        });
        break;
      case 'booking':
        console.log("fill modal with the booking form");
        this.setState({
          fillModalWith: {
            thankYou: false,
            form: true,
            empty: false
          }
        });
        break;
      case 'contact':
        console.log("fill modal with 'message sent'");
        this.setState({
          fillModalWith: {
            thankYou: true,
            form: false,
            empty: false
          }
        });
        break;
    }
  }

  showMobileMenu(boolChange) {
    switch(boolChange) {
      case 'close':
        this.setState({
          displayMobileMenu: false
        }, () => this.mobileMenuToggle());
        break;
      case 'open':
        this.setState({
          displayMobileMenu: true
        }, ()=> this.mobileMenuToggle());
        break;
    }

    //this.mobileMenuToggle();
  }

  mobileMenuToggle() {
    let menuBtn = document.getElementById("openMenu");
    let closeBtn = document.getElementById("closeMenu");
    let mobileMenu = document.getElementsByClassName("mobileNavWrap")[0];

    if(this.state.displayMobileMenu){
      console.log("open the menu");
      menuBtn.style.display = "none";
      closeBtn.style.display = "block";
      mobileMenu.style.right = "0";
    } else if (!this.state.displayMenu) {
      console.log("close the menu");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      mobileMenu.style.right = "-500px";
    }

  }

}

export default App;
