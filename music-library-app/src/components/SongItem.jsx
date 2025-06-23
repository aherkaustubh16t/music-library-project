import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function SongItem({
  song,
  onDelete,
  isAdmin,
  isPlaying = false,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  const handleDelete = (e) => {
    e.stopPropagation();
    setIsDeleted(true);
    setTimeout(() => onDelete(song.id), 300);
  };

  return (
    <AnimatePresence>
      {!isDeleted && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ type: "spring", damping: 20 }}
          className={`relative px-6 py-4 transition-all duration-300 flex justify-between items-center
            ${isHovered ? "bg-white/90" : "bg-white/10"}
            rounded-xl backdrop-blur-sm border border-white/10
            ${isPlaying ? "ring-2 ring-purple-400/50" : ""}
            shadow-lg hover:shadow-xl overflow-hidden group`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />

          <div className="flex items-center space-x-4 z-10">
            {/* Album art with play status indicator */}
            <motion.div
              className={`relative h-14 w-14 rounded-xl flex items-center justify-center overflow-hidden
                ${isHovered ? "shadow-lg" : "shadow-md"}`}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${
                  isHovered
                    ? "from-purple-600 to-blue-500"
                    : "from-purple-500/80 to-blue-500/80"
                }`}
              />

              {isPlaying ? (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center bg-black/30"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                >
                  <div className="flex space-x-1 h-6 items-end">
                    {[1, 2, 3, 2].map((h, i) => (
                      <motion.div
                        key={i}
                        className="w-1.5 bg-purple-300 rounded-full"
                        animate={{ height: [h, h + 3, h] }}
                        transition={{
                          repeat: Infinity,
                          duration: 0.8,
                          delay: i * 0.1,
                        }}
                        style={{ height: `${h * 5}px` }}
                      />
                    ))}
                  </div>
                </motion.div>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`h-6 w-6 ${
                    isHovered ? "text-white" : "text-purple-200"
                  } transition-colors`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                  />
                </svg>
              )}
            </motion.div>

            <div className="overflow-hidden">
              <motion.p
                className={`font-bold text-lg truncate ${
                  isHovered
                    ? "text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500"
                    : "text-white"
                }`}
                whileHover={{ x: 3 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {song.title}
              </motion.p>
              <motion.p
                className={`text-sm ${
                  isHovered ? "text-purple-200" : "text-white/70"
                }`}
              >
                <span className="font-medium">{song.artist}</span> —{" "}
                {song.album}
              </motion.p>
            </div>
          </div>

          {/* Duration and controls */}
          <div className="flex items-center space-x-4 z-10">
            <span className="text-sm text-white/50 hidden md:inline">3:42</span>

            {isAdmin && (
              <AnimatePresence>
                {isHovered && (
                  <motion.button
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20 }}
                    onClick={handleDelete}
                    className="flex items-center px-4 py-2 rounded-xl bg-gradient-to-br from-red-500/90 to-pink-500/90 text-white shadow-lg hover:shadow-red-500/20 transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-1.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    <span className="font-medium">Delete</span>
                  </motion.button>
                )}
              </AnimatePresence>
            )}

            {!isAdmin && isHovered && (
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="p-2 rounded-full bg-gradient-to-br from-purple-600 to-blue-500 text-white shadow-lg"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </motion.button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
