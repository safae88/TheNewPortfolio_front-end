import BankFlow from "../assets/BankFlow.png";
import TaskManagerApp from "../assets/todoAPP.png";

export const projects = [
  {
    id: 1,
    title: "BankFlow",
    description:
      "BankFlow is a banking management platform that facilitates the handling of customer accounts and financial transactions. The application allows authorized agents to manage accounts, perform deposits and withdrawals, maintain customer records, and oversee account operations through a centralized interface. The platform also includes intelligent assistance features that provide useful information, recommendations, and support to users, helping them make informed decisions and access banking services more effectively.",
    image:
      BankFlow,
    technologies: ["Spring boot", "Java", "Thymeleaf" ,"Llama 3"],
    github: "https://github.com/safae88/Bank_Flow",
    live: "https://example.com",
    featured: true,
  },
  {
    id: 2,
    title: "Task Manager App",
    description:
      "RESTful backend service A modern task management application designed to help users organize their daily activities and improve productivity. The platform allows users to create tasks, update their progress, remove completed or unnecessary items, and keep track of ongoing work efficiently.To make task organization easier, the application includes search and filtering capabilities, enabling users to quickly find specific tasks and view them based on their current status. All task data is automatically preserved between sessions, ensuring a seamless and reliable user experience.built with Spring Boot featuring authentication, role-based access, and structured API documentation.",
    image:
      TaskManagerApp,
    technologies: ["React", "JavaScript", "Tailwind CSS"],
    github: "https://github.com/safae88/Todo-client",
    live: "https://todo-client-h96j.vercel.app/",
    featured: true,
  },
  {
    id: 3,
    title: "MobilePulse",
    description:
      "Cross-platform mobile application prototype for tracking daily habits with smooth animations and intuitive UX patterns.",
    image:
      "https://images.unsplash.com/photo-151294193766afb-362a2f24ee58?auto=format&fit=crop&w=1200&q=80",
    technologies: ["React Native", "JavaScript", "Firebase"],
    github: "https://github.com",
    live: "https://example.com",
    featured: false,
  },
];
