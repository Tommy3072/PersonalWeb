import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  skill: {
    name: string;
    icon: string;
    level?: number;
  };
  className?: string;
}

export function SkillBadge({ skill, className }: SkillBadgeProps) {
  const levelColors = [
    "bg-red-200 dark:bg-red-800",
    "bg-orange-200 dark:bg-orange-800",
    "bg-yellow-200 dark:bg-yellow-800", 
    "bg-green-200 dark:bg-green-800",
    "bg-blue-200 dark:bg-blue-800"
  ];

  return (
    <motion.div 
      whileHover={{ y: -5 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      className={cn(
        "bg-secondary p-4 rounded-lg shadow-sm flex flex-col items-center justify-center hover:shadow-md transition-all",
        className
      )}
    >
      <div className="text-3xl mb-2" dangerouslySetInnerHTML={{ __html: skill.icon }} />
      <p className="font-medium text-center">{skill.name}</p>
      
      {skill.level && (
        <div className="w-full mt-2 bg-gray-200 dark:bg-gray-700 rounded-full h-1.5">
          <div 
            className={`h-1.5 rounded-full ${levelColors[skill.level - 1]}`} 
            style={{ width: `${skill.level * 20}%` }} 
          />
        </div>
      )}
    </motion.div>
  );
}
