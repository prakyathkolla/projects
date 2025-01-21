import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A beautiful web application built with React and TypeScript, featuring real-time data visualization and user authentication.",
    link: "https://project1.com",
  },
  {
    title: "Project Two",
    description: "An e-commerce platform with a modern UI, shopping cart functionality, and secure payment integration.",
    link: "https://project2.com",
  },
  {
    title: "Project Three",
    description: "A responsive social media dashboard with analytics, built using modern web technologies.",
    link: "https://project3.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-16 text-primary animate-slide-up">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;