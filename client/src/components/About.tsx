import { motion } from "framer-motion";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { PersonStanding, MailIcon, PhoneIcon, MapPinIcon, GraduationCapIcon, BriefcaseIcon } from "lucide-react";
import { personalInfo } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle 
          title="Sobre Mí" 
          subtitle="Un poco más acerca de mi experiencia y quién soy"
        />
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-xl">
              <div 
                className="w-full h-full bg-cover bg-center"
                style={{
                  backgroundImage: `url(${personalInfo.aboutImage})`,
                }}
              />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h3 className="text-2xl font-bold">{personalInfo.aboutTitle}</h3>
            
            <div className="space-y-4 text-muted-foreground">
              {personalInfo.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="flex items-center">
                <PersonStanding className="h-5 w-5 text-primary mr-2" />
                <span>Nombre: <span className="font-medium text-foreground">{personalInfo.name}</span></span>
              </div>

              <div className="flex items-center">
                <MailIcon className="h-5 w-5 text-primary mr-2" />
                <span>Email: <a href={`mailto:${personalInfo.email}`} className="font-medium text-foreground hover:text-primary">{personalInfo.email}</a></span>
              </div>

              <div className="flex items-center">
                <PhoneIcon className="h-5 w-5 text-primary mr-2" />
                <span>Teléfono: <span className="font-medium text-foreground">{personalInfo.phone}</span></span>
              </div>

              <div className="flex items-center">
                <MapPinIcon className="h-5 w-5 text-primary mr-2" />
                <span>Ubicación: <span className="font-medium text-foreground">{personalInfo.location}</span></span>
              </div>

              <div className="flex items-center">
                <GraduationCapIcon className="h-5 w-5 text-primary mr-2" />
                <span>Educación: <span className="font-medium text-foreground">{personalInfo.education}</span></span>
              </div>

              <div className="flex items-center">
                <BriefcaseIcon className="h-5 w-5 text-primary mr-2" />
                <span>Experiencia: <span className="font-medium text-foreground">{personalInfo.experience}</span></span>
              </div>
            </div>
            
            <div className="pt-4">
              <Button asChild size="lg" className="rounded-md">
                <a href="#" download="CV.pdf">Descargar CV</a>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
