import React from "react";
import BotCollection from './BotCollection'
import YourBotArmy from "./YourBotArmy";

class BotsPage extends React.Component {
  //start here with your code for step one
  constructor(props){
    super(props);
    this.state = {
      bots: [],
      botTeam: [],
      yourTeam: false
    }
  }

  componentDidMount(){
    fetch('https://bot-battler-api.herokuapp.com/api/v1/bots')
      .then(resp => resp.json())
      .then(botData => {
        this.setState({
          bots: botData
        })
      })
  }


  handleClick = (e) => {
    let newBot = e.target.value
    this.setState({
      botTeam: [...this.state.botTeam, newBot]
  })
}

  // toggleTeam = () => {
  //   this.state.yourTeam === 
  // }

  render() {
    return (
      <div>
        {/* put your components here */}
        <BotCollection bots={this.state.bots}/>
        {/* <YourBotArmy /> addBot={this.handleClick}   */}
      </div>
    );
  }

}

export default BotsPage;
