export const personalInfo = {
  name: "Karthikeya Kondaveeti",
  logoUrl: "/logo.jpg",
  roleTitle: "Applied ML & Computer Vision Engineer",
  taglines: [
    "Applied Machine Learning & Computer Vision",
    "Full-Stack Development (MERN)",
    "Computer Science Undergraduate"
  ],
  status: "Seeking a Master's programme in Computer Science, Machine Learning, or Data Science",
  summary: "Computer Science undergraduate at SRM University AP with a focus on applied machine learning and computer vision, backed by full-stack development experience (MERN). Built projects spanning video-based incident detection, multimodal retrieval-augmented generation, and geospatial forecasting. Currently working on portion-aware food calorie estimation from single images.",
  aboutStory: "I am an undergraduate in Computer Science and Engineering at SRM University AP, Amaravathi, dedicated to building applied machine learning and computer vision systems that solve concrete physical challenges. My engineering spans monocular depth estimation, foundation segmentation architectures, real-time action recognition, and full-stack MERN platforms. I aim to pursue a research-focused Master's degree to advance perceptual AI and scalable intelligent systems.",
  location: "Guntur, India",
  educationBadge: "SRM University AP (2023 – 2027)",
  email: "kondaveeti444@gmail.com",
  github: "https://github.com/Karthikeya1825",
  resumeUrl: "/resume.pdf"
};

export const quickFacts = [
  {
    label: "Location",
    value: "Guntur, India",
    icon: "MapPin"
  },
  {
    label: "Education",
    value: "B.Tech CSE, SRM University AP",
    subtext: "Aug 2023 – May 2027",
    icon: "GraduationCap"
  },
  {
    label: "Languages",
    value: "English, Telugu, Hindi, German A1, French A1",
    icon: "Languages"
  },
  {
    label: "Academic Objective",
    value: "Master's in CS / ML / Data Science",
    icon: "Target"
  }
];

export const skillsData = {
  categories: [
    {
      title: "Programming Languages",
      icon: "Code",
      skills: ["C++", "Python", "JavaScript", "HTML/CSS", "Java"]
    },
    {
      title: "Machine Learning & CV",
      icon: "Cpu",
      skills: ["PyTorch", "YOLO", "OpenCV", "MediaPipe", "XGBoost", "Prophet", "RAG (ChromaDB)"]
    },
    {
      title: "Frameworks & Web",
      icon: "Layers",
      skills: ["React.js", "Node.js", "Express.js", "FastAPI", "Streamlit"]
    },
    {
      title: "Databases",
      icon: "Database",
      skills: ["MongoDB", "MySQL"]
    },
    {
      title: "Developer Tools",
      icon: "Wrench",
      skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook"]
    }
  ]
};

