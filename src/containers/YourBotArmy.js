import React from "react";
import BotCard from "../components/BotCard";

class YourBotArmy extends React.Component {
  renderBotArmy = () => {
    return this.props.botArmy.map(bot => {
      return <BotCard bot={bot} handleClick={this.props.handleClick}inArmy={true} />
    })
  }


  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            {this.renderBotArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
