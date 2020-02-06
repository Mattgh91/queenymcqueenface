import React, { useEffect } from 'react';

const Results = ({ score, setRedirect }) => {
    useEffect(() => {
        setRedirect(false);
    }, []);

    return (
        <div className="results">
            <h1>
                Results! <br />
                You scored: {score}
            </h1>
        </div>
    );
};

export default Results;
