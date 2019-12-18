import React from "react";
import YourBotArmy from "./YourBotArmy"
import BotCollection from "./BotCollection"
import BotSpecs from "../components/BotSpecs"

class BotsPage extends React.Component {
  state={
    bots:[],
    myArmy:[]
  }

  componentDidMount(){
    fetch(" https://bot-battler-api.herokuapp.com/api/v1/bots")
    .then(resp => resp.json())
    .then((resp) => {
      this.setState({
        bots:resp
      })
    })
  }

  addToArmy = bot =>{
    this.setState({
      myArmy:[...this.state.myArmy, bot]
    })
  }

  removeBot = myArmy =>{
    const removeIndex = this.state.myArmy.findIndex(bot=>bot.id === myArmy.id)
    let replaceArray = this.state.myArmy.slice()
    replaceArray.splice(removeIndex, 1)
    this.setState({
      myArmy: replaceArray
    })
  }

  render() {
    return (
      <div>
       <YourBotArmy myArmy={this.state.myArmy}
                    removeBot={this.removeBot}/>
       <BotCollection bots={this.state.bots}
                      addToArmy={this.addToArmy}/>

      </div>
    );
  }

}

export default BotsPage;
