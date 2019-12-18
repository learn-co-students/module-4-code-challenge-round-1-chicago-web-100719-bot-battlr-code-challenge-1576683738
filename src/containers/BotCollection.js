import React from "react";
import BotCard from "../components/BotCard";
import SearchBar from "../components/SearchBar"

class BotCollection extends React.Component {
	//your code here
	
	createBots = () => {
		return this.props.bots.map(bot => {
			return <BotCard bot={bot} 
								handleClick={this.props.handleClick}
								toggleShow={this.props.toggleShow} 
								displayBot={this.props.displayBot}
								myArmy={false}
								key={bot.id}
							/>
		})
	}

  render(){
  	return (
			<div>
				 <div className="ui four column grid">
					<div className="row">
						{this.createBots()}
					</div>
  	  	</div>
			</div>
  	);
  }

};

export default BotCollection;
