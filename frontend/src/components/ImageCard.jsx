import React from "react";
import { ExternalLink, Star } from "lucide-react";
import { motion } from "framer-motion";

export default function ImageCard({ image }) {
  // Detect API type (Pixabay or Pexels)
  const thumbnail =
    image?.src?.medium || image?.webformatURL || image?.previewURL;
  const fullImage =
    image?.src?.large || image?.largeImageURL || image?.webformatURL;
  const photographer =
    image?.photographer || image?.user || "Unknown Photographer";

  if (!thumbnail) return null;

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-md shadow-lg hover:shadow-2xl transition-all duration-300"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03 }}
    >
      {/* Thumbnail */}
      <div className="aspect-square overflow-hidden bg-gray-900">
        <img
          src={thumbnail}
          alt={image?.tags || image?.alt || "Image"}
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
        />
      </div>

      {/* Dark overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Bottom overlay info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 text-white translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
        <p className="text-xs mb-2 truncate">{photographer}</p>

        {/* VIEW button opens full image */}
        <a
          href={fullImage}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-semibold bg-yellow-400 text-gray-900 hover:bg-yellow-300 px-3 py-1 rounded-full transition-all duration-200"
        >
          <span>VIEW</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}
