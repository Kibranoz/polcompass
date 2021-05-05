import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import "./AnswerButton.css"
class AnswerButton extends Component{
    constructor(props) {
        super(props);
      }
      clickHandler = () => {
        this.props.clickHandler();
        this.props.updater();
      }
      render(){
        return(
            <Fragment>
                <div onClick = {this.clickHandler} className="answerButton" style = {{backgroundColor:this.props.color}}>
                   { this.props.answer }
                </div>
            </Fragment>
        )
      }
    }
    export default AnswerButton;