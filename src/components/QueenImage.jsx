import React from 'react';

const QueenImage = ({ currentQuestion }) => {
    const {
        covered_img: coveredImg,
        uncovered_img: uncoveredImg,
    } = currentQuestion;

    console.log(coveredImg, uncoveredImg);

    return (
        <div>
            <img src={uncoveredImg} alt="" />
            <img src={uncoveredImg} alt="" hidden />
        </div>
    );
};

export default QueenImage;
