import React from 'react';
import Image from 'next/image';

function Introduction() {
  return (
    <div className="z-20 w-full bg-darkBg/60 ">
      <div className="bg-">
        <div className="md:mx-10 z-20 grid items-center h-full  p-13 py-20 md:py-0 md:grid-cols-4 lg:grid-cols-8 md:px-40 ">
          <div className="col-span-1 self-baseline flex  items-center flex-col justify-center h-full">
            <p className="sm:text-3xl text-center md:text-3xl font-bold text-secondary">
              <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
                💃 Mix
              </span>
              <br />
              <span>& </span>
              <br />

              <span className="bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
                match styles each week!
              </span>
            </p>
          </div>
          <div className="text-center md:col-span-4 relative w-full h-[190%] flex justify-center items-center flex-col">
            <p className="self-center p-2"></p>
            <svg width="fill" height="60" className="text-secondary md:w-fit">
              {/* Definir el arco */}
              <path
                id="arc"
                d="M 45,65 A 90,40 0 0,1 245,65"
                fill="transparent"
                stroke="none"
                strokeWidth="3"
                strokeLinecap="round"
              />
              {/* Definir el segundo arco (más abajo) */}
              <path
                id="arc2"
                d="M 50,100 A 90,40 0 0,1 245,75"
                fill="transparent"
                stroke="none"
                strokeWidth="3"
              />

              {/* Primera línea de texto */}
              <text fontSize="18" textAnchor="middle" fill="currentColor">
                <textPath href="#arc" startOffset="50%">
                  Let the music lead you
                </textPath>
              </text>

              {/* Segunda línea de texto, desplazada */}
              <text fontSize="18" textAnchor="middle" fill="currentColor">
                <textPath href="#arc2" startOffset="58%">
                  to new experiences .
                </textPath>
              </text>
            </svg>

            <Image
              src="/salsaroots1.png"
              alt="SalsarootsFooter"
              // layout="fill"
              width={360}
              height={200}
              className="sm:w-[200px] sm:h-[20px] md:w-[90%] md:h-[25%] object-contain"
            />
            <svg width="" height="60" className="text-secondary  md:w-fit">
              <path
                id="arcb"
                d="M 40,2 Q 155,80 260,0"
                fill="transparent"
                stroke="none"
                strokeWidth="3"
                strokeLinecap="round"
              />

              <text fontSize="18" textAnchor="middle" fill="currentColor">
                <textPath href="#arcb" startOffset="50%">
                  Grow your skills and Enjoy!
                </textPath>
              </text>
            </svg>
          </div>
          <div className="md:col-span-3  flex flex-col justify-center max-w-xl px-5 md:place-items-start sm:place-items-center">
            <h2 className="mb-5 text-1xl leading-tight text-cen.max-w-mdter md:text-left md:text-3xl md:mb-10 self-center md:self-auto items-center bg-gradient-to-r from-secondary to-purple-400 bg-clip-text text-transparent">
              💃Dance,Unwind & Enjoy 🕺
              <br />
            </h2>

            <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-justify ">
              Discover the magic of salsa and bachata. Dancing is more than just steps it’s about
              releasing stress, gaining confidence, and connecting with the music.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
