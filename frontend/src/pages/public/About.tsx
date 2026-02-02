type PublicRoutesProps = {
  darkMode: boolean;
};

const About = ({ darkMode }: PublicRoutesProps) => {
  return (
    <section
      className={`min-h-screen overflow-hidden flex items-center justify-center px-4 sm:px-6 `}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-2 sm:gap-12 items-center">
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex flex-wrap justify-center gap-4 relative order-2 lg:order-1"
        >
          <div className="relative w-75 h-75 lg:w-96 lg:h-96">
            {/* Image */}
            <div
              className="absolute -inset-4 lg:-inset-20 bg-linear-to-l from-[#06b6d4] via-[#22d3ee] to-[#67e8f9] rotate-12 star-shape z-0"
              data-aos="zoom-in"
              data-aos-delay="600"
            ></div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQx9Pt7fR753WPgUgMXP-LZs3SVI3-eT3jHYw&s"
              alt="About Image"
              className="absolute inset-0  w-full h-full object-cover z-10 transition-all duration-300"
              data-aos="zoom-in"
              data-aos-delay="400"
            />
          </div>
        </figure>
        <article
          data-aos="fade-left"
          data-aos-delay="300"
          className="text-center lg:text-left relative order-1 lg:order-2"
        >
          <header>
            <h1
              className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              About Me
            </h1>
          </header>
          <p
            className={`text-sm sm:text-base lg:text-lg xl:text-xl mb-6 sm:mb-8 leading-relaxed bg-linear-to-r from-cyan-900/10 to-blue-900/5 p-4 sm:p-6 rounded-xl sm:rounded-2xl backdrop-blur-sm ${darkMode ? "text-gray-300" : "text-gray-700"}`}
            data-aos="fade-up"
            data-aos-delay="500"
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Modi
            tenetur in accusantium quis! Tempora repudiandae ullam ipsam esse
            provident, dolorum error vel sequi dicta eligendi cum quibusdam
            facilis est unde quas deleniti? Minus, nam quidem!
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-cyan-600" : "text-cyan-800"}`}
              >
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gary-300" : "text-gary-600"}`}
              >
                Education
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-cyan-600" : "text-cyan-800"}`}
              >
                5+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gary-300" : "text-gary-600"}`}
              >
                Years Experience
              </div>
            </div>
            <div
              className="text-center"
              data-aos="zoom-in"
              data-aos-delay="600"
            >
              <div
                className={`text-2xl sm:text-3xl lg:text-4xl font-bold ${darkMode ? "text-cyan-600" : "text-cyan-800"}`}
              >
                10+
              </div>
              <div
                className={`text-xs sm:text-sm lg:text-base ${darkMode ? "text-gary-300" : "text-gary-600"}`}
              >
                Projects
              </div>
            </div>
          </div>
          <button
            className={`w-full sm:w-auto border-2 border-cyan-600 inline-flex items-center justify-center py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] cursor-pointer rounded-full text-base lg:text-lg font-semibold transition-all duration-300 transform ${darkMode ? "text-white bg-cyan-500/10" : "text-gray-800 bg-cyan-500/90"}`}
            data-aos="fade-up"
            data-aos-delay="800"
          >
            Learn More
          </button>
        </article>
      </div>
    </section>
  );
};

export default About;
