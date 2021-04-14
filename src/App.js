import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import  Grid  from "./grid/Grid.js";
import AnswerSelection from "./AnswerSelection/AnswerSelection.js"
import { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {social:0,economic:0, questionIndex:0};
    this.questions = {
      0 : {"question":"Taxation is theft", "affects":"economic", "direction": 1}
    };
  }
  changeEconomicStateBy = (number) => {
    //on ne peut que passer des fonctions anonymes
    //num
    this.setState({economic:this.state.economic+number});
  }

  changeSocialStateBy = (number) => {
    //on ne peut que passer des fonctions anonymes
    //number = 0;
    this.setState({social:this.state.economic+number});
  }
  nextQuestion = () => {
    this.setState({questionIndex:this.state.questionIndex+1})
  }

  render(){
  return (
    <div className="App">
      <button onClick={this.raiseEconomicState} > Clic </button>
    <Grid economic = {this.state.economic} social = {this.state.social}></Grid>
    <AnswerSelection question = {this.questions[this.state.questionIndex]} questionHandler = {this.nextQuestion} clickHandlerFunctions={{"economic":this.changeEconomicStateBy,"social": this.changeSocialStateBy}}></AnswerSelection>
    </div>
  );
  }
  
}



export default App;
