
import { Github, Instagram, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-secondary py-12 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-gothic text-2xl">SP</h3>
            <p className="text-muted-foreground mt-2 text-sm">
              Creating digital experiences with elegance
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">
              <Github size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-foreground/70 hover:text-purple transition-colors duration-300">
              <Mail size={20} />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground">
          <p>© {currentYear} Shivam Panwar. All rights reserved.</p>
          <div className="mt-1 flex justify-center space-x-6">
            <button className="hover:text-foreground transition-colors duration-300">
              Privacy Policy
            </button>
            <button className="hover:text-foreground transition-colors duration-300">
              Terms of Service
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
