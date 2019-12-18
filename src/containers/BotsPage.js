import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'
import BotSpecs from '../components/BotSpecs'
import SearchBar from "../components/SearchBar"


class BotsPage extends React.Component {

  state = {
    bots: [],
    yourBotArmy: [],
    show: false,
    bot: null,
    filter: "All"
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

  addFilter = e => {
    this.setState({
      filter: e.target.value
    })
  }

  toggleShow = () => {
    console.log('hello!')
    this.setState({
      show: !this.state.show
    })
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

  filterBots = () => {
    let botsList = this.state.bots

    if (this.state.filter !== "All") {
      botsList = botsList.filter(bot => bot.bot_class === this.state.filter)
    }

    return botsList
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
        myArmy={true}
        />
        <SearchBar addFilter={this.addFilter}/>
        {this.state.show? 
        <BotSpecs 
          bot={this.state.bot} 
          enlist={this.addBot} 
          toggleShow={this.toggleShow}
        /> 
        : 
        <BotCollection 
          // bots={this.state.bots}
          bots={this.filterBots()}
          toggleShow={this.toggleShow} 
          displayBot={this.displayBot}
          myArmy={false}
        />}
      </div>
    );
  }

}

export default BotsPage;
