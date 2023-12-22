import axios from "axios";

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/byizak-915e7/us-central1/api",
    // "http://localhost:5001/clone-d613f/us-central1/api", // the api url (cloud function url)
});

export default instance;
