import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {
	state = {
		show: false,
		bot: [],
		return: false
	}

	handleShowPage = (bot) => {
		this.setState({ 
			show: !this.state.show,
			bot: bot
		})
	}

	handleReturnClick = () => {
		this.setState({ return: !this.state.return })
	}

  render(){
  	return (
  	  <div className="ui four column grid">
    		<div className="row">

					{this.state.show ?
						<BotSpecs 
							bot={this.state.bot}
							draftBot={this.props.draftBot} 
							handleReturnClick={this.handleReturnClick}
							return={this.state.return}/>
						:
    		  this.props.bots.map(bot => {
						return <BotCard bot={bot} handleShowPage={this.handleShowPage}/>
					})}

					Bot Collection
    		</div>
  	  </div>
  	);
  }

};

export default BotCollection;
