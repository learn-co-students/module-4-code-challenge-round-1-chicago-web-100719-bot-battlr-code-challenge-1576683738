import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot => {
						return <BotCard bot={bot} draftBot={this.props.draftBot}/>
					})}
					Bot Collection
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
