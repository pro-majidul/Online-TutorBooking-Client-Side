import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
// import { LiaFlagUsaSolid } from 'react-icons/lia';
import { Link } from 'react-router-dom';

const Languages = () => {
    const [languages, setLanguages] = useState([]);
    const [loader, setLoader] = useState(true)

    useEffect(() => {
        fetch('https://online-tutorial-booking-platform-server-side.vercel.app/language')
            .then(res => res.json())
            .then(data => {
                setLanguages(data)
                setLoader(false)
            }).catch(error => {
                setLoader(false)
            })
    }, [])

    if (loader) {
        return <div className='flex items-center justify-center min-h-screen'>
            <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-600"></div>
        </div>
    }
    return (
        <section className="p-4 my-6 md:p-8">
            <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-3">
                {
                    languages.map(language => <Link key={language._id} to={`/find-tutors/${language.language}`}>
                        <div className="flex overflow-hidden rounded-lg md:p-6 p-4 transition hover:scale-x-105 hover:bg-purple-500 border dark:bg-gray-50 dark:text-gray-800 h-32">
                            <div className="flex items-center justify-center px-4">
                                <img className='w-10' src={language.img} />

                            </div>
                            <div className="flex items-center justify-between flex-1 p-3">
                                <p className="md:text-2xl font-semibold">{language.language} Tutors</p>
                                <p><FaChevronRight /></p>
                            </div>
                        </div>
                    </Link>)
                }

            </div>
        </section>
    );
};

export default Languages;