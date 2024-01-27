import React, { useState } from 'react'
import { quizlist } from './QuizQuestions'
import {motion} from 'framer-motion'

function QuizList() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    function handleAnswerButtonNext(correct) {
        if (correct === true) {
            setScore(score + 1);
        }
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizlist.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    }

    function handleReset() {
        setCurrentQuestion(0);
        setScore(0);
        setShowScore(false);
    }

    return (
        <motion.div className='quiz-container'
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{ duration: 0.3 }}
        variants={{
            visible: { opacity: 1, scale: 1 },
            hidden: { opacity: 0, scale: 0 }
        }}>
            <h2>Vadász Quiz</h2>
            <div className="quiz-content">
                {showScore ?
                    <div className='score-container'>
                        <h3>Sikeres quiz kitöltés!</h3>
                        <h3>Ön elért  <span>{score} </span> pontot a maximális {quizlist.length} kérdésből. </h3>
                        <button onClick={handleReset}>Vissza az elejére</button>
                    </div> : <>
                        <p>{currentQuestion + 1} / {quizlist.length}</p>
                        <h3>{quizlist[currentQuestion].question}</h3>
                        {quizlist[currentQuestion].answers.map((quiz) => {
                            return <div key={quiz.id} className='quiz-questions'>
                                <button onClick={() => handleAnswerButtonNext(quiz.correct)}>{quiz.answer}</button>
                            </div>
                        })}</>
                }

            </div>
        </motion.div>
    )
}

export default QuizList