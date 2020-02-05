import React from 'react';

const BottomBar = ({ numQuestions, currentQuestion, setCurrentQuestion }) => {
    return (
        <div>
            <span>Question  {currentQuestion + 1} / {numQuestions}</span>
            <button onClick={() => setCurrentQuestion(current => current += 1)}>Next</button>
        </div>
    );
};

export default BottomBar;
