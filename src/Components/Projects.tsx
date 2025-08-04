import { motion } from "framer-motion";
import { useState } from "react";

const Projects = () => {
  const [filter, setFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Pharmacy Platform",
      description:
        "Full-stack e-pharmacy platform with user authentication, store management, and comprehensive product handling.",
      longDescription:
        "Comprehensive e-pharmacy platform built with Spring Boot and React. Features secure JWT-based user authentication, intuitive interface for enhanced user experience, store and product management capabilities, and end-to-end workflow for seamless platform operation.",
      technologies: ["Spring Boot", "SQL", "React", "Vite", "JWT", "Java"],
      category: "full-stack",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 2,
      title: "Sign Language Detection System",
      description:
        "AI-powered sign language detection system using deep learning and computer vision for accessibility.",
      longDescription:
        "Innovative sign language detection system utilizing Deep Learning with CNN architecture and Python. Features user-friendly Tkinter interface for easy interaction, sophisticated dataset creation using Mediapipe Library for American Sign Language (ASL), and successful gesture recognition capabilities to create words and sentences.",
      technologies: [
        "Python",
        "Deep Learning",
        "CNN",
        "Tkinter",
        "Mediapipe",
        "Computer Vision",
      ],
      category: "ai-ml",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 3,
      title: "Minimal Room Chat Application",
      description:
        "Real-time chat application with minimal design, allowing users to create topic-based rooms for communication.",
      longDescription:
        "Simple yet effective real-time chat application with minimal and easy-to-use interface. Built with Spring Boot backend and React frontend, featuring room creation functionality on specific topics and seamless real-time communication using SockJs for WebSocket integration.",
      technologies: [
        "Spring Boot",
        "SockJs",
        "React",
        "MongoDB",
        "WebSocket",
        "Java",
      ],
      category: "full-stack",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description:
        "Personal portfolio website built with modern React and Tailwind CSS featuring clean design and smooth animations.",
      longDescription:
        "Modern portfolio website showcasing my work and skills. Built with React, TypeScript, and Tailwind CSS with Framer Motion animations. Features a clean Catppuccin color scheme and responsive design optimized for all devices.",
      technologies: [
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
        "Vite",
      ],
      category: "web",
      image: "/api/placeholder/600/400",
      demoUrl: "#",
      githubUrl: "#",
    },
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "full-stack", label: "Full Stack" },
    { id: "ai-ml", label: "AI/ML" },
    { id: "web", label: "Web" },
  ];

  const filteredProjects =
    filter === "all"
      ? projects
      : projects.filter((project) => project.category === filter);

  return (
    <section id="projects" className="min-h-screen bg-mantle relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(137,180,250,0.02)_1px,_transparent_0)] bg-[size:80px_80px]"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-light text-lavender mb-4">
            My Projects
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-blue to-green rounded-full mx-auto"
          />
          <p className="text-subtext1 mt-6 max-w-2xl mx-auto leading-relaxed">
            A collection of projects that showcase my technical skills and
            passion for creating meaningful solutions.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-display font-medium text-blue mb-8 flex items-center gap-3">
            <span className="w-8 h-8 bg-gradient-to-br from-blue to-sapphire rounded-lg flex items-center justify-center text-sm">
              📂
            </span>
            Projects
          </h3>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  px-6 py-2 rounded-xl font-medium text-sm transition-all duration-300
                  ${
                    filter === category.id
                      ? "bg-blue/10 border border-blue/20 text-blue"
                      : "bg-surface/20 border border-surface1/30 text-subtext1 hover:text-text hover:border-blue/20"
                  }
                `}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* All Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="bg-base/20 backdrop-blur-sm border border-surface1/30 rounded-2xl overflow-hidden hover:border-blue/20 transition-all duration-300 group"
            >
              {/* Project Image */}
              <div className="aspect-video bg-surface/20 border-b border-surface1/20 flex items-center justify-center">
                <span className="text-3xl text-subtext0">🖼️</span>
              </div>

              {/* Project Content */}
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h4 className="font-display font-medium text-lavender group-hover:text-blue transition-colors">
                    {project.title}
                  </h4>
                  <div className="flex gap-2 ml-2">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.demoUrl}
                      className="w-6 h-6 bg-blue/10 border border-blue/20 rounded text-xs flex items-center justify-center text-blue hover:bg-blue/20 transition-colors"
                      title="Live Demo"
                    >
                      🔗
                    </motion.a>
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.githubUrl}
                      className="w-6 h-6 bg-green/10 border border-green/20 rounded text-xs flex items-center justify-center text-green hover:bg-green/20 transition-colors"
                      title="GitHub"
                    >
                      📁
                    </motion.a>
                  </div>
                </div>

                <p className="text-subtext1 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1">
                  {project.technologies.slice(0, 3).map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-surface/30 border border-surface1/30 rounded text-xs text-subtext1 font-light"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-subtext0">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.a
            href="https://github.com/jashan7167"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -2 }}
            whileTap={{ y: 0 }}
            className="inline-flex items-center gap-3 px-6 py-3 bg-surface/20 border border-blue/20 rounded-full hover:bg-blue/5 hover:border-blue/40 transition-all duration-300 group"
          >
            <span className="text-sm text-subtext1 font-light group-hover:text-blue transition-colors">
              Check out more on my GitHub
            </span>
            <svg
              className="w-4 h-4 text-blue group-hover:scale-110 transition-transform duration-300"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
