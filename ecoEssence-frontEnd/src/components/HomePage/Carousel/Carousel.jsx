// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import slide1image from '../../../assets/images/slider/pexels-kampus-7658767.jpg';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Carousel.css';

// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';

const Carousel = () => {
    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                speed={600}
                parallax={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Parallax, Pagination, Navigation]}
                className="mySwiper"
            >
                <div
                    slot="container-start"
                    className="parallax-bg"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${slide1image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                    data-swiper-parallax="-23%"
                ></div>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Eco-Friendly Living
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Embrace Sustainable Choices
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Discover a wide range of eco-friendly products that promote a sustainable lifestyle.
                            From organic clothing to biodegradable accessories, we offer items that are kind to both you and the planet.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            Shop Now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Organic Clothing
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Style Meets Sustainability
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Our collection of organic clothing is crafted from 100% certified organic cotton.
                            Enjoy comfort and style without compromising your values.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            Explore Collection
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="title" data-swiper-parallax="-300">
                        Eco Accessories
                    </div>
                    <div className="subtitle" data-swiper-parallax="-200">
                        Small Changes, Big Impact
                    </div>
                    <div className="text" data-swiper-parallax="-100">
                        <p>
                            Accessorize with purpose. Our eco-friendly accessories are made from sustainable materials,
                            ensuring you look good while doing good.
                        </p>
                        <button className="mt-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700">
                            Browse Accessories
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </>
    );
};

export default Carousel;
