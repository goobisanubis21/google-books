import React from 'react';
import "./saved.css";

function SavedCard() {
    return (
        <div id="savedCard" className="card">
            <div className="card-body">
                <h5>Saved Books</h5>
                <div id="saved" className="card">
                    <div id="savedTitleAuthorButtons" className="card-body">
                        <div>
                            <p>book title</p>
                            <p>author</p>
                        </div>
                        <div id="btnDiv">
                            <button id="view" className="savedButtons">View</button>
                            <button id="delete" className="savedButtons">Delete</button>
                        </div>
                    </div>
                    <div id="savedImgDescription">
                        <p>image here</p>
                        <p id="savedDescription">
                            description here
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedCard
