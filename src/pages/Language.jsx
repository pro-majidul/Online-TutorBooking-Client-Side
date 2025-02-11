import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Language = () => {
    const { category } = useParams()
    const [items, setItems] = useState([])
    const [loader, setLoader] = useState(true)
    const [search, setSearch] = useState('')
    useEffect(() => {
        fetch(`https://online-tutorial-booking-platform-server-side.vercel.app/tutors?languages=${category}&search=${search}`)
            .then(res => res.json())
            .then(data => {
                setItems(data)
                setLoader(false)
            }).catch(error => {
                setLoader(false)
            })
    }, [search])

    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
        <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
    </div>
    }

    return (
        <div className='w-full max-w-7xl mx-auto'>
            <div className='flex items-center justify-center pt-20'>
                <div className="relative mt-6 mb-12">
                    <span className="absolute inset-y-0 flex items-center pl-2 mx-auto">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 dark:text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input onChange={(e) => setSearch(e.target.value)} type="search" name="Search" placeholder="Search..." className="w-full py-3 pl-12 text-sm rounded-full sm:w-96 focus:outline-none dark:bg-gray-100 dark:text-gray-800 focus:dark:bg-gray-50" />
                </div>
            </div>
            <section className="py-6 ">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-4 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            items.map(items => <article key={items._id} className="flex flex-col hover:scale-105 transition dark:bg-gray-50">

                                <div className=" w-full h-64 rounded lg:col-span-7 dark:bg-gray-500">
                                    <img src={items.photo} alt="" className="h-full w-full object-cover" />
                                </div>

                                <div className="flex flex-col flex-1 p-6 text-black">

                                    <p className="text-lg tracking-wider uppercase hover:underline dark:text-violet-600">Name:{items.name}</p>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug">Language :  {items.language}</h3>
                                    <p>{items?.description.slice(0, 100)}</p>
                                    <div className="flex flex-wrap justify-between items-center pt-3 space-x-2  dark:text-gray-600">
                                        <p className='font-bold'>Review {items.review}</p>
                                        <Link to={`/tutor/${items._id}`}><button className="btn btn-sm bg-purple-300">See More</button></Link>
                                    </div>
                                </div>
                            </article>)
                        }

                    </div>
                </div>
            </section>
        </div>
    );
};

export default Language;