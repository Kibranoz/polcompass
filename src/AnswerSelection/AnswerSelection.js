import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import AnswerButton from "../AnswerButton/AnswerButton.js"
import "./AnswerSelection.css"
class AnswerSelection extends Component{
    constructor(props) {
        super(props);
        this.state = {lastAffected:"social",lastDirection:0,lastIntensity:0, lastAnswer:1, canGoBack:false};
      }
      updateHandler = (answer,intensity) => {
        this.newState = {lastAffected:this.props.question["affects"],lastDirection:Number(this.props.question["direction"]),lastIntensity:intensity, lastAnswer:answer, canGoBack:true};
        this.setState(this.newState);
        console.log('update')
      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        //this.setState({lastAffected:this.props.question["affects"]});
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]))
      }

      updateBackHandler = () => {
        this.setState({canGoBack:false});
        console.log("back")
      }
      
      backHandler = () => {
        if (this.state.canGoBack){
          //this.setState({canGoBack:false});
          return this.props.clickHandlerFunctions[this.state.lastAffected].bind(this,-1*this.state.lastAnswer*this.state.lastIntensity*this.state.lastDirection)

        }

      }
      render(){
        return(
          <div className = "questionArea">
            <Fragment>
                <AnswerButton answer="Totally agree" questionHandler = {this.switchQuestion} color = "#81D799" clickHandler={this.chooseAppropriateClickHandler(1,2)} updateHandler={()=>this.updateHandler(1,2)}></AnswerButton>
                <AnswerButton answer="Agree" questionHandler = {this.switchQuestion} clickHandler={this.chooseAppropriateClickHandler(1,1)} color="#BAE6C2" updateHandler={()=>this.updateHandler(1,1)}></AnswerButton>
                <AnswerButton answer="Unsure/Neutral" questionHandler = {this.switchQuestion} color = "#EEE573"></AnswerButton>
                <AnswerButton answer="Disagree" questionHandler = {this.switchQuestion} color = "#FFADAB" clickHandler={this.chooseAppropriateClickHandler(-1,1)}updateHandler={()=>this.updateHandler(-1,1)}></AnswerButton>
                <AnswerButton answer="Totally Disagree" questionHandler = {this.switchQuestion} color = "#EE7373" clickHandler={this.chooseAppropriateClickHandler(-1,2)}updateHandler={()=>this.updateHandler(-1,2)}></AnswerButton>
                <AnswerButton answer="Go back" questionHandler = {this.switchQuestion(by=-2)} color = "#EE7373" clickHandler={this.backHandler} updateHandler={this.updateBackHandler}></AnswerButton>
            </Fragment>
            </div>
        )
      }
    }
    export default AnswerSelection;