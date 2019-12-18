import React from "react";
import BotSpecs from "../components/BotSpecs";

class BotCollection extends React.Component {
// const BotCollection =(props) => {
	render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">
    		  {this.props.bots.map(bot=>{
				  return(<BotSpecs bot={bot}
								  key={bot.id}
								  addToArmy={this.props.addToArmy}/>
								  )
								  
			  })
			}
    		  Collection of all bots
    		</div>
  	  </div>
	  );
  }
}

export default BotCollection;
