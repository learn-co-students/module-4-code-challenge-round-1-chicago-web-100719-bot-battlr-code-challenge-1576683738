import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  //your bot army code here...

  renderArmy = () => {
    return this.props.bots.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick}/>)
  }

  render(){
    console.log(this.props.bots)
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {/*...and here...*/}
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
