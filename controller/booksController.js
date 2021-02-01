const { default: Results } = require("../client/src/components/Results/Results");

const BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
const APIKEY = "&key=AIzaSyAeWPuKynQ0rS1JruHWAeSRJghVg0e5YrM";

module.exports = {
    searchBooks: function (req, res) {
        let searchValue = req.body.search

        BASEURL += searchValue;
        BASEURL += APIKEY

        return data.JSON()
    }
}