import './App.css';
import  Grid  from "./grid/Grid.js";
import Question from "./Question/Question.js";
import AnswerSelection from "./AnswerSelection/AnswerSelection.js"
import { useState } from 'react';
import { useMemo } from 'react';
import { useParams } from "react-router";



export default function App() {
  let params = useParams(); 

  const [fieldX, setFieldX] = useState(0)
  const [fieldY, setFieldY] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [fieldXName, setFieldXName] = useState("")
  const [fieldYName, setFieldYName] = useState("")
  const [questions, setQuestions] = useState([{}])

  useMemo(()=> {
    fetch("http://localhost:8080/questions?id="+params.id, {method:  "GET"})
    .then(res=>res.json())
    .then((data)=> {
      setQuestions(data.questions)
      setFieldXName(data.Field1Name)
      setFieldYName(data.Field2Name)
    })
  }, [])

  const nextQuestion = () => {
    if (questionIndex<24){
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
    <div className="App">
      <div className="overviewArea">
      <Grid economic={fieldX} social={fieldY}></Grid>
        <Question questionString={questions[questionIndex]["question"]} index={questionIndex}></Question>
      </div>
      <AnswerSelection onAnswerSelected={onAnswerSelected}/>
        </div>
  );

}