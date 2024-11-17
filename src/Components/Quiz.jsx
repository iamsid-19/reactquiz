import { useState, useCallback } from 'react'
import QUESTIONS from '../questions.js'
import Question from './Question.jsx';
import Summary from './Summary.jsx';
export default function Quiz() {
    
    const [userAnswer, setUserAnswer] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const activeQuestionIndex =  userAnswer.length;
    const isQuizCompleted = activeQuestionIndex === QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns) {
        setAnswerState('answered');
        setUserAnswer(prevAns => ([...prevAns, selectedAns]))
      
    }, [])
    const SkipSelectedAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if (isQuizCompleted) {
        return (
           <Summary userAnswer={userAnswer}/>
        )
    }
    
    return (
        <div id="quiz">
          <Question 
           key ={activeQuestionIndex}
            index={activeQuestionIndex}
          onSelectAnswer={handleSelectAnswer}
          onSkipSelectedAnswer={SkipSelectedAnswer}/>
        </div>)
}