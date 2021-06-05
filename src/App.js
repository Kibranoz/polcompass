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
//19 id
      0 : {"question":"L'impôt est une forme de  vol ", "affects":"socioeconomique", "direction": 1},
      1 : {"question":"Le profit que les entreprises font sur le dos des travailleurs est un vol", "affects":"socioeconomique", "direction": -1},
      2 : {"question":"Aucun immigrant ne devrait entrer au Québec sans connaitre le français, ou montrer une intention de l'apprendre", "affects":"identite", "direction": 1},
      3 : {"question":"Les infirmier.ères et les fonctionnaires de l'état devraient avoir le droit de porter des signes religieux aux travail", "affects":"identite", "direction": -1},
      4 : {"question":"Les policiers.ères, les juges et les enseignant.es devraient avoir le droit de porter des signes religieux aux travail", "affects":"identite", "direction": -1},
      5 : {"question":"Je suis en faveur les mines de lithium", "affects":"socioeconomique", "direction": -1},
      6 : {"question":"Hydro-Québec et la SAQ devraient être privatisés", "affects":"socioeconomique", "direction": 1},
      7 : {"question":"Afin de protéger le francais, il faut investir plus dans des programmes de francisation pour les nouveaux arrivants", "affects":"socioeconomique", "direction": -1},
      8 : {"question":"Le Québec devrait être un pays indépendant", "affects":"identite", "direction": 1},
      9 : {"question":"Les taux d'immigration actuels sont trop élevés", "affects":"identite", "direction": 1},
      10 : {"question":"J'accorde une grande importance à la protection de la langue francaise", "affects":"identite", "direction": 1},
      11 : {"question":"Internet devrait être un service public accessible à tous", "affects":"socioeconomique", "direction": -1},
      12 : {"question":"Le mouvement woke menace notre facon de vivre", "affects":"identite", "direction": 1},
      13 : {"question":"Je suis en faveur de mesures de tarification du carbone.", "affects":"socioeconomique", "direction": -1},
      14 : {"question":"Je suis prêt à payer plus cher pour des biens et services s'ils sont plus écologiques", "affects":"socioeconomique", "direction": -1},
      15 : {"question":"Le montant alloué à l'aide sociale devrait être réduit", "affects":"socioeconomique", "direction": 1},
      16 : {"question":"Je suis en faveur d'un revenu minimum garanti", "affects":"socioeconomique", "direction": -1},
      17 : {"question":"Le gouvernement doit réduire les impots avant de réinvestir dans les programmes sociaux", "affects":"socioeconomique", "direction": 1},
      18 : {"question":"Les syndicats ont trop d'influence au Québec", "affects":"socioeconomique", "direction": 1},
      19 : {"question":"Personne ne devrait faire de prison pour possession simple de stupéfiants", "affects":"socioeconomique", "direction": -1},
      20 : {"question":"La propriété terrestre n'est pas une forme légitime de propriété", "affects":"socioeconomique", "direction": -1},
      21 : {"question":"Les cours d'histoire au secondaire devraient être bonifiés", "affects":"identite", "direction": 1},
      22 : {"question":"Le drapeau Québécois doit être dans toutes les salles de classes de l'état", "affects":"identite", "direction": 1},
      23 : {"question":"L'immigration est une menace pour la survie de la nation", "affects":"identite", "direction": 1},
      24 : {"question":"Le gouvermenent devrait faire plus d'efforts pour promouvoir la culture nationale", "affects":"identite", "direction": 1},
      25 : {"question":"Tout service de webdiffusion devrait offrir un minumum de contenu culturel local", "affects":"identite", "direction": 1},
      26 : {"question":"La loi 101 doit être étendue aux cégeps", "affects":"identite", "direction": 1},
      27 : {"question":"L'augmentation de prix soudaine face à une pénurie est une réaction naturelle et bénéfique du marché", "affects":"socioeconomique", "direction": 1},
      28 : {"question":"Je préfère qu'on finance la construction de nouvelles autoroutes plutôt que des infrastructures de transport en commun", "affects":"socioeconomique", "direction": 1},
      28 : {"question":"Si une compagnie fait failite, c'est de sa faute et l'état ne devrait pas la sauver", "affects":"socioeconomique", "direction": 1},
      29 : {"question":"Le gouvernement devrait interdire la vente d'armes de guerre à des pays comme l'Arabie saoudite", "affects":"socioeconomique", "direction": -1},
      30 : {"question":"Les collectivités devraient avoir un mot à dire sur les projets qui les concerne", "affects":"socioeconomique", "direction": -1},
      31 : {"question":"Le racisme systémique est une problématique auquel nous devons lutter", "affects":"identite", "direction": -1},
      32 : {"question":"Le gouvernement fédéral n'a pas son mot à dire sur la politique culturelle du Québec", "affects":"identite", "direction": 1},
      33 : {"question":"Le gouvernement devrait uniquement communiquer en français ou dans une langue autochtone avec les citoyens", "affects":"identite", "direction": 1},
      34 : {"question":"La régionalisation de l'immigration est importante car elle empêche la formation de ghettos ethniques", "affects":"identite", "direction": 1},
      35 : {"question":"Les autres gouvernements n'ont pas à critiquer les décisions que le notre met en place", "affects":"identite", "direction": 1},
      36 : {"question":"Une culture homogène aide à réduire les tensions sociales", "affects":"identite", "direction": 1},
      37 : {"question":"Une nation est beaucoup plus que la somme d'individus vivant dans un territoire donné", "affects":"identite", "direction": 1},
      38 : {"question":"L'islamisation du Québec est un phénomène qui me préoccuoe", "affects":"identite", "direction": 1},
      39 : {"question":"L'appropriation culturelle est un problème social réel", "affects":"identite", "direction": -1},
      40 : {"question":"Les Québécois sont victimes de discrimination par la francophobie", "affects":"identite", "direction": 1},
      41 : {"question":"La dette publique montante me préoccupe", "affects":"socioeconomique", "direction": 1},
      41 : {"question":"Il faut empêcher la mise en oeuvre de nouveaux projets pétroliers", "affects":"socioeconomique", "direction": -1},
      42 : {"question":"Les subventions aux écoles privés devraient être abolies", "affects":"socioeconomique", "direction": -1},
      43 : {"question":"L'inflation n'est pas un danger tant que la main d'oeuvre nationale peut répondre aux besoins nationaux, et que le gouvernement controle sa propre monnaie", "affects":"socioeconomique", "direction": -1},
      44 : {"question":"Il existe une lutte perpétuelle entre les travailleurs et le patronnat", "affects":"socioeconomique", "direction": -1},





































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
    if (this.state.questionIndex<44){
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
