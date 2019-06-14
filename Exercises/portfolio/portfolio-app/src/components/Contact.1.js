import React, { Component } from 'react';
export class Contact extends Component {
  render() {
    return (<div className="wrappercontact">
      <h1>Don't be a stranger</h1>
      <h2>just say hello</h2>



      <div className="underhello">

        <div className="contacts">
          <ul className="contactbar">
            <li>Address: Tripoli, Lebanon</li>
            <li>Mobile : +96170514137</li>
            <li>Email: raedelnaboulsi@gmail.com</li>
            <li>Date of birth: 12/08/1995</li>

          </ul>

        </div>

        <div className="contact">
          <h2>Contact us </h2>
          <br />
          <form>
            <label>Name: &nbsp &nbsp &nbsp &nbsp &nbsp</label>
            <input />
            <br />
            <br />
            <label>Email: &nbsp &nbsp &nbsp &nbsp &nbsp</label>
            <input />
            <br />
            <br />
            <label className="message ">Message: &nbsp &nbsp &nbsp &nbsp &nbsp </label>
            <textarea class="message">Enter you message here... </textarea>
            <br />
            <br />
            <input type="radio" class="haha">&nbsp Complaint</input>
            &nbsp
                            <input type="radio" class="haha">&nbsp Suggestions</input>
            <br />
            <br />
            <button className="submitbutton">Submit</button>
          </form>



        </div>

      </div>



    </div>);
  }
}
