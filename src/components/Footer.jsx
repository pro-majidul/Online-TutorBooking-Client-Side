import React from 'react';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
import { GiTeacher } from 'react-icons/gi';
import { GrInstagram } from 'react-icons/gr';

const Footer = () => {
    return (
        <footer className="px-10 divide-y bg-purple-100 ">
            <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                <div className="lg:w-1/3">
                    <p className="flex justify-center space-x-3 lg:justify-start">
                        <span className="self-center text-2xl text-black flex gap-1 md:text-3xl font-semibold"> <GiTeacher size={32} />Online Tutors</span>
                    </p>
                    <p className="mt-4 text-black">
                        Language Connect Co.<br />
                        1234 Elm Street, Suite 567<br />
                        Los Angeles, CA 90001<br />
                        United States<br />
                        Email: support@languageconnect.com<br />
                        Phone: +1 (555) 123-4567
                    </p>
                </div>
                <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 sm:grid-cols-4">
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Product</h3>
                        <ul className="space-y-1 text-black">
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Features</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Integrations</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Pricing</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >FAQ</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="tracking-wide uppercase dark:text-gray-900">Company</h3>
                        <ul className="space-y-1 text-black">
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Privacy</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Terms of Service</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <h3 className="uppercase dark:text-gray-900">Developers</h3>
                        <ul className="space-y-1 text-black">
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Public API</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Documentation</p>
                            </li>
                            <li>
                                <p className='hover:text-purple-500 hover:underline' >Guides</p>
                            </li>
                        </ul>
                    </div>
                    <div className="space-y-3">
                        <div className="uppercase dark:text-gray-900">Social media</div>
                        <div className="flex justify-start space-x-3">
                            <p title="Facebook" className="flex items-center p-1">
                                <FaFacebook size={24} color='blue' />
                            </p>
                            <p title="Twitter" className="flex items-center p-1">
                                <FaTwitter size={24} color='skyblue' />
                            </p>
                            <p title="Instagram" className="flex items-center p-1">
                                <GrInstagram size={24} color='red' />

                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-6 text-sm text-center dark:text-gray-600">© 1968 Company Co. All rights reserved.</div>
        </footer>
    );
};

export default Footer;