export const projectsData = [
  {
    id: "portion-calorie-estimation",
    title: "Portion-Aware Calorie Estimation from Food Photos",
    status: "In progress",
    category: "Computer Vision & ML",
    subtitle: "Monocular Depth & Foundation Segmentation for Indian Dietary Tracking",
    shortDescription: "Segments individual food items, estimates portion size using monocular depth with scale calibration, and calculates calories against Indian Food Composition Tables.",
    tags: ["Python", "PyTorch", "Segment Anything", "Depth Anything", "FastAPI"],
    githubUrl: "https://github.com/Karthikeya1825",
    liveUrl: null,
    highlights: [
      "Developing an end-to-end vision pipeline that segments distinct food items using foundation segmentation models (Segment Anything).",
      "Estimates volumetric portion sizes by coupling monocular depth estimation (Depth Anything) with a calibrated scale reference.",
      "Converts volumetric estimates to precise calorie and macronutrient values using Indian Food Composition Tables (IFCT).",
      "Evaluating directly against vision-language-model (VLM) baselines, focusing on Indian meal compositions and reporting calibrated uncertainty intervals."
    ]
  },
  {
    id: "medical-report-explainer",
    title: "Medical Report Explainer — Gemini Pro + RAG",
    status: "Completed",
    category: "Multimodal AI & RAG",
    subtitle: "Grounded Clinical Parsing with WHO/ICMR Evidence Citations",
    shortDescription: "Multimodal clinical assistant extracting lab values and medications into structured JSON, backed by a retrieval-augmented pipeline over verified guidelines.",
    tags: ["Python", "FastAPI", "Gemini Pro", "ChromaDB", "Streamlit"],
    githubUrl: "https://github.com/Karthikeya1825",
    liveUrl: null,
    highlights: [
      "Built a multimodal extraction assistant parsing diagnostic reports and medication regimens from images and PDFs into structured JSON using Gemini Pro.",
      "Engineered a retrieval-augmented generation (RAG) pipeline over indexed WHO and ICMR clinical guidelines and drug leaflets via ChromaDB.",
      "Guarantees that every medical explanation and patient summary provides direct, verifiable source citations."
    ]
  },
  {
    id: "road-incident-detection",
    title: "Road Incident Detection & Police Alert System",
    status: "Completed",
    category: "Video Action Recognition",
    subtitle: "Real-Time Pose Analysis & Automated Law Enforcement Dispatch",
    shortDescription: "Real-time edge video pipeline detecting physical fights and snatching with pose tracking and action recognition, dispatching verified video alerts to police.",
    tags: ["Python", "YOLO", "MediaPipe", "PyTorch", "OpenCV", "FastAPI"],
    githubUrl: "https://github.com/Karthikeya1825",
    liveUrl: null,
    highlights: [
      "Constructed a real-time video surveillance pipeline detecting fights, physical violence, and snatching using person tracking and pose features.",
      "Integrated a spatio-temporal video action-recognition model with YOLO multi-object detection and MediaPipe skeletal estimation.",
      "Implemented temporal smoothing and verification steps to minimize false alarms under challenging outdoor surveillance conditions.",
      "Dispatches immediate clip and timestamped snapshot alerts to a centralized police dashboard via Telegram and Twilio."
    ]
  },
  {
    id: "road-damage-waterlogging",
    title: "Road Damage & Waterlogging Monitor",
    status: "Completed",
    category: "Geospatial ML & CV",
    subtitle: "YOLO Defect Segmentation & Predictive Precipitation Deterioration",
    shortDescription: "YOLO detector identifying potholes and cracks with OpenStreetMap geotagging, combined with XGBoost/Prophet weather-driven flood and deterioration forecasting.",
    tags: ["Python", "YOLO", "GeoPandas", "XGBoost", "Prophet", "Folium"],
    githubUrl: "https://github.com/Karthikeya1825",
    liveUrl: null,
    highlights: [
      "Built a YOLO-based detector for road potholes, structural cracks, and waterlogged patches from mobile and vehicle feeds.",
      "Geotagged defect detections and mapped coordinates directly to road segments using GeoPandas and OpenStreetMap vector data.",
      "Designed a rainfall-driven forecasting module (XGBoost and Prophet) predicting road deterioration speed and flash flooding risks per road segment.",
      "Rendered interactive geospatial road maps via Folium for municipal planning and proactive infrastructure repair."
    ]
  },
  {
    id: "folio-book-platform",
    title: "Folio — Online Book Reading Platform",
    status: "Completed",
    category: "Full-Stack (MERN)",
    subtitle: "Synchronized Reading Platform with Public Domain Catalogue",
    shortDescription: "Full-stack reading platform with JWT auth, customizable typography reader, cross-device sync, 35+ Project Gutenberg titles, and Zod security validation.",
    tags: ["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Framer Motion"],
    githubUrl: "https://github.com/Karthikeya1825",
    liveUrl: null,
    highlights: [
      "Built and deployed a full-stack digital reading platform with secure JWT authentication and customizable typography controls.",
      "Implemented cross-device reading progress synchronization, highlight annotations, and chapter bookmarks.",
      "Seeded with 10 full-text classic books and an indexed 35-title catalogue curated from Project Gutenberg.",
      "Hardened backend with Zod schema validation, API rate limiting, admin console, and automated unit/integration tests."
    ]
  }
];

export const experienceData = [
  {
    title: "Full-Stack Development Intern",
    company: "Edunet Foundation",
    location: "Remote",
    period: "2025",
    type: "Internship",
    description: "Developed a full-stack goal tracking application using modern web architectures and RESTful microservices.",
    bulletPoints: [
      "Developed a full-stack goal tracking application using Node.js, Express.js, and MongoDB.",
      "Designed RESTful APIs and integrated MongoDB database with robust schema validation.",
      "Built responsive frontend using HTML, CSS, and modern JavaScript."
    ],
    technologies: ["Node.js", "Express.js", "MongoDB", "RESTful APIs", "JavaScript", "HTML/CSS"]
  }
];

export const educationData = {
  degrees: [
    {
      degree: "B.Tech. in Computer Science and Engineering",
      institution: "SRM University AP",
      location: "Amaravathi, India",
      period: "Aug. 2023 – May 2027",
      status: "Undergraduate Degree",
      highlights: [
        "Core coursework: Data Structures & Algorithms, Deep Learning, Computer Vision, Operating Systems, Database Management Systems.",
        "Actively seeking Master's admissions in Computer Science, Machine Learning, or Data Science."
      ]
    }
  ],
  certifications: [
    {
      title: "Oracle Certified Professional: Java SE 17 Developer",
      issuer: "Oracle",
      year: "Certified",
      score: "Score: 82%",
      description: "Comprehensive certification covering OOP, concurrency, Java memory model, streams, and modular architectures."
    },
    {
      title: "MongoDB Certification — MongoDB Associate Developer",
      issuer: "MongoDB",
      year: "2026",
      score: "Associate Developer",
      description: "Validation in document data modeling, indexing optimization, aggregation pipelines, and driver integration."
    },
    {
      title: "Full-Stack Development Internship Certification",
      issuer: "Edunet Foundation",
      year: "2025",
      score: "Internship Graduate",
      description: "Awarded for the design and deployment of modern full-stack web applications."
    }
  ]
};

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];
