import { ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

interface ProjectCardProps {
  title: string;
  description: string;
  achievements: string[];
  link: string;
}

const ProjectCard = ({ title, description, achievements, link }: ProjectCardProps) => {
  return (
    <Card className="group backdrop-blur-sm bg-white/10 border-none transition-all duration-300 hover:transform hover:scale-[1.02] hover:shadow-xl animate-fade-in">
      <CardHeader>
        <CardTitle className="text-3xl font-bold bg-gradient-to-r from-[#803131] to-[#D6BCFA] bg-clip-text text-transparent font-sans tracking-tight">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-black/90">Description</h3>
          <p className="text-white/70">{description}</p>
        </div>
        
        <Separator className="bg-white/20" />
        
        <div>
          <h3 className="text-xl font-semibold mb-3 text-black/90">What I Have Done</h3>
          <ul className="list-disc list-inside space-y-2">
            {achievements.map((achievement, index) => (
              <li key={index} className="text-white/70">{achievement}</li>
            ))}
          </ul>
        </div>
        
        <Separator className="bg-white/20" />
        
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-[#87f5f5] hover:text-[#D6BCFA] transition-colors"
        >
          <span>View Project</span>
          <ExternalLink className="w-4 h-4" />
        </a>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;