import React from 'react';
import "./search.css";

function Search(props) {

    return (
        <div id="searchCard" className="card">
            <div className="card-body">
                <h5>Book Search</h5>
                <p>Book</p>
                <form>
                    <input id="inputEl" placeholder="Book Title" type="text" name="searched" value={props.search} onChange={props.handleInputChange}></input>
                    <div id="btnDiv">
                        <button id="btn" type="submit" onClick={props.handleFormChange}>Search</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Search
