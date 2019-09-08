import React from "react";
import "./styles.scss";
import {Link} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render() {

      return (
        <div>
          <Link to="/">Home</Link>
          <br/>
          <Link to="/login">Admin</Link>
        </div>
      );

  }

}

export default Header;