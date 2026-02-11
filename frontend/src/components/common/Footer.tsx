import {
  FaFacebook,
  FaGithub,
  FaHeart,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";

type PublicLayoutProps = {
  darkMode: boolean;
};

const Footer = ({ darkMode }: PublicLayoutProps) => {
  const currentYear = new Date().getFullYear();
  const { profileList } = useSelector((state: RootState) => state.profile);
  const profile = profileList?.[0];
  let parsedSocialLinks: Partial<
    Record<"instagram" | "X" | "facebook" | "github" | "linkedIn", string>
  > = {};

  try {
    if (profile?.socialLinks) {
      parsedSocialLinks =
        typeof profile.socialLinks === "string"
          ? JSON.parse(profile.socialLinks)
          : profile.socialLinks;
    }
  } catch {
    parsedSocialLinks = {};
  }

  const socials = [
    { key: "instagram", icon: <FaInstagram /> },
    { key: "X", icon: <FaXTwitter /> },
    { key: "facebook", icon: <FaFacebook /> },
    { key: "github", icon: <FaGithub /> },
    { key: "linkedIn", icon: <FaLinkedin /> },
  ] as const;
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
            {socials.map(({ key, icon }) => {
              const url = parsedSocialLinks[key];

              if (!url || !url.trim()) return null;

              return (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition-all hover:bg-linear-to-r from-cyan-500 to-blue-500 hover:text-black dark:hover:text-white bg-[#374151] dark:bg-[#f3f4f6] text-[#ffffff] dark:text-black"
                >
                  {icon}
                </a>
              );
            })}
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
