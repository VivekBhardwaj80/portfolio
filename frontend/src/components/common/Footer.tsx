import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

type PublicLayoutProps = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: PublicLayoutProps) => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div className="text-center md:text-left">
            <h3
              className="text-2xl font-bold mb-2 "
              style={{
                background: "linear-gradient(to right, #26c6da, #1f88e5)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
            >
              MERN Stack Developer
            </p>
          </div>
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
            >
              <FaLinkedin />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover-text-white hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
            >
              <FaGithub />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
            >
              <FaXTwitter />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
            >
              <FaFacebook />
            </a>
          </div>
          <div className="text-center md:text-right">
            <p className="text-sm flex items-center justify-end gap-1 text-[#6b7280] dark:text-[#9ca3af]">
              @ {currentYear} Made with
              <FaHeart className="text-red-500" /> by{" "}
              <span className="mt-1 text-[#00ffff]">Vivek Sharma</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
