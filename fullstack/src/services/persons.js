import axios from "axios"
const baseUrl = 'http://localhost:3001/persons'

const GetAll = async () => {
    const request = axios.get(baseUrl)
    const response = await request
    return response.data
}

const create = newObject => {
    const request = axios.post(baseUrl, newObject)
    return request.then(response => response.data)
}

const deleteObject = id => {
    const request = axios.delete(`http://localhost:3001/persons/${id}`)
    return request.then(response => response.data)
}

export default {
    GetAll,
    create,
    deleteObject
}