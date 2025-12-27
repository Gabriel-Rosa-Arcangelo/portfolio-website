import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        <span className="text-8xl font-display font-bold gradient-text">404</span>
        <h1 className="font-display text-2xl font-bold text-foreground mt-6 mb-4">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you're looking for doesn't exist.
        </p>
        <Link to="/">
          <Button className="gap-2">
            <Home className="w-4 h-4" />
            Go Home
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default NotFound;