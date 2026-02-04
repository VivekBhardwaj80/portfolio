import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../app/store";
import { useState } from "react";
import { createFeedback } from "../../features/feedback/feedbackSlice";
import { toast } from "react-toastify";

type PublicLayoutProps = {
  darkMode: boolean;
};
type TFeedbackType = {
  id: number;
  type: string;
};
const FeedbackForm = ({ darkMode }: PublicLayoutProps) => {
  const [name, setName] = useState<string>("");
  const [feedbackType, setFeedbackType] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [company, setCompany] = useState<string>("");
  const [role, setRole] = useState<string>("");

  const dispatch = useDispatch<AppDispatch>();

  const handleFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!feedbackType || !message) {
      alert("Please Select all field");
      return;
    }
    try {
      const formData = new FormData();
      formData.append("feedbackType", feedbackType);
      formData.append("message", message);
      if (name) formData.append("name", name);
      if (email) formData.append("email", email);
      if (role) formData.append("role", role);
      if (company) formData.append("company", company);
      const res = await dispatch(
        createFeedback({ name, feedbackType, email, message, company, role }),
      ).unwrap();
      if (res.success) {
        toast.success(res.message);
        setName("");
        setFeedbackType("")
        setEmail("");
        setMessage("");
        setCompany("");
        setRole("");
      }
    } catch (error: any) {
      toast.error(error.message);
    }
  };

  const feedbackTypeOption: TFeedbackType[] = [
    { id: 1, type: "General Feedback" },
    { id: 2, type: "Suggestion" },
    { id: 3, type: "Bug / Issue" },
    { id: 4, type: "Recruitment" },
    { id: 5, type: "Other" },
  ];

  return (
    <section
      className={`min-h-screen overflow-hidden flex items-center justify-center px-6`}
    >
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 sm:mb-6 text-transparent bg-linear-to-r from-cyan-400 to-blue-600 bg-clip-text">
          Feedback Form
        </h1>
        <form onSubmit={handleFeedback}>
          <div className="flex md:px-3 py-1 md:border border-cyan-300 md:rounded-lg flex-col gap-2">
            <h3
              className={`${darkMode ? "text-gray-400" : "text-white"} md:text-md sm:text-sm `}
            >
              Feedback Type (Required)
            </h3>

            <div className="md:flex gap-2">
              {feedbackTypeOption.map(({ type, id }) => (
                <div
                  key={id}
                  className="md:px-1 md:py-0.5 md:bg-gray-400 rounded-lg flex flex-row items-center gap-1 hover:bg-cyan-100 hover:text-gray-800 "
                >
                  <input
                    type="radio"
                    name="feedback"
                    id={type}
                    value={type}
                    checked={feedbackType === type}
                    onChange={(e) => setFeedbackType(e.target.value)}
                  />
                  <label htmlFor={type}>{type}</label>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full border-t border-gray-400 mt-4 flex items-center justify-center">
            <p
              className={`px-2  py-0.5 ${darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900" : "bg-linear-to-br from-blue-100 to-cyan-500 text-white rounded-full"} absolute -top-3 `}
            >
              Optional
            </p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-1 gap-y-2 mt-4">
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className={`${darkMode ? "text-gray-200" : "text-white"}`}
              >
                Name
              </label>
              <input
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                type="text"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your name"
                className=" border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all rounded px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className={`${darkMode ? "text-gray-200" : "text-white"}`}
              >
                Email
              </label>
              <input
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                type="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="Enter Your Email"
                className=" border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all rounded px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="name"
                className={`${darkMode ? "text-gray-200" : "text-white"}`}
              >
                Company
              </label>
              <input
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                type="text"
                name="company"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
                id="company"
                placeholder="Enter Company name"
                className=" border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all rounded px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="email"
                className={`${darkMode ? "text-gray-200" : "text-white"}`}
              >
                Role
              </label>
              <input
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                type="text"
                name="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                id="role"
                placeholder="Enter Your job role"
                className=" border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all rounded px-2 py-1 mt-1"
              />
            </div>
            <div className="flex flex-col">
              <label
                htmlFor="message"
                className={`${darkMode ? "text-gray-200" : "text-white"}`}
              >
                Message
              </label>
              <textarea
                style={{
                  backgroundColor: darkMode ? "#374151" : "#faede3",
                  borderColor: darkMode ? "#4b5563" : "d1d5db",
                  color: darkMode ? "white" : "#1f2937",
                }}
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                rows={4}
                placeholder="Enter Your Feedback here..."
                className=" border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all rounded px-2 py-1 mt-1"
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-full text-center mt-3 py-1 bg-linear-to-r from-cyan-400 to-blue-600 rounded-lg"
          >
            Send Feedback
          </button>
        </form>
      </div>
    </section>
  );
};

export default FeedbackForm;
