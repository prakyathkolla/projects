// import ProjectCard from "./ProjectCard";

interface ProjectCardProps {
  title: string;
  description: string;
  achievements: string[];
  link: string;
  media?: string[]; // Make media optional
}

const projects = [
  {
    title: "Crypto Asset Tracker",
    description:
      "The Crypto Asset Tracker is a web application designed to provide users with comprehensive cryptocurrency market insights. This application allows users to monitor real-time data on the top cryptocurrencies, track historical price trends, and explore detailed market metrics for each asset. Whether you’re an investor, trader, or crypto enthusiast, this tool serves as a valuable resource for staying informed about the fast-paced world of digital currencies.",
    achievements: [
      "Developed a real-time cryptocurrency tracking application using React and TypeScript.",
      "Integrated CoinCap API to fetch and display live data for the top 50 cryptocurrencies by market capitalization.",
      "Implemented interactive price charts with historical data using Recharts for enhanced data visualization.",
      "Ensured full responsiveness across various devices, providing a seamless experience for both desktop and mobile users.",
      "Optimized development workflow with Vite for fast build times and efficient module bundling.",
      "Utilized Tailwind CSS for streamlined and consistent styling throughout the application.",
      "Employed React Query for efficient data fetching and caching, improving application performance and user experience.",
      "Configured React Router for smooth navigation between different sections of the application.",
      "Managed project version control using Git and hosted the repository on GitHub, facilitating collaboration and code management.",
      "Deployed the application on Vercel and configured DNS settings to host it on my personal website, ensuring easy accessibility and professional presentation.",
    ],
    link: "https://crypto-asset-tracker.kollaprakyath.dev/",
  },
  {
    title: "Birthday Mailer",
    description:
      "A Birthday Wisher is typically a software application, designed to automatically send birthday greetings to people. These greetings will be sent through email. The purpose of a Birthday Wisher is to help users remember and send timely birthday wishes to friends, family, colleagues, or customers, even if they are busy or forgetful.",
    achievements: [
      "Developed an automated birthday emailer application using React and Supabase, enabling users to send personalized birthday greetings efficiently.",
      "Implemented authentication using Gmail, allowing secure login and email sending via OAuth for enhanced security and reliability.",
      "Integrated the application with SendGrid API to automate birthday email delivery, ensuring reliable and scalable email distribution.",
      "Designed a user-friendly interface that enables users to input recipient details, schedule emails, and customize messages, ensuring a seamless experience.",
      "Ensured full responsiveness across various devices, providing an optimal user experience on both desktop and mobile platforms.",
      "Deployed the application on Vercel and configured DNS settings to host it on my personal website, ensuring easy accessibility and professional presentation.",
      "Managed project version control using Git and hosted the repository on GitHub, demonstrating effective collaboration and code management skills.",
    ],
    link: "https://birthday-emailer.kollaprakyath.dev",
  },
  {
    title: "Task Board",
    description:
      "A Task board is a visual tool used in project management to visualize workflow, manage tasks, and improve productivity. It is commonly used in Agile methodologies but is versatile enough to be used in various contexts. Kanban boards are widely used in software development, manufacturing, marketing, and many other fields to manage both personal and team tasks. They can be physical boards with sticky notes or digital tools like Trello, Jira, or Microsoft Planner.",
    achievements: [
      "Developed a dynamic Kanban board application with drag-and-drop functionality, enabling efficient task management and workflow visualization.",
      "Implemented CRUD operations for tasks, labels, and columns, allowing users to create, read, update, and delete items seamlessly.",
      "Designed and integrated a dark mode feature, enhancing user experience by providing a customizable interface.",
      "Added user management and navigation functionality, enabling users to switch between different boards and manage their tasks efficiently.",
      "Enhanced task details by allowing users to add a title, description, and priority levels, improving task organization and prioritization.",
      "Utilized modern web technologies, including React and JavaScript, to build a responsive and interactive user interface.",
      "Deployed the application on Vercel and configured DNS settings to host it on my personal website, ensuring easy accessibility and professional presentation.",
      "Managed project version control with Git and hosted the repository on GitHub, facilitating collaboration and code transparency.",
    ],
    link: "https://task-board.kollaprakyath.dev/",
  },
  {
    title: "Weather Tracker",
    description:
      "A weather app is a software application or web service that provides users with weather-related information. These apps typically display current weather conditions, forecasts, and other weather data for a specific location or multiple locations. Weather apps are commonly used on smartphones, tablets, and computers, and they can vary in complexity from simple displays of temperature and conditions to detailed meteorological data.",
    achievements: [
      "Developed a Progressive Web Application (PWA) that allows users to track weather conditions globally, providing accurate 10-day forecasts at 1-hour intervals.",
      "Integrated the OpenWeatherMap API to fetch real-time weather data, ensuring up-to-date and reliable forecasts for users.",
      "Designed a responsive user interface using React JS and Tailwind CSS, ensuring seamless adaptability across desktop and mobile devices.",
      "Incorporated location-based weather search, allowing users to retrieve forecasts based on city names or GPS coordinates.",
      "Integrated Supabase as a backend service to securely store API keys, ensuring efficient and scalable backend management.",
      "Optimized API requests and caching mechanisms to improve performance and reduce unnecessary data fetches.",
      "Deployed the application on Vercel and configured DNS settings to host it on my personal website, ensuring easy accessibility and professional presentation.",
      "Managed project version control using Git, with a well-documented repository hosted on GitHub to enable collaboration and maintainability.",
    ],
    link: "https://weathertracker.kollaprakyath.dev/",
  },
  {
    title: "Cover Letter Generator",
    description:
      "A Customized Cover Letter Generator is a web application designed to help users quickly generate personalized cover letters based on their input. The tool streamlines the process by allowing users to enter job details, personal information, and key skills, ensuring that each cover letter is uniquely crafted to match the job application requirements.",
    achievements: [
      "Developed a web-based Cover Letter Generator that enables users to create customized cover letters based on their input fields, reducing manual effort in job applications.",
      "Implemented React.js with Tailwind CSS to design a clean, responsive, and user-friendly interface that adapts seamlessly across different screen sizes.",
      "Created dynamic form fields that allow users to input job details, personal information, and key achievements, ensuring tailored cover letter generation.",
      "Designed a preview feature allowing users to view, edit, and refine their cover letters before downloading them in a structured format.",
      "Implemented state management in React to handle user inputs efficiently and dynamically update the generated content.",
      "Deployed the application on Vercel and configured DNS settings to host it on my personal website, ensuring easy accessibility and professional presentation.",
      "Managed project version control using Git, with a well-documented repository hosted on GitHub to facilitate collaboration and future enhancements.",
      "Future Enhancement: Integrating OpenAI's GPT API to provide AI-powered suggestions and further personalize cover letter content.",
    ],
    link: "https://coverletter.kollaprakyath.dev/",
  },
  {
    title: "AI-Powered Voice Agent for Pickleball Business",
    description:
      "An AI-powered voice agent designed to streamline pickleball court reservations and enhance customer experience. The agent integrates cutting-edge AI tools and automation to enable seamless communication, scheduling, and customer support for a pickleball business idea based in India.",
    achievements: [
      "Developed a voice agent that integrates VAPI, Make.com, Google Calendar, and Email services to manage reservations and automate booking confirmations.",
      "Enabled customers to book, update, and cancel pickleball court reservations via voice commands, ensuring a user-friendly experience.",
      "Addressed cross-continent challenges, such as timezone adjustments between the U.S. and India, through precise automation and scheduling.",
      "Refined AI prompts and optimized latency to enhance the system's performance, ensuring reliability and speed.",
      "Designed additional features, including search, update, and cancellation functionalities, to create a more customer-centric solution.",
      "Explored AI-powered tools to deliver practical, real-world applications, gaining hands-on experience in automation and innovation.",
    ],
    media: [
      "public/2025-01-10 10-06-06 (1).mp4",
      "public/2025-01-10 11-07-52.mp4",
    ],
    // link: "https://github.com/prakyathkolla/projects",
  },
];

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  achievements,
  link,
  media,
}) => {
  return (
    <div className="project-card p-6 border rounded-lg shadow-lg bg-gray-800 text-white space-y-6">
      {" "}
      {/* Added space-y-6 for consistent spacing */}
      {/* Title */}
      <h2 className="text-3xl font-bold bg-gradient-to-r from-[#803131] to-[#D6BCFA] bg-clip-text text-transparent font-sans tracking-tight">
        {title}
      </h2>
      {/* Description */}
      <p className="text-white/70 leading-relaxed">{description}</p>
      {/* Achievements */}
      <ul className="list-disc text-white/70 space-y-2 pl-5">
        {" "}
        {/* Added space-y-2 for list item spacing */}
        {achievements.map((achievement, index) => (
          <li key={index}>{achievement}</li>
        ))}
      </ul>
      {/* Media (if available) */}
      {media && (
        <div className="media space-y-4">
          {" "}
          {/* Added space-y-4 for spacing between videos */}
          {media.map((src, index) => (
            <video key={index} controls className="w-full rounded-lg shadow-lg">
              <source src={src} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ))}
        </div>
      )}
      {/* Link */}
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 text-[#87f5f5] hover:text-[#D6BCFA] text-lg font-semibold transition-colors"
      >
        View Demo
      </a>
    </div>
  );
};

// ];

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
            media={project.media} // Pass media if available
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
