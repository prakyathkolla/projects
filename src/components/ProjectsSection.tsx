import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Crypto Asset Tracker",
    description: "The Crypto Asset Tracker is a web application designed to provide users with comprehensive cryptocurrency market insights. This application allows users to monitor real-time data on the top cryptocurrencies, track historical price trends, and explore detailed market metrics for each asset. Whether you’re an investor, trader, or crypto enthusiast, this tool serves as a valuable resource for staying informed about the fast-paced world of digital currencies.",
    achievements: [
      "Implemented real-time data synchronization using WebSocket technology",
      "Developed a responsive dashboard with interactive charts and graphs",
      "Integrated secure user authentication with JWT and OAuth2.0",
      "Optimized application performance resulting in 40% faster load times"
    ],
    link: "https://crypto-asset-tracker.kollaprakyath.dev/",
  },
  {
    title: "Birthday Wisher",
    description: "A Birthday Wisher is typically a software application, tool, or script designed to automatically send birthday greetings to people. These greetings can be sent via various channels, such as email, social media platforms (like Facebook or Twitter), SMS, or messaging apps. The purpose of a Birthday Wisher is to help users remember and send timely birthday wishes to friends, family, colleagues, or customers, even if they are busy or forgetful.",
    achievements: [
      "Built a scalable microservices architecture using Node.js and Express",
      "Implemented secure payment processing with Stripe integration",
      "Created an admin dashboard for inventory management",
      "Developed a responsive mobile-first design"
    ],
    link: "https://birthdaywisher.kollaprakyath.dev/",
  },
  {
    title: "Kanban Board",
    description: "A Kanban board is a visual tool used in project management to visualize workflow, manage tasks, and improve productivity. It is commonly used in Agile methodologies but is versatile enough to be used in various contexts. Kanban boards are widely used in software development, manufacturing, marketing, and many other fields to manage both personal and team tasks. They can be physical boards with sticky notes or digital tools like Trello, Jira, or Microsoft Planner.",
    achievements: [
      "Engineered data processing pipeline handling 1M+ daily events",
      "Implemented advanced data visualization using D3.js",
      "Developed RESTful API endpoints for data retrieval",
      "Integrated automated reporting system"
    ],
    link: "https://kanbanboard.kollaprakyath.dev/",
  },
  {
    title: "Weather App",
    description: "A weather app is a software application or web service that provides users with weather-related information. These apps typically display current weather conditions, forecasts, and other weather data for a specific location or multiple locations. Weather apps are commonly used on smartphones, tablets, and computers, and they can vary in complexity from simple displays of temperature and conditions to detailed meteorological data.",
    achievements: [
      "Engineered data processing pipeline handling 1M+ daily events",
      "Implemented advanced data visualization using D3.js",
      "Developed RESTful API endpoints for data retrieval",
      "Integrated automated reporting system"
    ],
    link: "https://weatherapp.kollaprakyath.dev/",
  },
];

const ProjectsSection = () => {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 py-16">
      <h1 className="text-6xl font-extrabold text-center mb-16 text-[#E5DEFF] tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-[#9b87f5] to-[#D6BCFA] animate-slide-up font-sans">
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