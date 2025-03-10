
import { FadeIn } from '@/components';
import { LucideIcon } from 'lucide-react';

interface SkillCardProps {
  icon: LucideIcon;
  title: string;
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ icon: Icon, title, index }) => {
  return (
    <FadeIn delay={index * 100} className="skill-item">
      <div className="p-4 mb-3 rounded-full bg-secondary text-purple">
        <Icon size={24} />
      </div>
      <h3 className="text-sm font-medium">{title}</h3>
    </FadeIn>
  );
};

export default SkillCard;
