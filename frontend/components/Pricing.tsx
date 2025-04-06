import React from 'react';

function Pricing() {
  return (
    <div className="z-20 w-full bg-darkBg/60 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 md:px-6 relative">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-6 bg-clip-text text-transparent bg-gradient-to-r from-secondary to-purple-400">
          Plans & Pricing
        </h2>

        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Choose the perfect plan that suits your dancing journey. All plans include access to our
          vibrant community and regular social events.
        </p>

        {/* Grupal lessons section */}
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center relative">
            <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              Grupal lessons
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-purple-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full mt-2"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 4 Classes Pack */}
            <div className="rounded-2xl p-6 flex flex-col group relative">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-purple-600/20 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              {/* Card content */}
              <div className="absolute -top-6 -right-6 bg-secondary/80 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-secondary/20 group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-white">
                  Best
                  <br />
                  Start
                </span>
              </div>

              <h4 className="text-2xl font-bold mb-2">4 Classes Pack</h4>
              <p className="text-secondary mb-4 flex items-center">
                <span className="mr-2 text-xl">🔥</span> Step into the rhythm!
              </p>

              <h5 className="text-5xl font-bold mb-8 text-white">€60</h5>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Flexible schedule
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Beginner-friendly
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Feel the joy of dancing!
                  </span>
                </li>
              </ul>

              <p className="text-sm mb-2 text-gray-300">
                <span className="text-secondary">🗓️</span> Choose: Monday, Wednesday, or Sunday
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">
                  4 classes to explore salsa & bachata at your own pace.
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🗓️</span> Use your classes within 4 weeks! 😊
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-secondary to-secondary/80 text-white font-semibold shadow-lg shadow-secondary/20 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30">
                Select Plan
              </button>
            </div>

            {/* 6 Classes Pack */}
            <div className="rounded-2xl p-6 flex flex-col group relative transform scale-105 z-10">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary to-purple-600 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              {/* Popular badge */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-secondary to-purple-600 text-white px-6 py-1 rounded-full font-bold shadow-lg">
                Most Popular
              </div>

              <h4 className="text-2xl font-bold mb-2 mt-3">6 Classes Pack</h4>
              <p className="text-secondary mb-4 flex items-center">
                <span className="mr-2 text-xl">🔥</span> More Classes, More Confidence!
              </p>

              <h5 className="text-5xl font-bold mb-8 text-white">€83</h5>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Improve faster
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Social & fun atmosphere
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Learn at your own pace
                  </span>
                </li>
              </ul>

              <p className="text-sm mb-2 text-gray-300">
                <span className="text-secondary">🗓️</span> Choose: Monday, Wednesday, or Sunday
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">
                  6 sessions to refine your moves in salsa & bachata.
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🗓️</span> Use your classes within 4 weeks! 😊
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-secondary to-purple-600 text-white font-semibold shadow-lg shadow-secondary/30 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/40">
                Select Plan
              </button>
            </div>

            {/* 8 Classes Pack */}
            <div className="rounded-2xl p-6 flex flex-col group relative">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-purple-600/20 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              {/* Card content */}
              <div className="absolute -top-6 -right-6 bg-purple-600/80 w-16 h-16 rounded-full flex items-center justify-center shadow-lg shadow-purple-600/20 group-hover:scale-110 transition-transform duration-300">
                <span className="font-bold text-white">
                  Best
                  <br />
                  Value
                </span>
              </div>

              <h4 className="text-2xl font-bold mb-2">8 Classes Pack</h4>
              <p className="text-secondary mb-4 flex items-center">
                <span className="mr-2 text-xl">🔥</span> Master the Dance Floor!
              </p>

              <h5 className="text-5xl font-bold mb-8 text-white">€105</h5>

              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Deeper learning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Build confidence
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span>
                  <span className="group-hover:text-white transition-colors duration-300">
                    Dance with freedom!
                  </span>
                </li>
              </ul>

              <p className="text-sm mb-2 text-gray-300">
                <span className="text-secondary">🗓️</span> Choose: Monday, Wednesday, or Sunday
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">8 classes to perfect your technique & style.</p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🗓️</span> Use your classes within 4 weeks! 😊
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-gradient-to-r from-secondary/90 to-secondary/70 text-white font-semibold shadow-lg shadow-secondary/20 transform hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-secondary/30">
                Select Plan
              </button>
            </div>
          </div>
        </div>

        {/* Others section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-12 text-center relative">
            <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              Single Class Options
            </span>
            <div className="h-1 w-20 bg-gradient-to-r from-secondary to-purple-400 absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full mt-2"></div>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* 1 Group Class */}
            <div className="rounded-2xl p-6 flex flex-col group relative hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold">1 Group Class</h4>
                  <p className="text-secondary flex items-center mt-1">
                    <span className="mr-2 text-xl">💃</span> Try a Class, Feel the Vibe!
                  </p>
                </div>
                <div className="bg-gray-800 p-2 rounded-lg">
                  <h5 className="text-3xl font-bold text-white">€16</h5>
                </div>
              </div>

              <ul className="space-y-3 mb-6 bg-gray-800/50 p-4 rounded-lg">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> No commitment
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Social & engaging
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Perfect for busy schedules!
                </li>
              </ul>

              <p className="text-sm mb-2 text-gray-300">Join when you can!</p>
              <p className="text-sm mb-4 text-gray-300">
                <span className="text-secondary">🗓️</span> Choose: Monday, Wednesday, or Sunday
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">
                  <span className="text-secondary">💃</span> One session to dive into salsa &
                  bachata. Perfect if you can't attend regularly!
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🔥</span> Join anytime! Simply attend a class and
                  enjoy the experience!
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-gray-700 text-white font-semibold shadow-lg transform hover:scale-105 transition-all duration-300 hover:bg-gray-600 hover:shadow-xl">
                Book Now
              </button>
            </div>

            {/* 1 Private Class */}
            <div className="rounded-2xl p-6 flex flex-col group relative hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold">1 Private Class</h4>
                  <p className="text-secondary flex items-center mt-1">
                    <span className="mr-2 text-xl">☀️</span> Your Dance, Your Pace!
                  </p>
                </div>
                <div className="bg-secondary/20 p-2 rounded-lg">
                  <h5 className="text-3xl font-bold text-white">€60</h5>
                </div>
              </div>

              <ul className="space-y-3 mb-6 bg-gray-800/50 p-4 rounded-lg">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Personalized guidance
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Faster progress
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Exclusive attention
                </li>
              </ul>

              <p className="text-sm mb-4 text-gray-300">
                One-on-one coaching to boost your skills fast.
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">
                  1 hour of Salsa, bachata, or both - your choice!
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🗓️</span> Just schedule it, maximum 1 person 😊
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  <span className="text-secondary">🗓️</span> for 2 people €92 😊
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-secondary/80 text-white font-semibold shadow-lg shadow-secondary/20 transform hover:scale-105 transition-all duration-300 hover:bg-secondary hover:shadow-xl hover:shadow-secondary/30">
                Book Private Class
              </button>
            </div>

            {/* 1 Private grupal */}
            <div className="rounded-2xl p-6 flex flex-col group relative hover:shadow-xl hover:shadow-secondary/10 transition-all duration-300">
              {/* Card background with gradient border */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-2xl -z-10"></div>
              <div className="absolute inset-0.5 bg-gray-900 rounded-2xl -z-10"></div>

              <div className="flex justify-between items-start mb-4">
                <div>
                  <h4 className="text-2xl font-bold">1 Private Group</h4>
                  <p className="text-secondary flex items-center mt-1">
                    <span className="mr-2 text-xl">🔥</span> Perfect for events!
                  </p>
                </div>
                <div className="bg-purple-500/20 p-2 rounded-lg">
                  <h5 className="text-3xl font-bold text-white">€100</h5>
                </div>
              </div>

              <ul className="space-y-3 mb-6 bg-gray-800/50 p-4 rounded-lg">
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Flexible scheduling
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Ideal for reunions
                </li>
                <li className="flex items-start">
                  <span className="text-secondary mr-3 text-xl">✓</span> Fun & engaging experience
                </li>
              </ul>

              <p className="text-sm mb-4 text-gray-300">
                1-hour session to enjoy salsa & bachata in a group.
              </p>

              <div className="mt-auto pt-6 border-t border-gray-700/50">
                <p className="mb-3 text-gray-300">
                  <span className="text-secondary">💃</span> Perfect for special events or private
                  groups!
                </p>
                <p className="text-sm text-gray-400">
                  <span className="text-secondary">🗓️</span> Just schedule it, maximum 15 people 😊
                </p>
              </div>

              <button className="mt-6 py-3 px-6 rounded-xl bg-purple-500/80 text-white font-semibold shadow-lg shadow-purple-500/20 transform hover:scale-105 transition-all duration-300 hover:bg-purple-500 hover:shadow-xl hover:shadow-purple-500/30">
                Book Group Event
              </button>
            </div>
          </div>
        </div>

        {/* FAQ section hint */}
        <div className="mt-16 text-center">
          <p className="text-gray-400">
            Have questions? Check our{' '}
            <a href="#faq" className="text-secondary hover:underline">
              FAQ section
            </a>{' '}
            or{' '}
            <a href="#contact" className="text-secondary hover:underline">
              contact us
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
