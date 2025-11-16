'use client'
import React, { useState } from 'react';
import { motion } from 'motion/react';
import Footer from '@/components/main/Footer';
import Navbar from '@/components/main/Navbar';

const Speakers = () => {
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
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const speakers = [
        { image: '/images/s3/speakers/Aleena-Aakashamittayi.webp', name: <i>Aleena Aakashamittayi</i>, desc: <span>Poet, writer and Dalit feminist thinker from Kerala whose work explores themes of horror, mythology, gender, religion and caste politics. Her poetry often blends the supernatural with everyday experiences, offering a distinct perspective rooted in the Dalit Christian experience. Her poetry collection <i>Silk Route</i> has won Kerala State Sahitya Akademi Kanakashree Award.</span> },
        { image: '/images/s3/speakers/Dr.-Habeeb-C.webp', name: <i>Dr. Habeeb C</i>, desc: <span>Dr. Habeeb C, president of the Kerala Federation of the Blind, is a leading disability rights advocate and scholar in Disability Studies. An Assistant Professor at Farook College, he’s also a noted speaker, musician, and trainer promoting inclusion and awareness.</span> },
        { image: '/images/s3/speakers/Naseef-Kalayath.webp', name: <i>Naseef Kalayath</i>, desc: <span>Writer and storyteller from Pookkottur, Malappuram. Writing under the name <i>Chithalukal</i>, he shares stories that touch on love, faith, and the little moments that shape our lives. His debut novel “Kadeeja” was published by DC Books. Naseef also works as a scriptwriter and content creator, bringing ordinary stories to life with honesty and heart.</span> },
        { image: '/images/s3/speakers/pma-gafoor5.webp', name: <i>PMA Gafoor</i>, desc: <span>Well-known motivational speaker and author hailing from Malappuram, Kerala. He is known for his talks on personal growth, emotional well-being and empathy. His talks on education have empowered young women to continue their learning and express themselves confidently. His books include Karayoo Kannuneer Ninne Kazhukum, Varu Ee Chirakilolikkoo, and more.He also serves as a business professional and company director.</span> },
        { image: '/images/s3/speakers/pt-muhammed.webp', name: <i>PT Muhammed</i>, desc: <span>A versatile social entrepreneur, PT Muhammad left a stable job in Delhi after being inspired by the <i>Food on Wheels</i> project, later becoming its CEO. He also leads the <i>Sukoon Edu Foundation</i>, working to spread education at the grassroots and promote community development. Known for his <i>PT Stories</i> video series that captures his experiences of travelling across North India, he has built a strong social media presence while also excelling as a brand specialist and UI/UX designer.</span> },
        { image: '/images/s3/speakers/RJ-Twinkle-Sheethal.webp', name: <i>RJ Twinkle Sheethal</i>, desc: <span>From charging up airwaves to capturing hearts on screen, Twinkle Sheetal has been a voice of charm and authenticity. She began her journey as an RJ with Club FM, hosting the vibrant morning show and the much-loved segment <i>Tune in with Twinkle</i>. Her natural flair for connecting with people later took her to television, where she became a familiar face as the host of <i>Udan Panam</i> on Mazhavil Manorama. Today, she continues to inspire and entertain as a talk show host and content creator on Instagram.</span> },
        { image: '/images/s3/speakers/Shibli-Rahiman-K-P.webp', name: <i>Shibli Rahiman K P</i>, desc: <span>Visionary entrepreneur and ecosystem builder, currently Chairman of RAC. He leads initiatives to empower founders and strengthen Kerala’s startup ecosystem. He has co-founded and guided multiple ventures under RAC and its associated companies. Shibli’s work spans ideation to investment and growth acceleration, making him a trusted mentor committed to democratizing entrepreneurship and driving sustainable economic growth through innovation.</span> },
    ];

    const [flippedIndex, setFlippedIndex] = useState(null);

    const handleCardClick = (index) => {
        setFlippedIndex(prev => (prev === index ? null : index));
    };

    return (
        <div
            className="min-h-screen text-white font-sans relative overflow-hidden"
            style={{
                backgroundImage:
                    'linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.9)), url("/images/bg.svg")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
            }}
        >
            <div className="absolute top-0 right-0 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-red-600/60 rounded-full blur-[150px] sm:blur-[200px] md:blur-[250px] opacity-30 pointer-events-none"></div>
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[350px] sm:w-[500px] md:w-[600px] h-[350px] sm:h-[500px] md:h-[600px] bg-red-800/50 rounded-full blur-[200px] sm:blur-[250px] md:blur-[300px] opacity-20 pointer-events-none"></div>

            <Navbar activePage="Speakers" />

            <motion.section
                className="py-10 px-4 sm:px-8 md:px-12 lg:px-20 relative z-10"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={containerVariants}
            >
                <motion.div variants={itemVariants}>
                    <h1 className="text-white text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-12 text-center tracking-tight">
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

            <Footer />
        </div>
    );
};

export default Speakers;
