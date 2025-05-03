import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import { ChevronUp } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function Footer() {
  const year = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <footer className="bg-muted py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center mb-8">
          <motion.span 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-bold text-2xl gradient-text mb-4"
          >
            Portfolio
          </motion.span>
          
          <div className="flex space-x-4">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              asChild
            >
              <a 
                href={personalInfo.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              asChild
            >
              <a 
                href={personalInfo.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              asChild
            >
              <a 
                href={personalInfo.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Twitter"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
            </Button>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full" 
              asChild
            >
              <a 
                href={personalInfo.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="Instagram"
              >
                <FaInstagram className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
        
        <div className="border-t border-border pt-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {year} {personalInfo.name}. Todos los derechos reservados.
          </p>
          
          <div className="mt-4 sm:mt-0">
            <Button 
              variant="ghost" 
              size="icon" 
              className="rounded-full h-10 w-10" 
              onClick={scrollToTop}
            >
              <ChevronUp className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
