import axios from "axios";

const Apiclient = axios.create({
  baseURL: "https://my-json-server.typicode.com/Code-Pop/Real-World_Vue-3",
  withCredentials: false,
  headers: {
    Accept: "aplication/json",
    "Content-Type": "aplication/json",
  },
});

export default {
  getEvents() {
    return Apiclient.get("/events");
  },
  getEventID(id) {
    return Apiclient.get("/events/" + id);
  },
};
