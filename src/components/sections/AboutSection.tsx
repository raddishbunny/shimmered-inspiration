import { FadeIn, FloatingLetters } from '@/components';
import { toast } from 'sonner';

interface AboutSectionProps {
  getRandomQuote: () => string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ getRandomQuote }) => {
  return (
    <section id="about" className="section py-24 relative overflow-hidden">
      {/* Always active floating letters */}
      <FloatingLetters text="reputation" className="z-10 opacity-50" delay={0} duration={6000} />
      
      <div className="container mx-auto relative z-20">
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
  );
};

export default AboutSection;
