import React, { useEffect } from 'react';
import QueenImage from "./QueenImage";
import AnswerButtons from "./AnswerButtons";
import BottomBar from "./BottomBar";

const QuizPage = ({
    currentQuestion,
    currentQuestionNum,
    setCurrentQuestionNum,
    questionsToUse,
    setScore,
    score,
    setRedirect,
}) => {

    console.log('currentQuestion: ', currentQuestion);

    useEffect(() => {
        setCurrentQuestionNum(0);
        setScore(0);
    }, []);

    return (
        <>
            <div className="gameContainer">
                <QueenImage
                    key={`${currentQuestion}-image`}
                    currentQuestion={currentQuestion}
                />
                <AnswerButtons
                    key={`${currentQuestion}-answers`}
                    currentQuestion={currentQuestion}
                    setCurrentQuestionNum={setCurrentQuestionNum}
                    currentQuestionNum={currentQuestionNum}
                    numQuestions={questionsToUse.length}
                    setScore={setScore}
                    setRedirect={setRedirect}
                />
            </div>
            <BottomBar
                currentQuestionNum={currentQuestionNum}
                setCurrentQuestionNum={setCurrentQuestionNum}
                numQuestions={questionsToUse.length}
                score={score}
                setScore={setScore}
            />
        </>
    );
};

export default QuizPage;
