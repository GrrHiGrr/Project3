import axios from "axios";

const BASE_URL = "http://localhost:5000/api/"
const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMmMzMWMwOTA2Njc1ZGRhMzhmMGQzYiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY0NzA3NTIwNywiZXhwIjoxNjQ3MzM0NDA3fQ.Lo18Es8vVWu3NYrCFcGmVRomUW4C0R4SmCzLaiq6InU"

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    header:{token:`Bearer ${TOKEN}` },
});