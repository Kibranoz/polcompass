import { Fragment, useState } from "react";
import { QuestionDesigner } from "./QuestionDesigner";

import "./designer.css"

export function Designer() {
    const [questions, setQuestions] = useState([])
    const [lastQuestionId, setLastQuestionId] = useState(0)

    const [questionsDesigners, setQuestionsDesigners] = useState([])
    const [affectsDesigners, setAffectsDesigners] = useState([])
    const [directionsDesigners, setDirectionsDesigners] = useState([])

    const [xFieldName, setXFieldName] = useState("")
    const [yFieldName, setYFieldName] = useState("")

    const [fieldNameDisabled, setFieldNameDisabled] = useState(false)




    function addNewQuestion() {
        setQuestionsDesigners([...questionsDesigners, <input type="text" id={"question_"+lastQuestionId}/>])
        setAffectsDesigners([...affectsDesigners, <select id={"affects_"+lastQuestionId}><option value={xFieldName}>{xFieldName}</option><option value={yFieldName}>{yFieldName}</option></select>])
        setDirectionsDesigners([...directionsDesigners, <input type="range" min="-2" max="2" id={"direction_"+lastQuestionId}/>])
        if (lastQuestionId == 0) {
            setFieldNameDisabled(true)
        }
        setLastQuestionId(lastQuestionId + 1)
    }

    return (
        <Fragment>
            <div className="fieldName">
                <label>X field name: </label>
                <input disabled={fieldNameDisabled} type="text" onChange={(el)=>setXFieldName(el.target.value)}></input>
                <label>Y field name: </label>
                <input disabled={fieldNameDisabled} type="text" onChange={(el)=>setYFieldName(el.target.value)}></input>
            </div>
            <div className="entriesRow">
            <div className="numberColumn">
                #

            </div>
            <div className="questionsColumn">
                Questions
                {questionsDesigners}
            </div>
            <div className="affectsColumn">
                Affects
                {affectsDesigners}
            </div>
            <div className="directionsColumn">
                Direction
                {directionsDesigners}
            </div>
            </div>
        <button onClick={addNewQuestion}>
        Add new Question
        </button>
        </Fragment>
    )

}