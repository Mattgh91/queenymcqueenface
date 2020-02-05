import React, { useState } from 'react';
import { Redirect } from "react-router-dom";

const BottomBar = ({
    numQuestions,
    currentQuestionNum,
    setCurrentQuestionNum,
    score,
}) => {
    const [redirect, setRedirect] = useState(false);

    if (redirect) {
        return <Redirect to='/results' />;
    }

    return (
        <div>
            <span>Score: {score}</span>
            <span>Question  {currentQuestionNum + 1} / {numQuestions}</span>
            <button onClick={() => {
                setCurrentQuestionNum(0);
            }}>Restart</button>
        </div>
    );
};

export default BottomBar;
