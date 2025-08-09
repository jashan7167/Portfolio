import { motion } from "framer-motion";
import { useState } from "react";
import emailjs from "@emailjs/browser";

interface ContactProps {
  onNotification?: (
    title: string,
    message: string,
    type: "success" | "error" | "info" | "warning"
  ) => void;
}

const Contact = ({ onNotification }: ContactProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceID = "service_iodcq2l";
      const templateID = "template_s7mk4rs";
      const publicKey = "gvePvMmCkfDAeNYn8";

      // Create template parameters
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: "jashansingh9890@gmail.com",
      };

      // Send email using EmailJS
      await emailjs.send(serviceID, templateID, templateParams, publicKey);

      // Success notification
      onNotification?.(
        "Message Sent!",
        "Thanks for reaching out! I'll get back to you soon.",
        "success"
      );

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("EmailJS Error:", error);
      onNotification?.(
        "Error",
        "Failed to send message. Please try again or contact me directly.",
        "error"
      );
    } finally {
      setIsSubmitting(false);
    }
  };
  const contactMethods = [
    {
      icon: (
        <svg
          className="w-6 h-6 text-blue"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
      label: "Email",
      value: "jashansingh9890@gmail.com",
      href: "mailto:jashansingh9890@gmail.com",
      description: "Drop me a line",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-green"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      ),
      label: "GitHub",
      value: "jashan7167",
      href: "https://github.com/jashan7167",
      description: "Check out my code",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-sapphire"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
        </svg>
      ),
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/jashanbhatia",
      description: "Let's network",
    },
  ];

  return (
    <section id="contact" className="min-h-screen bg-base relative py-20">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(203,166,247,0.02)_1px,_transparent_0)] bg-[size:60px_60px]"></div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-display font-light text-lavender mb-4">
            Get In Touch
          </h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: "5rem" }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
            className="h-1 bg-gradient-to-r from-mauve to-pink rounded-full mx-auto"
          />
          <p className="text-subtext1 mt-6 max-w-2xl mx-auto leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just having a conversation about technology.
          </p>
        </motion.div>

        {/* Main content */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium text-blue">
                Send me a message
              </h3>
              <p className="text-lg text-subtext1 leading-relaxed font-light">
                Have a project in mind or just want to chat? Fill out the form
                below and I'll get back to you soon.
              </p>
            </div>

            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-subtext1 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-mantle/30 border border-surface1/30 rounded-xl text-text placeholder-subtext0 focus:border-blue/40 focus:outline-none transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-subtext1 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-mantle/30 border border-surface1/30 rounded-xl text-text placeholder-subtext0 focus:border-blue/40 focus:outline-none transition-colors"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-subtext1 mb-2"
                >
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-mantle/30 border border-surface1/30 rounded-xl text-text placeholder-subtext0 focus:border-blue/40 focus:outline-none transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-subtext1 mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-mantle/30 border border-surface1/30 rounded-xl text-text placeholder-subtext0 focus:border-blue/40 focus:outline-none transition-colors resize-none"
                  placeholder="Tell me about your project or just say hello..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  isSubmitting
                    ? "bg-surface/20 border border-surface1/30 text-subtext0 cursor-not-allowed"
                    : "bg-blue/10 border border-blue/20 text-blue hover:bg-blue/20 hover:border-blue/40"
                }`}
              >
                {isSubmitting ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-4 h-4 border-2 border-subtext0 border-t-transparent rounded-full animate-spin"></div>
                    Sending...
                  </div>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          </motion.div>

          {/* Right side - Contact methods */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-medium text-green">
                Other ways to connect
              </h3>
              <p className="text-lg text-subtext1 leading-relaxed font-light">
                Prefer a more direct approach? You can reach me through any of
                these platforms.
              </p>
            </div>

            {/* Quick stats or availability */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 p-4 bg-surface/20 border border-green/20 rounded-xl"
            >
              <div className="w-3 h-3 bg-green rounded-full animate-pulse"></div>
              <span className="text-sm text-subtext1 font-light">
                Send me something interesting
              </span>
            </motion.div>

            <div className="space-y-4">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.label !== "Email" ? "_blank" : undefined}
                  rel={
                    method.label !== "Email" ? "noopener noreferrer" : undefined
                  }
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02, y: -2 }}
                  className="block p-4 bg-mantle/30 backdrop-blur-sm border border-surface1/30 rounded-xl hover:border-lavender/20 transition-all duration-300 group"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-10 h-10 bg-surface/20 border border-surface1/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      {method.icon}
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-display font-medium text-lavender mb-1 group-hover:text-blue transition-colors text-sm">
                        {method.label}
                      </h4>
                      <p className="text-xs text-subtext1 font-light">
                        {method.description}
                      </p>
                    </div>
                    <div className="flex-shrink-0">
                      <svg
                        className="w-4 h-4 text-subtext0 group-hover:text-blue group-hover:translate-x-1 transition-all duration-300"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17 8l4 4m0 0l-4 4m4-4H3"
                        />
                      </svg>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
