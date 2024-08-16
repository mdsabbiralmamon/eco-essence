import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="bg-white text-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Get in Touch</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Contact Information */}
                    <div className="flex flex-col justify-center space-y-6">
                        <div className="flex items-center space-x-4">
                            <FaPhoneAlt className="text-green-600 text-2xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Phone</h4>
                                <p className="text-lg">+123 456 7890</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaEnvelope className="text-green-600 text-2xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Email</h4>
                                <p className="text-lg">contact@ecoessence.com</p>
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <FaMapMarkerAlt className="text-green-600 text-2xl" />
                            <div>
                                <h4 className="text-xl font-semibold">Address</h4>
                                <p className="text-lg">123 Eco Street, Green City, EC 12345</p>
                            </div>
                        </div>
                    </div>
                    
                    {/* Contact Form */}
                    <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-6">Send Us a Message</h3>
                        <form className="space-y-4">
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="name">Your Name</label>
                                <input 
                                    id="name" 
                                    type="text" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="John Doe"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="email">Your Email</label>
                                <input 
                                    id="email" 
                                    type="email" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="you@example.com"
                                />
                            </div>
                            <div>
                                <label className="block text-lg font-medium mb-2" htmlFor="message">Your Message</label>
                                <textarea 
                                    id="message" 
                                    rows="5" 
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button 
                                    type="submit" 
                                    className="bg-green-600 text-white px-6 py-2 rounded-md shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-600"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
