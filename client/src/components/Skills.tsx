import { SkillBadge } from "@/components/ui/skill-badge";
import { SectionTitle } from "@/components/ui/section-title";
import { motion } from "framer-motion";
import { skills } from "@/lib/data";

export default function Skills() {
  const categories = Object.keys(skills);
  
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mis Habilidades"
          subtitle="Tecnologías y herramientas con las que trabajo"
        />
        
        <div className="space-y-12">
          {categories.map((category, idx) => (
            <div key={category} className="space-y-6">
              <motion.h3
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-xl font-bold"
              >
                {category}
              </motion.h3>
              
              <div className="skill-grid">
                {skills[category].map((skill, index) => (
                  <SkillBadge 
                    key={skill.name} 
                    skill={skill} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
