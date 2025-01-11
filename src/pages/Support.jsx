import React, { useState } from 'react';
import { Fade } from 'react-awesome-reveal';

const Support = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your email handling or form submission logic here
        setStatus('Your message has been sent successfully!');
        setEmail('');
        setMessage('');
    };

    return (
        <section className="bg-purple-50 md:pt-28 pt-28 pb-16" id="support">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-black text-center  mb-8">Support & Contact</h2>

                <p className="text-center text-lg text-black mb-10">
                    Need help or have a question? We are here to assist you! Feel free to reach out through any of the following methods.
                </p>

                {/* Contact Options */}
                <div className="flex flex-wrap justify-center gap-12 mb-16">
                    {/* Email Support */}
                    <Fade direction='left' triggerOnce>
                        <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                            <h3 className="text-xl font-semibold text-black mb-4">Email Support</h3>
                            <p className="text-black mb-4">
                                For any queries, feel free to send us an email. We aim to respond within 24 hours.
                            </p>
                            <a
                                href="mailto:majidul123tub@gmail.com"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                majidul123tub@gmail.com
                            </a>
                        </div>
                    </Fade>

                    {/* Phone Support */}
                    <Fade direction='top' triggerOnce>
                        <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                            <h3 className="text-xl font-semibold text-black mb-4">Phone Support</h3>
                            <p className="text-black mb-4">
                                For urgent inquiries, you can reach us by phone. Our support team is available Monday to Friday, 9 AM to 5 PM.
                            </p>
                            <a
                                href="tel:+00801746637704"
                                className="text-indigo-600 font-semibold hover:underline"
                            >
                                +1 01746637704
                            </a>
                        </div>
                    </Fade>

                    {/* Social Media Support */}
                    <Fade direction='right' triggerOnce>
                        <div className="flex flex-col items-center text-center max-w-xs mx-auto">
                            <h3 className="text-xl text-black font-semibold  mb-4">Social Media</h3>
                            <p className="text-black mb-4">
                                You can also reach us via our social media platforms for support and updates.
                            </p>
                            <div className="flex gap-6">
                                <a
                                    href="https://www.linkedin.com/in/yourprofile/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 font-semibold hover:underline"
                                >
                                    LinkedIn
                                </a>
                                <a
                                    href="https://twitter.com/yourprofile"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-indigo-600 font-semibold hover:underline"
                                >
                                    Twitter
                                </a>
                            </div>
                        </div>
                    </Fade>
                </div>

                {/* Contact Form */}
                <Fade direction='left' triggerOnce>
                    <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg mx-auto">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">Send Us a Message</h3>
                        <p className="text-gray-900 mb-6">
                            If you have any questions, feel free to send us a detailed message, and we will get back to you as soon as possible.
                        </p>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-semibold text-gray-700">
                                    Your Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    required
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="message" className="block text-sm font-semibold text-gray-700">
                                    Your Message
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className="w-full px-4 py-2 mt-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    rows="5"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700"
                            >
                                Send Message
                            </button>
                        </form>

                        {status && (
                            <p className="mt-4 text-center text-green-600 font-semibold">{status}</p>
                        )}
                    </div>
                </Fade>
            </div>
        </section>
    );
};

export default Support;
