export interface Work {
  id: string;
  title: string;
  description: string;
  year: string;
  startYear: string;
  link?: string;
  company: string;
  category: string;
  role: string;
  achievements: string[];
  technologies: string[];
}

export const works: Work[] = [
  {
    id: "1",
    title: "MegaMerchant - Omega Platform",
    description:
      "Led the frontend development and currently contributing to backend services of a comprehensive e-export infrastructure platform. Built the entire React frontend from scratch, implementing complex UI components and state management. Currently expanding the platform with microservices architecture using Node.js and Go.",
    year: "2025",
    startYear: "2025",
    link: "https://omega.themegamerchant.com",
    company: "MegaMerchant",
    category: "Full Stack Development",
    role: "Full Stack Developer",
    achievements: [
      "Built the entire React frontend from scratch",
      "Implemented complex UI components",
      "Expanded platform with microservices",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Go",
      "Material-UI",
      "Context API",
      "RESTful APIs",
      "Microservices",
      "Redux",
      "React Query",
    ],
  },
  {
    id: "2",
    title: "Odak PCB - Quality Control Panel",
    description:
      "Currently developing a sophisticated quality control testing platform managing 33 different test processes for PCB cards. The system handles complex testing workflows, tracks defects with specific error codes, and integrates with enterprise software for comprehensive quality management. Real-time monitoring and reporting capabilities help maintain high manufacturing standards.",
    year: "2025",
    startYear: "2025",
    link: "https://odakpcb.com",
    company: "Odak PCB",
    category: "Quality Control",
    role: "Full Stack Developer",
    achievements: [
      "Developed a sophisticated quality control testing platform",
      "Managed 33 different test processes for PCB cards",
      "Integrated with enterprise software for comprehensive quality management",
    ],
    technologies: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "TypeScript",
      "WebSocket",
      "Redux",
      "Material-UI",
      "ERP Integration",
      "Real-time Monitoring",
    ],
  },
  {
    id: "3",
    title: "Odak PCB - RFQ Platform",
    description:
      "Currently developing a comprehensive RFQ (Request for Quotation) platform that streamlines the quotation process between technical teams, customer representatives, and factories. The system features a sophisticated workflow engine, role-based access control, and automated notifications to facilitate efficient communication and decision-making.",
    year: "2025",
    startYear: "2025",
    link: "https://odakpcb.com",
    company: "Odak PCB",
    category: "RFQ Platform",
    role: "Full Stack Developer",
    achievements: [
      "Developed a comprehensive RFQ platform",
      "Streamlined the quotation process",
      "Facilitated efficient communication and decision-making",
    ],
    technologies: [
      "MERN Stack",
      "TypeScript",
      "RESTful APIs",
      "Redux",
      "Material-UI",
      "Excel Integration",
      "JWT Authentication",
      "Email Service",
      "PDF Generation",
    ],
  },
  {
    id: "4",
    title: "51'Nsights - Digital Marketing Analytics",
    description:
      "Developed a comprehensive React-based analytics platform for 51 Digital that enables real-time tracking of digital marketing campaigns. The platform provides detailed insights into impressions, reach, and engagement metrics, helping optimize influencer marketing strategies through data-driven decision making.",
    year: "2024",
    startYear: "2024",
    link: "https://www.51digital.com/insight",
    company: "51 Digital",
    category: "Digital Marketing",
    role: "Frontend Developer",
    achievements: [
      "Developed a comprehensive React-based analytics platform",
      "Enabled real-time tracking of digital marketing campaigns",
      "Provided detailed insights into impressions, reach, and engagement metrics",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Data Visualization",
      "Real-time Analytics",
      "Interactive Dashboards",
      "Performance Monitoring",
      "RESTful APIs",
    ],
  },
  {
    id: "5",
    title: "myHyundai Mobile App",
    description:
      "Contributed to the development of Hyundai's official mobile app that redefines vehicle ownership experience. The app enables users to manage their vehicles, schedule service appointments, access vehicle information, and stay connected with their Hyundai vehicles through a comprehensive digital platform.",
    year: "2023",
    startYear: "2023",
    link: "https://apps.apple.com/tr/app/myhyundaitürkiye/id6464392167",
    company: "Hyundai",
    category: "Mobile App",
    role: "Project Manager",
    achievements: [
      "Contributed to the development of Hyundai's official mobile app",
      "Redefined vehicle ownership experience",
      "Enabled users to manage their vehicles, schedule service appointments, access vehicle information, and stay connected with their Hyundai vehicles through a comprehensive digital platform",
    ],
    technologies: [
      "Software Analysis",
      "Project Management",
      "User Experience Design",
      "Requirements Engineering",
      "Mobile App Development",
      "Agile Methodologies",
    ],
  },
  {
    id: "6",
    title: "ebebek Mobile App Revamp",
    description:
      "Led the complete redesign and redevelopment of ebebek's mobile app, Turkey's leading mother and baby products retailer. The revamped app provides a seamless shopping experience with enhanced features for parents, including real-time product tracking, personalized recommendations, and an intuitive user interface.",
    year: "2022",
    startYear: "2022",
    link: "https://apps.apple.com/tr/app/ebebek-anne-bebek-alışveriş/id563516181",
    company: "ebebek",
    category: "Mobile App",
    role: "Project Manager",
    achievements: [
      "Led the complete redesign and redevelopment of ebebek's mobile app",
      "Provided a seamless shopping experience with enhanced features for parents",
      "Included real-time product tracking, personalized recommendations, and an intuitive user interface",
    ],
    technologies: [
      "Project Management",
      "Software Analysis",
      "Mobile App Development",
      "User Experience Design",
      "Agile Methodologies",
      "Requirements Engineering",
      "Team Leadership",
      "E-commerce Solutions",
    ],
  },
];
