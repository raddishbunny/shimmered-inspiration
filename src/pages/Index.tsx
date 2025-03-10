
import { useState } from 'react';
import { 
  Code, 
  Database, 
  FileCode, 
  Globe,
  Laptop, 
  Palette, 
  Server, 
  Smartphone,
  TerminalSquare, 
  Zap,
  Mail 
} from 'lucide-react';
import { 
  Cursor,
  Footer, 
  Navbar, 
  Snake
} from '@/components';
import {
  HeroSection,
  AboutSection,
  ProjectsSection,
  SkillsSection,
  ContactSection
} from '@/components/sections';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce platform with seamless checkout experience",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Task Management App",
    description: "A productivity app for managing tasks and projects efficiently",
    tags: ["React", "Firebase", "Tailwind CSS"],
    image: "https://images.unsplash.com/photo-1540349086487-a1a6a6b0811b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "#"
  },
  {
    title: "Weather Dashboard",
    description: "Real-time weather forecast application with interactive maps",
    tags: ["React", "OpenWeather API", "Leaflet"],
    image: "https://images.unsplash.com/photo-1527482797697-8795b05a13fe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "#",
    liveUrl: "#"
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website with modern UI/UX design",
    tags: ["React", "Framer Motion", "Three.js"],
    image: "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    githubUrl: "#",
    liveUrl: "#"
  }
];

const skills = [
  { title: "JavaScript", icon: FileCode },
  { title: "React", icon: Code },
  { title: "Node.js", icon: Server },
  { title: "Python", icon: TerminalSquare },
  { title: "UI/UX Design", icon: Palette },
  { title: "MongoDB", icon: Database },
  { title: "Responsive Web", icon: Smartphone },
  { title: "Tailwind CSS", icon: Laptop },
  { title: "REST APIs", icon: Zap },
  { title: "Web Performance", icon: Globe }
];

const Index = () => {
  // Easter egg quotes
  const easterEggQuotes = [
    "Are you ready for it?",
    "Big reputation, big reputation",
    "I did something bad",
    "Look what you made me do",
    "Call it what you want"
  ];

  // Function to get random quote
  const getRandomQuote = () => {
    return easterEggQuotes[Math.floor(Math.random() * easterEggQuotes.length)];
  };

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Cursor />
      <Snake />
      <Navbar />
      
      <HeroSection />
      <AboutSection getRandomQuote={getRandomQuote} />
      <ProjectsSection projects={projects} />
      <SkillsSection skills={skills} />
      <ContactSection />
      
      <Footer />
    </div>
  );
};

export default Index;
