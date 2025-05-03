import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import { personalInfo } from "@/lib/data";
import profileImage from "../assets/profile.png";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      {/* Background gradient elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/20 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-accent/20 rounded-full blur-3xl -z-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0"
          >
            <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-primary/10 text-primary mb-4">
              {personalInfo.greeting}
            </span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              {personalInfo.name}
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-bold mb-6 gradient-text">
              {personalInfo.title}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              {personalInfo.summary}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <Button asChild size="lg" className="rounded-full px-8">
                <a href="#contact">Contactar</a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <a href="#portfolio">Ver Portafolio</a>
              </Button>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:w-1/2 flex justify-center"
          >
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 border-8 border-white dark:border-gray-800 rounded-full shadow-xl overflow-hidden">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${profileImage})`,
                }}
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-center"
        >
          <a 
            href="#about" 
            className="inline-flex flex-col items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            <span className="mb-2">Explorar</span>
            <ChevronDown className="h-5 w-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
