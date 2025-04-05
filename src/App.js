import './App.css';
import  Grid  from "./grid/Grid.js";
import Question from "./Question/Question.js";
import AnswerSelection from "./AnswerSelection/AnswerSelection.js"
import { useState } from 'react';


export default function App() {


  const [fieldX, setFieldX] = useState(0)
  const [fieldY, setFieldY] = useState(0)
  const [questionIndex, setQuestionIndex] = useState(0)

  const questions = [
    { "question": "Taxation is theft", "affects": "economic", "direction": 1 },
    { "question": "The state should jail people for possessing illegal drugs", "affects": "social", "direction": 1 },
    { "question": "I support a carbon tax", "affects": "economic", "direction": -1 },
    { "question": "It would be better if the governement controlled the economy", "affects": "economic", "direction": -1 },
    { "question": "Sex work involving consenting adults should be legal", "affects": "social", "direction": -1 },
    { "question": "Countries like China are doing a better job at governing than countries like the United States or Canada", "affects": "social", "direction": 1 },
    { "question": "A minimum wage set by the gouvernment is a bad idea : let people negotiate wages on their own", "affects": "economic", "direction": 1 },
    { "question": "Gay couples should be able to adopt", "affects": "social", "direction": -1 },
    { "question": "Women dresses today are too revealing", "affects": "social", "direction": 1 },
    { "question": "Corporations are unfairly exploiting their workers", "affects": "economic", "direction": -1 },
    { "question": "Charter schools are a better solution than a public education system", "affects": "economic", "direction": 1 },
    { "question": "People who say things I consider objectionable should be punished", "affects": "social", "direction": 1 },
    { "question": "Trans people should live by the gender they want and be legally recognized as it ", "affects": "social", "direction": -1 },
    { "question": "The government should ensure everyone gets enough to live", "affects": "economic", "direction": -1 },
    { "question": "Rent control is a good idea", "affects": "economic", "direction": -1 },
    { "question": "If you have nothing to hide, you have nothing to fear", "affects": "social", "direction": 1 },
    { "question": "Access to abortion should be restricted ", "affects": "social", "direction": 1 },
    { "question": "We should welcome immigrants and refugees", "affects": "social", "direction": -1 },
    { "question": "Government should never subisize businesses", "affects": "economic", "direction": 1 },
    { "question": "The government should restrict the sales of weapons", "affects": "social", "direction": 1 },
    { "question": "It would be better if there were less things in the way of our government and our police officiers", "affects": "social", "direction": 1 },
    { "question": "I support universal healthcare", "affects": "economic", "direction": -1 },
    { "question": "If someone else's house burns, it is not my problem and I should not pay for the carelessness of others", "affects": "economic", "direction": 1 },
    { "question": "The police and the courts should be handled by the free markets and paid for by voluntarily individuals", "affects": "economic", "direction": 1 },
    { "question": "Black lives matter", "affects": "social", "direction": -1 }
  ]

  const fieldXName = "economic"
  const fieldYName = "social"

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