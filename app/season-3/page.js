
'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Footer from '@/components/main/Footer';
import Link from 'next/link';
import Navbar from '@/components/main/Navbar';
import Image from 'next/image';
import { Marquee } from '@/components/ui/marquee';
import { SponsorCard } from '@/components/main/SponsorCard';
import { marqueeSponsors } from '@/lib/sponsors';

const Season2 = () => {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 },
        },
    };



    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.5 },
        },
    };
    const [flippedIndex, setFlippedIndex] = useState(null);


    const images = [
        '/images/s3/gallery/team.jpeg',
        '/images/s3/gallery/2.jpg',
        '/images/s3/gallery/3.jpg',
        '/images/s3/gallery/4.jpg',
        '/images/s3/gallery/5.jpg',
        '/images/s3/gallery/9.jpg',
        '/images/s3/gallery/7.jpg',
        '/images/s3/gallery/8.jpg',
    ];

    const speakers = [
        { image: '/images/s3/speakers/Aleena-Aakashamittayi.webp', name: <i>Aleena Aakashamittayi</i>, desc: <span>Poet, writer and Dalit feminist thinker from Kerala whose work explores themes of horror, mythology, gender, religion and caste politics. Her poetry often blends the supernatural with everyday experiences, offering a distinct perspective rooted in the Dalit Christian experience. Her poetry collection <i>Silk Route</i> has won Kerala State Sahitya Akademi Kanakashree Award.</span> },
        { image: '/images/s3/speakers/Dr.-Habeeb-C.webp', name: <i>Dr. Habeeb C</i>, desc: <span>Dr. Habeeb C, president of the Kerala Federation of the Blind, is a leading disability rights advocate and scholar in Disability Studies. An Assistant Professor at Farook College, he’s also a noted speaker, musician, and trainer promoting inclusion and awareness.</span> },
        { image: '/images/s3/speakers/Naseef-Kalayath.webp', name: <i>Naseef Kalayath</i>, desc: <span>Writer and storyteller from Pookkottur, Malappuram. Writing under the name <i>Chithalukal</i>, he shares stories that touch on love, faith, and the little moments that shape our lives. His debut novel “Kadeeja” was published by DC Books. Naseef also works as a scriptwriter and content creator, bringing ordinary stories to life with honesty and heart.</span> },
        { image: '/images/s3/speakers/pt-muhammed.webp', name: <i>PT Muhammed</i>, desc: <span>A versatile social entrepreneur, PT Muhammad left a stable job in Delhi after being inspired by the <i>Food on Wheels</i> project, later becoming its CEO. He also leads the <i>Sukoon Edu Foundation</i>, working to spread education at the grassroots and promote community development. Known for his <i>PT Stories</i> video series that captures his experiences of travelling across North India, he has built a strong social media presence while also excelling as a brand specialist and UI/UX designer.</span> },
        { image: '/images/s3/speakers/RJ-Twinkle-Sheethal.webp', name: <i>RJ Twinkle Sheethal</i>, desc: <span>From charging up airwaves to capturing hearts on screen, Twinkle Sheetal has been a voice of charm and authenticity. She began her journey as an RJ with Club FM, hosting the vibrant morning show and the much-loved segment <i>Tune in with Twinkle</i>. Her natural flair for connecting with people later took her to television, where she became a familiar face as the host of <i>Udan Panam</i> on Mazhavil Manorama. Today, she continues to inspire and entertain as a talk show host and content creator on Instagram.</span> },
        { image: '/images/s3/speakers/Shibli-Rahiman-K-P.webp', name: <i>Shibli Rahiman K P</i>, desc: <span>Visionary entrepreneur and ecosystem builder, currently Chairman of RAC. He leads initiatives to empower founders and strengthen Kerala’s startup ecosystem. He has co-founded and guided multiple ventures under RAC and its associated companies. Shibli’s work spans ideation to investment and growth acceleration, making him a trusted mentor committed to democratizing entrepreneurship and driving sustainable economic growth through innovation.</span> },
    ];

    const sponsorList = [
        {
            logo: `/images/s3/sponsors/IIS-Logo.webp`,
            name: 'IIS',
            description:
                'Private training institute in Kerala that offers courses in accounting, tax, and related skills, emphasizing hands-on experience and placement assistance.',
            link: 'https://www.instagram.com/indian_institute_of_skills/',
        },
        {
            logo: `/images/s3/sponsors/Kaif-zip.webp`,
            name: 'Zee sip',
            description:
                'A juice company based in Kerala, founded by Kaif Muhammad, that produces natural fruit juices with a focus on freshness. They are known for their tagline, "Feel the freshness in every sip"',
            link: 'https://www.instagram.com/zee_sip_india/?hl=en',
        },
        {
            logo: `/images/s3/sponsors/tornado.webp`,
            name: 'TORNADO',
            description:
                'Premium luxury timepiece brand combining elegant design with innovative engineering. Known for unique morphing transitions and exceptional craftsmanship.',
            link: 'https://tornado.store',
        },
        {
            logo: `/images/s3/sponsors/Khaleez.webp`,
            name: 'KHALEEZ Restuarant',
            description:
                'Khaleez brings people together through rich flavors and heartfelt hospitality — from elegant meals at Khaleez Restaurant, quick bites at Khaleez Kitchen, to authentic Arabic experiences at Qwaish. ',
            link: 'https://khaleez.com/',
        },
        {
            logo: `/images/s3/sponsors/MediaOne.webp`,
            name: 'Media One',
            description:
                'Leading Malayalam news channel reaching over 4 million viewers across India and Middle East. Known for bold journalism, integrity, and being the trusted voice of Kerala since 2013.',
            link: 'https://www.mediaoneonline.com/',
        },
        {
            logo: `/images/s3/sponsors/fulva.webp`,
            name: 'Fulva',
            description:
                'Kerala-based food startup that specializes in Kozhikode halwa, a traditional sweet from the region.',
            link: 'https://fulva.in',
        },
        {
            logo: `/images/s3/sponsors/sign_laban.webp`,
            name: 'Sign Laban',
            description:
                "A chain of Egyptian dessert restaurants known for serving what they claim is India's first Egyptian dessert.",
            link: 'https://sign-laban.vercel.app/',
        },
    ];


    return (
        <div className="bg-black min-h-screen text-white font-sans relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[300px] sm:w-[400px] md:w-[500px] h-[300px] sm:h-[400px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[400px] sm:w-[500px] md:w-[600px] h-[400px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

            <Navbar activePage="Season 3" />

            <motion.section
                className="py-6 sm:py-8 md:py-10 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants} transition={{ delay: 0 }}>
                    <h1 className="text-white text-4xl sm:text-3xl lg:text-7xl  font-bold  text-center">
                        Glimpses of Season 3
                    </h1>
               
                </motion.div>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-12 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10 bg-gradient-to-b from-black to-red-900/20"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4"
                    variants={itemVariants}
                >
                    Pre-event
                </motion.p>
                <div className="flex justify-center">
                    <motion.img
                        src="/images/s3/pre-event.jpeg"
                        alt="TEDx Season 3 Pre-event Poster"

                        className="w-auto max-w-xs sm:max-w-2xl md:max-w-xl lg:max-w-4xl max-h-svh rounded-xl border-2 sm:border-4 border-red-500/50 shadow-lg"

                        variants={itemVariants}
                    />
                </div>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >

                <motion.div variants={itemVariants}>
                    <h1 className="text-white text-3xl sm:text-2xl lg:text-6xl  font-bold mb-12 text-center">
                        Speakers
                    </h1>

                    <div className="grid gap-6 justify-center px-4 sm:px-6 md:px-8 lg:px-12 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                        {speakers.map((speaker, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.08 }}
                                className="group perspective w-full"
                                onClick={() => handleCardClick(index)}
                            >
                                <div
                                    className={`relative w-full inline-block transition-transform duration-700 transform-style-preserve-3d
                     ${flippedIndex === index ? 'rotate-y-180' : ''}
                     group-hover:rotate-y-180 md:group-hover:rotate-y-180
                     lg:scale-90`}
                                >
                                    {/* FRONT SIDE */}
                                    <div className="relative rounded-xl overflow-hidden backface-hidden border border-red-700">
                                        <img
                                            src={speaker.image}
                                            alt={speaker.name}
                                            className="w-full h-auto object-cover block"
                                        />
                                    </div>

                                    {/* BACK SIDE */}
                                    <div
                                        className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-red-900/95 to-black/95
                     rounded-xl border border-red-700 px-4 py-4 flex flex-col justify-center items-center
                     text-center text-sm sm:text-base text-red-100 leading-snug rotate-y-180 backface-hidden overflow-y-auto scrollbar-none"
                                    >
                                        <p className="text-lg font-semibold text-red-400 mb-2">{speaker.name}</p>
                                        <div>{speaker.desc}</div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </motion.div>
            </motion.section>

            <motion.section
                className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-12 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                    {images.slice(0, 4).map((img, index) => (
                        <motion.div
                            key={`normal-${index}`}
                            variants={itemVariants}
                            className="relative rounded-lg overflow-hidden"
                        >
                            <Image
                                width={500}
                                height={500}
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                className="w-full h-36 sm:h-40 md:h-48 lg:h-56 object-cover"
                            />
                        </motion.div>
                    ))}

                    <div className="relative col-span-full">
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
                            {images.slice(4, 8).map((img, index) => (
                                <motion.div
                                    key={`blurred-${index}`}
                                    variants={itemVariants}
                                    className="relative rounded-lg overflow-hidden"
                                >
                                    <img
                                        src={img}
                                        alt={`Gallery blurred ${index + 1}`}
                                        className="w-full h-36 sm:h-40 md:h-48 lg:h-56 object-cover blur-[1.5px] brightness-90"
                                    />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.97 }}
                            className="absolute inset-0 flex items-center justify-center 
                       bg-black/40 hover:bg-black/50 transition-all 
                       cursor-pointer rounded-lg"
                        >
                            <Link
                                href="/gallery"
                                className="text-white text-base sm:text-lg md:text-xl font-semibold tracking-wide"
                            >
                                View More →
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </motion.section>

            <motion.section
                className="py-12 sm:py-16 md:py-20 px-4 sm:px-8 md:px-12 lg:px-16 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                    <h1 className="text-white text-3xl sm:text-2xl lg:text-6xl  font-bold mb-12 text-center">
                        Sponsors
                    </h1>
                <motion.p
                    className="text-xs sm:text-sm text-gray-400 mb-6 sm:mb-8"
                    variants={itemVariants}
                >
                    • Sponsors
                </motion.p>

                {/* SINGLE CONTINUOUS ROW */}
                <Marquee
                    pauseOnHover={true}
                    reverse={false}
                    className="[--gap:2rem]"
                    style={{ '--duration': '40s' }}
                >
                    {sponsorList.map((sponsor) => (
                        <div
                            key={sponsor.name}
                            className="
min-w-[240px]
mx-4
flex flex-col items-center justify-center
bg-white/5 backdrop-blur-xl
rounded-2xl p-4
hover:scale-105 transition-transform duration-300
"
                        >
                            <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                className="h-20 w-full object-contain mb-3"
                            />

                            <h3 className="text-white text-sm font-semibold text-center">
                                {sponsor.name}
                            </h3>
                        </div>
                    ))}
                </Marquee>
            </motion.section>
            <Footer />
        </div>
    );
};

export default Season2