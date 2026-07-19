import {
  FaJava,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaDocker,
  FaFigma,
  FaPhp,
} from "react-icons/fa";

import {
  SiReact,
  SiNextdotjs,
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiSpringboot,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiGithub,
  SiVite,
  SiPostman,
  SiHibernate,
  SiFirebase,
  SiRedux,
  SiVercel,
  SiRailway,
  SiRender,
  SiFramer,
  SiJsonwebtokens,
  SiC,
  SiCplusplus,
} from "react-icons/si";

import { MdDevices } from "react-icons/md";
import { TbApi } from "react-icons/tb";

export const skillCategories = [
  {
    id: "languages",
    title: "Languages",
    skills: [
      {
        name: "Java",
        icon: FaJava,
        color: "text-orange-500",
        glow: "#f97316",
      },
      {
        name: "JavaScript",
        icon: SiJavascript,
        color: "text-yellow-400",
        glow: "#facc15",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-blue-500",
        glow: "#3b82f6",
      },
      {
        name: "C",
        icon: SiC,
        color: "text-blue-500",
        glow: "#2563eb",
      },
      {
        name: "C++",
        icon: SiCplusplus,
        color: "text-blue-700",
        glow: "#1d4ed8",
      },
      {
        name: "PHP",
        icon: FaPhp,
        color: "text-indigo-500",
        glow: "#6366f1",
      },
      {
        name: "HTML5",
        icon: FaHtml5,
        color: "text-orange-600",
        glow: "#ea580c",
      },
      {
        name: "CSS3",
        icon: FaCss3Alt,
        color: "text-blue-500",
        glow: "#2563eb",
      },
    ],
  },

  {
    id: "frontend",
    title: "Frontend",
    skills: [
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
        glow: "#ffffff",
      },
      {
        name: "React",
        icon: SiReact,
        color: "text-cyan-400",
        glow: "#22d3ee",
      },
      
      {
        name: "Tailwind CSS",
        icon: SiTailwindcss,
        color: "text-sky-400",
        glow: "#38bdf8",
      },
      {
        name: "Redux",
        icon: SiRedux,
        color: "text-violet-500",
        glow: "#8b5cf6",
      },
      {
        name: "Framer Motion",
        icon: SiFramer,
        color: "text-pink-500",
        glow: "#ec4899",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-violet-400",
        glow: "#a855f7",
      },
      {
        name: "Responsive Design",
        icon: MdDevices,
        color: "text-cyan-500",
        glow: "#06b6d4",
      },
       
    ],
  },

  {
    id: "backend",
    title: "Backend",
    skills: [
      {
        name: "Spring Boot",
        icon: SiSpringboot,
        color: "text-green-500",
        glow: "#22c55e",
      },
      {
        name: "Node.js",
        icon: FaNodeJs,
        color: "text-green-500",
        glow: "#16a34a",
      },
      {
        name: "Express.js",
        icon: SiExpress,
        color: "text-neutral-800 dark:text-white",
        glow: "#ffffff",
      },
      {
        name: "Hibernate",
        icon: SiHibernate,
        color: "text-yellow-700",
        glow: "#ca8a04",
      },
      {
        name: "REST API",
        icon: TbApi,
        color: "text-emerald-500",
        glow: "#10b981",
      },
      {
        name: "JWT",
        icon: SiJsonwebtokens,
        color: "text-pink-500",
        glow: "#ec4899",
      },
    ],
  },

  {
    id: "databases",
    title: "Databases",
    skills: [
      {
        name: "PostgreSQL",
        icon: SiPostgresql,
        color: "text-blue-500",
        glow: "#2563eb",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-blue-400",
        glow: "#60a5fa",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-green-600",
        glow: "#16a34a",
      },
      {
        name: "Firebase",
        icon: SiFirebase,
        color: "text-yellow-500",
        glow: "#f59e0b",
      },
    ],
  },

  {
    id: "tools",
    title: "Tools & DevOps",
    skills: [
      {
        name: "Git",
        icon: FaGitAlt,
        color: "text-orange-600",
        glow: "#ea580c",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-black dark:text-white",
        glow: "#ffffff",
      },
      {
        name: "Docker",
        icon: FaDocker,
        color: "text-blue-500",
        glow: "#2563eb",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-orange-500",
        glow: "#f97316",
      },
      {
        name: "Figma",
        icon: FaFigma,
        color: "text-pink-500",
        glow: "#ec4899",
      },
      {
        name: "Vercel",
        icon: SiVercel,
        color: "text-black dark:text-white",
        glow: "#ffffff",
      },
      {
        name: "Railway",
        icon: SiRailway,
        color: "text-violet-500",
        glow: "#8b5cf6",
      },
      {
        name: "Render",
        icon: SiRender,
        color: "text-cyan-500",
        glow: "#06b6d4",
      },
    ],
  },
];