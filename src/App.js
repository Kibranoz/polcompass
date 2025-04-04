import './App.css';
import  Grid  from "./grid/Grid.js";
import Question from "./Question/Question.js";
import AnswerSelection from "./AnswerSelection/AnswerSelection.js"
import { Component } from 'react';
import AnswerSelectionMobile from './AnswerSelection/AnswerSelectionMobile.js';
class App extends Component{
   getIfMobile() {
    let width = Math.max(window.screen.width, window.innerWidth);
    return width<=500
  }
  constructor(props) {
    super(props);
    this.state = {social:0,economic:0, questionIndex:0};
    this.questions = {

      0 : {"question":"Taxation is theft", "affects":"economic", "direction": 1},
      1 : {"question":"The state should jail people for possessing illegal drugs", "affects":"social", "direction": 1},
      2 : {"question":"I support a carbon tax", "affects":"economic", "direction": -1},
      3: {"question":"It would be better if the governement controlled the economy", "affects":"economic", "direction": -1},
      4: {"question":"Sex work involving consenting adults should be legal", "affects":"social", "direction": -1},
      5: {"question":"Countries like China are doing a better job at governing than countries like the United States or Canada", "affects":"social", "direction": 1},
      6: {"question":"A minimum wage set by the gouvernment is a bad idea : let people negotiate wages on their own", "affects":"economic", "direction": 1},
      7: {"question":"Gay couples should be able to adopt", "affects":"social", "direction": -1},
      8: {"question":"Women dresses today are too revealing", "affects":"social", "direction": 1},
      9: {"question":"Corporations are unfairly exploiting their workers", "affects":"economic", "direction": -1},
      10: {"question":"Charter schools are a better solution than a public education system", "affects":"economic", "direction": 1},
      11: {"question":"People who say things I consider objectionable should be punished", "affects":"social", "direction": 1},
      12: {"question":"Trans people should live by the gender they want and be legally recognized as it ", "affects":"social", "direction": -1},
      13: {"question":"The government should ensure everyone gets enough to live", "affects":"economic", "direction": -1},
      14: {"question":"Rent control is a good idea", "affects":"economic", "direction": -1},
      15: {"question":"If you have nothing to hide, you have nothing to fear", "affects":"social", "direction": 1},
      16: {"question":"Access to abortion should be restricted ", "affects":"social", "direction": 1},
      17: {"question":"We should welcome immigrants and refugees", "affects":"social", "direction": -1},
      18: {"question":"Government should never subisize businesses", "affects":"economic", "direction": 1},
      19: {"question":"The government should restrict the sales of weapons", "affects":"social", "direction": 1},
      20: {"question":"It would be better if there were less things in the way of our government and our police officiers", "affects":"social", "direction": 1},
      21: {"question":"I support universal healthcare", "affects":"economic", "direction": -1},
      22: {"question":"If someone else's house burns, it is not my problem and I should not pay for the carelessness of others", "affects":"economic", "direction": 1},
      23: {"question":"The police and the courts should be handled by the free markets and paid for by voluntarily individuals", "affects":"economic", "direction": 1},
      24: {"question":"Black lives matter", "affects":"social", "direction": -1},


    };
  }
  changeEconomicStateBy = (number) => {
    this.nextQuestion();
    this.setState({economic:this.state.economic+number});
  }

  changeSocialStateBy = (number) => {
    this.nextQuestion();
    this.setState({social:this.state.social+number});
  }
  nextQuestion = () => {
    if (this.state.questionIndex<24){
    this.setState({questionIndex:this.state.questionIndex+1});
  }
  }

  render(){
    let answerSelection = this.getIfMobile() ? (<AnswerSelectionMobile question={this.questions[this.state.questionIndex]} questionHandler={this.nextQuestion} clickHandlerFunctions={{ "economic": this.changeEconomicStateBy, "social": this.changeSocialStateBy }}></AnswerSelectionMobile>) :
    (      <AnswerSelection question={this.questions[this.state.questionIndex]} questionHandler={this.nextQuestion} clickHandlerFunctions={{ "economic": this.changeEconomicStateBy, "social": this.changeSocialStateBy }}></AnswerSelection>    )
  return (
    <div className="App">
      <div className="overviewArea">
      <Grid economic={this.state.economic} social={this.state.social}></Grid>
        <Question questionString={this.questions[this.state.questionIndex]["question"]} index={this.state.questionIndex}></Question>
      </div>
      {answerSelection}
        </div>
  );
  }
  
}



export default App;
