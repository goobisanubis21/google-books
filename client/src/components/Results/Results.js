import React from 'react';
import "./results.css";

function Results(props) {
    return (
        <div id="resultsCard" className="card">
            {props.results.map(result => (
                <div key={result.id} className="card-body">
                    <h5>Results</h5>
                    <div id="result" className="card">
                        <div id="resultTitleAuthorButtons" className="card-body">
                            <div>
                                <p>{result.volumeInfo.title}</p>
                                <p>{result.volumeInfo.authors}</p>
                            </div>
                            <div id="btnDivResults">
                                <button id="resultView" className="resultButtons">View</button>
                                <button id="resultSave" className="resultButtons">Save</button>
                            </div>
                        </div>
                        <div id="resultsImgDescription">
                            <p><img alt="BookImage" src={result.volumeInfo.thumbnail}></img></p>
                            <p id="resultsDescription">{result.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results
