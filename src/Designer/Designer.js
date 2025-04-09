import { Fragment, useState } from "react";

import "./designer.css"

export function Designer() {
    const [questions, setQuestions] = useState([])
    const [lastQuestionId, setLastQuestionId] = useState(0)

    const [questionsDesigners, setQuestionsDesigners] = useState([])
    const [affectsDesigners, setAffectsDesigners] = useState([])
    const [directionsDesigners, setDirectionsDesigners] = useState([])
    const [questionsNumbers, setQuestionNumbers] = useState([])

    const [xFieldName, setXFieldName] = useState("")
    const [yFieldName, setYFieldName] = useState("")

    const [fieldNameDisabled, setFieldNameDisabled] = useState(false)
    const [addQuestionAllowed, setAddQuestionAllowed] = useState(false)


    function addNewQuestion() {
        setQuestionsDesigners([...questionsDesigners, <input type="text" id={"question_"+lastQuestionId}/>])
        setAffectsDesigners([...affectsDesigners, <select id={"affects_"+lastQuestionId}><option value={xFieldName}>{xFieldName}</option><option value={yFieldName}>{yFieldName}</option></select>])
        setDirectionsDesigners([...directionsDesigners, <select id={"direction_"+lastQuestionId}><option value="1">Up or rightwards</option><option value="-1">Down or leftwards</option></select>])
        if (lastQuestionId == 0) {
            setFieldNameDisabled(true)
        }
        setLastQuestionId(lastQuestionId + 1)
        setQuestionNumbers([...questionsNumbers, <div>{lastQuestionId}</div>])
    }

    function parseQuestions() {
        setQuestions([])
        for (let i = 0; i < lastQuestionId; i++) {
            const question = document.getElementById("question_"+i).value
            const affects = document.getElementById("affects_"+i).value
            const direction = Number.parseInt(document.getElementById("direction_"+i).value)
            questions.push({question: question, affects: affects, direction: direction})
        }
    }

    async function submit() {
        parseQuestions()
        console.log(questions)
        const data = {
            field1_name: xFieldName,
            field2_name: yFieldName,
            questions: questions
        }
        console.log(data)
        await fetch("http://localhost:8080/questions", { method: "POST", body: JSON.stringify(data) })
        .then(response => {
            if (response.ok) {
                console.log("Success")
            } else {
                console.log("Error")
            }
        })
        .catch(error => {
            console.log("Error: " + error)
        })

    }

    const xFieldHandler = (el) => {
        setXFieldName(el.target.value)
        if (xFieldName != "" && yFieldName != "") {
            setAddQuestionAllowed(true)
        } else {
            setAddQuestionAllowed(false)
        }
    }


    const yFieldHandler = (el) => {
        setYFieldName(el.target.value)
        if (xFieldName != "" && yFieldName != "") {
            setAddQuestionAllowed(true)
        } else {
            setAddQuestionAllowed(false)
        }
    }

    return (
        <Fragment>
            <div className="fieldName">
                <label>X field name: </label>
                <input disabled={fieldNameDisabled} type="text" onChange={xFieldHandler}></input>
                <label>Y field name: </label>
                <input disabled={fieldNameDisabled} type="text" onChange={yFieldHandler}></input>
            </div>
            <div className="entriesRow">
            <div className="numbersColumn">
                #
                {questionsNumbers}
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
        <button disabled={!addQuestionAllowed} onClick={addNewQuestion}>
        Add new Question
        </button>
        <button disabled={!addQuestionAllowed} onClick={submit}>Submit</button>
        </Fragment>
    )

}