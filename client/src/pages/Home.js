import React, { Component } from 'react';
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";
import API from "../utils/API"


class Home extends Component {
    state = {
        search: "",
        results: [],
        savedBooks: {}
    }

    savedBook = (e) => {
        const clickedId = e.target.value;
        const foundBook = this.state.results.find(book => book.id === clickedId)
        console.log(foundBook)
        this.setState({
            savedBooks: {
                title: foundBook.volumeInfo.title,
                author: foundBook.volumeInfo.authors[0],
                description: foundBook.volumeInfo.description,
                image: foundBook.volumeInfo.imageLinks.thumbnail,
                readLink: foundBook.volumeInfo.previewLink
            }
        }, () => {
            API.saveBook({
                title: this.state.savedBooks.title,
                author: this.state.savedBooks.author,
                description: this.state.savedBooks.description,
                image: this.state.savedBooks.image,
                readLink: this.state.savedBooks.readLink
            })
                .then(() => {
                    this.setState({ savedBooks: {} })
                })
        })

    }

    handleInputChange = e => {
        this.setState({ search: e.target.value })
    }

    handleFormSubmit = e => {
        e.preventDefault()
        API.searchBooks(this.state.search)
            .then(res => {
                console.log(res.data)
                this.setState({ results: res.data })
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        console.log(this.state.search)
        return (
            <div>
                <Search
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    search={this.state.search}
                />
                <Results
                    results={this.state.results}
                    savedBook={this.savedBook}
                />
            </div >
        )
    }
}

export default Home;
