export interface Project {
  id: string;
  title: string;
  slug: string;
  type: string;
  oneLiner: string;
  highlights: string[];
  stack: string[];
  images?: string[];
  links: {
    github?: string;
    demo?: string;
    sample?: string;
  };
  featured: boolean;
  category: string[];
  isNDA?: boolean;
  problem?: string;
  solution?: string;
  architecture?: string;
  keyFeatures?: string[];
}

export const projects: Project[] = [
  {
    id: "1",
    title: "Nebula Analytics",
    slug: "nebula-analytics",
    type: "Fullstack (Django REST API + React)",
    oneLiner: "Modern analytics dashboard with dark UI, KPIs, trends, reports and data sources.",
    images: ["/nebula-1.png", "/nebula-2.png", "/nebula-3.png"],
    highlights: [
      "JWT authentication with access/refresh tokens",
      "Analytics endpoints (KPIs, trend analysis, top products, distribution)",
      "React + Vite + Tailwind dashboard with Recharts visualizations",
      "Seed script with synthetic data for demos"
    ],
    stack: ["Django", "DRF", "JWT", "React", "Vite", "Tailwind", "Recharts"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/nebula-analytics",
    },
    featured: true,
    category: ["Django", "DRF", "React"],
    problem: "Businesses need real-time visibility into their analytics data but often struggle with scattered data sources and lack of actionable insights.",
    solution: "A unified analytics platform that aggregates multiple data sources, processes them through a Django REST API, and presents them in an intuitive React dashboard with real-time updates.",
    architecture: "Django REST Framework backend with JWT authentication, PostgreSQL database, React frontend with Recharts for data visualization, and a modular component architecture.",
    keyFeatures: [
      "Real-time KPI tracking with trend analysis",
      "Product performance distribution charts",
      "Secure JWT-based authentication",
      "Responsive dark-themed dashboard",
      "Synthetic data seeding for development"
    ]
  },
  {
    id: "2",
    title: "Excel → PDF Automation",
    slug: "excel-pdf-automation",
    type: "Automation platform (Django + async jobs)",
    oneLiner: "Convert Excel/CSV datasets into structured PDF reports with validation, background processing and logs.",
    images: ["/2.png", "/3.png", "/4.png"],
    highlights: [
      "Upload Excel/CSV via drag & drop interface",
      "Data validation & comprehensive error logging",
      "Background jobs with Celery + Redis",
      "Real-time progress tracking + job history",
      "PDF output with metrics + charts (ReportLab + Matplotlib)",
      "Portfolio-ready dark theme UI"
    ],
    stack: ["Django", "DRF", "Pandas", "Celery", "Redis", "ReportLab", "Matplotlib", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/g2p-app",
    },
    featured: true,
    category: ["Django", "DRF", "Celery", "Automation"],
    problem: "Manual conversion of spreadsheet data to formatted reports is time-consuming, error-prone, and doesn't scale for large datasets.",
    solution: "An automated pipeline that validates, processes, and transforms Excel/CSV data into professional PDF reports with charts and metrics, all handled asynchronously.",
    architecture: "Django backend with Celery for async task processing, Redis as message broker, Pandas for data manipulation, and ReportLab + Matplotlib for PDF generation.",
    keyFeatures: [
      "Drag-and-drop file upload",
      "Automatic data validation with error reports",
      "Async processing with progress tracking",
      "Professional PDF output with charts",
      "Complete job history and audit trail"
    ]
  },
  {
    id: "3",
    title: "Healthcare API",
    slug: "healthcare-api",
    type: "Secure REST API + background report generation",
    oneLiner: "Manage patients, lab samples and results with JWT auth, filtering/pagination, and background clinical PDF reports.",
    images: ["/api1.png", "/api2.png"],
    highlights: [
      "JWT authentication (access/refresh tokens)",
      "CRUD for Patients, Samples, Results",
      "Advanced filtering & pagination",
      "Celery background PDF generation",
      "OpenAPI/Swagger documentation",
      "Synthetic data seeding with Faker"
    ],
    stack: ["Django", "DRF", "JWT", "Celery", "Redis", "PostgreSQL", "ReportLab", "Matplotlib", "OpenAPI/Swagger", "Docker"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/healthcare-api",
    },
    featured: true,
    category: ["Django", "DRF", "Celery", "Healthcare"],
    problem: "Healthcare facilities need secure, compliant APIs to manage patient data and generate clinical reports without compromising data integrity or security.",
    solution: "A production-ready REST API with strict authentication, role-based access, and automated report generation that meets healthcare industry standards.",
    architecture: "Django REST Framework with JWT authentication, PostgreSQL for data persistence, Celery for async report generation, and comprehensive OpenAPI documentation.",
    keyFeatures: [
      "HIPAA-conscious security design",
      "Complete patient lifecycle management",
      "Automated clinical PDF reports",
      "RESTful API with OpenAPI docs",
      "Scalable async processing"
    ]
  },
  {
    id: "4",
    title: "Sacroiliac Detection in Medical Images",
    slug: "sacroiliac-detection",
    type: "Academic / ML",
    oneLiner: "Deep learning + object detection pipeline to detect sacroiliac regions in medical images (Colab-based).",
    highlights: [
      "TensorFlow/Keras deep learning models",
      "OpenCV for image preprocessing",
      "Jupyter notebook workflow",
      "Dataset annotations and augmentation",
      "Educational/academic project disclaimer"
    ],
    stack: ["Python", "TensorFlow", "Keras", "OpenCV", "Jupyter", "Colab"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/RIB0212-2023-1",
    },
    featured: true,
    category: ["ML", "Healthcare"],
    problem: "Manual identification of sacroiliac regions in medical imaging is time-intensive and requires specialized radiological expertise.",
    solution: "A deep learning-based object detection pipeline that automates the identification of sacroiliac regions, reducing analysis time and supporting radiologists.",
    architecture: "Convolutional neural networks built with TensorFlow/Keras, image preprocessing with OpenCV, and a Jupyter/Colab-based training pipeline.",
    keyFeatures: [
      "Custom object detection model",
      "Data augmentation pipeline",
      "Reproducible Colab notebooks",
      "Visualization of detection results",
      "Academic documentation"
    ]
  }
];

