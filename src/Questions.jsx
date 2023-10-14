import React from 'react'
import Question from './Question'
import { nanoid } from "nanoid"

export default function Questions(props){
    const id=nanoid()
    const elements = props.questions.map(qn => {
        return (

                <Question 
                    key = {id} 
                    question = {qn.question}
                    answers = {qn.answers}
                    id= {qn.id}
                    />
      
        )
        
    })
    

    
    return(
       
             <main>
                
                {elements}
            </main> 
        
            
    )
}