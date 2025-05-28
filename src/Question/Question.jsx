import { Component, Fragment } from "react";
import "./Question.css"


class Question extends Component{
    constructor(props) {
        super(props);
      }
      render(){
        return(
            <Fragment>
                <div className="question">
                   { this.props.questionString }
                   <div className ="index">
                     {this.props.index+1}/{this.props.questionNumber}
                   </div>
                </div>
            </Fragment>
        )
      }
    }
    export default Question;