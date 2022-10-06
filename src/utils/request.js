import axios from "axios"
import { apiUrl } from "./url"

export const getRequest = (url, data) => {
    const Etoken = localStorage.getItem('Etoken') ? localStorage.getItem('Etoken') : undefined
    const config = {
         headers : {
            "Content-Type" :"application/json",
            "Access-Control-Allow-Origin": "*",
             Authorization : `Bearer ${Etoken}`
        }
    }
    return axios.get(`${apiUrl}${url}`, config).then(res => res.data)
}

export const postRequest = (url, data) => {
    const Etoken = localStorage.getItem('Etoken') ? localStorage.getItem('Etoken') : undefined
    const config = {
         headers : {
            "Content-Type" :"application/json",
             Authorization : `Bearer ${Etoken}`
        }
    }
    return axios.post(`${apiUrl}${url}`, data, config).then(res => res.data)
}

export const deleteRequest = (url, data = undefined) => {
    const Etoken = localStorage.getItem('Etoken') ? localStorage.getItem('Etoken') : undefined
    const config = {
         headers : {
            "Content-Type" :"application/json",
             Authorization : `Bearer ${Etoken}`
        }
    }
    return axios.delete(`${apiUrl}${url}`, config).then(res => res.data)
}

export const patchRequest = (url, data = undefined) => {
    const Etoken = localStorage.getItem('Etoken') ? localStorage.getItem('Etoken') : undefined
    const config = {
         headers : {
            "Content-Type" :"application/json",
             Authorization : `Bearer ${Etoken}`
        }
    }
    return axios.patch(`${apiUrl}${url}`, data, config).then(res => res.data)
}

export const axiosRequest = (url, methods, data) => {
    const Etoken = localStorage.getItem('Etoken') ? localStorage.getItem('Etoken') : undefined
    // console.log(Etoken)
    const config = {
         headers : {
            "Content-Type" :"application/json",
             Authorization :`Bearer ${Etoken}`
        }
    }
    return axios[methods](`${apiUrl}${url}`, data, config).then(res => res.data)
}