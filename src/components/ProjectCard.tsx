import { ExternalLink } from "lucide-react";

interface ProjectCardProps {
  title: string;
  description: string;
  link: string;
}

const ProjectCard = ({ title, description, link }: ProjectCardProps) => {
  return (
    <div className="group backdrop-blur-sm bg-card p-6 rounded-lg shadow-lg transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl animate-fade-in">
      <h3 className="text-2xl font-bold mb-3 text-primary">{title}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
      >
        <span>View Project</span>
        <ExternalLink className="w-4 h-4" />
      </a>
    </div>
  );
};

export default ProjectCard;