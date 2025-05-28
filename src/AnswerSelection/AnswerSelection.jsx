import { Component, Fragment } from "react"
import { useTranslation } from 'react-i18next'
import "./AnswerSelection.css"
import "./AnswerButton.css"

export default function AnswerSelection({ onAnswerSelected }) {

  const { t, i18n } = useTranslation()

  function isOnMobile() {
    let width = Math.max(window.screen.width, window.innerWidth)
    return width <= 500
  }

  if (isOnMobile()) {
    return (
      <div className="answerAreaMobile">
        <Fragment>
          <div className="answerButtonMobile" onClick={() => { onAnswerSelected(2) }} style={{ backgroundColor: "seagreen" }}>
            😍
          </div>
          <div className="answerButtonMobile" onClick={() => { onAnswerSelected(1) }} style={{ backgroundColor: "darkseagreen" }}>
            🙂
          </div>
          <div className="answerButtonMobile" onClick={() => { onAnswerSelected(0) }} style={{ backgroundColor: "sandybrown" }}>
            🤨
          </div>
          <div className="answerButtonMobile" onClick={() => { onAnswerSelected(-1) }} style={{ backgroundColor: "lightcoral" }}>
            😒
          </div>
          <div className="answerButtonMobile" onClick={() => { onAnswerSelected(-2) }} style={{ backgroundColor: "indianred" }}>
            😠
          </div>
        </Fragment>
      </div>
    )
  }
  return (
    <div className="answerArea">
      <Fragment>
        <div className="answerButton" onClick={() => { onAnswerSelected(2) }} style={{ backgroundColor: "seagreen" }}>
          {t("questions.ta")}
        </div>
        <div className="answerButton" onClick={() => { onAnswerSelected(1) }} style={{ backgroundColor: "darkseagreen" }}>
          {t("questions.a")}
        </div>
        <div className="answerButton" onClick={() => { onAnswerSelected(0) }} style={{ backgroundColor: "sandybrown" }}>
          {t("questions.u")}
        </div>
        <div className="answerButton" onClick={() => { onAnswerSelected(-1) }} style={{ backgroundColor: "lightcoral" }}>
          {t("questions.d")}
        </div>
        <div className="answerButton" onClick={() => { onAnswerSelected(-2) }} style={{ backgroundColor: "indianred" }}>
          {t("questions.td")}
        </div>
      </Fragment>
    </div>
  )



}