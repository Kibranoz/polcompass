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
    this.state = {socioeconomique:0,identite:0, questionIndex:0};
    this.questions = {
//7 id
      0 : {"question":"Les taxes et impôts constituent une forme de vol ", "affects":"socioeconomique", "direction": 1},
      1 : {"question":"Le mode de production capitaliste est un vol envers la classe prolétaire", "affects":"socioeconomique", "direction": -1},
      2 : {"question":"Aucun immigrant ne devrait entrer au Québec sans connaitre le francais, ou montrer une intention de l'apprendre", "affects":"identite", "direction": 1},
      3 : {"question":"Les infirmier.ères et les fonctionnaires administratifs au service de l'état devraient avoir le droit de porter des signes religieux aux travail", "affects":"identite", "direction": -1},
      4 : {"question":"Les policiers.ères et les juges, les enseignant.es devraient avoir le droit de porter des signes religieux aux travail", "affects":"identite", "direction": -1},
      5 : {"question":"Il faudrait nationaliser les mines de lithium", "affects":"socioeconomique", "direction": -1},
      6 : {"question":"Il faut privatiser Hydro-Québec et la SAQ", "affects":"socioeconomique", "direction": 1},
      7 : {"question":"Afin de protéger le francais, il faut investir plus dans des programmes de francisation pour les nouveaux arrivants", "affects":"socioeconomique", "direction": -1},
      8 : {"question":"Le Québec devrait être un pays indépendant", "affects":"identite", "direction": 1},
      9 : {"question":"Si le Québec devenait un pays, il devrait garder ses frontières ouvertes avec le Canada et les États-Unis", "affects":"identite", "direction": -1},
      10 : {"question":"J'accorde une grande importance à la protection de la langue francaise au Québec", "affects":"identite", "direction": 1},
      11 : {"question":"Internet devrait être un service public accessible à tous", "affects":"socioeconomique", "direction": -1},
      12 : {"question":"Le mouvement woke menace notre facon de vivre", "affects":"identite", "direction": 1},
      13 : {"question":"Je suis en faveur de la tarification du carbone, comme la bourse du carbone", "affects":"socioeconomique", "direction": -1},
      14 : {"question":"Je suis en faveur d'une expansion de la production de la production d'éléctricité d'Hydro-Quebec, même si cela signifie une augmentation du prix de l'électricité à moyen terme", "affects":"socioeconomique", "direction": -1},
      13 : {"question":"Il faut réduire ;", "affects":"socioeconomique", "direction": -1},












    };
  }
  changeidentiteStateBy = (number,doSwitch) => {
    //on ne peut que passer des fonctions anonymes
    //num
    this.switchQuestion(doSwitch);
    this.setState({identite:this.state.identite+number});
    console.log(this.state)
  }

  changesocioeconomiqueStateBy = (number,doSwitch) => {
    //on ne peut que passer des fonctions anonymes
    //number = 0;
    this.switchQuestion(doSwitch);
    this.setState({socioeconomique:this.state.socioeconomique+number});
    console.log(this.state)
  }
  switchQuestion = (by=1) => {
    if (this.state.questionIndex<15){
    this.setState({questionIndex:this.state.questionIndex+by});
    console.log('next')
  }
  }
  
  

  render(){
  return (
    <div className="App">
      <div id="separator"></div>
      <div className="container-fluid">
      <div className = "row">
      <div className="col-xl-5">
    <Grid identite = {this.state.identite} socioeconomique = {this.state.socioeconomique}></Grid>
    </div>
    <div className="col-xl-7 qContainer">
    <Question questionString = {this.questions[this.state.questionIndex]["question"]} index ={ this.state.questionIndex}></Question>
    </div>
    </div></div> 
    <AnswerSelection question = {this.questions[this.state.questionIndex]} questionHandler = {this.switchQuestion} clickHandlerFunctions={{"identite":this.changeidentiteStateBy,"socioeconomique": this.changesocioeconomiqueStateBy}} clickHandlerFunctionsII={{"identite":this.changeidentiteStateBy,"socioeconomique": this.changesocioeconomiqueStateBy}}></AnswerSelection>
    </div>
  );
  }
  
}



export default App;
