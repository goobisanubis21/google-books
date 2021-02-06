import React, { useState, useEffect } from 'react';
import SavedCard from "../components/SavedCard/SavedCard";
import API from '../utils/API';

function Saved() {

    useEffect(() => {
        getBooks()
    }, [])

    const [books, setBooks] = useState([])

    function getBooks() {
        API.getBook().then(res => {
            setBooks(res.data)
        })
        .catch(err => console.log(err))
    }

    function deleteBook(id) {
        API.deleteBook(id)
        .then(res => getBooks())
        .catch(err => console.log(err))
    }

    function zoom(e) {
        e = window.event
        const clickedBook = e.target
        const viewedBook = books.find(bookss => bookss._id === clickedBook.id)
        console.log(viewedBook)
        window.location.replace(viewedBook.readLink)
        console.log(clickedBook.id)
        console.log(books)
    }

    return (
        <div>
            <SavedCard
                books ={books}
                deleteBook={deleteBook}
                zoom={zoom}
            />
        </div>
    )
}

export default Saved
