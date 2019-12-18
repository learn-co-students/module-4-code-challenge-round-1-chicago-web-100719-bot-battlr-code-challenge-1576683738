import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'

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
    yourBotArmy: [],
    show: false,
    bot: null
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

  toggleShow = () => {
    console.log('hello!')
    this.setState({
      show: !this.state.show
    })
  }

  displayBot = bot  => {

  }

  addBot = bot => {
    if (!this.state.yourBotArmy.includes(bot)){
      this.setState({
        yourBotArmy: [...this.state.yourBotArmy, bot],
        show: false
      })
    } else {
      alert("You've already added this bot!")
    }
  }

  removeBot = thisBot => {
    this.setState({
      yourBotArmy: this.state.yourBotArmy.filter(bot => bot !== thisBot)
    })
  }

  displayBot = bot => {
    this.setState({
      bot: bot
    })
  }

  render() {
    return (
      <div>
        <YourBotArmy 
        bots={this.state.yourBotArmy} 
        handleClick={this.removeBot}
        // yourBotArmy={this.state.yourBotArmy}
        myArmy={true}
        />

        {this.state.show? 
        <BotSpecs 
          bot={this.state.bot} 
          enlist={this.addBot} 
          toggleShow={this.toggleShow}
        /> 
        : 
        <BotCollection 
          bots={this.state.bots}
          toggleShow={this.toggleShow} 
          displayBot={this.displayBot}
          myArmy={false}
        />}
      </div>
    );
  }

}

export default BotsPage;
