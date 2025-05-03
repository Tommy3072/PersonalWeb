import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";

interface ProjectCardProps {
  project: {
    id: number;
    title: string;
    description: string;
    image: string;
    tags: string[];
    liveUrl?: string;
    repoUrl?: string;
  };
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -5 }}
      className="h-full"
    >
      <Card className="h-full flex flex-col overflow-hidden border-2 hover:border-primary/50 transition-colors">
        <div className="relative h-48 overflow-hidden">
          <div 
            className="w-full h-full bg-center bg-cover" 
            style={{ backgroundImage: `url(${project.image})` }}
          />
        </div>

        <CardHeader>
          <CardTitle>{project.title}</CardTitle>
          <div className="flex flex-wrap gap-1 mt-2">
            {project.tags.map((tag, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
        </CardHeader>

        <CardContent className="flex-grow">
          <CardDescription className="text-sm">
            {project.description}
          </CardDescription>
        </CardContent>

        <CardFooter className="flex gap-2 pt-2">
          {project.liveUrl && (
            <Button asChild variant="default" size="sm">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="mr-2 h-4 w-4" />
                Ver Proyecto
              </a>
            </Button>
          )}
          
          {project.repoUrl && (
            <Button asChild variant="outline" size="sm">
              <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" />
                Código
              </a>
            </Button>
          )}
        </CardFooter>
      </Card>
    </motion.div>
  );
}
