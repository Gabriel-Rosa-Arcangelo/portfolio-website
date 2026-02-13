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
    id: "5",
    title: "NGS Lab Hub",
    slug: "ngs-lab-hub",
    type: "Fullstack (Django REST API + React + Celery)",
    oneLiner:
      "Portfolio-grade NGS data platform with async report exports, MinIO storage, and role-based access.",
    images: [
      "/ngs-hub/dashboard.png",
      "/ngs-hub/samples-crud.png",
      "/ngs-hub/export-detail.png",
      "/ngs-hub/minio-objects.png",
    ],
    highlights: [
      "JWT authentication with access/refresh flow and /me endpoint",
      "Role-based authorization (ADMIN/USER) for samples and exports visibility",
      "NGS sample CRUD with pipeline metrics (reads, Q30, depth, variants, status)",
      "Async export jobs with Celery + Redis, progress counters, and execution event logs",
      "CSV/XLSX/ZIP report generation with secure presigned download links",
      "MinIO (S3-compatible) artifact storage plus cleanup lifecycle for expired exports",
    ],
    stack: [
      "Django",
      "REST API",
      "JWT",
      "Celery",
      "Redis",
      "PostgreSQL",
      "MinIO",
      "React",
      "Vite",
      "TypeScript",
      "Tailwind",
      "Docker",
      "OpenAPI/Swagger",
    ],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/ngs-lab-hub",
    },
    featured: true,
    category: ["Django", "REST API", "Automation", "React", "Healthcare"],
    problem:
      "NGS teams need reliable, auditable pipelines to track sequencing samples and generate exports without blocking API performance or exposing sensitive data.",
    solution:
      "A fullstack platform that separates interactive API requests from heavy export processing using Celery workers, then delivers artifacts through secure presigned URLs.",
    architecture:
      "React + TypeScript dashboard (Vite/Tailwind) calling a Django REST API secured by JWT; PostgreSQL as system-of-record; Celery + Redis for async jobs; MinIO S3-compatible storage for generated artifacts; periodic cleanup jobs for expired exports.",
    keyFeatures: [
      "End-to-end NGS workflow: sample registry, pipeline states, and export lifecycle",
      "Operational dashboard with KPIs, recent samples, and report generation trends",
      "Exports API with job statuses, detail pages, and task-level execution events",
      "Multiple export formats (CSV, XLSX, ZIP) for different downstream workflows",
      "OpenAPI/Swagger documentation and Docker Compose local production-like setup",
    ],
  },
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
    stack: ["Django", "REST API", "JWT", "React", "Vite", "Tailwind", "Recharts"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/nebula-analytics",
    },
    featured: true,
    category: ["Django", "REST API", "React"],
    problem: "Businesses need real-time visibility into their analytics data but often struggle with scattered data sources and lack of actionable insights.",
    solution: "A unified analytics platform that aggregates multiple data sources, processes them through a Django REST API, and presents them in an intuitive React dashboard with real-time updates.",
    architecture: "Django REST API backend with JWT authentication, PostgreSQL database, React frontend with Recharts for data visualization, and a modular component architecture.",
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
    stack: ["Django", "REST API", "Pandas", "Celery", "Redis", "ReportLab", "Matplotlib", "PostgreSQL", "Docker"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/g2p-app",
    },
    featured: true,
    category: ["Django", "REST API", "Celery", "Automation"],
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
    stack: ["Django", "REST API", "JWT", "Celery", "Redis", "PostgreSQL", "ReportLab", "Matplotlib", "OpenAPI/Swagger", "Docker"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/healthcare-api",
    },
    featured: true,
    category: ["Django", "REST API", "Celery", "Healthcare"],
    problem: "Healthcare facilities need secure, compliant APIs to manage patient data and generate clinical reports without compromising data integrity or security.",
    solution: "A production-ready REST API with strict authentication, role-based access, and automated report generation that meets healthcare industry standards.",
    architecture: "Django REST API with JWT authentication, PostgreSQL for data persistence, Celery for async report generation, and comprehensive OpenAPI documentation.",
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
    stack: ["Django", "REST API", "Celery", "Redis", "React", "PostgreSQL"],
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
    stack: ["Django", "REST API", "React", "Recharts", "PostgreSQL"],
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
    subtitle: "REST API",
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
    role: "Backend Engineer | Healthcare",
    company: "Bioma Genetics",
    type: "Contract",
    period: "Jul 2025 – Present",
    location: "Remote",
    highlights: [
      "Engineered backend services to process, validate, and structure complex biological and clinical data.",
      "Designed and implemented robust REST APIs for clinical data integration and patient information systems.",
      "Built and optimized data pipelines handling large-scale biotechnology and omics datasets.",
      "Created automated PDF and Excel reporting systems transforming raw clinical data into structured insights."
    ]
  },
  {
    id: "2",
    role: "Full-stack Developer",
    company: "Tekhub Solutions",
    type: "Self-employed",
    period: "Oct 2024 - Present",
    location: "São Paulo, Brazil · Remote",
    highlights: [
      "Developed backend systems using Python and Django for scientific data platforms.",
      "Focused on data processing and automation to enhance laboratory workflows.",
      "Collaborated with cross-functional teams to ensure seamless integration of software solutions."
    ]
  },
  {
    id: "3",
    role: "Full-stack Developer",
    company: "Genika Multiomics",
    type: "Self-employed",
    period: "Oct 2024 – Present",
    location: "Remote",
    highlights: [
      "Integrated metagenomics and proteomics data on cloud platforms, enhancing data accessibility.",
      "Developed statistical analysis tools to support data-driven decision-making in multiomics research."
    ]
  },
  {
    id: "4",
    role: "Student Researcher",
    company: "Ribeirao Preto Medical School (FMRP), University of Sao Paulo (USP)",
    type: "Scientific Initiation",
    period: "Apr 2023 - Sep 2023 · 6 mos",
    location: "Departamento de Genética USP - Ribeirão Preto, São Paulo, Brasil",
    highlights: [
      "Scientific Initiation focused on Bioinformatics and the analysis of genomic data."
    ]
  },
  {
    id: "5",
    role: "P&D Developer",
    company: "Eurofins Brazil Food and Environmental Analysis",
    type: "Internship",
    period: "Oct 2023 – Oct 2024",
    location: "Indaiatuba, São Paulo, Brazil (Remote)",
    highlights: [
      "Developed and maintained Django projects focused on web APIs and web scraping for food metagenomics and proteomics research.",
      "Integrated complex scientific data into scalable web platforms, facilitating better accessibility for research teams."
    ]
  },
  {
    id: "6",
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
  backend: ["Python", "Django", "REST API", "Celery", "Redis"],
  data: ["Pandas", "Matplotlib", "ReportLab", "R Studio"],
  database: ["PostgreSQL", "MySQL"],
  frontend: ["React", "Tailwind", "Vite"],
  devops: ["Docker", "AWS", "Heroku", "Git"],
  domain: ["Bioinformatics", "Healthcare"]
};

export const socialLinks = {
  github: "https://github.com/Gabriel-Rosa-Arcangelo",
  linkedin: "https://www.linkedin.com/in/gabriel-rosa-arcangelo/",
  website: "https://dangelodevstudio.com",
  email: "grosarcangelo@gmail.com"
};
