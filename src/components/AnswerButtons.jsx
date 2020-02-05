import React from 'react';
import AnswerButton from "./AnswerButton";

const AnswerButtons = ({
    currentQuestion,
    setCurrentQuestion,
}) => {
    const { answers } = currentQuestion;
    console.log('currentQuestion: ', currentQuestion);


    return (
        <div>
            AnswerButtons
            {answers.map((answer, idx) => <AnswerButton key={idx} answer={answer} />)}
        </div>
    );
};

export default AnswerButtons;
