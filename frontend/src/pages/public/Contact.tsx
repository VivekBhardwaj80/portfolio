// import { useState } from "react";
// import contact from "../../assets/contact-us.png";
// import { useDispatch } from "react-redux";
// import type { AppDispatch } from "../../app/store";
// import { createContact } from "../../features/contact/contactSlice";
// import { toast } from "react-toastify";

// type PublicRoutesProps = {
//   darkMode: boolean;
// };
// const Contact = ({ darkMode }: PublicRoutesProps) => {
//   const dispatch = useDispatch<AppDispatch>();
//   const [firstName, setFirstName] = useState<string>("");
//   const [lastName, setLastName] = useState<string>("");
//   const [email, setEmail] = useState<string>("");
//   const [phone, setPhone] = useState<string>("");
//   const [message, setMessage] = useState<string>("");
//   const handleContactSave = async (e: React.FormEvent) => {
//     e.preventDefault();
//     if (!firstName || !email || !message) {
//       alert("please fill all the field");
//       return;
//     }
//     try {
//       const contactData = {
//         firstName,
//         lastName:lastName || "",
//         email,
//         phone: phone || "",
//         message,
//       };
//       const res = await dispatch(createContact(contactData)).unwrap();
      
//       if (res.success) {
//         toast.success(res.message);
//         setFirstName("");
//         setLastName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//       }
//     } catch (error: any) {
//       if (error.response?.data?.message) {
//         toast.error(error.response?.data?.message);
//       } else {
//         toast.error(error.message);
//       }
//     }
//   };

//   return (
//     <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
//       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
//           <h2
//             className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
//             style={{ color: darkMode ? "white" : "1f2937" }}
//           >
//             Get In{" "}
//             <span
//               style={{
//                 background: "linear-gradient(to right, #26c6da, #1f88e5  )",
//                 WebkitBackgroundClip: "text",
//                 backgroundClip: "text",
//                 color: "transparent",
//               }}
//             >
//               Touch
//             </span>
//           </h2>
//           <p
//             className="text-base sm:text-lg md:text-xl"
//             style={{ color: darkMode ? "d1d5bd" : "#6b7280" }}
//           >
//             Let's discuss Your Project
//           </p>
//         </div>
//         <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 sm:gap-7 md:gap-9 items-center mb-12">
//           <div
//             className="flex justify-center order-2 lg:order-1"
//             data-aos="fade-right"
//           >
//             <img
//               src={contact}
//               alt="Contact"
//               className="w-full max-w-xs sm:max-w-sm lg:max-w-md  h-auto object-contain"
//             />
//           </div>
//           <form
//             onSubmit={handleContactSave}
//             style={{
//               background: darkMode
//                 ? "linear-gradient(to right, #1f2937, #111827)"
//                 : "linear-gradient(to right, #bbdff1, rgba(77,255,240,0.5))",
//               borderColor: darkMode ? "#374151" : "e5e7eb",
//             }}
//             className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
//             data-aos="fade-left"
//           >
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
//               {/* firstName */}
//               <input
//                 type="text"
//                 value={firstName}
//                 onChange={(e) => setFirstName(e.target.value)}
//                 placeholder="First name..."
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
//                 required
//               />
//               {/* lastName */}
//               <input
//                 type="text"
//                 value={lastName}
//                 onChange={(e) => setLastName(e.target.value)}
//                 placeholder="Last name..."
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
//               />
//               {/* email */}
//               <input
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Email Address"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
//                 required
//               />
//               {/* telephone */}
//               <input
//                 type="tel"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="Phone Number"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
//               />
//               {/* message */}
//               <textarea
//                 value={message}
//                 onChange={(e) => setMessage(e.target.value)}
//                 placeholder="Your Message"
//                 style={{
//                   backgroundColor: darkMode ? "#374151" : "#faede3",
//                   borderColor: darkMode ? "#4b5563" : "d1d5db",
//                   color: darkMode ? "white" : "#1f2937",
//                 }}
//                 className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
//                 required
//               />
//               <button
//                 type="submit"
//                 style={{
//                   background: "linear-gradient(to right, #06b6d4, #67e8f9)",
//                 }}
//                 className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02]  cursor-pointer transition-all"
//               >
//                 Send Message
//               </button>
//             </div>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import { useState, useEffect } from "react";
import contact from "../../assets/contact-us.png";
import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../app/store";
import { createContact, clearError } from "../../features/contact/contactSlice";
import { toast } from "react-toastify";

type PublicRoutesProps = {
  darkMode: boolean;
};

