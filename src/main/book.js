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
          <h4>Click on a day you are interested in booking!</h4>
          <ul>
            <li>a couple quick "rules" for booking</li>
            <li>such as types of photo shoots you take</li>
            <li>maybe something saying what countries you will/can work in</li>
          </ul>
          <p>Need to know more? Check out my <div class="bounceAnchor"><a>FAQ</a></div> about booking.</p>
          <p>If you have any questions about booking please <div class="bounceAnchor"><Link to="/contact">contact me</Link></div>.</p>
        </section>

        <section id="calendar">
          <Calendar showModal={this.props.sendModal}/>
        </section>

        <section className="cta" id="contactForQuestions">
        <p>the book me CTA and area.the book me CTA and area.the book me CTA and area.
        the book me CTA and area.the book me CTA and area.</p>
        <Link to="/contact"><button>contact me</button></Link>
        </section>
      </div>
    )
  }
}

export default BookPage;
