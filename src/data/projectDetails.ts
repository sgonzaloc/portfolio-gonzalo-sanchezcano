import imgProject1 from "../assets/projects/project1.png";
import imgProject2 from "../assets/project_details/project2.png";
import imgProject3 from "../assets/projects/project3.png";
import imgProject4 from "../assets/project_details/project4.png";
import imgProject5 from "../assets/projects/project5.png";

interface ProjectArea {
  name: string;
  technologies: string[];
  features: string[];
  softSkills?: string[];
}

interface Project {
  title: string;
  category: string;
  image: string;
  description: string;
  longDescription: string;
  projectAreas: ProjectArea[];
  demoUrl?: string;
}

export const projectDetails: Record<string, Project> = {
  "trader-charts": {
    title: "Trader Charts",
    category: "FinTech",
    image: imgProject1,
    description:
      "Interactive open-source platform for technical analysis of large-scale, cross-market ecosystems",
    longDescription:
      "This ecosystem brings together specialized areas, each focusing on a key aspect of the trading workflow. From automated data collection and processing, through scalable backend services, to interactive visual analytics for end users, Trader Charts delivers a complete solution for technical analysis, market data visualization, and financial decision-making.",
    projectAreas: [
      {
        name: "Interactive Web Interface (Frontend)",
        technologies: [
          "React",
          "Material-UI (MUI)",
          "Redux",
          "D3.js",
          "React Financial Charts",
          "Framer Motion",
          "ESLint",
          "Prettier",
        ],
        features: [
          "Real-time interactive charts for technical analysis",
          "Customizable trading dashboard with Material-UI components",
          "Smooth animations and transitions using Framer Motion",
          "Global state management with Redux for complex data flows",
          "Multi-chart library integration (D3.js and React Financial Charts)",
          "Responsive design supporting various screen sizes and devices",
        ],
      },
      {
        name: "React Financial Charts - Exclusive version (Frontend)",
        technologies: [
          "React",
          "TypeScript",
          "D3.js",
          "Storybook",
          "ESLint",
          "Prettier",
        ],
        features: [
          "Specialized financial charting library with TypeScript support",
          "Cross-version React compatibility (16 through 19)",
          "Interactive component documentation using Storybook",
          "Advanced technical indicators and chart types",
          "Reusable and modular chart components",
          "Type-safe development with comprehensive TypeScript integration",
        ],
      },
      {
        name: "API Multi-Microservices Architecture (Backend)",
        technologies: [
          "Node.js",
          "Express",
          "Babel",
          "MongoDB",
          "Sequelize",
          "PostgreSQL",
          "MySQL",
          "MariaDB",
          "SQLite",
          "MSSQL",
          "Mocha",
          "Dotenv",
          "CORS",
          "Luxon",
          "Winston",
          "Morgan",
        ],
        features: [
          "Scalable microservices architecture with load balancing",
          "Multi-database support (SQL & NoSQL) via Sequelize ORM",
          "Advanced logging system with Winston and Morgan",
          "Comprehensive CORS configuration and environment management",
          "Robust testing suite using Mocha test framework",
          "Advanced date/time manipulation with Luxon library",
        ],
      },
      {
        name: "Web Scraping Automation & AI Services using LLM",
        technologies: [
          "Python",
          "Selenium",
          "PyMongo",
          "Pandas",
          "Python-dotenv",
          "Feedparser",
          "BeautifulSoup4",
          "TextBlob",
          "KeyBERT",
          "Black",
          "Isort",
          "Ruff",
        ],
        features: [
          "Automated financial data collection from multiple sources",
          "Advanced web scraping with Selenium and BeautifulSoup",
          "Data processing and analysis using Pandas DataFrames",
          "Natural language processing for sentiment analysis with TextBlob",
          "Keyword extraction and topic modeling using KeyBERT",
          "Code quality enforcement with Black, Isort, and Ruff formatters",
        ],
      },
      {
        name: "Orchestration & Deployment",
        technologies: ["Docker", "Docker Compose", "Kubernetes"],
        features: [
          "Containerized application deployment using Docker",
          "Multi-service orchestration with Docker Compose",
          "Kubernetes cluster management for production scaling",
          "Auto-scaling and load balancing configurations",
          "Health checks and rolling deployment strategies",
          "Container orchestration across multiple environments",
        ],
      },
    ],
    demoUrl: "https://github.com/TraderCharts",
  },
  vulog: {
    title: "Vulog - Shared Mobility Solutions",
    category: "Shared Mobility",
    image: imgProject2,
    description:
      "Multiple website platforms providing a unified solution for shared mobility services",
    longDescription:
      "This project includes multiple web platforms designed for shared mobility solutions, integrating interactive maps, analytics, and APIs for vehicle and user management. The architecture ensures scalability and a seamless user experience across different platforms and services.",
    projectAreas: [
      {
        name: "Frontend Development",
        technologies: [
          "React",
          "Redux",
          "Sagas",
          "PropTypes",
          "JavaScript ES6",
          "TypeScript",
          "Material UI",
          "CSS3",
          "HTML5",
          "Hooks",
          "React Lifecycles",
          "LocalStorage",
          "React Testing Library",
          "Jest",
          "Storybook",
          "Mixpanel",
        ],
        features: [
          "Interactive and responsive UI for multiple platforms",
          "State management with Redux and Sagas",
          "Reusable components and design system with Material UI",
          "Unit and integration testing with Jest and React Testing Library",
          "Localization and i18n/l10n support",
          "User behavior tracking and event analytics with Mixpanel",
        ],
        softSkills: [
          "Collaboration across multiple teams",
          "Attention to detail in UX/UI",
          "Problem-solving under tight deadlines",
        ],
      },
      {
        name: "Data Visualization & Mapping",
        technologies: ["chart.js", "D3.js", "Mapbox API", "Baidu API"],
        features: [
          "Interactive charts and analytics dashboards",
          "Real-time data visualization for vehicles and trips",
          "Map integration with Mapbox and Baidu APIs",
          "Custom map layers and markers for route tracking",
          "Product analytics implementation for user behavior insights",
          "Conversion funnel analysis and feature adoption tracking",
        ],
        softSkills: [
          "Analytical thinking",
          "Creative problem-solving",
          "Data interpretation and visualization",
          "Business metrics awareness",
        ],
      },
      {
        name: "Platform Integration & APIs",
        technologies: [
          "Multiple website platforms",
          "API integration for mobility services",
        ],
        features: [
          "Unified backend API consumption across platforms",
          "Seamless integration of multiple services and endpoints",
          "Ensures consistent user experience across platforms",
        ],
        softSkills: [
          "Cross-team coordination",
          "Effective communication with stakeholders",
          "System-level problem solving",
        ],
      },
    ],
    demoUrl: "https://www.vulog.com/carsharing-software/",
  },
  "ai-llm-training": {
    title: "Multilingual BERT Adaptation for Low-Resource Languages",
    category: "AI Research",
    image: imgProject3,
    description:
      "Scientific research on adapting multilingual BERT to low-resource language and task scenarios",
    longDescription:
      "This research project focuses on overcoming the challenges of limited data availability in natural language processing by developing innovative adaptation techniques for multilingual BERT models. The study explores transfer learning strategies, fine-tuning methodologies, and optimization approaches specifically designed for low-resource settings, enabling effective NLP solutions for underrepresented languages and specialized domains with minimal training data.",
    projectAreas: [
      {
        name: "Neural Network Architecture & Model Development",
        technologies: [
          "PyTorch",
          "Transformers",
          "Artificial Neural Networks (ANN)",
          "Deep Learning",
        ],
        features: [
          "Multilingual BERT model adaptation and fine-tuning",
          "Deep neural network architecture design and optimization",
          "Transfer learning strategies for low-resource scenarios",
          "Transformer-based model customization and experimentation",
        ],
      },
      {
        name: "Machine Learning & Data Processing",
        technologies: [
          "Python",
          "Pandas",
          "Scikit-learn",
          "Support Vector Machine",
          "Principal Component Analysis",
          "Machine Learning",
        ],
        features: [
          "Advanced data preprocessing and feature engineering",
          "Dimensionality reduction using Principal Component Analysis",
          "Support Vector Machine implementation for classification tasks",
          "Comprehensive machine learning pipeline development",
          "Data analysis and visualization for research insights",
        ],
      },
      {
        name: "Research Methodology & Experimentation",
        technologies: [
          "Python",
          "Jupyter Notebooks",
          "Research Frameworks",
          "Experimental Design",
        ],
        features: [
          "Systematic experimental design for model evaluation",
          "Cross-lingual transfer learning experiments",
          "Performance benchmarking across multiple low-resource languages",
          "Statistical analysis of model adaptation effectiveness",
          "Reproducible research practices and documentation",
        ],
      },
      {
        name: "Model Evaluation & Validation",
        technologies: [
          "Scikit-learn",
          "Python",
          "Statistical Analysis",
          "Performance Metrics",
        ],
        features: [
          "Comprehensive model performance evaluation metrics",
          "Cross-validation techniques for robust results",
          "Statistical significance testing of adaptation methods",
          "Comparative analysis with baseline models and approaches",
          "Error analysis and model behavior interpretation",
        ],
      },
    ],
    demoUrl: "",
  },
  "nixtla-monitoring-platform": {
    title: "Nixtla - GitHub Monitor & Pip Observability",
    category: "DevOps & Monitoring",
    image: imgProject4,
    description:
      "Comprehensive monitoring and observability platform for GitHub repositories and Python package management",
    longDescription:
      "A full-stack monitoring solution that provides real-time insights into GitHub repository activities and Python package dependencies. The platform integrates multiple APIs to deliver comprehensive observability, tracking development metrics, package usage, and deployment patterns across projects. Built with modern web technologies and robust backend services, it offers developers and teams actionable intelligence for better project management and dependency oversight.",
    projectAreas: [
      {
        name: "Frontend Development & User Interface",
        technologies: [
          "React",
          "Material UI",
          "Redux",
          "Redux-Logger",
          "Redux-Sagas",
          "React Router",
          "JavaScript ES2023",
          "Chart.js",
        ],
        features: [
          "Interactive dashboards with real-time data visualization using Chart.js",
          "State management with Redux and asynchronous handling via Redux-Sagas",
          "Modern React Hooks for efficient component lifecycle management",
          "Responsive UI design with Material-UI components",
          "Client-side routing with React Router for seamless navigation",
          "Advanced logging and debugging with Redux-Logger integration",
        ],
      },
      {
        name: "Backend API & Server Architecture",
        technologies: [
          "Node.js",
          "Express",
          "CORS",
          "Dotenv",
          "File System (Fs)",
          "Logger Middleware",
          "UUIDv4",
        ],
        features: [
          "RESTful API development with Express.js framework",
          "Multi-environment configuration management using Dotenv",
          "Cross-origin resource sharing (CORS) implementation",
          "Comprehensive logging middleware for request tracking",
          "File system operations for data persistence and management",
          "Unique identifier generation with UUIDv4 for data entities",
        ],
      },
      {
        name: "API Integrations & Data Services",
        technologies: ["GitHub API", "TimeGPT API", "Pepy.tech API"],
        features: [
          "GitHub API integration for repository metrics and activity tracking",
          "TimeGPT API for time-series forecasting and trend analysis",
          "Pepy.tech API for Python package download statistics",
          "Data aggregation from multiple external sources",
          "Real-time data synchronization and caching strategies",
          "Error handling and rate limiting for API consumption",
        ],
      },
      {
        name: "Deployment & DevOps",
        technologies: ["Render", "MERN Stack"],
        features: [
          "Cloud deployment and hosting on Render platform",
          "Full-stack MERN (MongoDB, Express, React, Node.js) application architecture",
          "Continuous deployment and environment management",
          "Production-ready application configuration and optimization",
          "Performance monitoring and scaling capabilities",
        ],
      },
    ],
    demoUrl: "",
  },
  "professional-portfolio": {
    title: "Professional Portfolio",
    category: "Branding & Professional Design",
    image: imgProject5,
    description:
      "A fully branded portfolio website showcasing a coherent visual identity, modern UI, and professional-level presentation.",
    longDescription:
      "This professional portfolio demonstrates a cohesive visual identity, polished UX/UI, and interactive design powered by modern frontend technologies. Built with React, Vite, and Tailwind CSS, it integrates advanced animations, 3D elements, and distortion effects using Framer Motion, React‑Three‑Fiber, and react-fluid-distortion. The project features automated CI/CD deployment via GitHub Actions to GitHub Pages, ensuring seamless updates and professional deployment workflow.",
    projectAreas: [
      {
        name: "Visual & Interactive Design",
        technologies: [
          "Tailwind CSS",
          "Framer Motion",
          "React-Three-Fiber",
          "react-fluid-distortion",
        ],
        features: [
          "Consistent branded color palette and visual identity",
          "Advanced animations and transitions",
          "3D interactive scenes using React‑Three-Fiber",
          "Fluid distortion effects for dynamic visual depth",
          "Fully responsive layout with refined UX/UI",
        ],
        softSkills: [
          "Attention to aesthetic detail",
          "User-centered visual thinking",
          "Design consistency",
          "Creative problem solving",
        ],
      },
      {
        name: "Core Development & Architecture",
        technologies: ["React", "React Router"],
        features: [
          "Component‑driven architecture",
          "Structured navigation with React Router",
          "Reusable and scalable codebase",
          "Optimized project organization for maintainability",
        ],
        softSkills: [
          "Code quality and maintainability",
          "Architectural planning",
          "Component abstraction",
          "Efficiency in modern tooling",
        ],
      },
      {
        name: "Build & Deployment",
        technologies: ["Vite", "GitHub Actions", "GitHub Pages"],
        features: [
          "High‑performance build pipeline using Vite",
          "Automated CI/CD pipeline with GitHub Actions",
          "Seamless deployment to GitHub Pages on every push",
          "Automated testing and build verification",
          "Professional deployment workflow with zero-downtime updates",
        ],
        softSkills: [
          "DevOps automation mindset",
          "Process optimization",
          "Continuous delivery focus",
          "Production deployment expertise",
        ],
      },
    ],
    demoUrl: "https://sgonzaloc.github.io/portfolio-gonzalo-sanchezcano/",
  },
};
