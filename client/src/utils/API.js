import axios from "axios";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    searchBooks: function (search) {
        return axios.get("/api/books/" + search)
    }
};