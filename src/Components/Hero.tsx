import { motion } from "framer-motion";

const Hero = () => {
  const handleNavigation = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 60; // Match navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base via-surface to-mantle relative overflow-hidden pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      {/* Subtle background dots for minimal texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(186,194,222,0.03)_1px,_transparent_0)] bg-[size:32px_32px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 md:space-y-12 px-4 sm:px-6 relative z-10 w-full"
      >
        {/* Profile photo - improved mobile sizing */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center mb-4 sm:mb-6"
        >
          <div className="relative">
            <img
              src="/assets/image.jpeg"
              alt="Jashanjot Singh"
              className="w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full object-cover border-2 border-lavender/20 shadow-xl shadow-lavender/10"
              onError={(e) => {
                // Fallback if image doesn't load
                e.currentTarget.style.display = "none";
                const fallback = e.currentTarget
                  .nextElementSibling as HTMLElement;
                if (fallback) {
                  fallback.classList.remove("hidden");
                }
              }}
            />
            {/* Fallback avatar if image fails to load */}
            <div className="hidden w-36 h-36 sm:w-48 sm:h-48 md:w-60 md:h-60 rounded-full bg-gradient-to-br from-lavender/20 to-mauve/20 flex items-center justify-center text-4xl sm:text-5xl md:text-6xl border-2 border-lavender/20 shadow-xl shadow-lavender/10">
              👨‍💻
            </div>
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender/10 to-mauve/10 blur-sm -z-10"></div>
          </div>
        </motion.div>

        {/* Text content - better mobile spacing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-2 sm:space-y-3"
        >
          <p className="text-base sm:text-lg md:text-xl text-subtext1 font-light tracking-wide">
            Hi, I'm
          </p>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-light tracking-tight bg-gradient-to-r from-lavender via-mauve to-pink bg-clip-text text-transparent leading-tight px-2 sm:px-0">
            Jashanjot Singh Bhatia
          </h1>
        </motion.div>

        {/* Professional title - responsive sizing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-1 sm:space-y-2"
        >
          <h2 className="text-lg sm:text-2xl md:text-3xl font-display font-medium text-blue">
            Software Engineer
          </h2>
        </motion.div>

        {/* Description - better mobile text */}
        {/* Clean, minimal description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-base sm:text-lg text-subtext1 max-w-3xl mx-auto leading-relaxed font-light px-4 sm:px-0">
            Building scalable backend solutions with clean, efficient code.
            <br />
            Passionate about{" "}
            <span className="text-mauve font-medium">minimalist design</span>,
            <span className="text-pink font-medium">
              {" "}
              open-source technologies
            </span>
            , and
            <span className="text-lavender font-medium">
              {" "}
              elegant systems architecture
            </span>
            .
          </p>
        </motion.div>

        {/* CTA buttons - improved mobile layout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 md:gap-6 pt-6 sm:pt-8 px-4 sm:px-0"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(137, 180, 250, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation("projects")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-gradient-to-r from-blue/90 to-sapphire/90 text-base font-medium rounded-xl shadow-md hover:shadow-blue/15 transition-all duration-300 backdrop-blur-sm border border-blue/10"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation("contact")}
            className="w-full sm:w-auto px-6 sm:px-8 py-3 border border-lavender/20 text-lavender hover:bg-lavender/5 rounded-xl transition-all duration-300 font-medium"
          >
            Get In Touch
          </motion.button>
        </motion.div>

        {/* Extra spacing for mobile */}
        <div className="h-8 sm:h-12"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
