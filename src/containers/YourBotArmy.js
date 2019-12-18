import React from "react";
import BotCard from "../components/BotArmyCard";

class YourBotArmy extends React.Component {
  
  renderArmy = () => {
    let botArmy = this.props.botArmy
    if (botArmy.length === 0) { 
    return <div>Add Bots</div>
    } else {
    return botArmy.map(bot => {
      return <BotCard bot={bot} handleClick={this.props.handleClick}/>
    })
  }
  }

  render(){
    return (
      <div className="ui segment inverted olive bot-army">
        <div className="ui five column grid">
          <div className="row bot-army-row">
            
            Your Bot Army
            {this.renderArmy()}
          </div>
        </div>
      </div>
    );
  }
  
};

export default YourBotArmy;
