'use client';

import { useState } from 'react';
import { Clock, User, Award } from 'lucide-react';
import { motion } from 'motion/react';
type ClassInfo = {
  day: string;
  dayEn: string;
  time: string;
  type: string;
  level: string;
  instructor: string;
};

export default function Schedule() {
  const [activeDay, setActiveDay] = useState('all');

  // Información de las clases
  const classes: ClassInfo[] = [
    {
      day: 'Lunes',
      dayEn: 'Monday',
      time: '8:00 PM - 9:00 PM',
      type: 'Salsa & Bachata',
      level: 'Todos los niveles',
      instructor: 'Carlos',
    },
    {
      day: 'Miércoles',
      dayEn: 'Wednesday',
      time: '8:00 PM - 9:00 PM',
      type: 'Salsa & Bachata',
      level: 'Todos los niveles',
      instructor: 'Carlos',
    },
    {
      day: 'Domingo',
      dayEn: 'Sunday',
      time: '2:00 PM - 3:00 PM',
      type: 'Salsa & Bachata',
      level: 'Todos los niveles',
      instructor: 'Carlos',
    },
  ];

  // Filtrar clases según el día seleccionado
  const filteredClasses =
    activeDay === 'all' ? classes : classes.filter((c) => c.dayEn.toLowerCase() === activeDay);

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-6xl font-bold bg-gradient-to-r from-rose-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent mb-4">
          Horario de Clases
        </h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Descubre nuestras clases de baile y únete a la diversión. ¡Mueve tu cuerpo al ritmo de la
          música!
        </p>
      </motion.div>

      {/* Selector de días */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mb-10"
      >
        <div className="w-full max-w-md mx-auto">
          <div className="grid grid-cols-4 w-full bg-rose-50 rounded-lg overflow-hidden">
            {['all', 'monday', 'wednesday', 'sunday'].map((day, index) => (
              <button
                key={index}
                onClick={() => setActiveDay(day)}
                className={`py-2 px-4 focus:outline-none transition-colors ${
                  activeDay === day ? 'bg-rose-500 text-white' : 'hover:bg-rose-100'
                }`}
              >
                {day === 'all'
                  ? 'Todos'
                  : day === 'monday'
                  ? 'Lunes'
                  : day === 'wednesday'
                  ? 'Miércoles'
                  : 'Domingo'}
              </button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Tarjetas de clases */}
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
            <div className="overflow-hidden border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 h-full bg-white">
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

                <div className="space-y-3 text-gray-600">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{classItem.time}</span>
                  </div>

                  <div className="flex items-center">
                    <Award className="h-4 w-4 mr-2 text-gray-400" />
                    <span>{classItem.level}</span>
                  </div>

                  <div className="flex items-center">
                    <User className="h-4 w-4 mr-2 text-gray-400" />
                    <span>Instructor: {classItem.instructor}</span>
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
                  Reservar Clase
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Cita motivacional */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="mb-12"
      >
        <div className="border-none bg-gradient-to-r from-rose-500 to-purple-600 text-white shadow-xl rounded-lg">
          <div className="p-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="h-12 w-12 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-2xl">💃</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold mb-2">¡Siente la alegría de bailar!</h3>
            <p className="text-lg opacity-90">
              Abraza el movimiento, conoce gente nueva y experimenta la energía positiva que trae el
              baile a tu vida.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Información de contacto */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="text-center bg-white p-8 rounded-2xl shadow-lg"
      >
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          ¿Tienes dudas sobre nuestros horarios?
        </h3>
        <p className="text-gray-600 mb-6 max-w-lg mx-auto">
          Estamos aquí para ayudarte. Contáctanos por WhatsApp o visita nuestro estudio para más
          información.
        </p>
        <button
          className="bg-green-500 hover:bg-green-600 text-white px-6 py-6 h-auto text-lg rounded-full flex items-center justify-center mx-auto"
          onClick={() => window.open('https://wa.link/yuij7m', '_blank')}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="mr-2"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
          </svg>
          Contáctanos por WhatsApp
        </button>
      </motion.div>
    </div>
  );
}
