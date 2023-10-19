import axios from "axios";

export default axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_ley: "c8fa1303782767db4c31e557878020fb",
    },

})
// Devuelve una funcion con la que se va a poder hacer los distintos get, post, put, etc.
