import AnswerButtonMobile from "../AnswerButton/AnswerButtonMobile.js"
import { Fragment } from "react";

export default function AnswerSelectionMobile ({clickHandlerFunctions, questionHandler, question}) {
  let chooseAppropriateClickHandler = (answer, intensity) => {
    return clickHandlerFunctions[question["affects"]].bind(this,answer*intensity*Number(question["direction"]))
  }
  return(
    <div className = "answerAreaMobile">
      <Fragment>
          <AnswerButtonMobile text="😍" color = "green" questionHandler={questionHandler} clickHandler={chooseAppropriateClickHandler(1,2)}></AnswerButtonMobile>
          <AnswerButtonMobile text="🙂" color = "lightgreen" questionHandler={questionHandler} clickHandler={chooseAppropriateClickHandler(1,1)}></AnswerButtonMobile>
          <AnswerButtonMobile text="🤨" color = "darkorange" questionHandler={questionHandler} clickHandler={chooseAppropriateClickHandler(1,2)}></AnswerButtonMobile>
          <AnswerButtonMobile text="😒" color = "red" questionHandler={questionHandler} clickHandler={chooseAppropriateClickHandler(-1,1)}></AnswerButtonMobile>
          <AnswerButtonMobile text="😠" color = "darkred" questionHandler={questionHandler} clickHandler={chooseAppropriateClickHandler(-1,2)}></AnswerButtonMobile>
          </Fragment>
      </div>
  )
}