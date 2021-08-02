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
//19 id
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
18: {"question":"The government should never subisize businesses", "affects":"economic", "direction": 1},
19: {"question":"The government should restrict the sales of weapons", "affects":"social", "direction": 1},
20: {"question":"It would be better if there were less things in the way of our government and our police officiers", "affects":"social", "direction": 1},
21: {"question":"I support universal healthcare", "affects":"economic", "direction": -1},
22: {"question":"If someone else's house burns, it is not my problem and I should not pay for the carelessness of others", "affects":"economic", "direction": 1},
23: {"question":"The police and the courts should be handled by the free markets and paid for by voluntarily individuals", "affects":"economic", "direction": 1},
24: {"question":"Black lives matter", "affects":"social", "direction": -1},
25: {"question":"Land property isn't a legitimate form of property", "affects":"economic", "direction": -1},
26: {"question":"Food supply should be managed by the state", "affects":"economic", "direction": -1},
27: {"question":"Sick and suffering people should be able to seek medical assistance to end their own lives", "affects":"social", "direction": -1},
28: {"question":"Laws and rules are not to be debated. One must always follow them", "affects":"social", "direction": 1},
29: {"question":"Forcing children to hug or kiss relatives is violating bodily autonomy", "affects":"social", "direction": -1},
30: {"question":"Felons should not be able to vote", "affects":"social", "direction": 1},
31: {"question":"Boycotts are a better way to hold coroporations accountable than government regulation", "affects":"economic", "direction": 1},
32: {"question":"A benevolent dictator is preferable to an unperfect democracy", "affects":"social", "direction": 1},
33: {"question":"The police should be able to search homes without any warrant", "affects":"social", "direction": 1},
34: {"question":"It's morally okay if someone hungry steals from the grocery store", "affects":"social", "direction": -1},
35: {"question":"Price gouging is an healthy market mechanism to avoid overconsumption in supply crisis", "affects":"economic", "direction": 1},
36: {"question":"Free trade is always beneficient between nations", "affects":"economic", "direction": 1},
37: {"question":"The rise of cryptocurrencies is positive because it remove monetary control from the government", "affects":"economic", "direction": 1},
38: {"question":"Unions are extorting consumers and employers", "affects":"economic", "direction": 1},
39: {"question":"The means of production should belong to the workers who uses them", "affects":"economic", "direction": -1},
40: {"question":"The government should ensure there is competition, even by breaking up businesses if necessary", "affects":"economic", "direction": -1},
41: {"question":"As long as all partners consent, there are nothing wrong with three-or-more relationships", "affects":"social", "direction": -1},
42: {"question":"Religion should take a bigger role in society", "affects":"social", "direction": 1},
43: {"question":"A poor Iranian and a poor American have much more in common that a poor American and a rich American", "affects":"economic", "direction": -1},
44: {"question":"The environnmental disaster we are in is the proof of the failure of capitalism", "affects":"economic", "direction": -1}

    };
  }
  changeidentiteStateBy = (number,doSwitch) => {
    //on ne peut que passer des fonctions anonymes
    //num
    this.switchQuestion(doSwitch);
    this.setState({economic:this.state.economic+number});
    console.log(this.state)
  }

  changesocialStateBy = (number,doSwitch) => {
    //on ne peut que passer des fonctions anonymes
    //number = 0;
    this.switchQuestion(doSwitch);
    this.setState({social:this.state.social+number});
    console.log(this.state)
  }
  switchQuestion = (by=1) => {
    if (this.state.questionIndex<44){
    this.setState({questionIndex:this.state.questionIndex+by});
    console.log(this.state.questionIndex);
  }
  }
  
  

  render(){
  return (
    <div className="App">
      <div id="separator"></div>
      <div className="container-fluid">
      <div className = "row">
      <div className="col-xl-5">
    <Grid economic = {this.state.economic} social = {this.state.social}></Grid>
    </div>
    <div className="col-xl-7 qContainer">
    <Question questionString = {this.questions[this.state.questionIndex]["question"]} index ={ this.state.questionIndex}></Question>
    </div>
    </div></div> 
    <AnswerSelection question = {this.questions[this.state.questionIndex]} questionHandler = {this.switchQuestion} clickHandlerFunctions={{"economic":this.changeidentiteStateBy,"social": this.changesocialStateBy}} clickHandlerFunctionsII={{"economic":this.changeidentiteStateBy,"social": this.changesocialStateBy}}></AnswerSelection>
    </div>
  );
  }
  
}



export default App;
