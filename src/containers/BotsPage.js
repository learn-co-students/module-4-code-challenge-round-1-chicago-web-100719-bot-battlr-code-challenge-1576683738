import React from "react";
import BotCollection from './BotCollection.js'
import YourBotArmy from './YourBotArmy.js'

class BotsPage extends React.Component {
  state = {
    bots: [],
    soldiers: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(data => this.setState({ bots: data }))
  }

  draftBot = (bot) => {
    if (this.state.soldiers.includes(bot))
      null
    else
      this.setState({ soldiers: [...this.state.soldiers, bot] })
  }

  removeBot = (bot) => {
    if (this.state.soldiers.includes(bot))
      this.setState({ soldiers: this.state.soldiers.filter(soldier => soldier !== bot)})
  }

  render() {
    return (
      <div>
      <BotCollection bots={this.state.bots} draftBot={this.draftBot}/>
      <YourBotArmy soldiers={this.state.soldiers} removeBot={this.removeBot}/>
      </div>
    );
  }

}

export default BotsPage;
