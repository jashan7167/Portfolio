import { motion } from "framer-motion";

const Hero = () => {
  const handleNavigation = (sectionId: string) => {
    document.querySelector(sectionId)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-base via-surface to-mantle relative overflow-hidden">
      {/* Subtle background dots for minimal texture */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(186,194,222,0.03)_1px,_transparent_0)] bg-[size:32px_32px]"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto text-center space-y-12 px-6 relative z-10"
      >
        {/* Profile photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="flex justify-center"
        >
          <div className="relative">
            <img
              src="../src/assets/image.jpeg" // Replace with your actual photo
              alt="Jashanjot Singh"
              className="w-60 h-60 rounded-full object-cover border-2 border-lavender/20 shadow-xl shadow-lavender/10"
            />
            {/* Subtle glow effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-lavender/10 to-mauve/10 blur-sm -z-10"></div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="space-y-3"
        >
          <p className="text-xl text-subtext1 font-light tracking-wide">
            Hi, I'm
          </p>
          <h1 className="text-6xl font-display font-light tracking-tight bg-gradient-to-r from-lavender via-mauve to-pink bg-clip-text text-transparent">
            Jashanjot Singh Bhatia
          </h1>
        </motion.div>

        {/* Clean professional title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="space-y-2"
        >
          <h2 className="text-3xl font-display font-medium text-blue">
            Software Engineer
          </h2>
        </motion.div>

        {/* Clean, minimal description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="space-y-6"
        >
          <p className="text-lg text-subtext1 max-w-3xl mx-auto leading-relaxed font-light">
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

        {/* Clean CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-6 pt-4"
        >
          <motion.button
            whileHover={{
              scale: 1.02,
              boxShadow: "0 8px 32px rgba(137, 180, 250, 0.2)",
            }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation("#projects")}
            className="px-8 py-3 bg-gradient-to-r from-blue/90 to-sapphire/90 text-base font-medium rounded-xl shadow-md hover:shadow-blue/15 transition-all duration-300 backdrop-blur-sm border border-blue/10"
          >
            View My Work
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handleNavigation("#contact")}
            className="px-8 py-3 border border-lavender/20 text-lavender hover:bg-lavender/5 rounded-xl transition-all duration-300 font-medium"
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
