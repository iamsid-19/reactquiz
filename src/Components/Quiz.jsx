import { useState, useCallback } from 'react'
import QUESTIONS from '../questions.js'
import QuizImg from '../assets/quiz-complete.png'
import ProgressBar from './ProgressBar.jsx'
export default function Quiz() {
    const [userAnswer, setUserAnswer] = useState([]);
    const [answerState, setAnswerState] = useState('');
    const activeQuestionIndex = answerState === '' ? userAnswer.length : userAnswer.length - 1;
    const isQuizCompleted = activeQuestionIndex >= QUESTIONS.length;
    const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAns) {
        setAnswerState('answered');
        setUserAnswer(prevAns => ([...prevAns, selectedAns]))
        if (!isQuizCompleted) {
            setTimeout(() => {
                if (selectedAns === QUESTIONS[activeQuestionIndex].answers[0]) {
                    setAnswerState('correct')
                }
                else {
                    setAnswerState('wrong')
                }
                setTimeout(() => {
                    setAnswerState('')
                }, 2000);

            }, 1000)
        }
    }, [activeQuestionIndex])
    const SkipSelectedAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])
    if (isQuizCompleted) {
        return (
            <div id="summary">
                <img src={QuizImg} alt="quiz completed" />
                <h2> quiz completed</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5);
    return (
        <div id="quiz">
            <div id="question">
                <ProgressBar key={activeQuestionIndex} timeOut={10000} onTimeOut={SkipSelectedAnswer} />
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id="answers">
                    {shuffledAnswers.map((answer) => {
                        const isSelected = userAnswer[userAnswer.length - 1] === answer
                        let cssClasses = ''
                        if (answerState === 'answered' && isSelected) {
                            cssClasses = 'selected'
                        }
                        if ((answerState === 'wrong' || answerState === 'correct') && isSelected) {
                            cssClasses = answerState;
                        }

                        return <li key={answer} className='answer'><button className={cssClasses} onClick={() => { handleSelectAnswer(answer) }}>{answer}</button></li>
                    }
                    )}
                </ul>
            </div>
        </div>)
}