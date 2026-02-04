import instagram from "../../assets/instaGram2Png.png";
import X from "../../assets/XPng.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github2.png";
import linkedIn from "../../assets/linkendInPng.png";
import resume from "../../assets/Vivek_MERN_RESUME.pdf";
import { DownloadIcon, Mail } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { useEffect, useState } from "react";
import { fetchProfile } from "../../features/profile/profileSlice";
import { AnimatePresence, motion } from "motion/react";

type PublicRoutesProps = {
  darkMode: boolean;
};
type SocialKey = "instagram" | "X" | "facebook" | "github" | "linkedIn";

const HeroSection = ({ darkMode }: PublicRoutesProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const { profileList, loading } = useSelector(
    (state: RootState) => state.profile,
  );
  const profile = profileList?.[0];
  const profileImage = profile?.profileImage;

  const parsedSocialLinks: Partial<Record<SocialKey, string>> =
    profile?.socialLinks
      ? typeof profile.socialLinks === "string"
        ? JSON.parse(profile.socialLinks)
        : profile.socialLinks
      : {};
      console.log("parsedSocialLinks",parsedSocialLinks)

  const socialLink: { key: SocialKey; icon: string; alt: string }[] = [
    { key: "instagram", icon: instagram, alt: "instagram" },
    { key: "X", icon: X, alt: "X" },
    { key: "facebook", icon: facebook, alt: "facebook" },
    { key: "github", icon: github, alt: "github" },
    { key: "linkedIn", icon: linkedIn, alt: "instagram" },
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

  useEffect(() => {
    dispatch(fetchProfile());
  }, [dispatch]);
  const texts = ["I’m Vivek", "I’m a Developer"];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative overflow-hidden min-h-screen flex flex-col">
      {loading ? (
        <p className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text">
          Loading...
        </p>
      ) : (
        <section
          id="home"
          data-aos="fade-up"
          data-aos-delay="2"
          className="body-font z-10"
        >
          <div className="container mx-auto flex px-3 sm:px-6 lg:px-10 py-12 lg:py-0 flex-col lg:flex-row items-center justify-between lg:mt-10 mt-14">
            <div className="lg:w-1/2 w-full flex flex-col items-center lg:items-start text-center lg:text-left mb-10 lg:mb-0">
              <div className="flex justify-center lg:justify-start gap-4 sm:gap-6 mb-6 sm:mb-7 w-full">
                {socialLink.map((social, index) => {
                  const link = parsedSocialLinks[social.key];
                  if (!link) return null;

                  return (
                    <a
                      key={index}
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-aos-delay={`${400 + index * 100}`}
                      className="transform hover:scale-110 transition-transform duration-300"
                    >
                      <img
                        src={social.icon}
                        alt={social.alt}
                        className={`w-8 h-8 sm:w-10 sm:h-10 object-contain ${
                          darkMode ? "" : "filter brightness-75"
                        }`}
                      />
                    </a>
                  );
                })}
              </div>
              <h1
                className={`title-font text-3xl sm:text-4xl lg:text-5xl mb-4 font-bold ${theme.textPrimary}`}
              >
                Hi, <br />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={texts[index]}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="inline-block"
                  >
                    {texts[index]}
                  </motion.span>
                </AnimatePresence>
              </h1>

              <p
                className={`mb-6 sm:mb-8 leading-relaxed max-w-md sm:max-w-lg ${theme.textSecondary}`}
                data-aos=""
              >
                I’m a MERN Stack Developer specializing in building modern,
                scalable web applications. I enjoy turning complex problems into
                clean, user-friendly solutions, with hands-on experience in
                real-time applications, secure APIs, and performance-focused
                full-stack development.
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
                  <img
                    src={
                      typeof profileImage === "string"
                        ? profileImage
                        : undefined
                    }
                    alt="Photo"
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
};

export default HeroSection;
