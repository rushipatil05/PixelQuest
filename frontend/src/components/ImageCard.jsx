import React from "react";
import { motion } from "framer-motion";

export default function ImageCard({ image }) {
  const thumbnail =
    image?.src?.medium || image?.webformatURL || image?.previewURL;

  const fullImage =
    image?.src?.large || image?.largeImageURL || image?.webformatURL;

  const photographer = image?.photographer || image?.user || "Unknown";

  if (!thumbnail) return null;

  return (
    <motion.div
      className="bg-gray-900 rounded-lg overflow-hidden shadow-md"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
    >

      <img
        src={thumbnail}
        alt="Image"
        className="w-full h-48 object-cover"
      />

      <div className="p-3 text-white text-sm">
        <p className="mb-2 truncate">{photographer}</p>

        <a
          href={fullImage}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-md text-xs font-semibold inline-block"
        >
          VIEW
        </a>
      </div>
    </motion.div>
  );
}
