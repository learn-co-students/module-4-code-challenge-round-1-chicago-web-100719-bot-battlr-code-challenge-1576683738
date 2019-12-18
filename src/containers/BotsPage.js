import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from './YourBotArmy'



class BotsPage extends React.Component {
  //start here with your code for step one
  state= {
    allBots: [],
    bots: [],
    army: [],
    sortBy: ''
  }

  componentDidMount() {
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
    .then(resp => resp.json())
    .then(bots => this.setState({allBots: bots, bots: bots}))
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

  setSort = (value) => {
    // this.setState({sortBy: value})
    // this.sortBots()
  }

  sortBots = () => {
    // if (this.state.sortBy !== ''){
    //   let sortedBots = this.state.bots
    //   sortedBots.sort((a,b) => a.this.state.sortBy > b.this.state.sortBy ? 1 : -1)
    //   this.setState({bots: sortedBots})
    // }else{
    //   this.setState({bots: this.state.allBots})
    // }
  }



  render() {
    return (
      <div>
        <YourBotArmy bots={this.state.army} onClick={this.dischargeBot}/>
        <BotCollection bots={this.state.bots} recruitBot={this.recruitBot} onSort={this.setSort}/>
      </div>
    );
  }

}

export default BotsPage;
