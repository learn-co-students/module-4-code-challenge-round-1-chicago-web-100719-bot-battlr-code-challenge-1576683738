import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotCard from '../components/BotCard'



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
    myArmy.push(bot)
    this.setState({army: myArmy})
  }


  render() {
    return (
      <div>
        <BotCollection bots={this.state.bots} onClick={this.recruitBot}/>
      </div>
    );
  }

}

export default BotsPage;
