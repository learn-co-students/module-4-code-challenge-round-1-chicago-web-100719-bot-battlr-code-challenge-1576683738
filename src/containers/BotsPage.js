import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'



class BotsPage extends React.Component {
  //start here with your code for step one
  state= {
    bots: [],
    army: []
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots}))
    .catch(err => console.log(err.message))
  }

  recruitBot = (bot) => {
    let myArmy = this.state.army
    if (!myArmy.includes(bot)){
      myArmy.push(bot)
      this.setState({army: myArmy})
    }
  }

  dischargeBot = (bot) => {
    let myArmy = this.state.army
    let index = myArmy.indexOf(myArmy.find(item => item === bot))
    myArmy.splice(index, 1)
    this.setState({army: myArmy})
  }


  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} onClick={this.recruitBot}/>
        <YourBotArmy bots={this.state.army} onClick={this.dischargeBot}/>
      </div>
    );
  }

}

export default BotsPage;
