import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { id: "home", label: "Home", href: "#home" },
    { id: "about", label: "About", href: "#about" },
    { id: "skills", label: "Skills", href: "#skills" },
    { id: "experience", label: "Experience", href: "#experience" },
    { id: "projects", label: "Projects", href: "#projects" },
    { id: "contact", label: "Contact", href: "#contact" },
  ];

  // Handle scroll effects and active section detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Get all sections
      const sections = navItems
        .map((item) => ({
          id: item.id,
          element: document.querySelector(item.href) as HTMLElement,
        }))
        .filter((section) => section.element);

      // Find which section is currently in view
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element) {
          const sectionTop = section.element.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    // Initial call to set active section
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string, id: string) => {
    setActiveSection(id);
    document.querySelector(href)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`
        fixed top-0 left-0 right-0 z-50 transition-all duration-300
        ${
          isScrolled
            ? "bg-base/80 backdrop-blur-md border-b border-surface/50 shadow-lg shadow-black/5"
            : "bg-transparent"
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="cursor-pointer"
            onClick={() => handleNavClick("#home", "home")}
          >
            <h1 className="text-xl font-display font-medium bg-gradient-to-r from-lavender to-mauve bg-clip-text text-transparent">
              Jashanjot
            </h1>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <motion.button
                key={item.id}
                onClick={() => handleNavClick(item.href, item.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`
                  relative px-4 py-2 rounded-xl font-medium text-sm transition-all duration-300
                  ${
                    activeSection === item.id
                      ? "text-blue"
                      : "text-subtext1 hover:text-text"
                  }
                `}
              >
                {activeSection === item.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-blue/10 border border-blue/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </motion.button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <MobileMenu
              navItems={navItems}
              onNavClick={handleNavClick}
              activeSection={activeSection}
            />
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

// Mobile Menu Component
interface MobileMenuProps {
  navItems: Array<{ id: string; label: string; href: string }>;
  onNavClick: (href: string, id: string) => void;
  activeSection: string;
}

const MobileMenu = ({
  navItems,
  onNavClick,
  activeSection,
}: MobileMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleMobileNavClick = (href: string, id: string) => {
    onNavClick(href, id);
    setIsOpen(false);
  };

  return (
    <>
      {/* Hamburger Button */}
      <motion.button
        whileTap={{ scale: 0.95 }}
        onClick={toggleMenu}
        className="p-2 text-subtext1 hover:text-text transition-colors"
      >
        <motion.div
          animate={isOpen ? "open" : "closed"}
          className="w-6 h-6 relative"
        >
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: 45, y: 6 },
            }}
            className="absolute h-0.5 w-6 bg-current transform origin-center transition-all duration-300"
          />
          <motion.span
            variants={{
              closed: { opacity: 1 },
              open: { opacity: 0 },
            }}
            className="absolute h-0.5 w-6 bg-current transform top-2 transition-all duration-300"
          />
          <motion.span
            variants={{
              closed: { rotate: 0, y: 0 },
              open: { rotate: -45, y: -6 },
            }}
            className="absolute h-0.5 w-6 bg-current transform top-4 origin-center transition-all duration-300"
          />
        </motion.div>
      </motion.button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
          />

          {/* Menu Panel */}
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="fixed top-0 right-0 h-full w-80 bg-base/95 backdrop-blur-md border-l border-surface/50 shadow-2xl z-50"
          >
            <div className="p-6 space-y-6">
              {/* Close Button */}
              <div className="flex justify-end">
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 text-subtext1 hover:text-text transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item) => (
                  <motion.button
                    key={item.id}
                    onClick={() => handleMobileNavClick(item.href, item.id)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.98 }}
                    className={`
                      w-full text-left px-4 py-3 rounded-xl font-medium transition-all duration-300
                      ${
                        activeSection === item.id
                          ? "text-blue bg-blue/10 border border-blue/20"
                          : "text-subtext1 hover:text-text hover:bg-surface/30"
                      }
                    `}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </>
      )}
    </>
  );
};

export default Navbar;
