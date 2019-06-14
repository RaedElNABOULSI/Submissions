import React, { Component } from 'react';
import './contact.css'

class Contact extends Component {
  render() {
    return(
      
 <div id="wrappercontact">
<h1>Don't be a stranger</h1>
<h2>just say hello</h2>



<div class="underhello">
        <div class="contacts">
                <ul class="contactbar">
                <li>Address: Tripoli, Lebanon</li>
                <li>Mobile : +96170514137</li>
                <li>Email: raedelnaboulsi@gmail.com</li>
                <li>Date of birth: 12/08/1995</li>
                
                </ul>
                
                </div>
                
                <div class="contact">
                        <h2>Contact us </h2>
                        <br/>
                        <form>
                            <label>Name: &nbsp &nbsp &nbsp &nbsp &nbsp</label>
                            <input> </input>
                        <br/>
                        <br/>
                            <label>Email: &nbsp &nbsp &nbsp &nbsp &nbsp</label>
                            <input></input> 
                        <br/>
                        <br/>
                            <label>Message: &nbsp &nbsp &nbsp &nbsp &nbsp </label>
                            <textarea class="message">Enter you message here... </textarea>
                        <br/>
                        <br/>
                            <input type="radio" class="haha">&nbsp Complaint</input>
                            &nbsp
                            <input type="radio" class="haha">&nbsp Suggestions</input>
                        <br/>
                        <br/>
                        <button class="submitbutton">Submit</button>
                        </form>
                        
                        
                        
                        </div>

                    </div>



            </div>
            

    )
  }
}

export default Contact;
