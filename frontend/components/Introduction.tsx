import React from 'react';

type Props = {};

function Introduction({}: Props) {
  return (
    <div className="z-20 w-full bg-darkBg/60 ">
      <div className="bg-">
        <div className="z-20 grid items-center h-full  p-13 py-20 md:py-0 md:grid-cols-2 md:px-40 ">
          <div className="flex flex-col justify-center max-w-xl px-5 md:place-items-start sm:place-items-center">
            <h1 className="mb-5 text-2xl leading-tight text-cen.max-w-mdter md:text-left md:text-4xl md:mb-10 self-center md:self-auto">
              Kenneth Puliche Correa, <br />
            </h1>

            <p className="mx-auto mb-2 text-xl md:text-xl md:mx-0 md:mb-8 text-justify ">
              As a software developer, I have worked in teams creating technological solutions. I
              have experience with TypeScript, PHP, and JavaScript. Using these tools, I have
              contributed to transforming ideas into functional projects. I am a Mechatronics
              Engineer with over 2 years of experience in full-stack development (since 2022-07).
            </p>

            <div className="flex items-center justify-center gap-3 md:justify-start md:gap-10">
              <a
                href="/portfolio"
                className="px-3 py-2 my-2 transition-all border-2 cursor-pointer text-md w-fit rounded-xl hover:shadow-xl hover:shadow-white/50"
              >
                View Projects
              </a>
              <a
                href="https://wa.link/yuij7m"
                target="_blank"
                className="px-3 py-2 my-5 transition-all border-2 cursor-pointer text-md w-fit text-secondary border-secondary rounded-xl hover:shadow-xl hover:shadow-secondary"
              >
                Contact me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduction;
