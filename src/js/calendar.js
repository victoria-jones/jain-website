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
    this.setMonths();
    //this.populateDays();
  }
  componentDidUpdate() {
  //  this.populateDays();
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
    if(transitionTo === -1){
      this.state.dateObj.setMonth(this.state.dateObj.getMonth() -1);
    } else if(transitionTo === +1){
      this.state.dateObj.setMonth(this.state.dateObj.getMonth() +1);
    } else {
      return;
    }
    this.setState();
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
        () => { this.populateDays(this.state.daysInMonth)}*/
        this.setState({
          daysInMonth: 31
        }, () => console.log("setMonths has set state to: " + this.state.daysInMonth));
	  }else if(month === 1){
		//leap year test
		  if(year % 4 === 0){
  			if(year % 100 === 0){
  				//year ending in 00 is not a leap year unless divisible by 400
  				if(year % 400 === 0){
  					//daysInMonth = 29;
            this.setState({
              daysInMonth: 29
            }, () => {console.log("setMonths has set state to: " + this.state.daysInMonth)});
  				}else{
  					//daysInMonth = 28;
            this.setState({
              daysInMonth: 28
            }, () => {console.log("setMonths has set state to: " + this.state.daysInMonth)});
  				}
  			}else{
  				//daysInMonth = 29;
          this.setState({
            daysInMonth: 29
          }, () => {console.log("setMonths has set state to: " + this.state.daysInMonth)});
  			}
  		}else{
  			//daysInMonth = 28;
        this.setState({
          daysInMonth: 28
        }, () => {console.log("setMonths has set state to: " + this.state.daysInMonth)});
  		}
  	//rest of the months
  	}else{
  		//daysInMonth = 30;
      this.setState({
        daysInMonth: 30
      }, () => {console.log("setMonths has set state to: " + this.state.daysInMonth)});
  	}
    //this.setState();
    //this.populateDays(this.state.daysInMonth); <-- dont do this it wont work and breaks
  }

  //populate the number of days in the calendar
  populateDays(setDays) {
    /*
    for some reason this breaks the back and forth arrows
    ALSO, setDays is currently not being used.
    */
    //debugger;
    let dateCells = document.getElementsByTagName("td");
    let daysInMonth = setDays; //WHY DOES THIS BREAK EVERY TIME I TRY TO USE THE STATE
    let dayOfWeek = this.state.dateObj.getDay();
    let dateToday = this.state.today;

    console.log("days this month: " + this.state.daysInMonth);

    //this loops works fine
  	for(let i = 0;  i < dateCells.length; i++){
      console.log("CLEAR DATE is running");
  		//clear exsisting table dates
  		dateCells[i].innerHTML = "empty";
  		dateCells[i].className = "";
  	}
  	//add new dates to cells
    //this loop breaks b/c of daysInMonth?
  	for(let i = dayOfWeek; i < daysInMonth + dayOfWeek; i++){
      //console.log("POPULATE DATE is running" + " current date Num: " + this.state.dateObj.getDate());
  		dateCells[i].innerHMTL = this.state.dateObj.getDate();
  		dateCells[i].className = "date";
  		if(dateToday < this.state.dateObj){
  			dateCells[i].className = "futuredate";
  		}
  		let date = this.state.dateObj.getDate() + 1;
  		this.state.dateObj.setDate(date);
  	}
    console.log("end of populate");
  	//reset month to shown
  	//dateObject.setMonth(dateObject.getMonth() -1);
  	//display calendar if its not already visible
  	//document.getElementById("cal").style.display = "block";
  }



}

export default Calendar;
