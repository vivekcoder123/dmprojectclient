import React from "react";
import "./styles.scss";
import Header from "../header";
import Footer from "../footer";

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };

  }

  render() {

      return (
        <div>
          <Header/>
          <div className="content">
            {this.props.children}
          </div>
          <Footer/>
        </div>
      );

  }

}

export default Container;