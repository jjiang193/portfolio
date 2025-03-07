export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  {
    title: "Web Developer",
    icon: "web",
  },
  {
    title: "React Developer",
    icon: "mobile",
  },
  {
    title: "Backend Developer",
    icon: "backend",
  },
  {
    title: "Content Creator",
    icon: "creator",
  },
];

export const education = [
  {
    title: "Bachelor of Science in Computer Science",
    company_name: "University of Maryland, College Park",
    icon: "university",
    iconBg: "#383E56",
    date: "2023 - 2026",
    points: [
      "Relevant coursework: Data Structures and Algorithms, Web Development, Database Systems, Software Engineering, Operating Systems, Compilers",
      "GPA: 3.94/4.0",
      "Dean's List: All semesters",
    ],
  },
  {
    title: "High School Diploma",
    company_name: "Conestoga High School",
    icon: "school",
    iconBg: "#E6DEDD",
    date: "2019-2023",
    points: [
      "Graduated with honors"
    ],
  },
];

export const experiences = [
  {
    title: "Fullstack and Machine Learning Developer",
    company_name: "Amazon Project Kuiper with UMD App Dev",
    icon: "company",
    iconBg: "#383E56",
    date: "Aug 2024 - Jan 2025",
    points: [
      "Developed a web application to monitor and inform users about abnormal satellite behavior using React.js,Figma, Vite, FastAPI, and TimeScaleDB",
      "Designed a machine learning pipeline incorporating XGBoost and CNN models to predict satellite behavior with a recall of 0.88, ranking in the top 3 of an MIT-sponsored competition.",
      "Created an isolation-forest model to detect anomalous satellites, enabling Project Kuiper teams to make data-driven decisions.",
      " Scaled the application to track over 2,000 satellites and process over 15,000 data points daily using AWS services",
    ],
  },
  {
    title: "Fullstack Developer",
    company_name: "Children's National Hospital with UMD App Dev",
    icon: "company2",
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Jun 2024",
    points: [
        "Automated cervical rotation testing and newborn photo capture processes, projected to benefit over 15,000 patients annually and reduce manual workload for hospital staff.",
        "Developed a machine learning model using self-attention mechanisms to calculate cervical rotation from facial rotation, achieving a Mean Absolute Error of 2.66 degrees and ranking 2nd on the BIWI Dataset.",
        "Implemented a CNN for detecting neutral facial expressions in newborns, incorporating wavelength filtering and template matching to achieve 70% accuracy.",
        "Architected and built a full-stack application using Figma, React.js, Node.js, MongoDB, AWS, and Docker, streamlining manual tasks and improving staff productivity"
    ],
  },
];

export const technologies = [
  {
    name: "HTML 5",
    icon: "html",
  },
  {
    name: "CSS 3",
    icon: "css",
  },
  {
    name: "JavaScript",
    icon: "javascript",
  },
  {
    name: "TypeScript",
    icon: "typescript",
  },
  {
    name: "React JS",
    icon: "reactjs",
  },
  {
    name: "Redux Toolkit",
    icon: "redux",
  },
  {
    name: "Tailwind CSS",
    icon: "tailwind",
  },
  {
    name: "Node JS",
    icon: "nodejs",
  },
  {
    name: "MongoDB",
    icon: "mongodb",
  },
  {
    name: "Three JS",
    icon: "threejs",
  },
  {
    name: "git",
    icon: "git",
  },
  {
    name: "figma",
    icon: "figma",
  },
];

export const projects = [
  {
    name: "High-Performance Order Book System",
    description:
      "A low-latency order book implementation in C++ that processes market data with sub-microsecond performance. Features lock-free data structures, zero-copy memory management, and SIMD optimization to achieve maximum throughput. Demonstrates advanced systems programming skills through custom memory allocators, cache-efficient data structures, and nanosecond-precision benchmarking.",
    tags: [
      {
        name: "C++",
        color: "blue-text-gradient",
      },
      {
        name: "Multi-Threading",
        color: "green-text-gradient",
      },
    ],
    image: "project1",
    source_code_link: "https://github.com/",
  },
  {
    name: "Incoming",
    description:
      "n/a",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: "project2",
    source_code_link: "https://github.com/",
  },
  {
    name: "n/a",
    description:
      "n/a",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: "project3",
    source_code_link: "https://github.com/",
  },
];

export const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but this developer proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like this person does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After this developer optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
]; 