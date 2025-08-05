import { motion } from "framer-motion";

const Experience = () => {
  const workExperience = [
    {
      title: "Analyst",
      company: "KPMG",
      period: "June 2025 - Present",
      type: "Full-time",
      location: "Chandigarh",
      description: "Backend development and system analysis",
      technologies: [
        "Java",
        "Postgres",
        "AWS",
        "Kafka",
        "SpringBoot",
        "Hibernate",
        "JPA",
      ],
    },
    // Add your previous experiences here
    {
      title: "Project Intern",
      company: "Infowiz",
      period: "Summer 2024",
      type: "Internship",
      location: "Chandigarh",
      description: "Learned Linux Fundamentals and its Real World Applications",
      technologies: [
        "Linux",
        "Scheduling Tasks",
        "Shell Scripting",
        "Bash",
        "Logging",
        "Error Handling",
      ],
    },
  ];

  const volunteering = [
    {
      title: "Member",
      organization: "Code Chef JUIT",
      period: "2023 - 2024",
      description:
        "Attending competetive programming sessions and participated in weekly programming sessions",
      impact:
        "Contributed to the programming community and gained meaningful insights and guidance in DSA and Programming",
    },
    {
      title: "Member",
      organization: "ACM-JUIT",
      period: "2022 - 2023",
      description: "Attended various tech sessions and participate in contests",
      impact: "Collaborated with the community",
    },
  ];

  const achievements = [
    {
      title: "Academics",
      description: "",
      detail: "CGPA: 9.5/10",
      icon: "🎓",
      highlight: true,
    },
    {
      title: "HACHE-JUIT",
      description: "2nd",
      detail:
        "This is a 24-hour Capture The Flag (CTF) event that tested my technical proficiency in Linux, VMware, and reverse engineering tools. The event challenged my problem-solving skills, persistence, and ability to work under pressure in a high-stakes cybersecurity environment.",
      icon: "🏆",
      highlight: false,
    },
    {
      title: "BIZQUIZ-TIEDC",
      description: "2nd",
      detail:
        "It is a competitive business event featuring rounds of questioning on recent business developments, advertising campaigns, and general awareness. The event included complex quizzes, riddles, and challenges such as identifying businesses from logos and matching CEOs to their images, testing both analytical thinking and industry knowledge.",
      icon: "☁️",
      highlight: false,
    },
  ];

  return (
    <section id="experience" className="min-h-screen bg-base relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(203,166,247,0.02)_1px,_transparent_0)] bg-[size:60px_60px]"></div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-light text-lavender mb-4">
            Experience & Achievements
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-mauve to-pink rounded-full mx-auto"
          />
        </motion.div>

        <div className="space-y-20">
          {/* Work Experience */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-medium text-blue mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-blue to-mauve rounded-lg flex items-center justify-center text-sm">
                💼
              </span>
              Professional Experience
            </h3>

            <div className="space-y-6">
              {workExperience.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-mantle/20 backdrop-blur-sm border border-surface1/30 rounded-2xl p-6 hover:border-lavender/20 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-display font-medium text-lavender group-hover:text-mauve transition-colors">
                        {job.title}
                      </h4>
                      <p className="text-blue font-medium">{job.company}</p>
                    </div>
                    <div className="mt-2 lg:mt-0 text-right">
                      <span className="inline-flex items-center gap-2 px-3 py-1 bg-base/50 border border-lavender/20 rounded-full text-sm text-subtext1">
                        {job.period}
                      </span>
                    </div>
                  </div>

                  <p className="text-subtext1 mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {job.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-surface/30 border border-surface1/30 rounded-lg text-xs text-subtext1 font-light"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-medium text-green mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-green to-blue rounded-lg flex items-center justify-center text-sm">
                🏆
              </span>
              Key Achievements
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -4 }}
                  className={`bg-mantle/30 backdrop-blur-sm border rounded-2xl p-6 transition-all duration-300 group ${
                    achievement.highlight
                      ? "border-mauve/40 shadow-lg shadow-mauve/10"
                      : "border-surface1/30 hover:border-green/20"
                  }`}
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {achievement.icon}
                  </div>
                  <h4 className="font-display font-medium text-lavender mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-subtext1 text-sm mb-3 leading-relaxed">
                    {achievement.description}
                  </p>
                  <p
                    className={`text-xs font-medium ${
                      achievement.highlight ? "text-mauve" : "text-green"
                    }`}
                  >
                    {achievement.detail}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Volunteering */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-display font-medium text-pink mb-8 flex items-center gap-3">
              <span className="w-8 h-8 bg-gradient-to-br from-pink to-mauve rounded-lg flex items-center justify-center text-sm">
                🤝
              </span>
              Community Involvement
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {volunteering.map((volunteer, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-mantle/20 backdrop-blur-sm border border-surface1/30 rounded-2xl p-6 hover:border-pink/20 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="font-display font-medium text-lavender group-hover:text-pink transition-colors">
                        {volunteer.title}
                      </h4>
                      <p className="text-pink text-sm font-medium">
                        {volunteer.organization}
                      </p>
                    </div>
                    <span className="text-xs text-subtext1 bg-base/30 px-2 py-1 rounded-lg">
                      {volunteer.period}
                    </span>
                  </div>

                  <p className="text-subtext1 text-sm mb-3 leading-relaxed">
                    {volunteer.description}
                  </p>

                  <div className="border-t border-surface1/20 pt-3">
                    <p className="text-xs text-green font-medium">
                      Impact: {volunteer.impact}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface/20 border border-mauve/20 rounded-full">
            <span className="text-sm text-subtext1 font-light">
              Building experiences, creating impact
            </span>
            <span className="text-lavender">🚀</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
