import axios from "axios";

export default axios.create({
    baseURL:" http://ac56-197-185-103-107.ngrok.io/api/v1/hotels",
    headers:{
        "Content-Type":"application/json"
    }
})
