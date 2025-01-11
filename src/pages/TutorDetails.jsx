import { useEffect, useState } from "react";
import useUsers from "../hooks/useUsers";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import useSecureAxios from "../hooks/useSecureAxios";
import axios from "axios";

const TutorDetails = () => {
    const { user } = useUsers()
    const loaderdata = useLoaderData()
    const { details } = useParams()
    const [datas, setDatas] = useState(loaderdata)
    const [loader, setLoader] = useState(true);
    const navigate = useNavigate()
    const axiosdata = useSecureAxios()


    useEffect(() => {
        try {
            axios.get(`https://online-tutorial-booking-platform-server-side.vercel.app/tutors/${details}`)
                .then(res => {
                    console.log(res);
                    setDatas(res.data)
                    setLoader(false)
                })
        } catch {
            setLoader(false)
        }
    }, [])

    const handelBooked = async () => {
        if (!user) {
            toast.error('Please Login first')
            navigate('/login')
            return
        }

        if (datas.email === user.email) {
            return toast.error('Can not Booked Own Tutorials')
        }
        const bookingDetails = {
            tutorId: datas._id,
            image: datas.photo,
            language: datas.language,
            price: datas.price,
            tutorEmail: datas.email,
            email: user.email,
            name: datas.name,
        };


        try {
            const response = await axiosdata.post('/tutorBooked', bookingDetails)
            if (response.data.insertedId) {
                return toast.success('Tutors Booked SuccessFull')
            }
            // console.log(response);

        } catch (error) {
            toast.error(`${error?.response?.data}`)
            // console.log(error);
        }

    }


    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    return (
        <section >
            <div className="container max-w-6xl p-6 pt-32 mx-auto ">
                <div className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50">
                    <div className=" w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500">
                        <img src={datas.photo} alt="" className="h-full w-full" />
                    </div>
                    <div className="p-6 space-y-4 lg:col-span-5 text-black">
                        <h3 className="text-xl font-semibold sm:text-2xl">Name : {datas.name}</h3>
                        <span className="text-xl md:text-2xl dark:text-gray-600">Language : {datas.language}</span>
                        <p><span>DesCriptions </span> {datas.description}</p>

                        <div className="md:flex  justify-between items-center">
                            <p className="font-medium">Price : ${datas.price}</p>

                            <p className="font-medium">Review {datas.review}</p>
                        </div>

                        <button onClick={handelBooked} className="btn my-3 py-3 hover:btn-accent btn-neutral">Book</button>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default TutorDetails;