import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: "🎓",
      title: "Education",
      description: "JUIT, Information Technology",
      link: null,
    },
    {
      icon: "💼",
      title: "Analyst",
      description: "Backend - KPMG",
      link: null,
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.381 1.38 1.38 0 0 0 1.38 1.381 1.38 1.38 0 0 0 1.381-1.381 1.38 1.38 0 0 0-1.381-1.381z" />
        </svg>
      ),
      title: "LeetCode Profile",
      description: "Problem Solving & DSA",
      link: "https://leetcode.com/u/singhjashan/",
      theme: "green",
    },
  ];

  const interests = [
    "Linux & Open Source",
    "Minimal Design",
    "System Architecture",
    "Performance Optimization",
    "Clean Code",
    "Automation",
  ];

  return (
    <section id="about" className="min-h-screen bg-surface relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(186,194,222,0.02)_1px,_transparent_0)] bg-[size:40px_40px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Move the heading section outside and center it */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl font-display font-light text-lavender"
          >
            About Me
          </motion.h2>
          <div className="flex justify-center mt-4">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              transition={{ delay: 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="h-1 bg-gradient-to-r from-lavender to-mauve rounded-full"
            />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Remove the section header div that was here */}

            {/* Main description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-subtext1 leading-relaxed font-light">
                I'm a software engineer who believes in the power of{" "}
                <span className="text-mauve font-medium">
                  clean, efficient code
                </span>{" "}
                and{" "}
                <span className="text-pink font-medium">minimalist design</span>
                . My journey in tech is driven by curiosity and a passion for
                building systems that are both powerful and elegant.
              </p>

              <p className="text-lg text-subtext1 leading-relaxed font-light">
                When I'm not coding, you'll find me exploring the latest in{" "}
                <span className="text-blue font-medium">
                  open-source technologies
                </span>
                , customizing my Linux setup, or diving deep into system
                architecture. I believe great software comes from understanding
                both the big picture and the smallest details.
              </p>
            </motion.div>

            {/* Interests */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-xl font-display font-medium text-blue">
                What I'm passionate about
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.span
                    key={interest}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 0.4 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-mantle/50 border border-lavender/20 rounded-xl text-sm text-subtext1 font-light hover:border-lavender/40 transition-colors"
                  >
                    {interest}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right side - Highlights grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {highlights.map((item, index) => {
              const isClickable = item.link;
              const CardComponent = isClickable ? motion.a : motion.div;
              const cardProps = isClickable
                ? {
                    href: item.link,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  }
                : {};

              return (
                <CardComponent
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className={`bg-mantle/30 backdrop-blur-sm border rounded-2xl p-6 space-y-3 transition-all duration-300 group ${
                    item.theme === "green"
                      ? "border-green/20 hover:border-green/40"
                      : "border-surface1/30 hover:border-lavender/20"
                  } ${isClickable ? "cursor-pointer" : ""}`}
                  {...cardProps}
                >
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {typeof item.icon === "string" ? item.icon : item.icon}
                  </div>
                  <h3
                    className={`font-display font-medium ${
                      item.theme === "green" ? "text-green" : "text-lavender"
                    }`}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-subtext1 font-light leading-relaxed">
                    {item.description}
                  </p>
                </CardComponent>
              );
            })}
          </motion.div>
        </div>

        {/* Bottom stats or additional info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-base/30 border border-lavender/20 rounded-full">
            <span className="text-sm text-subtext1 font-light">
              Always learning, always building
            </span>
            <span className="text-mauve">✨</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
