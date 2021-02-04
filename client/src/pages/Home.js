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
        for (let i = 0; i < this.state.results.length; i++) {
            if (clickedId === this.state.results[i].id) {
                this.setState({ savedBooks: { title: this.state.results[i].volumeInfo.title, author: this.state.results[i].volumeInfo.authors[0], description: this.state.results[i].volumeInfo.description, image: this.state.results[i].volumeInfo.imageLinks.thumbnail } })
                console.log(this.state.savedBooks)
            }
        }
        API.saveBook({
            title: this.state.savedBooks.title,
            author: this.state.savedBooks.author,
            description: this.state.savedBooks.description,
            image: this.state.savedBooks.image
        })
        .then(setTimeout(() => {
            this.setState({savedBooks: ({})})
        },500))

    }

    handleInputChange = e => {
        this.setState({ search: e.target.value })
        console.log(this.state.search)
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
            </div>
        )
    }
}

export default Home;
