import { motion } from "framer-motion";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: "💻",
      skills: [
        "Java",
        "Python",
        "JavaScript",
        "TypeScript",
        "SQL",
        "Bash/Shell",
      ],
    },
    {
      title: "Backend Technologies",
      icon: "⚙️",
      skills: ["Spring Boot", "RESTful APIs", "Microservices", "GraphQL"],
    },
    {
      title: "Databases",
      icon: "🗄️",
      skills: ["PostgreSQL", "MongoDB", "MySQL", "Redis"],
    },
    {
      title: "Cloud & DevOps",
      icon: "☁️",
      skills: ["AWS", "Docker", "CI/CD", "Linux"],
    },
    {
      title: "Tools & Frameworks",
      icon: "🛠️",
      skills: ["Git", "Maven", "JUnit", "Hibernate/JPA", "Apache Kafka"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section id="skills" className="min-h-screen bg-mantle relative py-20">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(203,166,247,0.02)_1px,_transparent_0)] bg-[size:48px_48px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-light text-mauve mb-4">
            Technical Skills
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "4rem" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-mauve to-pink rounded-full mx-auto mb-6"
          />
          <p className="text-lg text-subtext1 font-light max-w-2xl mx-auto">
            Technologies and tools I use to build scalable, efficient solutions
          </p>
        </motion.div>

        {/* Skills grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="bg-base/30 backdrop-blur-sm border border-surface1/30 rounded-2xl p-6 hover:border-mauve/20 transition-all duration-300 group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                  {category.icon}
                </span>
                <h3 className="font-display font-medium text-lavender">
                  {category.title}
                </h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                      duration: 0.4,
                    }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 group"
                  >
                    <div className="w-2 h-2 bg-gradient-to-r from-mauve to-pink rounded-full group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm text-subtext1 group-hover:text-text transition-colors duration-300">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface/20 border border-mauve/20 rounded-full">
            <span className="text-sm text-subtext1 font-light">
              Intelligence is the ability to adapt to change - Stephen Hawking
            </span>
            <span className="text-lavender"></span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
