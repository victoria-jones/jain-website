import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      dateObj: new Date(),
      thisMonth: ['Januaray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysInMonth: 0,
      today: new Date(),
    };
  }

  componentDidMount() {
    if(this.state.daysInMonth === 0){
      this.setMonths();
    }
    //add event listeners ONLY ONCE
    this.handleBookingSelect();
  }


  render() {
    return(
      <div id="cal">
        <div id="arrowWrap">
          <button className="calArrow" id="prev" onClick={() => this.transitionMonth(-1)}><i className="fas fa-chevron-left"></i> previous</button>
          <button className="calArrow" id="next" onClick={() => this.transitionMonth(+1)}>next <i className="fas fa-chevron-right"></i></button>
        </div>
         <table>
            <caption>
              {this.state.thisMonth[this.state.dateObj.getMonth()]} <br />
              <span id="calYear">{this.state.dateObj.getFullYear()}</span>
            </caption>
            <tbody>
              <tr>
                 <th>Sun</th>
                 <th>Mon</th>
                 <th>Tue</th>
                 <th>Wed</th>
                 <th>Thu</th>
                 <th>Fri</th>
                 <th>Sat</th>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
              <tr>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
                 <td></td>
              </tr>
            </tbody>
         </table>
       </div>
    );
  }

  //only runs on arrow click
  //change the month forward or backward
  transitionMonth(transitionTo){
    //debugger;
    if(transitionTo === -1){
      //this.state.dateObj.setMonth(this.state.dateObj.getMonth() -1);
      this.setState((state, props) => {
        dateObj: state.dateObj.setMonth(state.dateObj.getMonth() -1)
      }, () => this.setMonths());
    } else if(transitionTo === +1){
      //this.state.dateObj.setMonth(this.state.dateObj.getMonth() +1)
      this.setState((state, props) => {
        dateObj: state.dateObj.setMonth(state.dateObj.getMonth() +1)
      }, () => this.setMonths());
    } else {
      return;
    }

  }

  //set the number of days for the current month selected
  setMonths(){
    //debugger;
    let month = this.state.dateObj.getMonth();
    //let daysInMonth;
    let year = this.state.dateObj.getFullYear();

    if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
		    //daysInMonth = 31;
        this.setState({
          daysInMonth: 31
        }, () => this.populateDays());
	  }else if(month === 1){
		//leap year test
		  if(year % 4 === 0){
  			if(year % 100 === 0){
  				//year ending in 00 is not a leap year unless divisible by 400
  				if(year % 400 === 0){
  					//daysInMonth = 29;
            this.setState({
              daysInMonth: 29
            }, () => this.populateDays());
  				}else{
  					//daysInMonth = 28;
            this.setState({
              daysInMonth: 28
            }, () => this.populateDays());
  				}
  			}else{
  				//daysInMonth = 29;
          this.setState({
            daysInMonth: 29
          }, () => this.populateDays());
  			}
  		}else{
  			//daysInMonth = 28;
        this.setState({
          daysInMonth: 28
        }, () => this.populateDays());
  		}
  	//rest of the months
  	}else{
  		//daysInMonth = 30;
      this.setState({
        daysInMonth: 30
      }, () => this.populateDays());
  	}

  }

  //populate the number of days in the calendar
  populateDays() {

    console.log("current set month for population: " + this.state.dateObj.getMonth());
    let newDate = this.state.dateObj;
    newDate.setDate(1);
    let dateCells = document.getElementsByTagName("td");
    let daysInMonth = this.state.daysInMonth;
    let dayOfWeek = this.state.dateObj.getDay();
    let dateToday = this.state.today;

    console.log("days this month: " + this.state.daysInMonth);
    console.log("day of week: " + dayOfWeek);

    //clear days of month for new days
  	for(let i = 0;  i < dateCells.length; i++){
  		dateCells[i].innerHTML = "";
  		dateCells[i].className = "";
  	}

    //populate days of month
    for(let i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
      dateCells[i].innerHTML = newDate.getDate();

      if(dateToday < newDate) {
        dateCells[i].className = "futureDate";
        let bookMe = document.createElement("p");
        bookMe.innerHTML = "available for <u>booking</u>!"
        dateCells[i].appendChild(bookMe);
      } else {
        dateCells[i].className = "oldDate";
        let unAvailable = document.createElement("p");
        unAvailable.innerHTML = "unavailable.";
        dateCells[i].appendChild(unAvailable);
      }

      let date = newDate.getDate() + 1;
      newDate.setDate(date);
    }

    newDate.setMonth(newDate.getMonth()-1);

    console.log("end of populate");
    console.log("date is now set to :" + this.state.dateObj.getDate());

  }

  handleBookingSelect() {
    let dateCells = document.getElementsByTagName("td");
    const showModal = () => this.props.showModal('open', 'booking');;

    function showModalHandler(e) {
      //targets set to className to highlight table cell
      //targets also set to highlight innerHTML b/c:
          //if innerHTML is clicked it doesn't register as the cell being click
          //vice versa ^
       if(e.target.className === "futureDate" ||
          e.target.innerHTML === "available for <u>booking</u>!") {
        console.log("handler ran via click");
        showModal();
        //return;
      }
    }


    for(let i = 0; i < dateCells.length; i++) {
      //add event listener
      if(dateCells[i].addEventListener) {
        dateCells[i].addEventListener("click", showModalHandler, false);
      } else if(dateCells[i].attachEvent) {
        dateCells[i].attachEvent("onclick", showModalHandler);
      }
    }
  }


}

export default Calendar;
