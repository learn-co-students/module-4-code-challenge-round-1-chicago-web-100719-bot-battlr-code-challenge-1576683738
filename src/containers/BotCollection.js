import React from "react";
import BotCard from "../components/BotCard";

class BotCollection extends React.Component {
  //your code here
  constructor() {
	  super()
	  this.state = {
		  filter: ''
	  }
  }

renderBots = () => {
	const filteredBots = this.props.bots.filter(bot => bot.name.toUpperCase().includes(this.state.filter.toUpperCase()))
	// return this.props.bots.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick}/>)
	return filteredBots.map(bot => <BotCard bot={bot} handleClick={this.props.handleClick}/>)
}

handleInputChange = event => {
	console.log(event.target.value)
	this.setState({filter: event.target.value})
}

  render(){
  	return (
		<React.Fragment>
			<div>
				Search: <input type="text" value={this.state.filter} onChange={this.handleInputChange}/>
			</div>
			
			<div className="ui four column grid">
					<div className="row">
					{this.renderBots()}

					</div>
			</div>
		</React.Fragment>
  	);
  }

};

export default BotCollection;
