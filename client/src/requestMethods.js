import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmMzMWMwOTA2Njc1ZGRhMzhmMGQzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzA4NjYxMCwiZXhwIjoxNjQ3MzQ1ODEwfQ.GyYJzV3gCROlO4Y1wpTaFFXnS6JPGYjo9qqtjQYvK9Q"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}` },
});