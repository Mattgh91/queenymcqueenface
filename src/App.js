import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect,
} from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import QueenImage from "./components/QueenImage";
import AnswerButtons from "./components/AnswerButtons";
import Results from "./components/Results";
import BottomBar from "./components/BottomBar";
import shuffle from 'lodash.shuffle';
import './App.scss';
import QuizPage from "./components/QuizPage";

const App = ({ config }) => {
    const { questions} = config;
    const [currentQuestionNum, setCurrentQuestionNum] = useState(0);
    const [score, setScore] = useState(0);
    const [redirect, setRedirect] = useState(false);
    const getRandomQuestions = (questions, n) => shuffle(questions).slice(0, n);
    const questionsToUse = getRandomQuestions(questions, 2);

    console.log('config: ', config);
    console.log('questions: ', questions);

    return (
        <Router>
            {redirect && <Redirect to='/results' /> }
            <nav style={{
                top: 0,
                position: 'absolute',
                background: '#fff',
                zIndex: 2,
                fontSize: 18,
            }}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/quiz">Quiz</Link>
                    </li>
                    <li>
                        <Link to="/results">Results</Link>
                    </li>
                </ul>
            </nav>

            <Switch>
                <Route exact path='/'>
                    <LandingScreen />
                </Route>

                <Route path='/quiz'>
                    {questionsToUse && (
                        <>
                            <QuizPage
                                currentQuestion={questionsToUse[currentQuestionNum]}
                                currentQuestionNum={currentQuestionNum}
                                setCurrentQuestionNum={setCurrentQuestionNum}
                                questionsToUse={questionsToUse}
                                setScore={setScore}
                                setRedirect={setRedirect}
                                score={score}
                            />
                        </>
                    )}
                </Route>

                <Route path='/results'>
                    <Results
                        setRedirect={setRedirect}
                        score={score}
                    />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
