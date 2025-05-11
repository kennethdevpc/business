'use client';

import React, { useState } from 'react';

function Page() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      message: '',
    });
  };

  return (
    <div className="z-20 w-full bg-darkBg/60 py-5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 pt-30">
            <span className="text-secondary">Connect with Us</span>
          </h2>

          <p className="text-center text-lg text-gray-300 mb-4 max-w-2xl mx-auto">
            Do you have questions about our classes, want to collaborate, or just feel like saying
            hi? We&#39;d love to hear from you!
          </p>

          <p className="text-center text-lg mb-12 text-gray-300">
            Please fill out the form below and we&#39;ll get back to you as soon as possible.
          </p>

          <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-secondary/10 border border-gray-700/50">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Left Section */}
              <div className="md:col-span-1 flex flex-col justify-center">
                <div className="bg-gray-800/70 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 border-l-4 border-secondary">
                  <h3 className="text-2xl font-bold mb-4 text-white">
                    We&#39;d love to hear from you!
                  </h3>
                  <p className="text-lg mb-6 text-gray-300">
                    Join us now — let&#39;s dance our way to happiness!
                  </p>

                  <div className="mt-8 space-y-4">
                    <div className="flex items-center space-x-3 text-gray-300 hover:text-secondary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                      <span>
                        <a href="mailto:info@salsaroots.eu">info@salsaroots.eu</a>
                      </span>
                    </div>
                    <div className="flex items-center space-x-3 text-gray-300 hover:text-secondary transition-colors">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                      <span>+31 6 87184761</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Section with Form */}
              <div className="md:col-span-2">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="fullName"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                      Phone Number (Optional)
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 outline-none"
                      placeholder="+31 6 12345678"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-1"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent transition-all duration-300 outline-none resize-none"
                      placeholder="Write your message here..."
                    />
                  </div>

                  <div className="flex justify-end">
                    <button
                      type="submit"
                      className="px-6 py-3 bg-secondary text-white font-medium rounded-lg hover:bg-secondary/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-secondary shadow-lg shadow-secondary/20 transform hover:scale-105 transition-all duration-300"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
