import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slide from 'react-reveal/Slide';
import Calendar from './components/calendar';

class BookPage extends Component {

  render() {
    return (
      <div>
        <Slide top>
          <h2 className="pageTitle pageTitleMrg">Booking</h2>

          <div className="pageOval">
          </div>
        </Slide>

        <section id="bookingInfo">
          <h3>My photo shoot booking and availability:</h3>
          <h4>Select a day you are interested in booking!</h4>
          <ul>
            <li>a couple quick "rules" for booking</li>
            <li>such as types of photo shoots you take</li>
            <li>maybe something saying what countries you will/can work in</li>
          </ul>
          <p>Need to know more? Check out my <span className="bounceAnchor"><a onClick={() => this.props.sendModal('open', 'faq')}>FAQ</a></span> about booking.</p>
          <p>If you have any questions about booking please <span className="bounceAnchor"><Link to="/contact">contact me</Link></span>.</p>
        </section>

        <section id="calendar">
          <Calendar showModal={this.props.sendModal}/>
        </section>

        <section className="cta" id="contactForQuestions">
          <p><span className="ctaSpan">Have any additional questions about booking that are not covered
            in the FAQ?</span> Please to contact me!</p>
          <Link to="/contact"><button>contact me</button></Link>
          <img src="images/icons/bg_longleaf.svg" className="bgcta" alt="Sarah Jain leaf logo"/>
        </section>
      </div>
    )
  }
}

export default BookPage;