const Contact = ({ darkMode }: PublicRoutesProps) => {
  const dispatch = useDispatch<AppDispatch>();
  
  // Get loading and error state from Redux
  const { loading, error } = useSelector((state: RootState) => state.contact);
  
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  
  // Clear error on component mount
  useEffect(() => {
    dispatch(clearError());
  }, [dispatch]);
  
  const handleContactSave = async (e: React.FormEvent) => {
    e.preventDefault();
    
    console.log("📝 Form submitted - Starting validation...");
    
    if (!firstName || !email || !message) {
      console.warn("⚠️ Validation failed - missing required fields");
      toast.error("Please fill all required fields (First Name, Email, Message)");
      return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      console.warn("⚠️ Validation failed - invalid email format");
      toast.error("Please enter a valid email address");
      return;
    }
    
    try {
      const contactData = {
        firstName: firstName.trim(),
        lastName: lastName.trim() || "",
        email: email.trim(),
        phone: phone.trim() || "",
        message: message.trim(),
      };
      
      console.log("📤 Dispatching contact data:", contactData);
      
      const res = await dispatch(createContact(contactData)).unwrap();
      
      console.log("✅ Form submission successful:", res);
      
      if (res.success) {
        toast.success(res.message || "Message sent successfully!");
        
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setMessage("");
        
        console.log("🔄 Form reset completed");
      }
    } catch (error: any) {
      console.error("❌ Form submission error details:", {
        error,
        message: error?.message,
        payload: error
      });
      
      // Handle error message
      let errorMessage = "Failed to send message. Please try again.";
      
      if (typeof error === 'string') {
        errorMessage = error;
      } else if (error?.message) {
        errorMessage = error.message;
      } else if (error) {
        errorMessage = String(error);
      }
      
      toast.error(errorMessage);
    }
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-10 md:mb-12" data-aos="fade-up">
          <h2
            className="text-2xl sm:text-3xl md:text-4xl font-bold mb-2 sm:mb-3"
            style={{ color: darkMode ? "white" : "#1f2937" }}
          >
            Get In{" "}
            <span
              style={{
                background: "linear-gradient(to right, #26c6da, #1f88e5)",
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
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Let's discuss Your Project
          </p>
        </div>
        
        {/* Debug Info */}
        {process.env.NODE_ENV === 'development' && (
          <div className="mb-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
            <h3 className="font-bold text-yellow-800">Debug Info:</h3>
            <p className="text-sm text-yellow-700">
              Backend URL: https://port-backend-fab0.onrender.com
            </p>
            <p className="text-sm text-yellow-700">
              Status: {loading ? "Loading..." : error ? `Error: ${error}` : "Ready"}
            </p>
          </div>
        )}
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-5 sm:gap-7 md:gap-9 items-center mb-12">
          <div
            className="flex justify-center order-2 lg:order-1"
            data-aos="fade-right"
          >
            <img
              src={contact}
              alt="Contact"
              className="w-full max-w-xs sm:max-w-sm lg:max-w-md h-auto object-contain"
            />
          </div>
          <form
            onSubmit={handleContactSave}
            style={{
              background: darkMode
                ? "linear-gradient(to right, #1f2937, #111827)"
                : "linear-gradient(to right, #bbdff1, rgba(77,255,240,0.5))",
              borderColor: darkMode ? "#374151" : "#e5e7eb",
            }}
            className="rounded-xl p-4 sm:p-5 md:p-6 lg:p-8 border shadow-lg order-1 lg:order-2"
            data-aos="fade-left"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
              {/* First Name */}
              <div className="sm:col-span-2 lg:col-span-1">
                <input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name *"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#faede3",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "white" : "#1f2937",
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  required
                  disabled={loading}
                />
              </div>
              
              {/* Last Name */}
              <div className="sm:col-span-2 lg:col-span-1">
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#faede3",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "white" : "#1f2937",
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  disabled={loading}
                />
              </div>
              
              {/* Email */}
              <div className="sm:col-span-2 lg:col-span-1">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email Address *"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#faede3",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "white" : "#1f2937",
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  required
                  disabled={loading}
                />
              </div>
              
              {/* Phone */}
              <div className="sm:col-span-2 lg:col-span-1">
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone Number"
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#faede3",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "white" : "#1f2937",
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all"
                  disabled={loading}
                />
              </div>
              
              {/* Message */}
              <div className="sm:col-span-2">
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Your Message *"
                  rows={4}
                  style={{
                    backgroundColor: darkMode ? "#374151" : "#faede3",
                    borderColor: darkMode ? "#4b5563" : "#d1d5db",
                    color: darkMode ? "white" : "#1f2937",
                  }}
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg text-sm sm:text-base border focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-all resize-none"
                  required
                  disabled={loading}
                />
              </div>
              
              {/* Submit Button */}
              <div className="sm:col-span-2">
                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    background: loading 
                      ? "#9ca3af" 
                      : "linear-gradient(to right, #06b6d4, #67e8f9)",
                    opacity: loading ? 0.7 : 1,
                  }}
                  className="w-full py-2 sm:py-3 text-white font-semibold rounded-lg text-sm sm:text-base hover:shadow-lg hover:shadow-cyan-500/25 hover:scale-[1.02] transition-all disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? (
                    <span className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : "Send Message"}
                </button>
                
                {/* Debug console button (only in development) */}
                {process.env.NODE_ENV === 'development' && (
                  <button
                    type="button"
                    onClick={() => {
                      console.log("🔍 Current form state:", {
                        firstName,
                        lastName,
                        email,
                        phone,
                        message
                      });
                      console.log("🔍 Redux state - Loading:", loading, "Error:", error);
                      console.log("🔍 API Base URL:", "https://port-backend-fab0.onrender.com");
                    }}
                    className="mt-2 w-full py-2 bg-gray-200 text-gray-800 rounded-lg text-sm hover:bg-gray-300"
                  >
                    Debug Console Log
                  </button>
                )}
              </div>
            </div>
            
            {/* Form status */}
            {loading && (
              <div className="mt-4 text-center">
                <p className="text-blue-500">Sending your message...</p>
              </div>
            )}
            
            {error && (
              <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm">Error: {error}</p>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;