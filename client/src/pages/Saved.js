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

    function zoom() {
        let image = document.getElementById("savedImage");
            image.classList.toggle("active")

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
