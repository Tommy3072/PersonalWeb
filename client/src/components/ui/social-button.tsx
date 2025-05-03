import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

interface SocialButtonProps {
  platform: string;
  url: string;
  icon: React.ReactNode;
}

export function SocialButton({ platform, url, icon }: SocialButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <motion.div
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <Button
              variant="outline"
              size="icon"
              className="rounded-full h-10 w-10"
              asChild
            >
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={platform}
              >
                {icon}
              </a>
            </Button>
          </motion.div>
        </TooltipTrigger>
        <TooltipContent>
          <p>{platform}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
