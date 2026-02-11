import instagram from "../../assets/instaGram2Png.png";
import X from "../../assets/XPng.png";
import facebook from "../../assets/facebook.png";
import github from "../../assets/github2.png";
import linkedIn from "../../assets/linkendInPng.png";
import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { FaHeart } from "react-icons/fa";

type PublicLayoutProps = {
  darkMode: boolean;
};

type SocialKey = "instagram" | "X" | "facebook" | "github" | "linkedIn";

const Footer = ({ darkMode }: PublicLayoutProps) => {
  const currentYear = new Date().getFullYear();
  // const dispatch = useDispatch<AppDispatch>();
  const { profileList } = useSelector(
    (state: RootState) => state.profile,
  );
  const profile = profileList?.[0];
  // const profileImage = profile?.profileImage;

  const parsedSocialLinks: Partial<Record<SocialKey, string>> =
    profile?.socialLinks
      ? typeof profile.socialLinks === "string"
        ? JSON.parse(profile.socialLinks)
        : profile.socialLinks
      : {};

  const socialLink: { key: SocialKey; icon: string; alt: string }[] = [
    { key: "instagram", icon: instagram, alt: "instagram" },
    { key: "X", icon: X, alt: "X" },
    { key: "facebook", icon: facebook, alt: "facebook" },
    { key: "github", icon: github, alt: "github" },
    { key: "linkedIn", icon: linkedIn, alt: "instagram" },
  ];
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
