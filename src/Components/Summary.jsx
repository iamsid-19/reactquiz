import QuizImg from '../assets/quiz-logo.png'
export default function summary()
{
    return (
        <div id="summary">
        <img src={QuizImg} alt="quiz completed" />
        <h2> quiz completed</h2>
        <div id='summary-stats'>
            <p>
                <span className='number'>10%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>skipped</span>
            </p>
            <p>
                <span className='number'>10%</span>
                <span className='text'>skipped</span>
            </p>
        </div>
    </div>
    )
}