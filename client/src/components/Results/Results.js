import React from 'react';
import "./results.css";

function Results(props) {
    return (
        <div id="resultsCard" className="card">
            <h5 id="results">Results</h5>
            <hr></hr>
            {props.results.map(result => (
                <div key={result.id} id={result.id} className="card-body">
                    <div id="result" className="card">
                        <div id="resultTitleAuthorButtons" className="card-body">
                            <div>
                                <p>{result.volumeInfo.title}</p>
                                <p>{result.volumeInfo.authors}</p>
                            </div>
                            <div id="btnDivResults">
                                <button id="resultSave" value={result.id} className="resultButtons" onClick={props.savedBook}>Save</button>
                            </div>
                        </div>
                        <div id="resultsImgDescription">
                            <p><img alt="BookImage" src={result.volumeInfo.imageLinks.thumbnail}></img></p>
                            <p id="resultsDescription">{result.volumeInfo.description}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Results
