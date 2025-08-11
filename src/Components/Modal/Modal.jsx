import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaStar, FaRegCommentDots, FaCalendarAlt, FaTimes } from "react-icons/fa";

const Modal = ({ isOpen, onClose, app }) => {
  if (!app) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal Box */}
          <motion.div
            className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 50, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
            >
              <FaTimes size={20} />
            </button>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4">{app.name}</h2>

            {/* Details */}
            <div className="space-y-3 text-gray-700">
              <p className="flex items-center gap-2">
                <FaUser className="text-blue-500" /> <span>Developer: {app.developer}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaStar className="text-yellow-500" /> <span>Rating: {app.rating}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaRegCommentDots className="text-green-500" /> <span>Reviews: {app.reviews}</span>
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt className="text-purple-500" /> <span>Release Date: {app.releaseDate}</span>
              </p>
            </div>

            {/* Description */}
            {app.description && (
              <p className="mt-4 text-gray-600">{app.description}</p>
            )}

            {/* Close Button Bottom */}
            <div className="mt-6 text-right">
              <button
                onClick={onClose}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
