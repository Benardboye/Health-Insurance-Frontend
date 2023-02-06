import axios from "axios"

const baseUrl = "http://localhost:8080" | "https://health-insurance-1.onrender.com"
const token = localStorage.getItem('signature')


export const apiPost = async (path, data) => {
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const result = await axios.post(`${baseUrl}${path}`, data,  {
        headers:{
            Authorization:`Bearer ${token}`
        } 
    })
    return result
}

export const apiGet = async (path, data) => {
    const config = {
        headers:{
            Authorization:`Bearer ${token}`
        }
    }
    const result = await axios.get(`${baseUrl}${path}`, data,  {
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    return result
}