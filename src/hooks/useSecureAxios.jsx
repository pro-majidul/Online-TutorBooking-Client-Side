import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import useUsers from './useUsers';


const axiosSecure = axios.create({
    baseURL: 'https://online-tutorial-booking-platform-server-side.vercel.app',
    withCredentials: true
})

const useSecureAxios = () => {
    const { logOutUser } = useUsers()
    const navigate = useNavigate()
    useEffect(() => {

        axiosSecure.interceptors.response.use(

            response => {
                return response
            }
            ,
            error => {
                if (error.status === 401 || error.status === 403) {
                    logOutUser()
                        .then(() => {
                            navigate('/login')
                        }).catch(error => {
                            // console.log(error);
                        })

                }
                return Promise.reject(error)
            }

        )
    }, [])

    return axiosSecure
};

export default useSecureAxios;