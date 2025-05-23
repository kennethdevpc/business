import Contact from '@/components/Contact';
import { CoverParticles } from '@/components/cover-particles';
import Introduction from '@/components/Introduction';
import Pricing from '@/components/Pricing';
import Rhythms from '@/components/Rhythms';
import Schedule from '@/components/Schedule';

export default function Home() {
  return (
    // <div className="flex min-h-[100vh] h-full bg-no-repeat bg-gradient-cover grid grid-rows-[20px_1fr_20px] items-center justify-items-center">
    // {/* // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]"> */}
    <main className="mt-10 flex flex-col items-center justify-center min-h-screen py-2">
      <CoverParticles />
      <Introduction />
      <Rhythms />
      <Schedule />
      <Pricing />
      <Contact />
    </main>
    // <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image aria-hidden src="/file.svg" alt="File icon" width={16} height={16} />
    //     Learn
    //   </a>
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image aria-hidden src="/window.svg" alt="Window icon" width={16} height={16} />
    //     Examples
    //   </a>
    //   <a
    //     className="flex items-center gap-2 hover:underline hover:underline-offset-4"
    //     href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
    //     target="_blank"
    //     rel="noopener noreferrer"
    //   >
    //     <Image aria-hidden src="/globe.svg" alt="Globe icon" width={16} height={16} />
    //     Go to nextjs.org →
    //   </a>
    // </footer>
    // </div>
  );
}
