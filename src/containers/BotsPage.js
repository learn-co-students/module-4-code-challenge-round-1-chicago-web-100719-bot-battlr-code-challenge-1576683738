import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";
import BotSpecs from "../components/BotSpecs";

class BotsPage extends React.Component {
  state={
    bots:[],
    botArmy:[],
    showInfo: false,
    infoBot:[]
  }
  
  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({bots:bots}))
  }
  
  handleClick = (bot, inArmy) => {
    inArmy ? this.removeFromArmy(bot) : this.showInfo(bot)
  }

  showInfo = (bot) => {
    this.setState({showInfo:true, infoBot:bot})
  } 

  addToArmy = (bot) => {
    this.state.botArmy.includes(bot) ? 
    alert("This bot is already in your army!") : 
    this.setState({botArmy:[...this.state.botArmy, bot], showInfo:false, infoBot:[]})
  }

  removeFromArmy = (bot) => {
    let newArmy = this.state.botArmy.filter(b => b!==bot)
    this.setState({botArmy:newArmy})
  }

  goBack = () => {
    this.setState({showInfo:false, infoBot:[]})
  }



  showSwitch = () =>{
    if (this.state.showInfo === false){
       return this.renderCollection()
    } else if (this.state.showInfo === true){
      return this.renderInfo()
    }
  }

  renderCollection = () => {
    return <BotCollection bots={this.state.bots} handleClick={this.handleClick} />
  }

  renderInfo = () => {
    return <BotSpecs bot={this.state.infoBot} addToArmy={this.addToArmy} goBack={this.goBack}/>
  }

  render() {
    return (
      <div>
        <YourBotArmy botArmy={this.state.botArmy} handleClick={this.handleClick} />
        {this.showSwitch()}
      </div>
    );
  }

}

export default BotsPage;
