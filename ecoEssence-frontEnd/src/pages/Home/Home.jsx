import { Link } from "react-router-dom";
import Carousel from "../../components/HomePage/Carousel/Carousel";

const Home = () => {
    return (
        <div className="bg-gray-100">
            {/* Hero Section */}
            <div className="h-[700px] z-10">
                <Carousel />
            </div>

            {/* About Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">About Eco Essence</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        At Eco Essence, we believe in creating products that are not only beautiful but also sustainable. Our mission is to bring eco-friendly alternatives to everyday products, making it easier for you to live a green and responsible lifestyle.
                    </p>
                </div>
            </section>

            {/* Featured Products Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">Featured Products</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                        {/* To do: Example Product Card should be replaced*/}
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/ZK6FGbY/image.png"
                                alt="Organic Cotton T-Shirt"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Organic Cotton T-Shirt</h3>
                                <p className="text-gray-600 mb-2">Comfortable, eco-friendly t-shirt made from 100% organic cotton.</p>
                                <span className="text-green-600 font-bold">$25.99</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/ZK6FGbY/image.png"
                                alt="Organic Cotton T-Shirt"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Organic Cotton T-Shirt</h3>
                                <p className="text-gray-600 mb-2">Comfortable, eco-friendly t-shirt made from 100% organic cotton.</p>
                                <span className="text-green-600 font-bold">$25.99</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/ZK6FGbY/image.png"
                                alt="Organic Cotton T-Shirt"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Organic Cotton T-Shirt</h3>
                                <p className="text-gray-600 mb-2">Comfortable, eco-friendly t-shirt made from 100% organic cotton.</p>
                                <span className="text-green-600 font-bold">$25.99</span>
                            </div>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img
                                src="https://i.ibb.co/ZK6FGbY/image.png"
                                alt="Organic Cotton T-Shirt"
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2">Organic Cotton T-Shirt</h3>
                                <p className="text-gray-600 mb-2">Comfortable, eco-friendly t-shirt made from 100% organic cotton.</p>
                                <span className="text-green-600 font-bold">$25.99</span>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-12">
                        <Link to={'/all-products'}><button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700">
                            View All Products
                        </button></Link>
                    </div>
                </div>
            </section>

            {/* Sustainability Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Commitment to Sustainability</h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Eco Essence is dedicated to reducing our carbon footprint by using sustainable materials and processes in everything we do. We prioritize the environment and strive to create products that help you do the same.
                    </p>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-8 text-center text-gray-800">What Our Customers Say</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-600 mb-4">Eco Essence has truly transformed my approach to eco-friendly living. Their products are top-notch!</p>
                            <h4 className="text-xl font-semibold text-gray-800">- Jane Doe</h4>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-600 mb-4">Eco Essence has truly transformed my approach to eco-friendly living. Their products are top-notch!</p>
                            <h4 className="text-xl font-semibold text-gray-800">- Jane Doe</h4>
                        </div>
                        <div className="bg-white shadow-lg rounded-lg p-6">
                            <p className="text-gray-600 mb-4">Eco Essence has truly transformed my approach to eco-friendly living. Their products are top-notch!</p>
                            <h4 className="text-xl font-semibold text-gray-800">- Jane Doe</h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* Newsletter Section */}
            <section className="py-20 bg-white text-center">
                <div className="container mx-auto px-4">
                    <h2 className="text-4xl font-bold mb-4 text-gray-800">Stay Updated</h2>
                    <p className="text-lg text-gray-600 mb-8">Sign up for our newsletter to receive the latest news and special offers.</p>
                    <form className="max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        />
                        <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">Subscribe</button>
                    </form>
                </div>
            </section>
        </div>
    );
};

export default Home;
