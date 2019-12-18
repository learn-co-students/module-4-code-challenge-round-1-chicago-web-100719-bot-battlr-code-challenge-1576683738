import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
	displayBots = () => {
		return this.props.bots.map(bot => {
		  return <BotCard bot={bot} key={bot.id} />
		})
	  }
	
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {/* Collection of all bots */}
			  {this.displayBots()}
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
