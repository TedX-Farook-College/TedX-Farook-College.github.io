import React from 'react'
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaPlay } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { CiLocationOn, CiPhone, CiMail } from "react-icons/ci";

const Footer = () => {

  const pages1 = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Speakers', href: '/speakers' },
    { name: 'Sponsors', href: '/sponsors' },

  ];
  const pages2 = [
    { name: 'Season 1', href: '/season-1' },
    { name: 'Season 2', href: '/season-2' },
    { name: 'Contact', href: '/contact' },
    { name: 'Gallery', href: '/' },

  ];
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-black text-gray-300 px-6 md:px-16 lg:px-24 py-5 border-t border-neutral-800">

      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 text-base md:text-lg">

        {/* Contact Section */}
        <motion.div className="transition-all duration-300">
          <h3 className="text-xl font-semibold mb-6 text-white tracking-wide text-center sm:text-left">CONTACT US</h3>

          <p className="flex gap-2 items-center hover:text-red-500 transition-colors duration-300">
            <CiLocationOn /> Farook College (Autonomous), Calicut
          </p>
          <p>
            <a
              href="tel:+91000000"
              className="hover:text-red-500 transition-colors duration-300 flex gap-2 items-center"
            >
              <CiPhone /> +91 000000
            </a>
          </p>
          <p>
            <a
              href="mailto:contact.tedx@gmail.com"
              className="hover:text-red-500 transition-colors duration-300 flex gap-2 items-center"
            >
              <CiMail /> contact.tedx@gmail.com
            </a>
          </p>

          <div className="flex gap-6 mt-6 text-2xl justify-center sm:justify-center lg:justify-start">
            <a
              href="https://www.facebook.com/profile.php?id=100087998305483"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://www.instagram.com/tedx.farookcollege?igsh=dHB1dHpjem5tMWRu"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/company/tedxfarookcollege/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-500 transition-colors duration-300"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </motion.div>

        {/* Quick Links Section */}
        <motion.div className="transition-all duration-500">
          <h3 className="text-xl font-semibold mb-6 text-white tracking-wide text-center sm:text-left">
            QUICK LINKS
          </h3>

          <div className="grid grid-cols-2 gap-4 justify-center md:justify-start max-w-[300px] mx-auto md:max-w-none md:mx-0 text-left">
            <div className="space-y-3">
              {pages1.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
                >
                  <FaPlay className="text-sm text-red-500" /> {name}
                </Link>
              ))}
            </div>

            <div className="space-y-3">
              {pages2.map(({ name, href }) => (
                <Link
                  key={name}
                  href={href}
                  className="flex items-center gap-2 hover:text-red-500 transition-colors duration-300"
                >
                  <FaPlay className="text-sm text-red-500" /> {name}
                </Link>
              ))}
            </div>
          </div>
        </motion.div>


      </div>

      {/* Bottom Line */}
      <div className="border-t border-neutral-800 mt-6 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} TEDx Farook College — All Rights Reserved
      </div>
    </div>
  )
}

export default Footer
