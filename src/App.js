import React, { useState } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
} from "react-router-dom";
import LandingScreen from "./components/LandingScreen";
import QueenImage from "./components/QueenImage";
import AnswerButtons from "./components/AnswerButtons";
import Results from "./components/Results";
import BottomBar from "./components/BottomBar";
import shuffle from 'lodash.shuffle';
import './App.css';

const App = ({ config }) => {
    const { questions} = config;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const getRandomQuestions = (questions, n) => shuffle(questions).slice(0, n);
    const questionsToUse = getRandomQuestions(questions, 2);

    console.log('config: ', config);
    console.log('questions: ', questions);

    return (
        <Router>
            <nav>
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
                    <QueenImage
                        currentQuestion={questionsToUse[currentQuestion]}
                    />
                    <AnswerButtons
                        currentQuestion={questionsToUse[currentQuestion]}
                        setCurrentQuestion={setCurrentQuestion}
                    />
                </Route>

                <Route path='/results'>
                    <Results />
                </Route>
            </Switch>

            <BottomBar
                currentQuestion={currentQuestion}
                setCurrentQuestion={setCurrentQuestion}
                numQuestions={questionsToUse.length}
            />
        </Router>
    )
};

export default App;
