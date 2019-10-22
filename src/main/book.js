import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class BookPage extends Component {

  render() {
    return (
      <div>
        <h2 className="pageTitle pageTitleMrg">Booking</h2>

        <div className="pageOval">
        </div>

        <section id="bookingInfo">
          <h3>My photo shoot booking and availability:</h3>
          <h4>Click on a day you are interested in booking!</h4>
          <ul>
            <li>a couple quick "rules" for booking</li>
            <li>such as types of photo shoots you take</li>
            <li>maybe something saying what countries you will/can work in</li>
          </ul>
          <p>If you have any questions regarding booking please <Link to="/contact">contact me</Link>.</p>
        </section>

        <section id="calendar">
          <p>calendar API to show availability for bookings</p>
          <p>wanted to make it so clicking an available date would start
          a booking form for a little more info that sends an email when
          completed. HOWEVER, not sure if this can work with an existing
          calendar API</p>
        </section>

        <section className="cta" id="contactForQuestions">
        <p>the book me CTA and area.the book me CTA and area.the book me CTA and area.
        the book me CTA and area.the book me CTA and area.</p>
        <Link to="/contact "><button>contact me</button></Link>
        </section>
      </div>
    )
  }
}

export default BookPage;
