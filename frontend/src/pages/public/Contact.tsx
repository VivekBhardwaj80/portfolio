import { useState } from "react";
import contact from "../../assets/contact-us.png";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { createContact } from "../../features/contact/contactSlice";
import { toast } from "react-toastify";

type PublicRoutesProps = {
  darkMode: boolean;
};
const Contact = ({ darkMode }: PublicRoutesProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleContactSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!firstName || !email || !message) {
      alert("please fill all the field");
      return;
    }
    try {
      const contactData = {
        firstName,
        lastName,
        email,
        phone,
        message,
      };
      const res = await dispatch(createContact(contactData)).unwrap();
      if (res.success) {
        toast.success(res.message);
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
      }
    } catch (error: any) {
      if (error.response?.data?.message) {
        toast.error(error.response?.data?.message);
      } else {
        toast.error(error.message);
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "white" : "1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #26c6da, #1f88e5  )",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                color: "transparent",
              }}
            >
              Touch
            </span>
          </h2>
          <p
            className="text-base sm:text-lg md:text-xl"
            style={{ color: darkMode ? "d1d5bd" : "#6b7280" }}
          >
            Let's discuss Your Project
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 sm:gap-7 md:gap-9 items-center mb-12">
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contact}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md  h-auto object-contain"
            />
          </div>
          <form
            onSubmit={handleContactSave}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #bbdff1, rgba(77,255,240,0.5))",
              borderColor: darkMode ? "#374151" : "e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* firstName */}
              <input
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First name..."
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                required
              />
              {/* lastName */}
              <input
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last name..."
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              {/* email */}
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                required
              />
              {/* telephone */}
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
              />
              {/* message */}
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Message"
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                required
              />
              <button
                type="submit"
                style={{
                  background: "linear-gradient(to right, #06b6d4, #67e8f9)",
                }}
                className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]  cursor-pointer transition-all"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
