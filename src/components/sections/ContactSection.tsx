
import { FadeIn, ContactForm } from '@/components';
import { Mail } from 'lucide-react';

const ContactSection = () => {
  return (
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
  );
};

export default ContactSection;
