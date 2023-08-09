import axios from "axios"

const SERVER_URL = "http://localhost:4000"

export const get = (route) => {
    let token = localStorage.getItem('authToken')

    return axios.get(SERVER_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const post = (route, body) => {
    let token = localStorage.getItem('authToken')

    return axios.post(SERVER_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const put = (route, body) => {
    let token = localStorage.getItem('authToken')

    return axios.put(SERVER_URL + route, body, {
        headers: { Authorization: `Bearer ${token}` }
    })
}

export const serverDelete = (route) => {
    let token = localStorage.getItem('authToken')

    console.log("TOKEN ====>", token)

    return axios.delete(SERVER_URL + route, {
        headers: { Authorization: `Bearer ${token}` }
    })
}