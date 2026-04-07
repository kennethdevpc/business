'use client';

import { useState } from 'react';
import { Clock, User, Award, Download } from 'lucide-react';
import { motion } from 'motion/react';

type ClassInfo = {
  day: string;
  dayEn: string;
  time: string;
  type: string;
  level: string;
  location: string;
};

export default function Page() {
  const [activeDay] = useState('all');

  const classes: ClassInfo[] = [
    {
      day: 'Monday',
      dayEn: 'Monday',
      time: '8:00 PM - 9:00 PM',
      type: 'Salsa or Bachata',
      level: 'Beginners level',
      location: 'TGV Hellas (Hilversumstraat, 4001 JA Tiel)',
    },
    {
      day: 'Thursday',
      dayEn: 'Thursday',
      time: '6:00 PM - 7:00 PM',
      type: 'Salsa Or Bachata',
      level: 'Basic level (some experience)',
      location: 'T NEST (Scheeringlaan 2, 4001 WJ Tiel)',
    },
    {
      day: 'Sunday',
      dayEn: 'Sunday',
      time: '2:00 PM - 3:00 PM',
      type: 'Salsa or Bachata',
      level: 'All levels',
      location: 'TGV Hellas (Hilversumstraat, 4001 JA Tiel)',
    },
  ];

  const filteredClasses =
    activeDay === 'all' ? classes : classes.filter((c) => c.dayEn.toLowerCase() === activeDay);

  return (
    <div className="min-h-screen  items-center justify-center bg-gradient-to-b from-darkBg to-octonary text-white px-8 py-30 md:px-40 ">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent mb-4 top-20">
          Class Schedule
          <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
            💃 Mix
          </span>
        </h2>
        <p className="text-xl  max-w-2xl mx-auto">
          Discover our dance classes and join the fun. Move your body to the rhythm of the music!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
      >
        {filteredClasses.map((classItem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 shadow-xl shadow-secondary/10 border border-gray-700/50 ">
              <div
                className={`h-2 w-full ${
                  index % 3 === 0
                    ? 'bg-rose-500'
                    : index % 3 === 1
                    ? 'bg-fuchsia-500'
                    : 'bg-purple-600'
                }`}
              ></div>
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <span
                    className={`px-3 py-1 text-sm font-medium rounded-full border ${
                      index % 3 === 0
                        ? 'border-rose-500 text-rose-500'
                        : index % 3 === 1
                        ? 'border-fuchsia-500 text-fuchsia-500'
                        : 'border-purple-600 text-purple-600'
                    }`}
                  >
                    {classItem.day}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-4">{classItem.type}</h3>

                <div className="space-y-3 ">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 " />
                    <span>{classItem.time}</span>
                  </div>

                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 " />
                    <span>{classItem.level}</span>
                  </div>

                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    <span>location: {classItem.location}</span>
                  </div>
                </div>

                <button
                  className={`w-full mt-6 px-4 py-2 rounded-md text-white font-medium ${
                    index % 3 === 0
                      ? 'bg-rose-500 hover:bg-rose-600'
                      : index % 3 === 1
                      ? 'bg-fuchsia-500 hover:bg-fuchsia-600'
                      : 'bg-purple-600 hover:bg-purple-700'
                  }`}
                >
                  Book Class
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mb-12"
      >
        <div className="border-none bg-gradient-to-r from-senary to-purple-600 text-white shadow-xl rounded-lg">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💃</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">Feel the joy of dancing!</h3>
            <p className="text-lg opacity-90">
              Embrace the movement, meet new people, and experience the positive energy dance brings
              into your life.
            </p>
            <a
              href="/dans_kalender_feb_jun_2026_v3.pdf"
              download="dans_kalender_feb_jun_2026_v3.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-purple-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors duration-200"
            >
              <Download className="h-5 w-5" />
              Download Full Calendar (PDF)
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
