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
  organization?: string;
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
    id: "6",
    title: "Assay Run Orchestrator",
    slug: "assay-run-orchestrator",
    type: "Backend platform (Django REST API + Celery)",
    oneLiner:
      "Synthetic assay-run orchestration with auditable state transitions, QC metrics, RBAC, and async manifests.",
    highlights: [
      "Multi-organization RBAC with admin, operator, and viewer roles",
      "Transactional state machine with explicit allowed transitions",
      "Immutable audit events for run, QC, and export operations",
      "Organization-scoped async CSV manifests with Celery",
      "Nine automated tests plus validated OpenAPI and CI",
    ],
    stack: ["Django", "REST API", "JWT", "Celery", "Redis", "PostgreSQL", "Docker", "OpenAPI/Swagger"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/assay-run-orchestrator",
    },
    featured: true,
    category: ["Django", "REST API", "Celery", "Automation", "Healthcare"],
    problem:
      "Operational teams need a reliable way to coordinate assay runs, review QC metrics, and understand every state change without exposing real laboratory workflows.",
    solution:
      "A fully synthetic API that demonstrates organization-scoped operations, transactional state transitions, immutable audit events, and asynchronous manifest exports.",
    architecture:
      "JWT clients call a Django REST API backed by PostgreSQL; Celery and Redis generate organization-scoped CSV manifests; every sensitive operation records an immutable audit event.",
    keyFeatures: [
      "Explicit CREATED → READY → RUNNING → QC_REVIEW → RELEASED state flow",
      "Configurable QC limits with computed pass status",
      "Viewer and operator permission boundaries covered by tests",
      "Docker Compose demo with synthetic seed data",
      "No client code, patient data, report templates, or real assay rules",
    ],
  },
  {
    id: "7",
    title: "Partner Integration Gateway",
    slug: "partner-integration-gateway",
    type: "Integration platform (Django REST API + Celery)",
    oneLiner:
      "Synthetic integration gateway with HMAC ingestion, idempotency, signed webhooks, and dead-letter tracking.",
    highlights: [
      "HMAC SHA-256 verification for public partner ingestion",
      "Per-source idempotency using event identifiers",
      "Stable internal event normalization",
      "Signed outbound webhook delivery and attempt tracking",
      "Dead-letter status after repeated failures",
      "Eight automated tests plus validated OpenAPI and CI",
    ],
    stack: ["Django", "REST API", "JWT", "HMAC", "Celery", "Redis", "PostgreSQL", "Docker", "OpenAPI/Swagger"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/partner-integration-gateway",
    },
    featured: true,
    category: ["Django", "REST API", "Celery", "Automation"],
    problem:
      "Partner integrations need secure ingestion, duplicate protection, stable internal payloads, and transparent delivery failure handling.",
    solution:
      "A synthetic gateway that verifies inbound signatures, enforces idempotency, normalizes events, and tracks signed outbound webhook deliveries through dead-letter states.",
    architecture:
      "Partners send HMAC-signed events to a public Django endpoint; PostgreSQL enforces idempotency; Celery workers deliver normalized signed webhooks and record each result.",
    keyFeatures: [
      "Public signed-ingestion endpoint with JWT-protected management APIs",
      "Concurrent-safe idempotency backed by database constraints",
      "Independent inbound and outbound signing secrets",
      "Delivery terminal-state protection and dead-letter visibility",
      "No private endpoints, real partner payloads, or copied mappings",
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
    featured: false,
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
      github: "https://github.com/Gabriel-Rosa-Arcangelo/excel-pdf-automation",
    },
    featured: false,
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
    type: "REST API + background report generation",
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
    stack: ["Django", "REST API", "JWT", "Celery", "Redis", "ReportLab", "Matplotlib", "OpenAPI/Swagger"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/healthcare-api",
    },
    featured: true,
    category: ["Django", "REST API", "Celery", "Healthcare"],
    problem: "Clinical workflow demos need a structured API to manage synthetic patients, samples, results, and generated reports.",
    solution: "A portfolio REST API with JWT authentication, filtering, documented endpoints, and asynchronous PDF report generation.",
    architecture: "Django REST API with JWT authentication, Celery for async report generation, and validated OpenAPI documentation.",
    keyFeatures: [
      "JWT-protected write operations",
      "Synthetic patient and sample lifecycle management",
      "Automated clinical PDF reports",
      "RESTful API with OpenAPI docs",
      "Async processing with Celery"
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
    featured: false,
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
  },
  {
    id: "8",
    title: "G2P Sequence Workflow",
    slug: "g2p-app",
    type: "Sanitized workflow prototype (Django)",
    oneLiner:
      "Sanitized sequence-file submission workflow with controlled access and consolidated report retrieval.",
    highlights: [
      "Authenticated sequence-file submission workflow",
      "Controlled report access and retrieval",
      "Environment-based configuration with no embedded credentials",
      "Public repository intentionally stripped of client data and private rules",
    ],
    stack: ["Python", "Django", "Pandas", "Selenium", "ReportLab", "Docker"],
    links: {
      github: "https://github.com/Gabriel-Rosa-Arcangelo/g2p-app",
    },
    featured: false,
    category: ["Django", "Automation", "Healthcare"],
    problem:
      "Sequence-processing workflows need a clear submission and report-retrieval experience while keeping operational details and sensitive data out of a public demonstration.",
    solution:
      "A sanitized Django prototype that demonstrates the workflow boundary, access controls, and report delivery without exposing client data, credentials, or proprietary rules.",
    architecture:
      "Django application with authenticated workflow views, environment-based configuration, and isolated processing utilities.",
    keyFeatures: [
      "Sanitized public demonstration",
      "Authenticated workflow access",
      "Sequence-file submission",
      "Consolidated report retrieval",
      "No real samples, client assets, or proprietary processing rules",
    ],
  }
];

