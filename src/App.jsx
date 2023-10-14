import React from 'react'
import Questions from './Questions'
import Start from './Start'
import { nanoid } from "nanoid"
import { decode } from "html-entities"

export default function App(){
 
  const [quiz,setQuiz] = React.useState([])
  const [start, setStart] = React.useState(false)
  
  function getQuestions(qn){
    const question = decode(qn.question)
    const correct_answer = decode(qn.correct_answer);
    const incorrect_answers = qn.incorrect_answers.map(answer=>decode(answer));
    
    const all_answers = [...incorrect_answers, correct_answer];
    for (let i = all_answers.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [all_answers[i], all_answers[j]] = [all_answers[j], all_answers[i]];
    }
  
    return {
      question: question,
      answers: all_answers,
      id :nanoid(),
    }
   
}

    React.useEffect(()=>{
        fetch("")
      .then(res=> res.json())
      .then(data=> setQuiz(data.results.map(getQuestions)))
    }, [])
   
function handleStart(){
    setStart(prevStart=>!prevStart)
}


  return(
    <div>
        {
            start ? 
            <Questions 
            questions = {quiz}
           
          /> :
        <Start 
        onClick = {handleStart}
        />
        }
   
    </div>
    
  )
}