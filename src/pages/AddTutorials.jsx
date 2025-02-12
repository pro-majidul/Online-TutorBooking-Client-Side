import React from 'react';
import useUsers from '../hooks/useUsers';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
import useSecureAxios from '../hooks/useSecureAxios';

const AddTutorials = () => {
    const { user,loader } = useUsers()
    const navigate = useNavigate()
    const axiosSecure = useSecureAxios()
    const handelAddTutorials = e => {
        e.preventDefault();
        const form = new FormData(e.target)
        const formdata = Object.fromEntries(form.entries());
        const { ...newdata } = formdata;
        newdata.review = 0;
        // console.log("new data added ", newdata);
        axiosSecure.post('/tutors', newdata)
            // .then(res => res.json())
            .then(res => {
                if (res.data.insertedId) {
                    toast.success('Tutorials Added SuccessFull')
                    navigate('/find-tutors')
                }
            })

    }
    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    return (
        <div className="bg-bannerImg  bg-no-repeat bg-cover bg-center md:p-28">

            <div className='bg-[#F4F3F0] p-10 pt-28 w-full max-w-7xl mx-auto'>
                <form onSubmit={handelAddTutorials} className="card-body">
                    <div className="grid md:grid-cols-2 gap-10">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' defaultValue={user?.displayName} readOnly placeholder="Enter Name" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Enter Your Email" readOnly defaultValue={user?.email} className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Language</span>
                            </label>
                            <select name='language' defaultValue="Select A Language" className="select input-bordered select-ghost w-full " required>
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
                            <input type="number" name='price' placeholder="Enter Your Price" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Description</span>
                            </label>
                            <textarea className="textarea textarea-bordered" placeholder="Description" name="description" required></textarea>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Image</span>
                            </label>
                            <input name="photo" type="url" placeholder="Enter Photo URL" className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-purple-500">Submit</button>
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddTutorials;


