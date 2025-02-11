// import axios from 'axios';
import React, { useEffect, useState } from 'react';
import useUsers from '../hooks/useUsers';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSecureAxios from '../hooks/useSecureAxios';

const MyTutorials = () => {
    const { user } = useUsers()
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState([])
    const axiosSecure = useSecureAxios()



    useEffect(() => {
        try {

            axiosSecure.get(`/tutor/${user?.email}`)
                .then(res => {
                    setData(res.data)
                    setLoader(false)
                })
        } catch {
            setLoader(false)
        }

    }, [user.email])



    const handleDelete = async (id) => {
        try {
            const deletedata = await axiosSecure.delete(`/tutors/${id}?email=${user.email}`)


            // const response = await fetch(`https://online-tutorial-booking-platform-server-side.vercel.app/tutors/${id}?email=${user.email}`, {
            //     method: "DELETE",
            //     headers: {
            //         'Content-Type': 'application/json',
            //     },
            // });

            // const result = await response.json();

            if (deletedata.data.deletedCount === 1) {
                // console.log("Successfully deleted one document.");
                toast.success('Successfully deleted one document.');

                const filterdata = data.filter(item => item._id !== id)
                setData(filterdata)
            } else {
                // console.log("No documents matched the query. Deleted 0 documents.");
                toast.error('No documents matched the query. Deleted 0 documents.');
            }
        } catch (error) {
            console.error("Error deleting document:", error);
            toast.error('An error occurred while trying to delete the document.');
        }
    };



    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    //  console.log(data);
    return (
        <>
            {
                data.length > 0 ? <div className='grid grid-cols-1 w-full mx-auto max-w-7xl px-10  py-5 pt-28 sm:grid-cols-2 md:grid-cols-3 g gap-5'>
                    {data.map(items => <div key={items._id} className="flex border-2 transition hover:scale-105 flex-col max-w-md p-6 rounded-md ">
                        <img
                            src={items.photo}
                            alt=""
                            className="flex-shrink-0 object-cover h-32 rounded-sm sm:h-64 dark:bg-gray-500 aspect-square"
                        />
                        <div className="mt-2 space-y-2 flex-grow">
                            <h2 className="text-xl font-semibold">Name : {items.name}</h2>
                            <span className="block pb-2 text-xl font-semibold dark:text-gray-600">
                                Language : {items.language}
                            </span>
                            <p>Descriptions : {items.description}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-md font-semibold">Price : ${items.price}</p>
                            <p className="text-md font-semibold">Review : {items.review}</p>
                        </div>
                        <div className="flex justify-between mt-auto pt-4">
                            <Link to={`/update/${items._id}`}>
                                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                    Update
                                </button>
                            </Link>

                            <button onClick={() => handleDelete(items._id)} className="px-4 py-2 bg-gray-200 text-gray-800 hover:text-white rounded hover:bg-gray-700">
                                Delete
                            </button>

                        </div>
                    </div>)}
                </div> : <p className='text-center py-5 pt-28 md:text-3xl text-xl font-bold'>You Dont have added any item</p>
            }
        </>
    );
};

export default MyTutorials;