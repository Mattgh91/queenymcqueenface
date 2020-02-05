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

    console.log('currentQuestion: ', currentQuestion);
    console.log('numQuestions: ', numQuestions);

    return (
        <button onClick={() => {
            if (isCorrect) {
                setScore(score => score += 1);
            }

            if (currentQuestionNum + 1 === numQuestions) {
                setRedirect(true);
            } else setCurrentQuestionNum(current => current += 1)
        }}>
            {colour}
        </button>
    );
};

export default AnswerButton;
