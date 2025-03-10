
import { FadeIn } from '@/components';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  liveUrl?: string;
  githubUrl?: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  tags,
  image,
  liveUrl,
  githubUrl,
  index
}) => {
  return (
    <FadeIn 
      delay={index * 200} 
      className="card-project group"
    >
      <div className="overflow-hidden rounded-lg h-52 md:h-64 newspaper-overlay">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {githubUrl && (
              <a 
                href={githubUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/70 p-2 rounded-full hover:bg-background transition-colors duration-300"
              >
                <Github className="text-foreground w-5 h-5" />
              </a>
            )}
            {liveUrl && (
              <a 
                href={liveUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-background/70 p-2 rounded-full hover:bg-background transition-colors duration-300"
              >
                <ExternalLink className="text-foreground w-5 h-5" />
              </a>
            )}
          </div>
        </div>
      </div>
      <div className="mt-4">
        <h3 className="font-serif text-xl font-bold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, i) => (
            <span 
              key={i} 
              className="text-xs font-medium bg-secondary px-2 py-1 rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </FadeIn>
  );
};

export default ProjectCard;
