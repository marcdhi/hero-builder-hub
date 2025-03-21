
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Bot } from 'lucide-react';
import RegisterButton from '@/components/RegisterButton';
import BackgroundEffect from '@/components/BackgroundEffect';
import { SplineSceneBasic } from '@/components/ui/spline-demo';
import TracksCard from '@/components/TracksCard';
import PrizesCard from '@/components/PrizesCard';
import TimelineCard from '@/components/TimelineCard';
import TeamSizeCard from '@/components/TeamSizeCard';

const Index = () => {
  const formUrl = "https://autonomous-builders-unidao.devfolio.co/"; // Updated to Devfolio URL
  
  return (
    <div className="min-h-screen flex flex-col h-full bg-black overflow-hidden">
      <BackgroundEffect />
      
      <main className="relative z-10 px-4 md:px-8 lg:px-16 py-12 md:py-16 mx-auto w-full max-w-6xl flex flex-col items-center min-h-screen">
        <div className="w-full">
          {/* Main content section with Spline */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-16">
            {/* Left column - Text content */}
            <div className="flex flex-col">
              {/* Status chip */}
              <motion.div 
                className="inline-flex items-center gap-2 rounded-full border border-neutral-700 bg-black/70 backdrop-blur-sm px-4 py-1.5 mb-8 self-start"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <span className="size-2 rounded-full bg-hackathon-green animate-pulse"></span>
                <span className="text-sm font-medium text-white">Applications Open</span>
              </motion.div>

              {/* Main heading */}
              <motion.h1 
                className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-50 to-neutral-300">Autonomous</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">Builders</span>{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-300 to-neutral-500">Hack</span>
              </motion.h1>

              {/* Subheading */}
              <motion.p 
                className="mt-6 text-lg md:text-xl text-neutral-400"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                Bring your AI to life with blockchain technology. Create immersive
                autonomous agents that interact with Web3.
              </motion.p>
              
              {/* CTA button */}
              <motion.div 
                className="mt-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <RegisterButton formUrl={formUrl} className="text-lg" />
              </motion.div>
            </div>
            
            {/* Right column - Spline Scene */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <SplineSceneBasic />
            </motion.div>
          </div>

          {/* Features section */}
          <motion.div 
            className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
              <Code className="h-8 w-8 text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Web3 Tech</h3>
              <p className="text-neutral-500 text-sm">Build with cutting-edge blockchain tools</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
              <Bot className="h-8 w-8 text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">AI Agents</h3>
              <p className="text-neutral-500 text-sm">Create autonomous systems that think and act</p>
            </div>
            
            <div className="flex flex-col items-center text-center p-6 rounded-lg bg-black/60 border border-neutral-800 backdrop-blur-sm">
              <Zap className="h-8 w-8 text-neutral-400 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">₹30,000 Prize</h3>
              <p className="text-neutral-500 text-sm">Win across multiple tracks and categories</p>
            </div>
          </motion.div>
        
          {/* Cards Grid - Updated with improved styling */}
          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {/* Modify each card component to match monochromatic theme */}
            <div className="group relative transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/30 to-neutral-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <TracksCard />
            </div>
            
            <div className="group relative transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/30 to-neutral-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <PrizesCard />
            </div>
            
            <div className="group relative transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/30 to-neutral-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <TimelineCard />
            </div>
            
            <div className="group relative transition-all duration-300 hover:-translate-y-1 lg:col-span-2">
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-700/30 to-neutral-900/30 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <TeamSizeCard />
            </div>
          </motion.div>

          {/* Organizers */}
          <motion.div 
            className="mt-16 flex items-center justify-center gap-2 text-neutral-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <span className="text-sm">Organized by</span>
            <span className="text-sm font-medium text-neutral-300">UniDAO-NITK</span>
            <span className="text-xs mx-2">×</span>
            <span className="text-sm font-medium text-neutral-300">HackClub-NITK</span>
          </motion.div>

          {/* Footer */}
          <motion.div 
            className="mt-8 text-sm text-neutral-600 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.4 }}
          >
            <div className="flex items-center justify-center gap-2">
              <span>© 2025 Autonomous Builders Hack</span>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Index;
