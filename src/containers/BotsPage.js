import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  state={
    bots:[],
    botArmy:[]
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots:bots}))
  }
  
  handleClick = (bot, inArmy) => {
    inArmy ? this.removeFromArmy(bot) : this.addToArmy(bot)
  }

  addToArmy = (bot) => {
    this.state.botArmy.includes(bot) ? null : this.setState({botArmy:[...this.state.botArmy, bot]})
  }

  removeFromArmy = (bot) => {
    let newArmy = this.state.botArmy.filter(b => b!==bot)
    this.setState({botArmy:newArmy})
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleClick} />
        <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
      </div>
    );
  }

}

export default BotsPage;
