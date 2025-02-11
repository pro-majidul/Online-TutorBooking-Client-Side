
import React, { useEffect, useState } from 'react';
import { FaLanguage, FaStar } from 'react-icons/fa';
import { FaUsersGear } from 'react-icons/fa6';
import { GiTeacher } from 'react-icons/gi';
import { MdReviews } from 'react-icons/md';

const Starts = () => {
    const [totaltuturials, setTotalTutorials] = useState(0)

    useEffect(() => {
        fetch('https://online-tutorial-booking-platform-server-side.vercel.app/tutorsCount')
            .then(res => res.json())
            .then(data => {
                setTotalTutorials(data);
            })
    }, [])



    return (
        <section className="p-6 my-6 ">
            <div className="container grid grid-cols-1 gap-6 mx-auto sm:grid-cols-2 xl:grid-cols-4">
                <div className="flex transition hover:-translate-y-1 hover:bg-purple-800 hover:text-white p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 bg-base-200 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <GiTeacher size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">{totaltuturials?.totaltutorial}+ </p>
                        <p className="capitalize">Tutors Count</p>
                    </div>
                </div>
                <div className="flex transition hover:-translate-y-1 hover:bg-purple-800 hover:text-white p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 bg-base-200 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <MdReviews size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold flex items-center gap-1 leading-none">
                            {
                                totaltuturials && totaltuturials?.totalReview[0]?.total
                            }+ <FaStar size={18} /> <FaStar size={18} /> <FaStar size={18} />
                        </p>

                        <p className="capitalize">Review Counts</p>
                    </div>
                </div>
                <div className="flex transition hover:-translate-y-1 hover:bg-purple-800 hover:text-white p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 bg-base-200 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <FaLanguage size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">{totaltuturials.totalLanguage}+ </p>
                        <p className="capitalize">Language Count</p>
                    </div>
                </div>
                <div className="flex transition hover:-translate-y-1 hover:bg-purple-800 hover:text-white p-4 space-x-4 rounded-lg md:space-x-6 dark:bg-gray-50 bg-base-200 dark:text-gray-800">
                    <div className="flex justify-center p-2 align-middle rounded-lg sm:p-4 dark:bg-violet-600">
                        <FaUsersGear size={40} color='white' />
                    </div>
                    <div className="flex flex-col justify-center align-middle">
                        <p className="text-3xl font-semibold leading-none">{totaltuturials.usercount}+ </p>
                        <p className="capitalize">User's Count</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Starts;