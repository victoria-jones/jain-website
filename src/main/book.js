import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

class BookPage extends Component {

  render() {
    return (
      <div>
        <h2 class="pageTitle pageTitleMrg">Booking</h2>

        <div class="pageOval">
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

        <section id="contactForQuestions">
          <p>section prompting the user to contact for any other questions about
          booking.</p>
        </section>
      </div>
    )
  }
}

export default BookPage;
