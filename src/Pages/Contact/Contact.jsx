import React from "react";
import {
  FaLinkedin,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaPaperPlane,
  FaUser,
  FaCommentDots,
} from "react-icons/fa";
import { FaHandPointer } from "react-icons/fa";
import { motion } from "framer-motion";
import Container from "../../Container/Container";

const Contact = () => {
  return (
    <section className="bg-white py-20" id="contact">
      <Container>
        <div className="mx-auto px-6">
          {/* Heading */}
          <div className="text-center mb-14">
            <motion.h2
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold text-gray-900"
            >
              Contact With Me
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-gray-500 mt-2"
            >
              Let’s connect and build something awesome
            </motion.p>
          </div>

          {/* Flex layout for equal height and vertical center */}
          <div className="md:flex md:gap-10 md:items-center">
            {/* Left Side - Contact Cards */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 flex flex-col justify-between gap-6"
            >
              {[
                {
                  icon: <FaLinkedin className="text-black text-xl" />,
                  title: "LinkedIn",
                  detail: "linkedin.com/in/khayer-hossain-5086a6364",
                  href: "https://www.linkedin.com/in/khayer-hossain-5086a6364/",
                },
                {
                  icon: <FaWhatsapp className="text-black text-xl" />,
                  title: "WhatsApp",
                  detail: "+8801917006945",
                  href: "https://wa.me/8801917006945?text=Hi%20I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect",
                },
                {
                  icon: <FaTwitter className="text-black text-xl" />,
                  title: "Twitter (X)",
                  detail: "x.com/khayerhossain45",
                  href: "https://x.com/khayerhossain45",
                },
              ].map((card, index) => (
                <div
                  key={index}
                  className="bg-gray-100 rounded-xl px-5 py-4 shadow hover:shadow-md transition flex gap-4 items-start w-full lg:max-w-[430px]"
                >
                  <div>{card.icon}</div>
                  <div>
                    <h3 className="font-semibold text-base">{card.title}</h3>
                    <p className="text-sm text-gray-600">{card.detail}</p>
                    <a
                      href={card.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-black text-sm hover:underline overflow-hidden relative w-20" 
                    >
                      <motion.span
                        style={{
                          display: "inline-block",
                          whiteSpace: "nowrap",
                        }}
                        animate={{ x: ["-25%", "25%"] }}
                        transition={{
                          repeat: Infinity,
                          duration: 3,
                          ease: "linear",
                        }}
                      >
                        Connect →
                      </motion.span>
                    </a>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Right Side - Contact Form */}
            <motion.form
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex-1 mt-10 md:mt-0 space-y-6"
            >
              {/* Name field with icon */}
              <div className="relative">
                <FaUser className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              {/* Email with icon */}
              <div className="relative">
                <FaEnvelope className="absolute top-1/2 left-3 transform -translate-y-1/2 text-black" />
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full pl-10 pr-5 py-3 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-black transition"
                />
              </div>

              {/* Description with icon and vertical resize */}
              <div className="relative">
                <FaCommentDots className="absolute top-3 left-3 text-black" />
                <textarea
                  rows="4"
                  placeholder="Tell me about your project"
                  className="w-full pl-10 pr-5 pt-3 pb-2 border border-gray-300 rounded-xl shadow focus:outline-none focus:ring-2 focus:ring-black transition resize-y min-h-[4rem] max-h-[20rem]"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="bg-black text-white px-6 py-3 rounded-xl flex items-center gap-3 hover:bg-gray-900 transition"
              >
                <FaPaperPlane className="text-white" />
                Send Message
              </button>
            </motion.form>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
