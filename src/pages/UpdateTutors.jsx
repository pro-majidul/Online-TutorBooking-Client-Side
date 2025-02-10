import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import useSecureAxios from '../hooks/useSecureAxios';
import useUsers from '../hooks/useUsers';
// import axios from 'axios';

const UpdateTutors = () => {
    const { id } = useParams()
    const [data, setData] = useState({})
    const [loader, setLoader] = useState(true)
    const navigate = useNavigate()
    const secureAxios = useSecureAxios()
    const { user } = useUsers()
    const { name, email, language, price, description, photo, review } = data || {}

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await secureAxios.get(`/tutors/${id}?email=${user.email}`);
                // console.log('Data is:', response.data);
                setData(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoader(false);
            }
        };

        if (id && user?.email) {
            fetchData();
        }
    }, [id, user?.email]);






    const handelUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;
        const formdata = {
            name: form.name.value,
            email: form.email.value,
            language: form.language.value,
            price: form.price.value,
            photo: form.photo.value,
            description: form.description.value,
        };

        try {

            const response = await secureAxios.put(
                `/tutors/${id}?email=${user.email}`, formdata
            );

            if (response.data.modifiedCount > 0) {
                toast.success('Tutorial Update Successful');
                navigate('/my-tutorial');
            } else {
                toast.error('Please update an item first');
            }
        } catch (error) {
            console.error('Error updating tutor:', error);
            toast.error(error.response?.data?.message || 'Update failed');
        }
    };



    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }

    return (

        <div className='w-full mx-auto max-w-7xl'>

            <form onSubmit={handelUpdate} className="card-body pt-32">
                <div className="grid md:grid-cols-2 gap-10">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Name</span>
                        </label>
                        <input type="text" name='name' defaultValue={name} readOnly placeholder="Enter Name" className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" defaultValue={email} name='email' placeholder="Enter Your Email" readOnly className="input input-bordered" required />
                    </div>

                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Language</span>
                        </label>
                        <select name='language' defaultValue={language} className="select input-bordered select-ghost w-full " required>
                            <option disabled>Select A Language</option>
                            <option>English</option>
                            <option>Japanese</option>
                            <option>French</option>
                            <option>Spanish</option>
                            <option>German</option>
                            <option>Italian</option>
                            <option>Chinish</option>
                            <option>Arabic</option>
                            <option>Portuguese</option>
                        </select>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} placeholder="Enter Your Price" className="input input-bordered" required />
                    </div>


                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Image</span>
                        </label>
                        <input defaultValue={photo} name="photo" type="url" placeholder="Enter Photo URL" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Review</span>
                        </label>
                        <input readOnly defaultValue={review} name="review" type="text" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Description</span>
                    </label>
                    <textarea defaultValue={description} className="textarea textarea-bordered" placeholder="Description" name="description" required></textarea>
                </div>
                <div className="form-control mt-6">
                    <button className="btn bg-purple-500">Update</button>
                </div>

            </form>
        </div>

    );
};

export default UpdateTutors;