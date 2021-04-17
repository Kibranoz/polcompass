import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import AnswerButton from "../AnswerButton/AnswerButton.js"
import "./AnswerSelection.css"
class AnswerSelection extends Component{
    constructor(props) {
        super(props);
      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]))
      }
      render(){
        return(
          <div className = "questionArea">
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
    export default AnswerSelection;