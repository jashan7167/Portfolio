import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [indicatorStyle, setIndicatorStyle] = useState({ width: 0, left: 0 });
  const navRef = useRef<HTMLDivElement>(null);

  const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Experience", href: "#experience", id: "experience" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Contact", href: "#contact", id: "contact" },
  ];

  // Update indicator position when active section changes
  useEffect(() => {
    const updateIndicator = () => {
      if (navRef.current) {
        const activeButton = navRef.current.querySelector(
          `[data-section="${activeSection}"]`
        ) as HTMLElement;
        if (activeButton) {
          const navRect = navRef.current.getBoundingClientRect();
          const buttonRect = activeButton.getBoundingClientRect();

          setIndicatorStyle({
            width: buttonRect.width - 16, // Slightly smaller than button width
            left: buttonRect.left - navRect.left + 8, // Center the line
          });
        }
      }
    };

    // Small delay to ensure DOM is updated
    const timer = setTimeout(updateIndicator, 50);
    return () => clearTimeout(timer);
  }, [activeSection]);

  // Scroll detection with throttling for better performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setIsScrolled(window.scrollY > 20);

          // Section detection with proper offset for fixed navbar
          const sections = navItems
            .map((item) => document.getElementById(item.id))
            .filter(Boolean);
          const scrollPosition = window.scrollY + 100;

          for (let i = sections.length - 1; i >= 0; i--) {
            const section = sections[i];
            if (section && section.offsetTop <= scrollPosition) {
              setActiveSection(navItems[i].id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (_href: string, sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, ease: "easeOut" }}
        className={`
          fixed top-0 left-0 right-0 z-50 transition-all duration-300 will-change-transform
          ${
            isScrolled
              ? "bg-base/95 backdrop-blur-md border-b border-surface/30 shadow-lg shadow-base/20"
              : "bg-base/90 backdrop-blur-sm"
          }
        `}
      >
        <div className="max-w-7.5xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-15">
            {/* Logo/Name */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="cursor-pointer"
              onClick={() => handleNavClick("#home", "home")}
            >
              <h1 className="text-xl sm:text-2xl font-display font-medium bg-gradient-to-r from-lavender to-mauve bg-clip-text text-transparent">
                Jashanjot
              </h1>
            </motion.div>

            {/* Desktop Navigation with Sliding Underline */}
            <div className="hidden md:flex items-center relative" ref={navRef}>
              {/* Navigation Items */}
              <div className="flex items-center space-x-1 relative">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    data-section={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    className={`
                      relative px-4 py-2 text-sm font-medium transition-all duration-200
                      ${
                        activeSection === item.id
                          ? "text-lavender"
                          : "text-subtext1 hover:text-text"
                      }
                    `}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Sliding Underline Indicator */}
                <motion.div
                  className="absolute bottom-0 h-0.5 bg-gradient-to-r from-mauve via-lavender to-blue rounded-full shadow-lg shadow-lavender/30"
                  initial={false}
                  animate={{
                    width: indicatorStyle.width,
                    x: indicatorStyle.left,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,
                  }}
                  style={{
                    filter: "drop-shadow(0 0 8px rgba(180, 190, 254, 0.4))",
                  }}
                />
              </div>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-subtext1 hover:text-text transition-colors z-60"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-0.5"
                      : "-translate-y-1"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-200 ${
                    isMobileMenuOpen
                      ? "-rotate-45 -translate-y-0.5"
                      : "translate-y-1"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-base/80 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
              className="fixed top-20 right-0 w-72 h-[calc(100vh-5rem)] bg-base/95 backdrop-blur-md border-l border-surface/30 z-50 md:hidden"
            >
              <div className="p-6 space-y-3 relative">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleNavClick(item.href, item.id)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                    className={`
                      w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 relative overflow-hidden
                      ${
                        activeSection === item.id
                          ? "text-lavender bg-surface/10 border-l-2 border-lavender"
                          : "text-subtext1 hover:text-text hover:bg-surface/10"
                      }
                    `}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
