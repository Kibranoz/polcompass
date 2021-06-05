import { render } from "@testing-library/react";
import { Component, Fragment } from "react";
import "./Question.css"


class Question extends Component{
    constructor(props) {
        super(props);
      }
      render(){
        return(
            <Fragment>
                <div className="question container-fluid">
                   { this.props.questionString }
                   <div className ="index">
                     {this.props.index}/44
                   </div>
                </div>
            </Fragment>
        )
      }
    }
    export default Question;