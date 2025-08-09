import { AnimatePresence, motion } from "framer-motion";

interface SplashScreenProps {
  show: boolean;
  duration?: number; // ms
}

const SplashScreen = ({ show, duration = 2400 }: SplashScreenProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center bg-base/85 backdrop-blur-xl"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="text-center space-y-10 px-8">
            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 12, filter: "blur(6px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="text-transparent bg-gradient-to-r from-lavender via-mauve to-pink animate-gradient-text bg-clip-text text-4xl sm:text-5xl font-light tracking-[0.18em]"
            >
              JASHANJOT
            </motion.h1>

            {/* Looping line */}
            <div className="relative w-72 sm:w-96 h-2 mx-auto overflow-hidden rounded-full bg-surface/40 border border-surface/30">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(203,166,247,0.15),transparent_60%)]" />
              </div>
              <span className="absolute top-0 bottom-0 left-0 w-1/3 rounded-full bg-gradient-to-r from-transparent via-lavender to-transparent opacity-90 animate-sweep" />
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.7 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-[11px] tracking-[0.35em] uppercase text-subtext1/60"
            >
              Loading
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;