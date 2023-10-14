import React from 'react'
import { nanoid } from "nanoid"

export default function Question(props){
    const [isClicked, setIsClicked] = React.useState(false)

    const styles = {
        backgroundColor : isClicked ? "#94D7A2" : "#F5F7FB"
    }
    
    const answerElement = props.answers.map(answer=>{
        const id = nanoid()
        return <button 
                    onClick={handleClick} 
                    className="quiz-answers" 
                    style={styles}
                    key={id}>
                        {answer}
                        </button>
                
    })
    

    function handleClick(){
        setIsClicked(prevState=>!prevState)
    }

    return(
        <>
            <p className="questions">
               {props.question}
            </p>
            <div className="answers" >{answerElement}</div>
            <hr/>
        </>
        
    )
}