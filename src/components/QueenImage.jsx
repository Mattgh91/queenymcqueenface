import React from 'react';

const QueenImage = ({ currentQuestion }) => {
    const {
        covered_img: coveredImg,
        uncovered_img: uncoveredImg,
    } = currentQuestion;

    console.log(coveredImg, uncoveredImg);

    return (
        <div className="gameContainer__images">
            <img src={coveredImg} alt="" />
            <img src={uncoveredImg} alt="" hidden />
        </div>
    );
};

export default QueenImage;
