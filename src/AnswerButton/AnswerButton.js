import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import "./AnswerButton.css"
class AnswerButton extends Component{
    constructor(props) {
        super(props);
      }
      render(){
        return(
            <Fragment>
                <div onClick = {this.props.clickHandler} className="answerButton" style = {{backgroundColor:this.props.color}}>
                   { this.props.answer }
                </div>
            </Fragment>
        )
      }
    }
    export default AnswerButton;