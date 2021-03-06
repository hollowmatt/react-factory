import React from "react";
const CREDITCARD = "Creditcard";
const BTC = "Bitcoin";

class Switch extends React.Component {
  state = {
    payMethod: CREDITCARD
  };

  select = choice => {
    return evt => {
      this.setState({
        payMethod: choice
      });
    };
  };

  renderChoice = choice => {
    const cssClasses = ["choice"];
    
    if(this.state.payMethod === choice) {
      cssClasses.push("active");
    }

    return(
      <div className={cssClasses.join(" ")} onClick={this.select(choice)}>
        {choice}
      </div>
    );
  };

  render() {
    return (
      <div className="Switch">
        {this.renderChoice(BTC)}
        {this.renderChoice(CREDITCARD)}
        <span>Pay with: {this.state.payMethod}</span>
      </div>
    );
  }
}

export default Switch;
