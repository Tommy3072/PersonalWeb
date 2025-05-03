import { SectionTitle } from "@/components/ui/section-title";
import { ProjectCard } from "@/components/ui/project-card";
import { Button } from "@/components/ui/button";
import { projects } from "@/lib/data";

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding bg-muted/30">
      <div className="container mx-auto px-4">
        <SectionTitle
          title="Mi Portafolio"
          subtitle="Una selección de proyectos en los que he trabajado"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        
        {projects.length > 6 && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg">
              Ver más proyectos
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
