
const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center">
            {/* Hero Section */}
            <section className="w-full bg-green-600 text-white py-20 flex flex-col items-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">About EcoEssence</h1>
                <p className="text-lg md:text-xl max-w-3xl text-center">
                    At EcoEssence, we are committed to bringing you eco-friendly products that help
                    you live a sustainable and conscious lifestyle. Our journey began with a passion
                    for preserving nature while offering high-quality products that blend seamlessly
                    into your daily life.
                </p>
            </section>

            {/* Mission Section */}
            <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-4">
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Our mission is to empower individuals to make informed choices that positively impact the planet. We strive to offer products that are not only environmentally friendly but also stylish and functional. By prioritizing sustainability in every aspect of our business, we hope to inspire others to embrace a greener way of living.
                        </p>
                    </div>
                    <div>
                        <img
                            src="https://i.ibb.co/2hRPbPb/image.png"
                            alt="Our Mission"
                            className="w-full rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-white py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 text-center">
                    Our Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Sustainability</h3>
                        <p className="text-gray-700">
                            We believe in sustainability, sourcing materials that are kind to the earth and ensuring that our processes minimize environmental impact.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Quality</h3>
                        <p className="text-gray-700">
                            Quality is at the forefront of everything we do. Our products are crafted with care, ensuring they stand the test of time while being gentle on the planet.
                        </p>
                    </div>
                    <div className="p-8 bg-gray-100 rounded-lg shadow-lg">
                        <h3 className="text-2xl font-semibold mb-4">Innovation</h3>
                        <p className="text-gray-700">
                            We are constantly innovating, seeking new ways to make sustainable living more accessible, practical, and appealing to everyone.
                        </p>
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-20 px-4 sm:px-8 md:px-16 lg:px-24">
                <h2 className="text-3xl md:text-4xl font-bold text-green-600 mb-12 text-center">
                    Meet Our Team
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co/0Yn0rjw/image.png"
                            alt="Team Member 1"
                            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Jane Doe</h3>
                        <p className="text-gray-700">Founder & CEO</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co/zftrqwC/image.png"
                            alt="Team Member 2"
                            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">John Smith</h3>
                        <p className="text-gray-700">Head of Design</p>
                    </div>
                    <div className="text-center">
                        <img
                            src="https://i.ibb.co/0Yn0rjw/image.png"
                            alt="Team Member 3"
                            className="w-32 h-32 mx-auto rounded-full shadow-lg mb-4"
                        />
                        <h3 className="text-xl font-semibold">Emily Johnson</h3>
                        <p className="text-gray-700">Marketing Director</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;
