import React, { useRef, useState } from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
  FaGithub,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../Container/Container";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [focusedInput, setFocusedInput] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_k0fi7af",
        "template_rfaxe3d",
        form.current,
        "wjY8H6QCe3DamyXSJ"
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully!", {
          style: {
            background: "#10b981",
            color: "#fff",
          },
        });
        e.target.reset();
      })
      .catch((error) => {
        setLoading(false);
        toast.error("Failed to send message, please try again.");
        console.error(error);
      });
  };

  const contactCards = [
    {
      icon: <FaLinkedin className="text-2xl" />,
      title: "LinkedIn",
      subtitle: "Let's connect",
      detail: "Khayer Hossain",
      href: "https://www.linkedin.com/in/khayer-hossain/",
    },
    {
      icon: <FaWhatsapp className="text-2xl" />,
      title: "WhatsApp",
      subtitle: "Quick chat",
      detail: "+880 1917-006945",
      href: "https://wa.me/8801917006945?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect",
    },
    {
      icon: <FaTwitter className="text-2xl" />,
      title: "Twitter (X)",
      subtitle: "Follow updates",
      detail: "@khayerhossain45",
      href: "https://x.com/khayerhossain45",
    },
    {
      icon: <FaGithub className="text-2xl" />,
      title: "GitHub",
      subtitle: "Check my code",
      detail: "github.com/khayerhossain",
      href: "https://github.com/khayerhossain",
    },
  ];

  return (
    <section className="bg-[#050505] py-16 overflow-hidden" id="contact">
      <Container>
        {/* Heading */}
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#1A1A1F] px-4 py-1.5 rounded-full mb-4 md:mb-6"
          >
            <FaEnvelope className="text-white text-sm" />
            <span className="text-xs font-medium text-white">Get In Touch</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-3 text-white"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-sm md:text-base text-gray-400 max-w-xl mx-auto leading-relaxed"
          >
            Have a project in mind? I'd love to hear about it.
          </motion.p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left Side - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 space-y-4"
          >
            {/* Availability Badge */}
            <div className="bg-[#111115] border border-gray-800 rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="relative">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                  <div className="absolute inset-0 w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                </div>
                <span className="text-gray-200 font-medium text-base">
                  Available for Work
                </span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                I'm currently available for freelance projects and collaborations.
              </p>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {contactCards.map((card, index) => (
                <motion.a
                  key={index}
                  href={card.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="bg-[#111115] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition-all duration-300 group"
                >
                  <div className="text-white mb-3 w-10 h-10 bg-[#1A1A1F] rounded-lg flex items-center justify-center">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base mb-0.5">
                    {card.title}
                  </h3>
                  <p className="text-[10px] text-gray-500 mb-1">
                    {card.subtitle}
                  </p>
                  <p className="text-xs font-medium text-gray-300 truncate">
                    {card.detail}
                  </p>
                  {/* Arrow */}
                  <div className="absolute bottom-4 right-4 text-white opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                    <span className="text-lg">→</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3"
          >
            <div className="bg-[#111115] border border-gray-800 rounded-2xl p-6 md:p-8">
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send Me a Message
                </h3>
                <p className="text-gray-400 text-sm">
                  I'll get back to you within 24 hours
                </p>
              </div>

              <form ref={form} onSubmit={sendEmail} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Name Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">
                      Your Name
                    </label>
                    <div className="relative group">
                      <FaUser
                        className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-colors duration-300 text-sm ${focusedInput === "name"
                          ? "text-white"
                          : "text-gray-500"
                          }`}
                      />
                      <input
                        type="text"
                        name="user_name"
                        required
                        onFocus={() => setFocusedInput("name")}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1F] border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                        placeholder="John Doe"
                      />
                    </div>
                  </div>

                  {/* Email Input */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-gray-400 ml-1">
                      Your Email
                    </label>
                    <div className="relative group">
                      <FaEnvelope
                        className={`absolute top-1/2 left-4 transform -translate-y-1/2 transition-colors duration-300 text-sm ${focusedInput === "email"
                          ? "text-white"
                          : "text-gray-500"
                          }`}
                      />
                      <input
                        type="email"
                        name="user_email"
                        required
                        onFocus={() => setFocusedInput("email")}
                        onBlur={() => setFocusedInput(null)}
                        className="w-full pl-10 pr-4 py-3 bg-[#1A1A1F] border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="space-y-1.5">
                  <label className="text-xs font-medium text-gray-400 ml-1">
                    Your Message
                  </label>
                  <div className="relative group">
                    <FaCommentDots
                      className={`absolute top-4 left-4 transition-colors duration-300 text-sm ${focusedInput === "message"
                        ? "text-white"
                        : "text-gray-500"
                        }`}
                    />
                    <textarea
                      name="message"
                      rows="4"
                      required
                      onFocus={() => setFocusedInput("message")}
                      onBlur={() => setFocusedInput(null)}
                      className="w-full pl-10 pr-4 py-3 bg-[#1A1A1F] border border-gray-800 rounded-xl text-white text-sm placeholder-gray-600 focus:outline-none focus:border-gray-600 transition-colors duration-300 resize-none leading-relaxed"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={loading}
                  className="w-full bg-white text-black px-6 py-3.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm hover:bg-gray-200 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <FaPaperPlane className="text-sm" />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
