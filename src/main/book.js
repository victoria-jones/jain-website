import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class BookPage extends Component {

  render() {
    return (
      <div>
        <section id="bookingInfo">
          <p>booking information with some quick bullet points</p>
          <p>maybe a link to faqs and contact for more information</p>
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
