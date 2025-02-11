import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import axios from 'axios';
import { toast } from 'react-toastify';
import useSecureAxios from '../hooks/useSecureAxios';

const BookedTutors = () => {
    const { user } = useUsers()
    const [items, setItems] = useState([])
    const AxiosSecure = useSecureAxios()
    useEffect(() => {
        // axios.get(`https://online-tutorial-booking-platform-server-side.vercel.app/tutorBooked?email=${user.email}`)
        //     // .then(res => res.json())
        //     .then(res => {
        //         console.log(res.data);
        //         setItems(res.data)
        //     })

        const fetchData = async () => {
            try {
                const res = await AxiosSecure.get(`/tutorBooked?email=${user.email}`);
                // console.log(res.data);
                setItems(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
    
        if (user.email) {
            fetchData();
        }
    }, [user.email])

    // console.log(items);

    const handelReview = async (id) => {
        // console.log(id);
        try {

            const data = await AxiosSecure.patch(`/tutors/${id}?email=${user.email}`)
            if (data.data.modifiedCount > 0) {
                toast.success('Review Success')
            }
        } catch {

            toast.error("could'nt done review")
        }

    }
    return (
        <div className="container max-w-7xl max-h-max  p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className=" overflow-x-auto pt-28">
                <table className="table bg-purple-800">

                    <thead>
                        <tr className='text-white'>

                            <th>Image</th>
                            <th>Name</th>
                            <th>Language</th>
                            <th>Price</th>
                            <th>Review</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>

                        {
                          items &&  items.map(item => <tr key={item._id}>

                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={item.image}
                                                    alt="Avatar Tailwind CSS Component" />
                                            </div>
                                        </div>

                                    </div>
                                </td>
                                <td>{item.name}</td>
                                <td>{item.language}</td>
                                <td> $ {item.price}</td>
                                <th onClick={() => handelReview(item.tutorId)}>
                                    <span className="px-3 py-1 cursor-pointer hover:bg-purple-600 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">
                                        <span>Review</span>
                                    </span>
                                </th>
                            </tr>)
                        }

                    </tbody>

                </table>
            </div>
        </div>

    );
};

export default BookedTutors;

