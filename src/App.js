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

      //8 economic
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
    if (this.state.questionIndex<18){
    this.setState({questionIndex:this.state.questionIndex+1});
    console.log('next')
  }
  }

  render(){
  return (
    <div className="App">
      <div className="container-fluid">
      <div className = "row">
      <div className="col-12">
    <Grid economic = {this.state.economic} social = {this.state.social}></Grid>
    </div></div>
    <div className="container-fluid">
    <div className="col-12">
    <Question questionString = {this.questions[this.state.questionIndex]["question"]}></Question>
    </div></div> </div>
    <AnswerSelection question = {this.questions[this.state.questionIndex]} questionHandler = {this.nextQuestion} clickHandlerFunctions={{"economic":this.changeEconomicStateBy,"social": this.changeSocialStateBy}}></AnswerSelection>
    </div>
  );
  }
  
}



export default App;
