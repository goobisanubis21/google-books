import React from 'react';
import "./saved.css";

function SavedCard() {
    return (
        <div id="savedCard" className="card">
            <div className="card-body">
                <h5>Saved Books</h5>
                <div id="saved" className="card">
                    <div className="card-body">
                        saved books will go here
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SavedCard
