import React from 'react';
import "./saved.css";

function SavedCard(props) {
    return (
        <div id="savedCard" className="card">
            <div className="card-body">
                <h5>Saved Books</h5>
                {props.books.map(book => (
                    <div key={book._id} id="saved" className="card">
                        <div id="savedTitleAuthorButtons" className="card-body">
                            <div>
                                <p name="title" value="title">{book.title}</p>
                                <p>{book.author}</p>
                            </div>
                            <div id="btnDiv">
                                <button id="view" className="savedButtons">View</button>
                                <button id="delete" className="savedButtons" onClick={() => props.deleteBook(book._id)}>Delete</button>
                            </div>
                        </div>
                        <div id="savedImgDescription">
                            <p><img src={book.image} alt="bookImage"></img></p>
                            <p id="savedDescription">
                                {book.description}
                        </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SavedCard
