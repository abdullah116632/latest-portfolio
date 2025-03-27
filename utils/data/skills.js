import { FaCode, FaDatabase, FaServer, FaTools } from "react-icons/fa";

export const skillsData = {
  frontendSkills: [
    'HTML',
    'CSS',
    'Javascript',
    'Typescript',
    'React',
    'React router',
    'Next JS',
    'Tailwind',
    'Bootstrap',
    'Redux',
    'Docker',
    'Figma',
    'MaterialUI',
    'Shadcn UI'
  ],
  backendSkills: [
    'Node.js',
    'Express.js',
    'MongoDB',
    'MySQL',
    'PostgreSQL',
    'Redis',
    'Socket.io',
    'Prisma',
    'Mongoose',
    'Git',
    'Firebase'
  ]
}


export const skillCards = [
  {
    id: 1,
    title: "Frontend Development",
    description: "Building interactive and responsive UI with modern frameworks.",
    icon: <FaCode size={36} className="text-violet-500" />,
    skillList: "HTML, CSS, JavaScript, TypeScript, React.js, Next.js, Redux, Tailwind CSS, Bootstrap, Shadcn UI, Material UI",
  },
  {
    id: 2,
    title: "Backend Development",
    description: "Designing robust APIs and managing server-side logic efficiently.",
    icon: <FaServer size={36} className="text-blue-500" />,
    skillList: "Node.js, Express.js, Nest.js, Socket.io, RESTful APIs, GraphQL, Authentication (JWT, OAuth)",
  },
  {
    id: 3,
    title: "Database Management",
    description: "Working with SQL & NoSQL databases for efficient data handling.",
    icon: <FaDatabase size={36} className="text-green-500" />,
    skillList: "MongoDB, Mongoose, MySQL, PostgreSQL, Redis, Prisma ORM",
  },
  {
    id: 4,
    title: "Development Tools",
    description: "Using Git, managing CI/CD pipelines, and utilizing other DevOps tools for efficient development.",
    icon: <FaTools size={36} className="text-orange-500" />,
    skillList: "Git & GitHub, Git Bash, CI/CD Pipelines, Docker, Postman, VS Code, Figma",
  },
];

