import React, {useEffect} from 'react';
import { Link } from "react-router-dom";

const LandingScreen = ({ setCurrentQuestionNum, setScore }) => {

    useEffect(() => {
        setCurrentQuestionNum(0);
        setScore(0);
    }, [setScore, setCurrentQuestionNum]);

    return (
        <div className="landingScreen">
            <h1>QueenyMcQueenFace</h1>
            <button className="gameContainer__buttons-button gameContainer__buttons-button-long">
                <Link className="gameContainer__buttons-button-text" to="/quiz">Start</Link>
            </button>
        </div>
    );
};

export default LandingScreen;
