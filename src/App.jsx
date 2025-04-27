import './App.css';
import  Grid  from "./grid/Grid.jsx";
import Question from "./Question/Question.jsx";
import AnswerSelection from "./AnswerSelection/AnswerSelection.jsx"
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from "react-router";

import CONFIG from './parameters.js';



export default function App() {
  let params = useParams(); 

  const [fieldX, setFieldX] = useState(0)
  const [fieldY, setFieldY] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [fieldXName, setFieldXName] = useState("")
  const [fieldYName, setFieldYName] = useState("")
  const [questions, setQuestions] = useState([{}])
  const [fieldXQuestionNumber, setFieldXQuestionNumber] = useState(0)
  const [fieldYQuestionNumber, setFieldYQuestionNumber] = useState(0)

  useEffect(()=> {
    fetch(CONFIG.URL+"/questions?id="+(params.id||"1"), {method:  "GET"})
    .then(res=>res.json())
    .then((data)=> {
      setQuestions(data.questions)
      setFieldXName(data.Field1Name)
      setFieldYName(data.Field2Name)
      setFieldXQuestionNumber(data.Field1QuestionQty)
      setFieldYQuestionNumber(data.Field2QuestionQty)
    })
  }, [])

  const nextQuestion = () => {
    if (questionIndex<questions.length-1) {
      setQuestionIndex(questionIndex + 1)
  }
}

  const onAnswerSelected = (score) => {
    const question = questions[questionIndex]
    if (question.affects == fieldXName) {
      setFieldX(fieldX + score * question.direction )
    } else {
      setFieldY(fieldY + score * question.direction)
    }
    nextQuestion()

  }
  return (
    <>
        <div className="App">
      <div className="overviewArea">
        <Grid fieldNames={{ "x": fieldXName, "y": fieldYName }} questionNumbers={{ "x": fieldXQuestionNumber, "y": fieldYQuestionNumber }} economic={fieldX} social={fieldY}></Grid>
        <Question questionNumber={fieldXQuestionNumber + fieldYQuestionNumber} questionString={questions[questionIndex]["question"]} index={questionIndex}></Question>
      </div>
      <AnswerSelection onAnswerSelected={onAnswerSelected} />
    </div></>
  );

}