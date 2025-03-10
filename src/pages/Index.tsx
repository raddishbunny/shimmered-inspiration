
import { useEffect, useState } from 'react';
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
  Zap 
} from 'lucide-react';
import { 
  Cursor, 
  FadeIn, 
  FloatingLetters,
  Footer, 
  Navbar, 
  ProjectCard, 
  RevealText, 
  SkillCard, 
  SplitText,
  ContactForm 
} from '@/components';

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
  const [animateText, setAnimateText] = useState(false);
  const [showProfilPic, setShowProfilePic] = useState(false);

  useEffect(() => {
    // Trigger text animation after a delay
    const timer = setTimeout(() => {
      setAnimateText(true);
    }, 800);
    
    // Show profile picture after floating text animation
    const profileTimer = setTimeout(() => {
      setShowProfilePic(true);
    }, 1500);

    return () => {
      clearTimeout(timer);
      clearTimeout(profileTimer);
    };
  }, []);

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
      <Navbar />
      
      {/* Hero Section */}
      <section id="home" className="h-screen relative flex items-center">
        <FloatingLetters text="REPUTATION" className="z-0" />
        
        <div className="container mx-auto px-4 md:px-8 z-10 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <RevealText delay={100} className="mb-2">
                <span className="text-sm uppercase tracking-widest font-semibold text-purple">
                  B.Tech Scholar | Developer | Innovator
                </span>
              </RevealText>
              
              <h1 className="heading-gothic mb-6 opacity-0 animate-float-in"
                style={{ animationDelay: '400ms' }}
              >
                Shivam Panwar
              </h1>
              
              <div className="text-xl md:text-2xl mb-8 overflow-hidden font-serif">
                {animateText && (
                  <SplitText 
                    text="Crafting elegant digital experiences with code and creativity." 
                    staggerDelay={40}
                  />
                )}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-8 opacity-0 animate-float-in"
                style={{ animationDelay: '1200ms' }}
              >
                <a href="#projects" className="button-primary">View Projects</a>
                <a href="#contact" className="button-secondary">Get In Touch</a>
              </div>
            </div>
            
            <div className="hidden lg:flex justify-center relative">
              <div className={`relative w-80 h-96 newspaper-overlay overflow-hidden rounded-lg transform ${showProfilPic ? 'opacity-100 scale-100' : 'opacity-0 scale-95'} transition-all duration-1000`}>
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
                  alt="Shivam Panwar" 
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 z-20 flex flex-col justify-between p-6">
                  <div>
                    <div className="font-serif uppercase tracking-wider text-white/90 text-sm">Developer</div>
                    <div className="font-serif uppercase tracking-wider text-white/90 text-sm mt-1">Innovator</div>
                  </div>
                  <div>
                    <div className="font-serif uppercase tracking-wider text-white/90 text-sm">Est. 2023</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center opacity-0 animate-float-in" 
          style={{ animationDelay: '2000ms' }}
        >
          <span className="text-xs uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-6 h-9 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-2 bg-purple rounded-full mt-1 animate-[bounce_1.5s_infinite]"></div>
          </div>
        </div>
      </section>
      
      {/* About Section */}
      <section id="about" className="section py-24">
        <div className="container mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="heading-serif mb-4">About Me</h2>
            <div className="w-20 h-1 bg-purple mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              A glimpse into who I am and what drives my passion for technology
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <FadeIn className="glass p-8 rounded-xl" delay={200}>
              <h3 className="font-serif text-2xl font-bold mb-6 text-gradient-purple">My Journey</h3>
              <p className="mb-4">
                As a dedicated B.Tech scholar, I've immersed myself in the world of technology and innovation. My academic journey has equipped me with a strong foundation in computer science principles, while my passion for creating has driven me to explore beyond the classroom.
              </p>
              <p className="mb-4">
                I specialize in building responsive web applications that balance form and function. My approach to development is centered around crafting clean, efficient code that delivers exceptional user experiences.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or brainstorming my next big idea.
              </p>
            </FadeIn>
            
            <FadeIn delay={400}>
              <div className="glass p-8 rounded-xl">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gradient-peach">Education & Expertise</h3>
                
                <div className="mb-6">
                  <h4 className="font-medium text-lg mb-2">B.Tech in Computer Science</h4>
                  <p className="text-sm text-muted-foreground">University Name • 2019 - 2023</p>
                </div>
                
                <div className="mb-6">
                  <h4 className="font-medium mb-2">Areas of Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">Web Development</span>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">UI/UX Design</span>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">Data Structures</span>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">Algorithms</span>
                    <span className="bg-secondary px-3 py-1 rounded-full text-sm">Database Design</span>
                  </div>
                </div>
                
                <button 
                  className="button-secondary" 
                  onClick={() => toast.success(getRandomQuote())}
                >
                  My Resume
                </button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="section py-24 bg-secondary/30">
        <div className="container mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="heading-serif mb-4">Projects</h2>
            <div className="w-20 h-1 bg-purple mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Showcasing my recent work and creative endeavors
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                index={index}
                {...project}
              />
            ))}
          </div>
          
          <FadeIn className="mt-12 text-center" delay={600}>
            <a href="#" className="button-secondary">
              View All Projects
            </a>
          </FadeIn>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="section py-24">
        <div className="container mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="heading-serif mb-4">Skills</h2>
            <div className="w-20 h-1 bg-purple mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Technologies and tools I use to bring ideas to life
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {skills.map((skill, index) => (
              <SkillCard
                key={index}
                index={index}
                {...skill}
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="section py-24 bg-secondary/30">
        <div className="container mx-auto">
          <FadeIn className="mb-12 text-center">
            <h2 className="heading-serif mb-4">Contact</h2>
            <div className="w-20 h-1 bg-purple mx-auto mb-4"></div>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Let's connect and discuss how we can work together
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <FadeIn delay={200}>
              <div className="glass p-8 rounded-xl h-full flex flex-col justify-center">
                <h3 className="font-serif text-2xl font-bold mb-6 text-gradient-purple">Get In Touch</h3>
                <p className="mb-6">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center mr-4">
                      <Mail className="w-5 h-5 text-purple" />
                    </div>
                    <span>shivam.panwar@example.com</span>
                  </div>
                </div>
              </div>
            </FadeIn>
            
            <ContactForm />
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
