import { FaLocationDot, FaWhatsapp } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import { TbPhoneCall } from 'react-icons/tb';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';
import { Fade } from 'react-awesome-reveal';

const ContactUs = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        const formData = new FormData(form.current);
        const fromName = formData.get('from_name');
        const fromEmail = formData.get('from_email');
        const message = formData.get('message');

        const emailParams = {
            from_name: fromName,
            from_email: fromEmail,
            message: message,
            reply_to: fromEmail,
           
        };

        emailjs
            .sendForm('service_ggwkmsr', 'template_ud9cxne', form.current, {
                publicKey: 'zTJh8Dk6Sk51W-Uy8',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    toast.success('Message Sent Successfully');
                    form.current.reset();
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    toast.error(`${error.text}`);
                }
            );
    };

    return (
        <section id='contact' className="py-6 pt-28 bg-purple-50">
            <h2 className="text-4xl font-bold text-center text-black mb-8">Contact Us</h2>
            <div className="grid max-w-6xl grid-cols-1  px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
                <Fade direction='left' triggerOnce>
                    <div className="py-6 md:py-0 md:px-6">
                        <h1 className="text-4xl font-bold text-black">Let’s Discuss Your Project</h1>
                        <p className="pt-2 pb-4 text-gray-900"> I am available for inquiries, collaborations, and consultations. Feel free to get in touch with me through any of the following methods.</p>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-orange-400'>
                                    <FaLocationDot size={16} />
                                </p>
                                <span className='text-gray-900 hover:text-orange-300'>Rangpur , Dhaka , Bangladesh</span>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-orange-400'>
                                    <FaWhatsapp size={16} />
                                </p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://wa.me/8801746637704" className='text-gray-900 text-xl hover:text-orange-300'> 01746637704</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-orange-400'>
                                    <TbPhoneCall size={16} />
                                </p>
                                <a href="tel:+8801746637704" className='text-gray-900 text-xl hover:text-orange-300'>+08 01746637704</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <p className='border p-3 rounded-full hover:border-orange-400'> <MdEmail size={16} /></p>
                                <a
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=majidul123tub@gmail.com" className='text-gray-900 md:text-xl hover:text-orange-300'>majidul123tub@gamil.com</a>
                            </div>
                        </div>
                    </div>
                </Fade>

                <Fade direction='right' triggerOnce>
                    <form ref={form} onSubmit={sendEmail} className="container w-full max-w-xl md:p-8 mx-auto space-y-6 rounded-md shadow ">
                        <p className="text-4xl text-black font-bold">Send me A message</p>
                        <div>
                            <label className="block text-black mb-1 ml-1">Name</label>
                            <input type="text" name='from_name' placeholder="Your name" required className="block w-full p-2 text-white rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]" />
                        </div>
                        <div>
                            <label className="block text-black mb-1 ml-1">Email</label>
                            <input name='from_email' type="email" placeholder="Your email" required className="block w-full p-2 text-white rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]" />
                        </div>
                        <div>
                            <label className="block text-black mb-1 ml-1">Message</label>
                            <textarea id="message" type="text" name='message' placeholder="Message..." className="block w-full text-white p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 dark:bg-[#101624]"></textarea>
                        </div>
                        <div>
                            <button type="submit" className='px-6 py-2 text-black font-semibold rounded-lg hover:bg-green-300 bg-green-500 transition-all duration-300 hover:text-orange-400 cursor-pointer'>Send Message</button>
                        </div>
                    </form>
                </Fade>

            </div>
        </section>
    );
};

export default ContactUs;