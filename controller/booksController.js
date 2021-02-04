const { default: axios } = require("axios");
const db = require("../models");
var BASEURL = "https://www.googleapis.com/books/v1/volumes?q=";
// const APIKEY = "&key=AIzaSyAeWPuKynQ0rS1JruHWAeSRJghVg0e5YrM";

module.exports = {
    searchBooks: function (req, res) {

        let searchValue = req.params.search
        BASEURL += searchValue;
        axios.get(BASEURL).then(result => {
            console.log(result.data)
            if (!result.data.items) {
                return
            } else {
                res.json(result.data.items)
            }
        })
    },

    create: function (req, res) {
        db.Book
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.json(err))
    },

    findAll: function(req, res) {
        db.Book
            .find(req.query)
            .sort({date: -1})
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
    },

    remove: function(req, res) {
        db.Book 
            .findById({_id: req.params.id})
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => console.log(err))
    }
}