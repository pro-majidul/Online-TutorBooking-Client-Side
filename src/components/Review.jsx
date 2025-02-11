import React from 'react';

const Review = ({img, title,name,description}) => {
    return (
        <div>
            <div className="p-5 mx-auto sm:p-10 md:p-16 ">
                <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
                    <img src={img} alt="" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
                    <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md dark:bg-white bg-base-300">
                        <div className="space-y-2">
                            <p className="inline-block text-2xl font-semibold sm:text-3xl"> {title}</p>
                            <p className="text-xl  dark:text-gray-600">By: <br />
                                <span className="text-xl hover:underline">{name}</span>
                            </p>
                        </div>
                        <div className="dark:text-gray-800">
                            <p>{description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;






