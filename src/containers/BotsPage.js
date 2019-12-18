import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: []
    }
  }

  handleCollectionClick = (bot) => {
    let newArmyArray = this.state.botArmy.slice()
    newArmyArray.push(bot)
    this.setState({botArmy: newArmyArray})
  }

  handleArmyClick = deleteBot => {
    const index = this.state.botArmy.findIndex(bot => bot.id === deleteBot.id)
    let newArmyArray = this.state.botArmy.slice()
    newArmyArray.splice(index, 1)
    this.setState({botArmy: newArmyArray})
  }

  componentDidMount() {
    fetch(' https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots}))
  }
  
  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy handleClick={this.handleArmyClick} bots={this.state.botArmy} />
        <BotCollection handleClick={this.handleCollectionClick} bots={this.state.bots} />
      </div>
    );
  }

}

export default BotsPage;
