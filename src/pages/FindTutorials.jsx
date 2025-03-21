import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FindTutorials = () => {
    const [data, setData] = useState([])
    const [loader, setLoader] = useState(true);
    const [search, setSearch] = useState('');
    const [sort, setSort] = useState('')
    useEffect(() => {
        fetch(`https://online-tutorial-booking-platform-server-side.vercel.app/allTutors?search=${search}&sort=${sort}`)
            .then(res => res.json())
            .then(data => {
                setData(data)
                setLoader(false)
            }).catch(error => {
                setLoader(false)
            })
    }, [search,sort])

    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }

    console.log(sort)
    console.log(data)
    return (
        <div className='pt-20 w-full max-w-7xl mx-auto'>

            {/* <div className='md:flex items-center justify-center'>
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
                <div>
                    <select name="" id=""  className="px-4 py-2 border border-gray-300 rounded-lg shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 text-gray-700">
                        <option value='Decending'>Decending</option>
                        <option value='Accending'>Accending</option>

                    </select>
                </div>
            </div> */}
            <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 px-4">
                {/* Search Box */}
                <div className="relative w-full md:w-auto">
                    <span className="absolute inset-y-0 left-3 flex items-center">
                        <button type="submit" title="Search" className="p-1 focus:outline-none focus:ring">
                            <svg fill="currentColor" viewBox="0 0 512 512" className="w-4 h-4 text-gray-800">
                                <path d="M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z"></path>
                            </svg>
                        </button>
                    </span>
                    <input
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                        placeholder="Search..."
                        className="py-3 pl-10 pr-4 text-sm rounded-full md:w-80 w-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300"
                    />
                </div>

                {/* Sort Dropdown */}
                <div>
                    <select
                        onChange={(e) => setSort(e.target.value)}
                        defaultValue='Sort By Price'
                        className="px-4 py-3 border border-gray-300 rounded-full shadow-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-300 text-gray-700">
                        <option disabled>Sort By Price</option>
                        <option value="Descending">Descending</option>
                        <option value="Ascending">Ascending</option>
                    </select>
                </div>
            </div>

            <section className="py-6">
                <div className="container p-6 mx-auto space-y-8">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-8 md:grid-cols-2 lg:grid-cols-4">
                        {
                            data.map(items => <article key={items._id} className="flex transition hover:scale-105 border flex-col dark:bg-gray-50">

                                <div className=" w-full h-64 rounded  lg:col-span-7 dark:bg-gray-500">
                                    <img src={items.photo} alt="" className="h-full w-full" />
                                </div>

                                <div className="flex flex-col flex-1 p-6">

                                    <p className="text-lg tracking-wider uppercase hover:underline dark:text-violet-600">Name:{items.name}</p>
                                    <h3 className="flex-1 py-2 text-lg font-semibold leading-snug dark:text-gray-600">Language :  {items.language}</h3>
                                    <p className='dark:text-gray-600'>{items?.description.slice(0, 100)}....</p>
                                    <p className='font-bold mt-1 dark:text-gray-600'> Price : {items?.price}</p>
                                    <div className="flex flex-wrap justify-between items-center pt-3 space-x-2  dark:text-gray-600">
                                        <p className='font-bold'>Review {items.review}</p>
                                        <Link to={`/tutor/${items._id}`}><button className="btn text-black hover:text-gray-50 btn-sm bg-purple-300">See More</button></Link>
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

export default FindTutorials;