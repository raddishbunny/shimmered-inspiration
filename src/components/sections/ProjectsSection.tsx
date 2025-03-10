
import { FadeIn, ProjectCard } from '@/components';

interface Project {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl: string;
  liveUrl?: string;
}

interface ProjectsSectionProps {
  projects: Project[];
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects }) => {
  return (
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
  );
};

export default ProjectsSection;
