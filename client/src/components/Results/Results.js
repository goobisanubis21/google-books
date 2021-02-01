import React from 'react';
import "./results.css";

function Results() {
    return (
        <div id="resultsCard" className="card">
            <div className="card-body">
                <h5>Results</h5>
                <div id="result" className="card">
                    <div id="resultTitleAuthorButtons" className="card-body">
                        <div>
                            <p>book title</p>
                            <p>author</p>
                        </div>
                        <div id="btnDivResults">
                            <button id="resultView" className="resultButtons">View</button>
                            <button id="resultSave" className="resultButtons">Save</button>
                        </div>
                    </div>
                    <div id="resultsImgDescription">
                        <p>image here</p>
                        <p id="resultsDescription">description here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Results
