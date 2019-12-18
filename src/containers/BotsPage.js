import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(){
    super()
    this.state={
      bots: [],
      army:[]
    }
  }

  componentDidMount(){
    const url = 'https://bot-battler-api.herokuapp.com/api/v1/bots'
    fetch(url)
    .then(resp => resp.json())
    .then(botsData => {
      let bots=botsData.map(bot=>({...bot, enroled: false}))
      this.setState({
        bots: bots
      })
    })
  }

  handleBotClick=(bot)=>{
    if(!this.state.army.includes(bot)){
      this.setState({army: [...this.state.army, bot]})
    }
  }
  

  render() {
    return (
      <div>
        {/* put your components here */}
        <YourBotArmy army={this.state.army}
        handleArmyClick={this.handleArmyClick}/>
        <BotCollection bots={this.state.bots}
                       handleBotClick={this.handleBotClick}/>
      </div>
    );
  }

}

export default BotsPage;
