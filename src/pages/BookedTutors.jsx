import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';
import useSecureAxios from '../hooks/useSecureAxios';

const BookedTutors = () => {
    const { user,loader } = useUsers()
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

        if (user?.email) {
            fetchData();
        }
    }, [user?.email])

    // console.log(items.length);

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
    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    return (
        <div className="container max-w-7xl min-h-[calc(100vh-320px)]  p-2 mx-auto sm:p-4 dark:text-gray-800">
            <div className=" overflow-x-auto pt-28">
                {
                    items.length < 1 ? <p className='text-center text-xl md:text-3xl font-bold'>No item Booked yet</p> : <table className="table bg-purple-800">

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


                        {items && items.map(item => <tr key={item._id}>

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
                        </tr>)}
                    </tbody>

                </table>
                }
            </div>
        </div>

    );
};

export default BookedTutors;

