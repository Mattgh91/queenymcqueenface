import React from 'react';

const AnswerButton = ({ answer }) => {
    const { colour, isCorrect } = answer;
    return (
        <div>
            {colour}
        </div>
    );
};

export default AnswerButton;
