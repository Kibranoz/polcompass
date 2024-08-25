import { Component, Fragment } from "react";

import "./AnswerButton.css"

export default function AnswerButtonMobile ({clickHandler, text, color}) {
  
    return(
        <Fragment>
            <div onClick = {clickHandler} className="answerButtonMobile" style = {{backgroundColor:color}}>
               { text }
            </div>
        </Fragment>
    )
}
