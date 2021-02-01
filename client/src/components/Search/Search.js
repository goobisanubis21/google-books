import React from 'react';
import "./search.css";

function Search() {
    return (
        <div id="searchCard" className="card">
            <div className="card-body">
                <h5>Book Search</h5>
                <p>Book</p>
                <form>
                    <input id="inputEl" placeholder="Book Title"></input>
                    <div id="btnDiv">
                        <button id="btn" type="submit">Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search
