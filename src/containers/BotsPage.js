import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor() {
    super()
    this.state = {
      bots: [],
      botArmy: [],
      toggleListOrSpec: false
    }
  }

  handleSpecsClick = (addBot) => {
    const idArray = this.state.botArmy.map(bot => bot.id)
    if (idArray.includes(addBot.id)) {
      return null
    } else {
      let newArmyArray = this.state.botArmy.slice()
      newArmyArray.push(addBot)
      this.setState({
        botArmy: newArmyArray,
        toggleListOrSpec: false
      })
    }
  }

  handleSpecsBack = () => {
    this.setState({toggleListOrSpec: false})
  }

  handleArmyClick = deleteBot => {
    const index = this.state.botArmy.findIndex(bot => bot.id === deleteBot.id)
    let newArmyArray = this.state.botArmy.slice()
    newArmyArray.splice(index, 1)
    this.setState({botArmy: newArmyArray})
  }

  handleCollectionClick = specBot => {
    this.setState({
      selectedBot: specBot,
      toggleListOrSpec: true
    })
  }

  renderListOrSpec = () => {
    if (this.state.toggleListOrSpec) {
      return <BotSpecs handleBackClick={this.handleSpecsBack} handleAddClick={this.handleSpecsClick} bot={this.state.selectedBot} />
    } else {
      return <BotCollection handleClick={this.handleCollectionClick} bots={this.state.bots} />
    }
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
        {this.renderListOrSpec()}
      </div>
    );
  }

}

export default BotsPage;
