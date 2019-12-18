import React from "react";
import YourBotArmy from './YourBotArmy'
import BotCollection from './BotCollection'

class BotsPage extends React.Component {
  //start here with your code for step one

  constructor() {
    super()

    this.state ={
      bots: [],
      armyBots: []
    }
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then( resp => resp.json())
    .then( botsData => this.setState({
      bots: botsData
    }))
  }


  handleBot = (bot) => {
    const newBots = this.state.bots.filter(b => b.id !== bot.id)
    if(!this.state.armyBots.includes(bot)){
    this.setState({
      armyBots: [...this.state.armyBots, bot],
      bots: newBots
    })
}
  }



  render() {
    return (
      <div>
        < YourBotArmy armyBots={this.state.armyBots} recruited={this.state.recruited} bots={this.state.bots}/>
        < BotCollection bots={this.state.bots} handleBot={this.handleBot} armyBots={this.props.armyBots}/>
      </div>
    );
  }

}

export default BotsPage;
