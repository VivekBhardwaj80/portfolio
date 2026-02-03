import instagram from "../../assets/instaGram2Png.png";
import X from "../../assets/XPng.png";
import facebook from "../../assets/facebookPng.png";
import github from "../../assets/github2.png";
import linkedIn from "../../assets/linkendInPng.png";
import resume from "../../assets/Vivek_MERN_RESUME.pdf";
import { DownloadIcon, Mail } from "lucide-react";
import photo from '../../assets/vivek.png.png'

type PublicRoutesProps = {
  darkMode: boolean;
};

const HeroSection = ({ darkMode }: PublicRoutesProps) => {
  const socialLink = [
    { icon: instagram, alt: "instagram" },
    { icon: X, alt: "X" },
    { icon: facebook, alt: "facebook" },
    { icon: github, alt: "github" },
    { icon: linkedIn, alt: "instagram" },
  ];
  const darkTheme = {
    textPrimary: "text-white",
    textSecondary: "text-gray-300",
    buttonSecondary: "text-white border-2 border-cyan-500 hover:bg-cyan-600",
    decorativeCircle: "bg-cyan-500 opacity-10",
  };
  const lightTheme = {
    textPrimary: "text-gray-900",
    textSecondary: "text-gray-700",
    buttonSecondary:
      "text-white border-2 border-cyan-500 hover:bg-cyan-600 hover:text-white",
    decorativeCircle: "bg-cyan-400 opacity-20",
  };

  const theme = darkMode ? darkTheme : lightTheme;

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      <section
        id="home"
        data-aos="fade-up"
        data-aos-delay="2"
        className="body-font z-10"
      >
        <div className="container mx-auto flex px-3 sm:px-6 lg:px-10 py-12 lg:py-0 flex-col lg:flex-row items-center justify-between lg:mt-10 mt-14">
          <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
            <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
              {socialLink.map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  data-aos-delay={`${400 + index * 100}`}
                  className="transform hover:scale-110 transition-transform duration-300"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${darkMode ? "" : "filter brightness-75"}`}
                  />
                </a>
              ))}
            </div>
            <h1
              className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              data-aos="fade-up"
              data-aos-delay="500"
            >
              Hi, I'am Vivek
            </h1>
            <p
              className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
              data-aos=""
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus,
              nihil esse minima nostrum sunt obcaecati mollitia debitis
              molestiae id veritatis.
            </p>
            {/* Button */}
            <div className="w-full pt-4 sm:pt-6 ">
              <div
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href={resume} download className="w-full sm:w-auto">
                  <button className="w-full sm:w-auto inline-flex items-center justify-center text-white bg-linear-t0-r from-cyan-500 to-blue-400 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer">
                    <DownloadIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                    Download Resume
                  </button>
                  <a href="#contact" className="w-full sm:w-auto">
                    <button
                      className={`w-full sm:w-auto inline-flex items-center ${theme} justify-center text-white  bg-linear-t0-r from-cyan-500 to-blue-400 border-0 py-3 px-6 sm:px-8 hover:shadow-[0_0_40px_rgba(0,255,255,0.7)] rounded-full text-base sm:text-lg font-semibold transition-all duration-300 transform cursor-pointer`}
                    >
                      <Mail className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                      Contact
                    </button>
                  </a>
                </a>
              </div>
            </div>
          </div>
          {/* image */}
          <div
            className="lg:w-1/2 w-full max-w-md lg:max-w-lg mt-8 lg:mt-0 flex justify-center"
            data-aos="fade-left"
            data-aos-delay="400"
          >
            <div className="relative w-4/5 sm:w-3/4 lg:w-full">
              <div className="relative overflow-hidden">
                <img src={photo} alt="Photo" className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
