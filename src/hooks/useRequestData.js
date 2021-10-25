import { useState, useEffect } from 'react'
import axios from 'axios'
import {BASE_URL} from '../constants/url'
import { useHistory } from 'react-router-dom'

export const useRequestData = (urlEnd, isExpired) => {
    const history = useHistory();
    const authToken = localStorage.getItem("token")

    const [data, setData] = useState({});

    const getData = () => {
        axios.get(`${BASE_URL}${urlEnd}`, {
            headers: {
                Authorization: `Bearer ${authToken}`
            }
        }).then(response => {
            setData(response.data);
        }).catch(err => {
            if (isExpired && err.response.status === 401) {
                history.push("/")
                localStorage.removeItem("token");
                window.alert(err.response.data.msg)
            }
        })
    }
    useEffect(() => {
        getData()
    }, [urlEnd]);

    return [data, getData]  
};