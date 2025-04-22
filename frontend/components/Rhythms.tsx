import React from 'react';
import Image from 'next/image';

function Rhythms() {
  return (
    <div className=" max-w-6xl mx-auto px-4 py-2 text-justify">
      {/* Sección de Salsa */}
      <section className="mb-20">
        <h1 className="text-5xl font-bold mb-8 text-secondary ">Salsa</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/5">
            <h2 className="text-2xl font-semibold mb-4 text-secondary ">What is Salsa? 💃 🔥</h2>

            <p className="mb-4 text-lg">
              Salsa is a high-energy, electrifying dance that makes you move with passion and style.
              It follows the beat of the clave, blending fast footwork, turns, and expressive body
              movements. There are different styles, each with its unique essence:
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Salsa On1 (L.A. Style)</strong> — Danced in a straight line with sharp,
                  stylish turns and dramatic pauses.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Cuban Salsa (Casino)</strong> — A more circular and playful style with
                  fluid hip movements and improvisation.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Caleña Salsa</strong> — Born in Cali, Colombia, this style is all about
                  speed, footwork precision, and powerful energy.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:w-2/5 relative">
            <div
              className="rounded-full overflow-hidden relative mx-auto"
              style={{ width: '360px', height: '360px' }}
            >
              <iframe
                src="https://www.instagram.com/p/DHktd9HimPE/embed"
                width="360"
                height="360"
                frameBorder="0"
                scrolling="no"
                allowTransparency={true}
                className="absolute inset-0 w-full h-full object-cover"
                style={{ borderRadius: '50%' }}
                allow="autoplay; encrypted-media"
              ></iframe>
            </div>
            <p className="text-center mt-4 text-xl font-medium">Know more...</p>
          </div>
        </div>
      </section>

      {/* Sección de Bachata */}
      <section>
        <h1 className="text-5xl font-bold mb-8 text-secondary ">Bachata</h1>

        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-3/5">
            <h2 className="text-2xl font-semibold mb-4 text-secondary ">What is Bachata? 💞🎵</h2>

            <p className="mb-4 text-lg">
              Bachata is a sensual, intimate, and deeply emotional dance that allows you to connect
              with the music and your partner. It&apos;s danced in four beats, with smooth hip
              movements, elegant turns, and deep body expression.
            </p>

            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Traditional Bachata</strong> — Rooted in the Dominican Republic, with
                  simple, rhythmic steps and subtle movements.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Modern Bachata</strong> — Adds turns and intricate footwork, incorporating
                  elements from other dance styles.
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-500 mr-2">•</span>
                <span>
                  <strong>Sensual Bachata</strong> — Focuses on fluid body waves, isolations, and an
                  intense connection between partners.
                </span>
              </li>
            </ul>
          </div>

          <div className="md:w-2/5 relative">
            <div className="rounded-full overflow-hidden relative  mx-auto">
              <Image
                src="/salsaroots1.png"
                alt="SalsarootsFooter"
                // layout="fill"
                width={360}
                height={200}
                className="sm:w-[200px] sm:h-[20px] md:w-[90%] md:h-[25%] object-contain"
              />
            </div>
            <p className="text-center mt-4 text-xl font-medium">Know more...</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Rhythms;