export const ndaProjects: Project[] = [
  {
    id: "nda-1",
    title: "Healthcare PDF Report Generator",
    slug: "healthcare-pdf-generator",
    type: "Private / NDA",
    oneLiner: "Automated clinical report generation system for healthcare diagnostics company.",
    highlights: [
      "Automated generation of clinical reports from lab data",
      "HIPAA-compliant data handling",
      "Integration with existing LIMS systems",
      "Reduced report generation time by 80%"
    ],
    stack: ["Django", "Celery", "ReportLab", "PostgreSQL", "Docker"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation"],
    isNDA: true
  },
  {
    id: "nda-2",
    title: "Lab Workflow Automation",
    slug: "lab-workflow-automation",
    type: "Private / NDA",
    oneLiner: "End-to-end laboratory workflow automation for sample processing and tracking.",
    highlights: [
      "Sample tracking from receipt to results",
      "Automated quality control checks",
      "Real-time status dashboards",
      "Eliminated manual data entry errors"
    ],
    stack: ["Django", "DRF", "Celery", "Redis", "React", "PostgreSQL"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation"],
    isNDA: true
  },
  {
    id: "nda-3",
    title: "Biotech Data Processing Pipeline",
    slug: "biotech-data-pipeline",
    type: "Private / NDA",
    oneLiner: "High-throughput data processing pipeline for genomic analysis workflows.",
    highlights: [
      "Processing of large genomic datasets",
      "Automated validation and quality metrics",
      "Integration with bioinformatics tools",
      "Scalable cloud-native architecture"
    ],
    stack: ["Python", "Pandas", "Celery", "Docker", "PostgreSQL"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation"],
    isNDA: true
  },
  {
    id: "nda-4",
    title: "Clinical Data Dashboard",
    slug: "clinical-data-dashboard",
    type: "Private / NDA",
    oneLiner: "Real-time clinical data visualization and reporting platform.",
    highlights: [
      "Real-time data visualization",
      "Role-based access control",
      "Automated alert systems",
      "Improved decision-making speed"
    ],
    stack: ["Django", "DRF", "React", "Recharts", "PostgreSQL"],
    links: {},
    featured: false,
    category: ["Healthcare", "React"],
    isNDA: true
  }
];

export const services = [
  {
    id: "1",
    title: "Custom Web Apps",
    subtitle: "Django",
    icon: "Code2",
    description: "Full-featured web applications built with Django's robust framework.",
    deliverables: [
      "User authentication & role management",
      "Admin dashboards & CRUD interfaces",
      "Background job processing",
      "File uploads & management",
      "Custom business logic"
    ],
    timeline: "4-8 weeks"
  },
  {
    id: "2",
    title: "APIs & Integrations",
    subtitle: "DRF",
    icon: "Webhook",
    description: "RESTful APIs that connect your systems and enable automation.",
    deliverables: [
      "JWT authentication",
      "Pagination & filtering",
      "OpenAPI/Swagger docs",
      "Third-party integrations",
      "Webhooks & callbacks"
    ],
    timeline: "2-6 weeks"
  },
  {
    id: "3",
    title: "Data Automation & Reporting",
    subtitle: "Pandas + Celery",
    icon: "FileSpreadsheet",
    description: "Transform raw data into actionable reports automatically.",
    deliverables: [
      "Excel/CSV processing pipelines",
      "Data validation & cleaning",
      "PDF report generation",
      "Scheduled jobs & alerts",
      "Audit logs & history"
    ],
    timeline: "2-4 weeks"
  },
  {
    id: "4",
    title: "DevOps & Deploy",
    subtitle: "Docker + CI/CD",
    icon: "Cloud",
    description: "Get your application production-ready and deployed.",
    deliverables: [
      "Docker containerization",
      "Environment configuration",
      "CI/CD pipeline setup",
      "Cloud deployment guidance",
      "Monitoring & logging"
    ],
    timeline: "1-2 weeks"
  }
];

export const experience = [
  {
    id: "1",
    role: "Software Developer (Bioinformatics)",
    company: "Bioma Genetics",
    type: "Freelance",
    period: "Jul 2025 – Present",
    location: "Remote",
    highlights: [
      "Building healthcare/biotech applications and automation tools",
      "Designing backend pipelines for data validation, processing, and reporting",
      "Implementing secure APIs for clinical data management"
    ]
  },
  {
    id: "2",
    role: "Full-stack Developer",
    company: "Genika Multiomics",
    type: "Freelance",
    period: "Oct 2024 – Present",
    location: "Remote",
    highlights: [
      "Developing production-ready automation systems",
      "Reduced manual errors through automated validation pipelines",
      "Improved reliability with comprehensive logging and monitoring"
    ]
  },
  {
    id: "3",
    role: "R&D Developer",
    company: "Eurofins do Brasil Análises de Alimentos e Ambientais",
    type: "Internship",
    period: "Oct 2023 – Oct 2024",
    location: "Indaiatuba, São Paulo, Brazil (Remote)",
    highlights: [
      "Developed and maintained Django projects focused on web APIs and web scraping for food metagenomics and proteomics research",
      "Automated workflows to improve data processing efficiency and accuracy in scientific analysis",
      "Integrated complex scientific data into scalable web platforms to improve accessibility for research teams"
    ]
  },
  {
    id: "4",
    role: "Intern & TT-2 Scholarship Holder",
    company: "Kidopi",
    type: "Internship / Scholarship",
    period: "Aug 2021 – Oct 2022",
    location: "Ribeirão Preto, São Paulo, Brazil",
    highlights: [
      "Improved the CleverCare system by delivering new features, access methods, and internationalization support",
      "Contributed to database and front-end development using PHP",
      "Worked on ML experiments to support product improvements"
    ]
  }
];

export const skills = {
  backend: ["Python", "Django", "DRF", "Celery", "Redis"],
  data: ["Pandas", "Matplotlib", "ReportLab", "R Studio"],
  database: ["PostgreSQL", "MySQL"],
  frontend: ["React", "Tailwind", "Vite"],
  devops: ["Docker", "AWS", "Heroku", "CI/CD", "Git"],
  domain: ["Bioinformatics", "Healthcare"]
};

export const socialLinks = {
  github: "https://github.com/Gabriel-Rosa-Arcangelo",
  linkedin: "https://www.linkedin.com/in/gabriel-rosa-arcangelo-aa1572165/",
  website: "https://dangelodevstudio.com",
  email: "dangelodevstudio@gmail.com"
};
