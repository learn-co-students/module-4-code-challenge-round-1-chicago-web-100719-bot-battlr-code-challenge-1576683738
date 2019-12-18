import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one

  state = {
    bots: [],
    botArmy: []
  }

componentDidMount(){
  fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
  .then(resp => resp.json())
  .then(bots => {
    this.setState({
      bots: bots
    })
  })
}

handleClick = (bot) => {
  this.setState({
    botArmy: [...this.state.botArmy, bot]
  })
}

handleRemove = (bot) => {
 this.state.botArmy.includes(bot)
}

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleRemove}/>
        <BotCollection bots={this.state.bots} handleClick={this.handleClick}/>
      </div>
    );
  }

}

export default BotsPage;
