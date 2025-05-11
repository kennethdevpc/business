'use client';

const AboutUs = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-darkBg via-black to-darkBg text-white px-8 py-20 md:px-40">
      <div className="max-w-5xl text-center md:text-left space-y-8">
        <h2 className="text-4xl md:text-6xl font-bold leading-tight">
          About <span className="text-secondary">Us</span>
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          We are a family of dancers from <strong>Cali, Colombia</strong>—the heart of salsa. Our
          passion for dance started early and has been shaped through artistic performances,
          competitions, and experiences full of rhythm, energy, and creativity.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          Whether you have experience or it&#39;s your very first time, our classes are designed to
          be joyful, welcoming, and unforgettable. We believe every class should be an experience
          filled with love, laughter, and connection.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          We&#39;ve performed with <strong>artistic groups</strong> and actively participated in
          many dance competitions, giving us a clear vision of what it takes to shine on stage. But
          beyond the stage, we also live and love <strong>social dancing</strong>—in parties, homes,
          and community events.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-gray-300">
          We regularly attend <strong>salsa, bachata, and other Latin dance socials</strong>. This
          helps us understand what it takes to enjoy dancing in everyday situations, in a way that
          is natural, fun, and relaxed.
        </p>
        <p className="text-lg md:text-xl leading-relaxed text-secondary font-semibold">
          Join us and discover the joy of dancing from the heart!
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
