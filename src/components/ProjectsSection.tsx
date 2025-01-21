import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Crypto Asset Tracker",
    description: "The Crypto Asset Tracker is a web application designed to provide users with comprehensive cryptocurrency market insights. This application allows users to monitor real-time data on the top cryptocurrencies, track historical price trends, and explore detailed market metrics for each asset. Whether you’re an investor, trader, or crypto enthusiast, this tool serves as a valuable resource for staying informed about the fast-paced world of digital currencies.",
    achievements: [
"Developed a real-time cryptocurrency tracking application using React and TypeScript.",
"Integrated CoinCap API to fetch and display live data for the top 50 cryptocurrencies by market capitalization.",
"Implemented interactive price charts with historical data using Recharts for enhanced data visualization.",
"Ensured full responsiveness across various devices, providing a seamless experience for both desktop and mobile users.",
"Optimized development workflow with Vite for fast build times and efficient module bundling.",
"Utilized Tailwind CSS for streamlined and consistent styling throughout the application.",
"Employed React Query for efficient data fetching and caching, improving application performance and user experience.",
"Configured React Router for smooth navigation between different sections of the application.",
"Managed project version control using Git and hosted the repository on GitHub, facilitating collaboration and code management."
    ],
    link: "https://crypto-asset-tracker.kollaprakyath.dev/",
  },
  {
    title: "Birthday Wisher",
    description: "A Birthday Wisher is typically a software application, tool, or script designed to automatically send birthday greetings to people. These greetings can be sent via various channels, such as email, social media platforms (like Facebook or Twitter), SMS, or messaging apps. The purpose of a Birthday Wisher is to help users remember and send timely birthday wishes to friends, family, colleagues, or customers, even if they are busy or forgetful.",
    achievements: [
"Developed a dynamic birthday wisher application using React Hooks, enabling users to generate personalized birthday messages with countdown timers.",
"Implemented a user-friendly interface that allows input of name and birthdate, generating unique links for each birthday wish.",
"Ensured full responsiveness across various devices, providing an optimal user experience on both desktop and mobile platforms.",
"Deployed the application on Vercel, facilitating seamless access and performance.",
"Managed project version control using Git and hosted the repository on GitHub, demonstrating effective collaboration and code management skills."
    ],
    link: "https://birthdaywisher.kollaprakyath.dev/",
  },
  {
    title: "Kanban Board",
    description: "A Kanban board is a visual tool used in project management to visualize workflow, manage tasks, and improve productivity. It is commonly used in Agile methodologies but is versatile enough to be used in various contexts. Kanban boards are widely used in software development, manufacturing, marketing, and many other fields to manage both personal and team tasks. They can be physical boards with sticky notes or digital tools like Trello, Jira, or Microsoft Planner.",
    achievements: [
"Developed a dynamic Kanban board application with drag-and-drop functionality, enabling efficient task management and workflow visualization.",
"Implemented CRUD operations for tasks, labels, and columns, allowing users to create, read, update, and delete items seamlessly.",
"Designed and integrated a dark mode feature, enhancing user experience by providing a customizable interface.",
"Utilized modern web technologies, including React and JavaScript, to build a responsive and interactive user interface.",
"Deployed the application using Vercel, ensuring high availability and performance for end-users.",
"Managed project version control with Git and hosted the repository on GitHub, facilitating collaboration and code transparency."
    ],
    link: "https://kanbanboard.kollaprakyath.dev/",
  },
  {
    title: "Weather App",
    description: "A weather app is a software application or web service that provides users with weather-related information. These apps typically display current weather conditions, forecasts, and other weather data for a specific location or multiple locations. Weather apps are commonly used on smartphones, tablets, and computers, and they can vary in complexity from simple displays of temperature and conditions to detailed meteorological data.",
    achievements: [
      "Developed a Progressive Web Application (PWA) for tracking atmospheric conditions of any country or city, providing users with up to 5-day weather forecasts at 3-hour intervals.",
"Implemented offline functionality, allowing users to access weather information even without an internet connection.",
"Integrated the OpenWeatherMap API to fetch real-time weather data, enhancing the application's reliability and accuracy.",
"Designed a responsive user interface using React JS and Bootstrap, ensuring cross-platform compatibility and an optimal user experience on both desktop and mobile devices.",
"Deployed the application on Vercel, facilitating seamless access and performance for end-users.",
"Managed project version control using Git and hosted the repository on GitHub, demonstrating effective collaboration and code management skills."
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