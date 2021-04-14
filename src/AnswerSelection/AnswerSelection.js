import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import AnswerButton from "../AnswerButton/AnswerButton.js"
class AnswerSelection extends Component{
    constructor(props) {
        super(props);
      }
      chooseAppropriateClickHandler = (answer, intensity) => {
        return this.props.clickHandlerFunctions[this.props.question["affects"]].bind(this,answer*intensity*Number(this.props.question["direction"]))
      }
      render(){
        return(
            <Fragment>
                <AnswerButton answer="Totally agree" color = "green" clickHandler={this.chooseAppropriateClickHandler(1,2)}></AnswerButton>
                <AnswerButton answer="Agree" clickHandler={this.chooseAppropriateClickHandler(1,1)} color="green"></AnswerButton>
                <AnswerButton answer="Unsure/Neutral" color = "yellow"></AnswerButton>
                <AnswerButton answer="Disagree" color = "red" clickHandler={this.chooseAppropriateClickHandler(-1,1)}></AnswerButton>
                <AnswerButton answer="Totally Disagree" color = "red" clickHandler={this.chooseAppropriateClickHandler(-1,2)}></AnswerButton>
            </Fragment>
        )
      }
    }
    export default AnswerSelection;