import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "A sophisticated web application built with React and TypeScript that revolutionizes data visualization and user interaction through real-time updates and seamless authentication.",
    achievements: [
      "Implemented real-time data synchronization using WebSocket technology",
      "Developed a responsive dashboard with interactive charts and graphs",
      "Integrated secure user authentication with JWT and OAuth2.0",
      "Optimized application performance resulting in 40% faster load times"
    ],
    link: "https://project1.com",
  },
  {
    title: "Project Two",
    description: "A modern e-commerce platform that provides an intuitive shopping experience with advanced features like real-time inventory tracking and AI-powered recommendations.",
    achievements: [
      "Built a scalable microservices architecture using Node.js and Express",
      "Implemented secure payment processing with Stripe integration",
      "Created an admin dashboard for inventory management",
      "Developed a responsive mobile-first design"
    ],
    link: "https://project2.com",
  },
  {
    title: "Project Three",
    description: "An innovative social media analytics dashboard that processes and visualizes large-scale data to provide actionable insights for marketing teams.",
    achievements: [
      "Engineered data processing pipeline handling 1M+ daily events",
      "Implemented advanced data visualization using D3.js",
      "Developed RESTful API endpoints for data retrieval",
      "Integrated automated reporting system"
    ],
    link: "https://project3.com",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-5xl font-bold text-center mb-16 text-white animate-slide-up">
        PROJECTS
      </h1>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            achievements={project.achievements}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;