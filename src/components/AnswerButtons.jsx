import React, { useEffect } from 'react';
import AnswerButton from "./AnswerButton";

const AnswerButtons = ({
    currentQuestion,
    setCurrentQuestionNum,
    numQuestions,
    setScore,
    setRedirect,
    currentQuestionNum,
}) => {
    const { answers } = currentQuestion;
    console.log('currentQuestion: ', currentQuestion);

    useEffect(() => {
        setCurrentQuestionNum(0);
    }, []);

    return (
        <div>
            AnswerButtons
            {answers.map((answer, idx) => (
                <AnswerButton
                    key={idx}
                    answer={answer}
                    currentQuestion={currentQuestion}
                    setCurrentQuestionNum={setCurrentQuestionNum}
                    currentQuestionNum={currentQuestionNum}
                    numQuestions={numQuestions}
                    setScore={setScore}
                    setRedirect={setRedirect}
                />
            ))}
        </div>
    );
};

export default AnswerButtons;
