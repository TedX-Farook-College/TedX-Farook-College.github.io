'use client'
import React from 'react'
import Slider from 'react-slick';

const AutoSlider = () => {

    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: false,
        arrows: false,
        responsive: [
            {
                breakpoint: 1540,
                settings: { slidesToShow: 5 }
            }
        ]
    };

    const sponsors = [
        { name: 'Meitra', logo: '/images/s1/sponsors/meitra.webp' },
        { name: 'Haris&Co. Academy', logo: '/images/s1/sponsors/Haris&co-academy-logo.webp' },
        { name: 'TIE LOGO BRAND', logo: '/images/s1/sponsors/logobrand.webp' },
        { name: 'Bluince', logo: '/images/s1/sponsors/logo_elance.webp' },
        { name: 'GreenShore', logo: '/images/s1/sponsors/seashore.webp' },
        // { name: 'Mego', logo: '/images/mego.png' },
        { name: 'Arabic Logo', logo: '/images/s1/sponsors/light-house.webp' },
    ];

    return (
        <div className="slider-container">
            <Slider {...settings}>
                {sponsors.map((sponsor) => (
                    <div key={sponsor.name} className="!w-auto flex justify-center">
                        <div>
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-10 sm:h-14 object-contain"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default AutoSlider;
