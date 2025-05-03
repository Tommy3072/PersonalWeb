import { useState, useEffect } from "react";
import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Layout from "@/components/Layout";
import { AnimatePresence } from "framer-motion";

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Set page title
  useEffect(() => {
    document.title = "Portfolio Personal | Profesional";
  }, []);

  if (!mounted) return null;

  return (
    <TooltipProvider>
      <AnimatePresence>
        <Switch>
          <Route path="/" component={Layout} />
          <Route component={NotFound} />
        </Switch>
        <Toaster />
      </AnimatePresence>
    </TooltipProvider>
  );
}

export default App;
