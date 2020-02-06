import React from 'react';

const BottomBar = ({
    numQuestions,
    currentQuestionNum,
    setCurrentQuestionNum,
    score,
}) => {
    return (
        <div className="bottomBar">
            <button onClick={() => {
                setCurrentQuestionNum(0);
            }}>Restart</button>
            <span>Question  {currentQuestionNum + 1} / {numQuestions}</span>
            <span>Score: {score}</span>
        </div>
    );
};

export default BottomBar;
