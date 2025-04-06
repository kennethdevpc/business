'use client';
import React, { useState } from 'react';

type Props = {};

function Schedule({}: Props) {
  const [activeDay, setActiveDay] = useState('all');

  // Información de las clases
  const classes = [
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
    <div className="w-full max-w-6xl mx-auto px-4 py-12 ">
      <h1 className="text-5xl font-bold mb-8 text-center">Schedule</h1>

      {/* Imagen ilustrativa de calendario */}
      <div className="mb-10 flex justify-center">
        <div className="relative max-w-2xl rounded-lg overflow-hidden shadow-lg w-100">
          <img
            src="https://i.pinimg.com/736x/67/5a/51/675a5177fcbc67ee2532fef77a8e52a8.jpg"
            alt="Calendario de clases"
            className="w-full object-cover"
          />
        </div>
      </div>

      {/* Selector de días */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex rounded-md shadow-sm bg-white">
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-l-lg ${
              activeDay === 'all'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveDay('all')}
          >
            Todos
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeDay === 'monday'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveDay('monday')}
          >
            Lunes
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium ${
              activeDay === 'wednesday'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveDay('wednesday')}
          >
            Miércoles
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-sm font-medium rounded-r-lg ${
              activeDay === 'sunday'
                ? 'bg-red-500 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
            onClick={() => setActiveDay('sunday')}
          >
            Domingo
          </button>
        </div>
      </div>

      {/* Tabla de horarios */}
      <div className="overflow-x-auto bg-white rounded-lg shadow">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Día
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Horario
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Clase
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Nivel
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Instructor
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredClasses.map((classItem, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {classItem.day}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classItem.time}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classItem.type}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classItem.level}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {classItem.instructor}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Cita motivacional */}
      <div className="mt-10 p-4 border border-red-300 rounded-lg bg-white shadow-sm">
        <p className="text-center text-lg text-red-600">
          <span className="mr-2">💪</span>
          Feel the joy of dancing! Embrace the movement, meet new people, and experience the
          positive energy it brings!
        </p>
      </div>

      {/* Información adicional */}
      <div className="mt-8 text-center">
        <h3 className="text-lg font-medium mb-2">¿Tienes dudas sobre nuestros horarios?</h3>
        <p className="text-gray-600">
          Contáctanos por WhatsApp al{' '}
          <a
            href="https://wa.link/yuij7m"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:underline"
          >
            +1 (123) 456-7890
          </a>{' '}
          o ven directamente a nuestro estudio.
        </p>
      </div>
    </div>
  );
}

export default Schedule;
