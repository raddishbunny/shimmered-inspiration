
import { FadeIn, SkillCard } from '@/components';
import { LucideIcon } from 'lucide-react';

interface Skill {
  title: string;
  icon: LucideIcon;
}

interface SkillsSectionProps {
  skills: Skill[];
}

const SkillsSection: React.FC<SkillsSectionProps> = ({ skills }) => {
  return (
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
  );
};

export default SkillsSection;
