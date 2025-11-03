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
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../Container/Container";
import emailjs from "@emailjs/browser";
import toast from "react-hot-toast";

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "service_k0fi7af", // service ID
        "template_rfaxe3d", // template ID
        form.current,
        "wjY8H6QCe3DamyXSJ" // public key
      )
      .then(() => {
        setLoading(false);
        toast.success("Message sent successfully!");
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
      icon: <FaLinkedin className="text-[#0A66C2] text-3xl" />,
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      hoverBg: "hover:bg-blue-100",
      title: "LinkedIn",
      subtitle: "Let's connect professionally",
      detail: "Khayer Hossain",
      href: "https://www.linkedin.com/in/khayer-hossain/",
      buttonText: "Connect on LinkedIn",
      buttonColor: "bg-[#0A66C2] hover:bg-[#004182]",
    },
    {
      icon: <FaWhatsapp className="text-[#25D366] text-3xl" />,
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      hoverBg: "hover:bg-green-100",
      title: "WhatsApp",
      subtitle: "Quick chat & instant replies",
      detail: "+880 1917-006945",
      href: "https://wa.me/8801917006945?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect",
      buttonText: "Message on WhatsApp",
      buttonColor: "bg-[#25D366] hover:bg-[#1DA851]",
    },
    {
      icon: <FaTwitter className="text-[#1DA1F2] text-3xl" />,
      bgColor: "bg-sky-50",
      borderColor: "border-sky-200",
      hoverBg: "hover:bg-sky-100",
      title: "Twitter (X)",
      subtitle: "Follow for updates & insights",
      detail: "@khayerhossain45",
      href: "https://x.com/khayerhossain45",
      buttonText: "Follow on Twitter",
      buttonColor: "bg-[#1DA1F2] hover:bg-[#0C85D0]",
    },
    {
      icon: <FaEnvelope className="text-[#EA4335] text-3xl" />,
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      hoverBg: "hover:bg-red-100",
      title: "Email",
      subtitle: "For formal inquiries",
      detail: "khayerhossain62@gmail.com",
      href: "mailto:khayerhossain62@gmail.com",
      buttonText: "Send Email",
      buttonColor: "bg-[#EA4335] hover:bg-[#C5221F]",
    },
  ];

  return (
    <section
      className="relative bg-white py-16 overflow-hidden"
      id="contact"
    >
      {/* Background Decorative Elements */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse animation-delay-2000"></div>

      <Container>
        {/* Heading */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-gray-100 to-gray-200 px-5 py-2 rounded-full mb-4"
          >
            <FaEnvelope className="text-gray-700" />
            <span className="text-sm font-semibold text-gray-800">
              Get In Touch
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl font-extrabold text-gray-900 mb-4"
          >
            Let's Work Together
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Have a project in mind? I'd love to hear about it. Choose your
            preferred way to connect or fill out the form below.
          </motion.p>
        </div>

        {/* Main Content - Full Width Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Contact Cards (Full Width) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4 w-full"
          >
            {/* Introduction Card */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 text-white shadow-2xl">
              <h3 className="text-2xl font-bold mb-3">Ready to Start?</h3>
              <p className="text-gray-300 mb-4 leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision. Let's create something
                amazing together!
              </p>
              <div className="flex items-center gap-3 text-sm">
                <div className="bg-green-500 w-3 h-3 rounded-full animate-pulse"></div>
                <span>Available for Contributrion</span>
              </div>
            </div>

            {/* Contact Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {contactCards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`${card.bgColor} ${card.borderColor} border-2 rounded-2xl p-4 shadow-lg ${card.hoverBg} transition-all duration-300 hover:shadow-xl group`}
                >
                  {/* Icon */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {card.icon}
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 text-lg mb-1">
                    {card.title}
                  </h3>
                  <p className="text-xs text-gray-600 mb-3">{card.subtitle}</p>
                  <p className="text-sm font-semibold text-gray-800 mb-4 truncate">
                    {card.detail}
                  </p>

                  {/* Button */}
                  <a
                    href={card.href}
                    target="_blank"
                    rel="noreferrer"
                    className={`${card.buttonColor} text-white text-sm px-4 py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 font-medium shadow-md hover:shadow-lg group-hover:translate-y-[-2px]`}
                  >
                    Connect
                    <span className="group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </span>
                  </a>
                </motion.div>
              ))}
            </div>

            {/* Additional Info Card */}
            {/* <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 shadow-lg">
              <h4 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FaMapMarkerAlt className="text-red-500" />
                Other Ways to Reach Me
              </h4>
              <div className="space-y-3 text-sm text-gray-700">
                <div className="flex items-start gap-3">
                  <FaPhone className="text-green-500 mt-1" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">+880 1917-006945</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <FaGithub className="text-gray-800 mt-1" />
                  <div>
                    <p className="font-semibold">GitHub</p>
                    <a
                      href="https://github.com/yourusername"
                      className="text-gray-600 hover:text-gray-900 hover:underline"
                    >
                      github.com/yourusername
                    </a>
                  </div>
                </div>
              </div>
            </div> */}
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl shadow-2xl p-10 backdrop-blur-xl bg-white/5 border border-white/10 sticky top-24"
          >
            <div className="mb-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Send Me a Message
              </h3>
              <p className="text-gray-600 text-sm">
                Fill out the form below and I'll get back to you within 24 hours
              </p>
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              {/* Name Input */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <FaUser className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="text"
                    name="user_name"
                    placeholder="John Doe"
                    required
                    className="w-full pl-12 pr-5 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Email
                </label>
                <div className="relative">
                  <FaEnvelope className="absolute top-1/2 left-4 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="user_email"
                    placeholder="john@example.com"
                    required
                    className="w-full pl-12 pr-5 py-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div className="relative">
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <FaCommentDots className="absolute top-4 left-4 text-gray-400" />
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell me about your project, ideas, or just say hi..."
                    required
                    className="w-full pl-12 pr-5 pt-3 pb-3 border-2 border-gray-200 rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all duration-300 resize-none"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={loading}
                className="w-full bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-xl flex items-center justify-center gap-3 hover:from-black hover:to-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <FaPaperPlane />
                    Send Message
                  </>
                )}
              </motion.button>

              {/* Privacy Notice */}
              <p className="text-xs text-gray-500 text-center mt-4">
                🔒 Your information is safe and will never be shared with third
                parties
              </p>
            </form>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
