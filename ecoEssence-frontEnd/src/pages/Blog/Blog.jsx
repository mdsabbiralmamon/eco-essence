
const Blog = () => {
    const blogPosts = [
        {
            id: 1,
            title: 'Sustainable Living: 10 Tips to Reduce Your Carbon Footprint',
            date: 'August 20, 2024',
            description:
                'Learn how to make small changes in your daily life that can have a big impact on the environment. From reducing waste to conserving energy, these tips will help you live more sustainably.',
            imageUrl: 'https://via.placeholder.com/400x250',
        },
        {
            id: 2,
            title: 'Eco-Friendly Products: What to Look For',
            date: 'August 15, 2024',
            description:
                'Discover what makes a product eco-friendly and how you can make smarter choices when shopping for your home and lifestyle.',
            imageUrl: 'https://via.placeholder.com/400x250',
        },
        {
            id: 3,
            title: 'The Future of Green Energy: What to Expect',
            date: 'August 10, 2024',
            description:
                'Explore the latest advancements in renewable energy and what they mean for our planet’s future.',
            imageUrl: 'https://via.placeholder.com/400x250',
        },
    ];

    return (
        <div className="bg-white text-gray-800 py-16">
            <div className="max-w-7xl mx-auto px-4">
                <h2 className="text-4xl font-bold text-center mb-12">Our Blog</h2>
                
                {/* Blog Posts Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <div key={post.id} className="bg-gray-100 rounded-lg shadow-lg overflow-hidden">
                            <img 
                                src={post.imageUrl} 
                                alt={post.title} 
                                className="w-full h-56 object-cover"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-sm text-gray-500 mb-4">{post.date}</p>
                                <p className="text-lg text-gray-700 mb-4">{post.description}</p>
                                <a 
                                    href="#" 
                                    className="text-green-600 font-semibold hover:underline"
                                >
                                    Read more
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="text-center mt-12">
                        <button className="bg-green-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-green-700">
                            View All
                        </button>
                    </div>
            </div>
        </div>
    );
};

export default Blog;
