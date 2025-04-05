import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import "./AnswerSelection.css"
import "./AnswerButton.css"

export default function AnswerSelection({onAnswerSelected}) {

  function isOnMobile() {
    let width = Math.max(window.screen.width, window.innerWidth);
    return width<=500
  }

  if (isOnMobile()) {
    return (
      <div className = "answerAreaMobile">
      <Fragment>
      <div className="answerButtonMobile" onClick={()=>{onAnswerSelected(2)}} style = {{backgroundColor:"seagreen"}}>
      😍
      </div>
      <div className="answerButtonMobile" onClick={()=>{onAnswerSelected(1)}} style = {{backgroundColor:"darkseagreen"}}>
      🙂
      </div>
      <div className="answerButtonMobile" onClick={()=>{onAnswerSelected(0)}} style = {{backgroundColor:"sandybrown"}}>
      🤨      
      </div>
      <div className="answerButtonMobile" onClick={()=>{onAnswerSelected(-1)}} style = {{backgroundColor:"lightcoral"}}>
      😒
      </div>
      <div className="answerButtonMobile" onClick={()=>{onAnswerSelected(-2)}} style = {{backgroundColor:"indianred"}}>
      😠      
      </div>
      </Fragment>
      </div>
    )
  }
  return(
    <div className = "answerArea">
      <Fragment>
      <div className="answerButton" onClick={()=>{onAnswerSelected(2)}} style = {{backgroundColor:"seagreen"}}>
        Totally agree
      </div>
      <div className="answerButton" onClick={()=>{onAnswerSelected(1)}} style = {{backgroundColor:"darkseagreen"}}>
        Agree
      </div>
      <div className="answerButton" onClick={()=>{onAnswerSelected(0)}} style = {{backgroundColor:"sandybrown"}}>
        Unsure / Neutral
      </div>
      <div className="answerButton" onClick={()=>{onAnswerSelected(-1)}} style = {{backgroundColor:"lightcoral"}}>
        Disagree
      </div>
      <div className="answerButton" onClick={()=>{onAnswerSelected(-2)}} style = {{backgroundColor:"indianred"}}>
        Totally disagree
      </div>
      </Fragment>
      </div>
  )



}
/**class AnswerSelection extends Component{
    constructor(props) {
        super(props);
      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]))
      }
      render(){
        return(
          <div className = "answerArea">
            <Fragment>
                <AnswerButton answer="Totally agree" questionHandler = {this.nextQuestion} color = "seagreen" clickHandler={this.chooseAppropriateClickHandler(1,2)}></AnswerButton>
                <AnswerButton answer="Agree" questionHandler = {this.nextQuestion} clickHandler={this.chooseAppropriateClickHandler(1,1)} color="darkseagreen"></AnswerButton>
                <AnswerButton answer="Unsure/Neutral" questionHandler = {this.nextQuestion} color = "sandybrown"></AnswerButton>
                <AnswerButton answer="Disagree" questionHandler = {this.nextQuestion} color = "lightcoral" clickHandler={this.chooseAppropriateClickHandler(-1,1)}></AnswerButton>
                <AnswerButton answer="Totally Disagree" questionHandler = {this.nextQuestion} color = "indianred" clickHandler={this.chooseAppropriateClickHandler(-1,2)}></AnswerButton>
            </Fragment>
            </div>
        )
      }
    }
      **/

