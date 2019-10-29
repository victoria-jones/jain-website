import React, { Component } from 'react';

class Calendar extends Component {
  constructor(props){
    super(props);
    this.state = {
      dateObj: new Date(),
      thisMonth: ['Januaray', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
      daysInMonth: 0,
      year: "",
      today: new Date(),
    };
    this.transitionMonth = this.transitionMonth.bind(this);
    this.setMonths = this.setMonths.bind(this);
  }
  componentDidMount() {
    //debugger;
    if(this.state.daysInMonth === 0){
      this.setMonths();
    }
    //this.populateDays();
  }
  componentDidUpdate() {
    //this.populateDays();
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
    //check state changes on this
    //this.setState();
    //this.setMonths();

  }

  //set the number of days for the current month selected
  setMonths(){
    //debugger;
    let month = this.state.dateObj.getMonth();
    //let daysInMonth;
    let year = this.state.dateObj.getFullYear();

    if(month === 0 || month === 2 || month === 4 || month === 6 || month === 7 || month === 9 || month === 11){
		    //daysInMonth = 31;
        /*this.setState({
          daysInMonth: 31
        }, this.populateDays());
        () => { console.log("months have been set to: " + this.state.daysInMonth)}*/
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
    //this.setState();
    //this.populateDays(this.state.daysInMonth); <-- dont do this it wont work and breaks
  }

  //populate the number of days in the calendar
  populateDays() {
    /*
    this is having issues with using the dateObj
    probably b/c of async state changes :s
    */
    console.log("current set month for population: " + this.state.dateObj.getMonth());
    let dateCells = document.getElementsByTagName("td");
    let daysInMonth = this.state.daysInMonth;
    let dayOfWeek = this.state.dateObj.getDay();
    let dateToday = this.state.today;

    console.log("days this month: " + this.state.daysInMonth);

    //clear days of month for new days
  	for(let i = 0;  i < dateCells.length; i++){
      console.log("CLEAR DATE is running");
  		//clear exsisting table dates
  		dateCells[i].innerHTML = "";
  		dateCells[i].className = "";
  	}

    //set days of month
    //let startDate = 1;
    let newDate = this.state.dateObj;
    //let newDate = new Date();
    newDate.setDate(1);   //sets day of the month for dateObj to 1 (first day of month)

    for(let i = dayOfWeek; i < daysInMonth + dayOfWeek; i++) {
      //console.log("new for loop running");
      dateCells[i].innerHTML = newDate.getDate();
      //startDate++;
      //dateCells[i].className = "oldDate";
      //debugger;
      dateCells[i].className = "oldDate";
      //if the calendar date is greater than today
        //don't want today to be a part of "future dates" but it is appear as such
      if(dateToday < newDate) {
        dateCells[i].className = "futureDate";
      }

      let date = newDate.getDate() + 1;
      newDate.setDate(date);
      //let date = newDate.getDate() + 1;
      //newDate.setDate(date);
      //this.setState((state, props) => {
      //  dateObj: state.dateObj.setDate(date)
      //});
      //let date = this.state.dateObj.getDate() + 1;
      //this.state.dateObj.setDate(date);
      /*this.setState({
        dateObj: date
      }, () => {console.log("state set for day obj")})
    };*/
      //console.log("date today is: " + dateToday);
      //console.log("set date in Obj is: " + newDate);
    }
    newDate.setMonth(newDate.getMonth()-1);
  	//reset month to shown
  	//dateObject.setMonth(dateObject.getMonth() -1);
  	//display calendar if its not already visible
  	//document.getElementById("cal").style.display = "block";
    //this.setState();
    console.log("end of populate");
    console.log("date is now set to :" + this.state.dateObj.getDate());
  }




}

export default Calendar;
