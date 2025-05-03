import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  center?: boolean;
}

export function SectionTitle({ title, subtitle, center = false }: SectionTitleProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${center ? "text-center" : ""}`}
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-3 gradient-text">{title}</h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-gradient-to-r from-primary to-accent mt-4"></div>
    </motion.div>
  );
}
