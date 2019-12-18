import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  // constructor(){
  //   super()
  //   this.state = {
  //     bots: []
  //   }
  // }

  state = {
    bots: [],
    yourBotArmy: []
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

  addBot = bot => {
    if (!this.state.yourBotArmy.includes(bot)){
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, bot]
      })
    }
    console.log(this.state.yourBotArmy)
    console.log('hello')
  }

  removeBot = thisBot => {
    this.setState({
      yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== thisBot)
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.yourBotArmy} handleClick={this.removeBot}/>
        <BotCollection bots={this.state.bots} handleClick={this.addBot}/>
      </div>
    );
  }

}

export default BotsPage;
