const { default: axios } = require("axios");

// const db = require("../models");
var BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyAeWPuKynQ0rS1JruHWAeSRJghVg0e5YrM";

module.exports = {
    searchBooks: function (req, res) {
        
        let searchValue = req.params.search
        BASEURL += searchValue;
        // BASEURL += APIKEY;
        axios.get(BASEURL).then(result => {
            console.log(result.data)
            res.json(result.data.items)
        })
    }
}