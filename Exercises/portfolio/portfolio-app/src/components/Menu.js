import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";






class Menu extends Component {
  render() {
    return(
      <div>
<nav class="menubar">
<ul>


<Link to="/" >  <li>Home |</li>  </Link>
<Link to="/blog" >  <li>BLog |</li>  </Link>
<Link to="/contact" >  <li>Contact |</li>  </Link>

</ul>
   </nav>
  

  



      </div>
     


    )
  }
}

export default Menu;
