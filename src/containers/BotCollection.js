import React from "react";
import BotCard from "../components/BotCard";
import BotSpecs from '../components/BotSpecs'

class BotCollection extends React.Component {

	state={
		selectedBot: ''
	}
	displayBots = () => {
		return this.props.bots.map(bot => {
		  return <BotCard bot={bot} key={bot.id} onClick={this.selectBot}/>
		})
	}

	selectBot = (bot) => {
		this.setState({selectedBot: bot})
	}

	unselectBot = () => {
		this.setState({selectedBot: ''})
	}

	showSelectedBot = () => {
		return <BotSpecs bot={this.state.selectedBot} recruitBot={this.props.recruitBot} goBack={this.unselectBot}/>
	}
	
  render(){
  	return (
		<div>
		{this.state.selectedBot === '' ? (
			<div className="ui four column grid">
				<label>Sort By:</label>
				<select onChange={(event) => this.props.onSort(event.target.value)} >
					<option value="none"></option>
					<option value="armor">Armor</option>
					<option value="health">Health</option>
					<option value="damage">Damage</option>
				</select>
				<div className="row">

					{this.displayBots() }

  	  
    			</div>
  	  		</div>) : this.showSelectedBot()}
		</div>
  	);
  }

};

export default BotCollection;
