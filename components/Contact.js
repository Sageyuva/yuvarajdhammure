"use client";

import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Contact = () => {
  return (
    <section id='contact' className="py-12 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold">Contact Me</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Get in Touch Section */}
          <div>
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <ul className="mt-6 space-y-4">
              <li className="flex items-center">
                <Mail className="w-6 h-6 mr-3 text-gray-400" />
                <span>Yuvarajdhammure@gmail.com</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-6 h-6 mr-3 text-gray-400" />
                <span>+91 9686396288</span>
              </li>
              <li className="flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-gray-400" />
                <span>Bangalore, India</span>
              </li>
              <li className="flex items-center">
                <Linkedin className="w-6 h-6 mr-3 text-gray-400" />
                <a
                  href="https://linkedin.com/in/yuvarajdhammure"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  linkedin.com/in/Yuvarajdhammure
                </a>
              </li>
            </ul>
          </div>

          {/* Send Me a Message Section */}
          <div>
            <h3 className="text-2xl font-semibold">Send Me a Message</h3>
            <form className="mt-6 space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your name"
                    className="mt-1 w Odin-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Your email"
                    className="mt-1 w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                  />
                </div>
                </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Your message"
                  rows="4"
                  className="mt-1 w-full p-3 bg-black border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-gray-500"
                />
              </div>
              <button
                type="submit"
                className="hover:cursor-pointer  w-full py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>

        <footer className="mt-12 text-center text-gray-500 text-sm">
          © 2025 Yuvaraj. ALL RIGHTS RESERVED.
        </footer>
      </div>
    </section>
  );
};

export default Contact;