export const ndaProjects: Project[] = [
  {
    id: "nda-1",
    title: "Healthcare & Biotech Operations",
    slug: "bioma-healthcare-biotech-operations",
    type: "Confidential client work",
    organization: "Bioma Genetics",
    oneLiner:
      "Backend systems supporting laboratory operations, biological data processing, and clinical integrations.",
    highlights: [
      "Clinical and omics data validation and structuring",
      "REST APIs supporting operational integrations",
      "Asynchronous processing for data-heavy workflows",
      "Automated PDF and Excel report generation",
    ],
    stack: ["Python", "Django", "REST API", "Celery", "PostgreSQL", "Docker"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation"],
    isNDA: true
  },
  {
    id: "nda-2",
    title: "Healthcare Analytics & Automation",
    slug: "tekhub-healthcare-analytics",
    type: "Confidential delivery",
    organization: "Tekhub Solutions",
    oneLiner:
      "Healthcare data platforms, analytics dashboards, and asynchronous processing for operational teams.",
    highlights: [
      "Analytics visibility across 200+ hospital and diagnostic units",
      "Backend services for large-scale healthcare data processing",
      "Up to 70% performance improvement by moving heavy work to queues",
      "Cloud storage integrations and database query optimization",
    ],
    stack: ["Python", "Django", "Celery", "Redis", "PostgreSQL", "AWS"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation", "React"],
    isNDA: true
  },
  {
    id: "nda-3",
    title: "Multiomics Analysis Workflows",
    slug: "genika-multiomics-workflows",
    type: "Confidential scientific work",
    organization: "Genika Multiomics",
    oneLiner:
      "Reproducible processing and analysis workflows for multiomics and environmental datasets.",
    highlights: [
      "microRNA differential-expression analysis workflows",
      "Metabolomics and environmental data processing",
      "Genomics, proteomics, and metabolomics integration",
      "Reproducible analytical outputs and visualizations",
    ],
    stack: ["Python", "R Studio", "Pandas", "Docker", "PostgreSQL"],
    links: {},
    featured: false,
    category: ["Healthcare", "Automation", "Bioinformatics"],
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
    role: "Senior Backend Engineer",
    company: "Bioma Genetics",
    type: "Contract",
    period: "Jul 2025 – Present",
    location: "São Paulo, Brazil · Remote",
    highlights: [
      "Lead backend development supporting healthcare and biotechnology operations.",
      "Design services that process, validate, and structure clinical and omics data.",
      "Build REST APIs and asynchronous workflows for laboratory and clinical integrations.",
      "Automate diagnostic PDF and Excel reporting to reduce repetitive operational work."
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
      "Develop healthcare data platforms and analytics systems used across 200+ hospital and diagnostic units.",
      "Built production analytics dashboards for real-time operational monitoring.",
      "Improved performance by up to 70% by moving heavy workloads to Celery and Redis.",
      "Integrated cloud storage and optimized database queries for reliability and scale."
    ]
  },
  {
    id: "3",
    role: "Full-stack Developer",
    company: "Genika Multiomics",
    type: "Self-employed",
    period: "Oct 2024 – Present",
    location: "São Paulo, Brazil · Remote",
    highlights: [
      "Build reproducible bioinformatics and data-processing systems for multiomics datasets.",
      "Develop microRNA differential-expression workflows using Python, R, and DESeq2.",
      "Process metabolomics and environmental hydrocarbon analysis data.",
      "Integrate genomics, proteomics, and metabolomics data into structured analytical outputs."
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
  website: "https://gabrielrosadev.tech/",
  email: "grosarcangelo@gmail.com"
};
