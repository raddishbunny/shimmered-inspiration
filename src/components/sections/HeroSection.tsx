
import { useEffect, useState } from 'react';
import { RevealText, SplitText, FloatingLetters, ProfileUploader } from '@/components';

const HeroSection = () => {
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

  return (
    <section id="home" className="h-screen relative flex items-center">
      {/* Background Image with reduced opacity */}
      <div 
        className="absolute inset-0 z-0 opacity-30"
        style={{
          backgroundImage: 'url(/lovable-uploads/1f287637-3ba7-430e-947d-2b721c9f6477.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          mixBlendMode: 'overlay'
        }}
      ></div>
      
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
            {showProfilPic && <ProfileUploader />}
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
  );
};

export default HeroSection;
