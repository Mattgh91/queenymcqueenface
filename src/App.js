import React from 'react';
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
import './App.css';

const App = ({ config }) => {
    console.log('config: ', config);
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
                    <QueenImage />
                    <AnswerButtons />
                </Route>

                <Route path='/results'>
                    <Results />
                </Route>
            </Switch>
        </Router>
    )
};

export default App;
