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
    this.state.questions = {}
    this.questionsEN = {
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
41: {"question":"As long as all partners consent, there are nothing wrong with polygamy", "affects":"social", "direction": -1},
42: {"question":"Religion should take a bigger role in society", "affects":"social", "direction": 1},
43: {"question":"A poor Iranian and a poor American have much more in common that a poor American and a rich American", "affects":"economic", "direction": -1},
44: {"question":"The environnmental disaster we are in is the proof of the failure of capitalism", "affects":"economic", "direction": -1}

    };

    this.questionsFR = {
      //19 id
      0 : {"question":"L'impot est un vol", "affects":"economic", "direction": 1},
      1 : {"question":"L'état devrait jeter en prison ceux qui consomment de la drogue", "affects":"social", "direction": 1},
      2 : {"question":"IJe suis pour une taxe carbone", "affects":"economic", "direction": -1},
      3: {"question":"Ça serait mieux si le gouvernement controllerait l'économie", "affects":"economic", "direction": -1},
      4: {"question":"La prostitution impliquant des adultes consentants devrait être légale", "affects":"social", "direction": -1},
      5: {"question":"Des pays comme l'Arabie Saoudite et la Chine gouvernent plus efficacement que des pays la France ou le Canada", "affects":"social", "direction": 1},
      6: {"question":"Un salaire minimum dicté par l'état serait une mauvaise idéé : laissez les gens négocier pour eux mêmes", "affects":"economic", "direction": 1},
      7: {"question":"Les couples homosexuels devrait avoir le droit d'adopter", "affects":"social", "direction": -1},
      8: {"question":"La façon dont les femmes s'habillent aujourd'hui est trop révélatrice", "affects":"social", "direction": 1},
      9: {"question":"Les corporations exploitent injustement les travailleurs", "affects":"economic", "direction": -1},
      10: {"question":"Les écoles privées subventionnées seraient une meilleur option que celui géré par l'état", "affects":"economic", "direction": 1},
      11: {"question":"Ceux qui disent des choses que je trouve offensantes devraient être punies", "affects":"social", "direction": 1},
      12: {"question":"Les personnes trans devraient avoir une reconnaissance légale du genre auxquels ils s'identifient ", "affects":"social", "direction": -1},
      13: {"question":"Le gouvernement devrait s'assurer que tout le monde ait assez pour vivre", "affects":"economic", "direction": -1},
      14: {"question":"Le controle du prix des loyers est une bonne idée", "affects":"economic", "direction": -1},
      15: {"question":"Si vous n'avez rien à cacher, vous n'avez rien à craindre", "affects":"social", "direction": 1},
      16: {"question":"L'accès à l'avortement devrait être restreint", "affects":"social", "direction": 1},
      17: {"question":"Il faut acueillir les immigrants et les réfugiés", "affects":"social", "direction": -1},
      18: {"question":"Le gouvernement ne devrait jamais subventionner les entreprises/", "affects":"economic", "direction": 1},
      19: {"question":"Le gouvernement devrait restreindre la vente d'armes", "affects":"social", "direction": 1},
      20: {"question":"Ca serait mieux s'il y aurait moins de choses qui entravent les policiers ", "affects":"social", "direction": 1},
      21: {"question":"Je supporte l'assurance santé universelle", "affects":"economic", "direction": -1},
      22: {"question":"Si la maison de quelqu'un d'autre brule, ce n'est pas mon problème et je ne devrait pas avoir à payer pour l'imprudence des autres", "affects":"economic", "direction": 1},
      23: {"question":"La police et le système judiciaire devrait être géré par libre marché, et payé par des individus de facon volontaire", "affects":"economic", "direction": 1},
      24: {"question":"La vie des noirs compte", "affects":"social", "direction": -1},
      25: {"question":"La propriété terrestre n'est pas une forme légitime de propriété", "affects":"economic", "direction": -1},
      26: {"question":"Le stock de nourriture devrait être géré par l'état", "affects":"economic", "direction": -1},
      27: {"question":"Les personnes malades ou souffrantes devraient avoir accès à l'aide médicale à mourir", "affects":"social", "direction": -1},
      28: {"question":"Les lois et réglements ne devraient pas être questionnées", "affects":"social", "direction": 1},
      29: {"question":"Forcer les enfants a caliner ou donner un bec à leurs parents viole leur autonomie corporelle", "affects":"social", "direction": -1},
      30: {"question":"Les criminels ne devraient pas avoir le droit de vote", "affects":"social", "direction": 1},
      31: {"question":"Les boycotts sont une meilleure facon de rendre les entreprises redevable que l'action gouvernementale", "affects":"economic", "direction": 1},
      32: {"question":"Un bon dictateur est mieux qu'une démocratie imparfaite", "affects":"social", "direction": 1},
      33: {"question":"La police ne devrait pas avoir accès aux résidences privés sans mandat de perquisition", "affects":"social", "direction": 1},
      34: {"question":"C'est moral pour quelqu'un d'affamé de voler une épicerie", "affects":"social", "direction": -1},
      35: {"question":"L'augmentation subite des prix lors de sinistres est un mécanisme normal et sain du marché ", "affects":"economic", "direction": 1},
      36: {"question":"Le libre éhange est touujours bénéfique entre les nations", "affects":"economic", "direction": 1},
      37: {"question":"La montée des cryptomonnaies est positives car elle enlève le controle monétaire du gouvernement", "affects":"economic", "direction": 1},
      38: {"question":"Les syndicats font de l'extorsion envers les employés et les consommateurs", "affects":"economic", "direction": 1},
      39: {"question":"Les moyens de production devraient appartenir aux travailleurs qui les utilisent", "affects":"economic", "direction": -1},
      40: {"question":"Le gouvernement devrait s'assurer qu'il y ait de la compétition, en forcant les compagnies à se séparer si nécéssaire", "affects":"economic", "direction": -1},
      41: {"question":"Tant que toutes les parties sont consentantes, les relations polygames devraient être acceptées", "affects":"social", "direction": -1},
      42: {"question":"La religion devrait jouer un rôle plus grand dans la société", "affects":"social", "direction": 1},
      43: {"question":"Un iranien pauvre et un américain pauvre ont plus en commun qu'un américain riche et un américain pauvre et vice versa", "affects":"economic", "direction": -1},
      44: {"question":"Le désastre environnemental dans lequel nous vivons est un signe de l'échec du capitalisme", "affects":"economic", "direction": -1}
      
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

  componentDidMount(){
    var lang = navigator.language;
    if (lang == "fr"){
      this.setState({questions : this.state.questionsFR})
    }
    else{
      this.setState({questions : this.state.questionsEN})
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
