import '../App.css'

import React, { Component } from 'react';
class Contact extends Component {
  render() {
    return( 
      
 
 <div className="wrappercont">
<h1>Don't be a stranger</h1>
<h2>just say hello</h2>



<div className="underhell">

        <div className="contacts">
                <ul className="contactbar">
                <li>Address: Tripoli, Lebanon</li>
                <li>Mobile : +96170514137</li>
                <li>Email: raedelnaboulsi@gmail.com</li>
                <li>Date of birth: 12/08/1995</li>
                
                </ul>
                
                </div>
                
                <div className="contactform">
                        <h2>Contact us </h2>
                        <br/>
                        <form>
                            <label>Name: </label>
                            <input/>
                        <br/>
                        <br/>
                            <label>Email: </label>
                            <input/> 
                        <br/>
                        <br/>
                            <label className="message ">Message: </label>
                            <textarea class="message">Enter you message here... </textarea>
                        <br/>
                        <br/>
                            Complaint<input type="radio" class="haha" value="&nbsp Complaint"/>
                            
                            Suggestions<input type="radio" class="haha" value="&nbsp Suggestions" />
                        <br/>
                        <br/>
                        <button className="submitbutton">Submit</button>
                        </form>
                        
                        
                        
                        </div>

                    </div>



    </div>
            
    
    )
  }
}

export default Contact;
