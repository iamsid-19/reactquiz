import QuizImg from '../assets/quiz-logo.png'
import QUESTIONS from '../questions.js'
export default function summary({ userAnswer }) {
    const skippedAnswers = userAnswer.filter(answer => answer === null)
    const correctAnswers = userAnswer.filter((answer,index) => answer === QUESTIONS[index].answers[0])
    const   skippedAnswersPercent = Math.round((skippedAnswers.length/userAnswer.length)*100)
    const  correctAnswersPercent =Math.round((correctAnswers.length/userAnswer.length)*100)
    const wrongAnswersPercent = 100 - skippedAnswersPercent -correctAnswersPercent
    return (
        <div id="summary">
            <img src={QuizImg} alt="quiz completed" />
            <h2> quiz completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswersPercent}%</span>
                    <span className='text'></span>
                </p>
                <p>
                    <span className='number'>{correctAnswersPercent}%</span>
                    <span className='text'>answered correctly</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswersPercent}%</span>
                    <span className='text'>answered incorrectly</span>
                </p>
            </div>
            <ol>
                {
                    userAnswer.map((answer, index) => {
                        let cssClass ='user-answer';
                        if(answer === null)
                            cssClass += ' skipped'
                        else if(answer === QUESTIONS[index].answers[0])
                            cssClass += ' correct'
                        else 
                         cssClass +=' wrong'
                        return (
                            <li key={index}>
                                <h3>{index+1}</h3>
                                <p className="question">{QUESTIONS[index].text}</p>
                                <p className={cssClass}>{answer && 'skipped'}</p>
                            </li>
                        )
                    })
                }
                
            </ol>
        </div>
    )
}