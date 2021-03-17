import logo, { ReactComponent } from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';
import  Grid  from "./grid/Grid.js";
import { Component } from 'react';
class App extends Component{
  constructor(props) {
    super(props);
    this.state = {social:0,economic:0};
  }
  raiseEconomicState = () => {
    //on ne peut que passer des fonctions anonymes
    this.setState({economic:this.state.economic+1});
  }
  render(){
  return (
    <div className="App">
      <button onClick={this.raiseEconomicState} > Clic </button>
    <Grid economic = {this.state.economic} social = {this.state.social}></Grid>
    </div>
  );
  }
}

export default App;
