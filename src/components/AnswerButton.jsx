import React from 'react';

const AnswerButton = ({
    answer,
    currentQuestion,
    setCurrentQuestionNum,
    numQuestions,
    setScore,
    setRedirect,
    currentQuestionNum,
}) => {
    const { colour, isCorrect } = answer;

    console.log('currentQuestion: ', currentQuestionNum);
    console.log('numQuestions: ', numQuestions);

    return (
        <button
            className="gameContainer__buttons-button"
            onClick={() => {
            if (isCorrect) {
                setScore(score => score += 1);
            }

            if (currentQuestionNum + 1 === numQuestions) {
                console.log('should redirect');
                setRedirect(true);
            } else setCurrentQuestionNum(current => current += 1)
        }}>
            <span className="gameContainer__buttons-button-text">{colour}</span>
        </button>
    );
};

export default AnswerButton;
