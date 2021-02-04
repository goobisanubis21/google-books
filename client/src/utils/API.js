import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchBooks: function (search) {
        console.log(search)
        return axios.get("/api/books/" + search)
    },

    saveBook: function (bookData) {
        return axios.post("/api/books", bookData)
    },

    getBook: function () {
        return axios.get("api/books")
    },

    deleteBook: function (id) {
        return axios.delete("api/books/" + id)
    }
};