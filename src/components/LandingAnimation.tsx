import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LandingAnimation = () => {
  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-secondary flex items-center justify-center z-50"
    >
      <div className="max-w-2xl mx-auto px-4">
        <motion.h1 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold text-primary text-center mb-6"
        >
          Find Care Near You
        </motion.h1>
        <motion.h2 
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="text-4xl md:text-6xl font-bold text-primary text-center mb-6"
        >
          The care they <span className="italic">need.</span>
          <br />
          The home they <span className="italic">love.</span>
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="text-lg text-gray-600 text-center mb-8"
        >
          Home Instead provides safe and consistent care for your loved ones in their own home, where we both know they're most comfortable.
        </motion.p>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          className="flex gap-4 max-w-md mx-auto"
        >
          <Input placeholder="Enter your location" className="flex-1" />
          <Button className="bg-accent hover:bg-accent/90">Find Care</Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default LandingAnimation;