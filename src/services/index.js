import axios from 'axios'
const SERVER_URL = 'https://sky-wallet.onrender.com'

export const getAllAccountsApi = () => {
    const url = `${SERVER_URL}/accounts`
    return axios.get(url)
}
export const getSingleAccountApi = (id) => {
    const url = `${SERVER_URL}/accounts/${id}`
    return axios.get(url)
}

export const addNewAccountApi = (body) => {
    const url = `${SERVER_URL}/accounts`
    return axios.post(url, body)
}

export const updateAccountApi = (id, body) => {
    const url = `${SERVER_URL}/accounts/${id}`
    return axios.put(url, body)
}


