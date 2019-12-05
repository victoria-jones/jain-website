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
    //check menu state upon app load
    this.mobileMenuToggle();
    this.modalSwitch();
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
        }, () => this.modalSwitch());
        break;
      case 'open':
        this.setState({
          displayModal: true
        }, () => this.modalSwitch());
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

  modalSwitch() {
    let modalWrapper = document.getElementsByClassName("modalWrapper")[0];
    let modal = document.getElementById("modal");

    if(this.state.displayModal) {
      modalWrapper.style.backgroundColor = "rgba(96, 181, 133, .8)";
      modalWrapper.style.zIndex = "9999";
      modal.style.bottom = "-10%";
      modal.style.animation = "bounceModal .7s ease";
      modal.style.transition = ".8s";
      modal.style.animationDelay = ".4s";
      modalWrapper.style.transition = "1s";
    } else if(!this.state.displayModal) {
      modalWrapper.style.zIndex = "-10000";
      modalWrapper.style.backgroundColor = "rgba(0,0,0,0)";
      modal.style.bottom = "-10000px";
      modal.style.animation = "none";
      modal.style.animationDelay = "none";
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
      mobileMenu.style.animation = "bounceNav .6s ease";
      mobileMenu.style.animationDelay = ".3s";
      mobileMenu.style.right = "0";
      mobileMenu.style.top = "0"
    } else if (!this.state.displayMobileMenu) {
      console.log("close the menu");
      menuBtn.style.display = "block";
      closeBtn.style.display = "none";
      mobileMenu.style.animation = "none";
      mobileMenu.style.animationDelay = "none";
      mobileMenu.style.right = "-500px";
      mobileMenu.style.top = "-500px";
    }

  }

}

export default App;
