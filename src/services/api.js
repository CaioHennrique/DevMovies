import axios from "axios";

const api = axios.create({

     baseURL:" https://api.themoviedb.org/3",
     params: {
          api_key: "324c212214a578d2a0d97abcd9241295",
          language: "pt-BR",
          page: 1,
     }


}) 

export default api

   


