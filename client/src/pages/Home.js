import React, { Component } from 'react';
import Search from "../components/Search/Search";
import Results from "../components/Results/Results";
import API from "../utils/API"


class Home extends Component {
    state = {
        search: "",
        results: []
    }

    // componentDidMount() {
    //     API.searchBooks(this.state.search)
    //         .then(res => this.setState({results: res.data}))
    //         .catch(err => console.log(err))
    // }

    handleInputChange = event => {
        this.setState({search: event.target.value})
        console.log(this.state.search)
    }

    handleFormSubmit = event => {
        event.preventDefault()
        API.searchBooks(this.state.search)
            .then(res => {
                console.log(res.data)
                this.setState({results: res.data})
            }).catch(err => {
                console.log(err)
            })
    }

    render() {
        return (
            <div>
                <Search 
                    handleInputChange = {this.handleInputChange}
                    handleFormSubmit = {this.handleFormSubmit}
                    search = {this.state.search}
                />
                <Results results={this.state.results}/>
            </div>
        )
    }
}

export default Home;
