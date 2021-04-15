import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import  Grid  from "./grid/Grid.js";
import Question from "./Question/Question.js";
import AnswerSelection from "./AnswerSelection/AnswerSelection.js"
import { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {social:0,economic:0, questionIndex:0};
    this.questions = {
      0 : {"question":"Taxation is theft", "affects":"economic", "direction": 1},
      1 : {"question":"Drug use should remain criminalized", "affects":"social", "direction": -1},
      2 : {"question":"I support a carbon tax", "affects":"economic", "direction": -1},
      3: {"question":"It would be better if the governement controlled the economy", "affects":"economic", "direction": -1},
      4: {"question":"Sex work, whether it's OnlyFans, or consenting sexual relations involving payment, should always be legal ", "affects":"social", "direction": 1},
      5: {"question":"Countries like China are doing a better job at governing than countries like the United States or Canada", "affects":"social", "direction": -1},
      6: {"question":"A minimum wage set by the gouvernment is a bad idea : let people negotiate wages on their own", "affects":"economic", "direction": 1}


    };
  }
  changeEconomicStateBy = (number) => {
    //on ne peut que passer des fonctions anonymes
    //num
    this.nextQuestion();
    this.setState({economic:this.state.economic+number});
  }

  changeSocialStateBy = (number) => {
    //on ne peut que passer des fonctions anonymes
    //number = 0;
    this.nextQuestion();
    this.setState({social:this.state.social+number});
  }
  nextQuestion = () => {
    if (this.state.questionIndex<6){
    this.setState({questionIndex:this.state.questionIndex+1});
    console.log('next')
  }
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.raiseEconomicState} > Clic </button>
    <Grid economic = {this.state.economic} social = {this.state.social}></Grid>
    <Question questionString = {this.questions[this.state.questionIndex]["question"]}></Question>
    <AnswerSelection question = {this.questions[this.state.questionIndex]} questionHandler = {this.nextQuestion} clickHandlerFunctions={{"economic":this.changeEconomicStateBy,"social": this.changeSocialStateBy}}></AnswerSelection>
    </div>
  );
  }
  
}



export default App;
