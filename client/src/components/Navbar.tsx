import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";

interface NavbarProps {
  scrollPosition: number;
}

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Sobre mí", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Portafolio", href: "#portfolio" },
  { name: "Contacto", href: "#contact" },
];

export default function Navbar({ scrollPosition }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scroll behavior for navbar appearance
  useEffect(() => {
    setIsScrolled(scrollPosition > 50);
  }, [scrollPosition]);

  // Determine active section based on scroll position
  useEffect(() => {
    const sections = navLinks.map((link) => link.href.substring(1));
    
    const checkActiveSection = () => {
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("home");
    };

    window.addEventListener("scroll", checkActiveSection);
    return () => {
      window.removeEventListener("scroll", checkActiveSection);
    };
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-lg shadow-sm py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="container mx-auto px-4 flex items-center justify-between">
          <motion.a
            href="#home"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <span className="font-bold text-2xl gradient-text">Portfolio</span>
          </motion.a>

          {/* Desktop Navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-1">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <a
                    href={link.href}
                    className={`px-4 py-2 rounded-md text-sm font-medium transition-colors relative ${
                      activeSection === link.href.substring(1)
                        ? "text-primary"
                        : "text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary"
                    }`}
                  >
                    {link.name}
                    {activeSection === link.href.substring(1) && (
                      <motion.div
                        layoutId="activeSection"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                        initial={false}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          {/* CV Download Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden md:block"
          >
            <Button asChild size="sm">
              <a href="#" download="CV.pdf">
                Descargar CV
              </a>
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              
              <SheetContent side="right" className="w-[280px] sm:w-[350px]">
                <div className="flex flex-col h-full">
                  <div className="flex justify-between items-center mb-8">
                    <span className="font-bold text-xl gradient-text">Portfolio</span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(false)}>
                      <X className="h-5 w-5" />
                    </Button>
                  </div>
                  
                  <nav className="flex-grow">
                    <ul className="space-y-3">
                      {navLinks.map((link) => (
                        <li key={link.name}>
                          <a
                            href={link.href}
                            className={`block px-4 py-2 rounded-md text-lg font-medium transition-colors ${
                              activeSection === link.href.substring(1)
                                ? "text-primary bg-primary/10"
                                : "hover:bg-gray-100 dark:hover:bg-gray-800"
                            }`}
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {link.name}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                  
                  <div className="mt-8 mb-4">
                    <Button asChild className="w-full">
                      <a href="#" download="CV.pdf">
                        Descargar CV
                      </a>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>
    </>
  );
}
