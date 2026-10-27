/**
 * PORTFOLIO DATA CONFIGURATION
 * Edit your personal information, projects, skills, journey, and links in this single file.
 */

export const personalInfo = {
  name: "Mayank Gangwar",
  monogram: "MG",
  role: "Founder & AI Builder",
  titles: [
    "Founder & CEO",
    "AI Builder",
    "Entrepreneur",
    "B.Tech CSE Student"
  ],
  location: "Jaipur, Rajasthan, India",
  email: "mayank.gangwar.hq@gmail.com",
  socials: {
    github: "https://github.com/mayankgangwarhq",
    linkedin: "https://www.linkedin.com/in/mayankgangwar-tech/",
    x: "https://x.com/mayankfounder",
    whatsapp: "https://wa.me/919105539049?text=Hi%20Mayank%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20business%20opportunity.",
    // Update with your Instagram handle when ready
    instagram: "https://instagram.com/mayankgangwarhq",
  },
  hero: {
    greeting: "Hey, I'm Mayank Gangwar.",
    headline: "Building the Future with AI & Technology.",
    subheadline: "I'm Mayank Gangwar — a student, founder, and technology enthusiast exploring AI, healthcare, agriculture, and education through real-world projects.",
    description: "From healthcare innovation to agriculture and education, I'm exploring how technology can solve meaningful problems and create better experiences for people.",
    mainHeadline: "Building Ideas. Creating Impact.",
    tagline: "Learn. Build. Experiment. Repeat.",
    statusBadge: "Currently Building | Early-Stage Projects",
  },
  about: {
    badge: "Founder & Builder Overview",
    title: "Curious by nature. Driven by real-world problem solving.",
    lead: "I'm a B.Tech Computer Science and Engineering student based in Jaipur, Rajasthan, passionate about artificial intelligence, modern software engineering, and early-stage entrepreneurship.",
    bio: [
      "Rather than focusing purely on theoretical concepts, I believe the fastest way to grow is to build tangible prototypes that tackle genuine challenges.",
      "My current journey revolves around developing hands-on projects across high-impact domains — from digital healthcare assistance to modern agriculture support and accessible AI education.",
      "I am an early-stage founder actively learning, iterating on ideas, and collaborating with fellow builders who care about craft, technology, and creating meaningful impact."
    ],
    principles: [
      {
        title: "Learning Through Real Projects",
        desc: "Turning concepts into working code, interactive interfaces, and functional software prototypes."
      },
      {
        title: "Exploring AI-Powered Products",
        desc: "Leveraging modern AI tooling, LLM integrations, and rapid prototyping workflows."
      },
      {
        title: "Building Early-Stage Prototypes",
        desc: "Validating user pain points and testing assumptions with lightweight, iterative products."
      },
      {
        title: "Collaborating with Builders",
        desc: "Partnering with curious developers, designers, and domain enthusiasts who love solving hard problems."
      },
      {
        title: "Continuous Skill Improvement",
        desc: "Refining core programming logic, product design intuition, and frontend craft every single day."
      }
    ],
    // Image path for portrait. Place your photo in the public/ folder as mayank-gangwar.jpg
    portraitImage: "/mayank-gangwar.jpg",
    portraitPlaceholderText: "Founder Portrait (Place photo at /mayank-gangwar.jpg)"
  }
};

export const projectsData = [
  {
    id: "jivexa-health",
    name: "Jivexa Health",
    tagline: "AI-Powered Health. Connected Care.",
    category: "HealthTech",
    categories: ["HealthTech", "AI"],
    badgeCategory: "HealthTech | AI | Digital Healthcare",
    status: "Prototype / Testing",
    statusType: "live-prototype", // 'live-prototype' | 'in-dev' | 'early-stage'
    accentColor: "emerald",
    logoText: "J+",
    logoImage: "/jivexa-logo.jpg",
    featured: true,
    shortDescription:
      "An early-stage health-tech project exploring patient-focused digital healthcare experiences, health information assistance, health records, and connected care workflows.",
    fullDescription:
      "Jivexa Health is an exploratory health-technology prototype focused on simplifying patient engagement with their personal health data. It investigates how patient-centric user interfaces combined with conversational health intelligence can streamline routine record lookups, symptom context understanding, and seamless doctor-patient communication bridges.",
    disclaimer:
      "Important Note: Medical AI within Jivexa Health is developed strictly as an informational support tool and decision aid, never as a replacement for qualified clinical diagnosis or licensed healthcare professionals.",
    techStack: [
      "React",
      "Next.js / Vercel",
      "Tailwind CSS",
      "AI Health Intelligence APIs",
      "Responsive Web UI"
    ],
    keyFocusAreas: [
      "Patient-friendly digital health record navigation",
      "Contextual health information assistance",
      "Care workflow connectivity & doctor discovery concept",
      "Secure, privacy-conscious data presentation"
    ],
    url: "https://jivexa-one.vercel.app/",
    hasLiveUrl: true,
    actionLabel: "View Project"
  },
  {
    id: "agrinext",
    name: "AgriNext",
    tagline: "Technology for the Agricultural Ecosystem.",
    category: "AgriTech",
    categories: ["AgriTech", "AI"],
    badgeCategory: "AgriTech | Agriculture Technology",
    status: "Live Prototype",
    statusType: "live-prototype",
    accentColor: "green",
    logoText: "AN",
    featured: true,
    shortDescription:
      "An agriculture-focused project exploring how technology, modern web interfaces, and AI can support agricultural problem-solving and empower rural farmers.",
    fullDescription:
      "AgriNext is an agricultural technology initiative focused on providing accessible digital tools for farmers and agri-ecosystem stakeholders. It explores crop advisory dissemination, intuitive farm tracking, and digital tools tailored for rural and agricultural needs.",
    techStack: [
      "React",
      "Next.js / Vercel",
      "Tailwind CSS",
      "Agri Data Models",
      "Mobile-First UI"
    ],
    keyFocusAreas: [
      "Accessible digital agricultural advisories",
      "Crop problem-solving and insights",
      "Localized seasonal information",
      "Mobile-friendly rural workflows"
    ],
    url: "https://agrinextfrontend69.vercel.app/",
    hasLiveUrl: true,
    actionLabel: "View Project"
  },
  {
    id: "studybuddy-ai",
    name: "StudyBuddy AI",
    tagline: "AI-Assisted Learning & Academic Support.",
    category: "AI",
    categories: ["AI", "EdTech"],
    badgeCategory: "AI | Education Technology",
    status: "Live Application",
    statusType: "live-prototype",
    accentColor: "violet",
    logoText: "SB",
    featured: true,
    shortDescription:
      "An intelligent AI-assisted education platform exploring personalized study support, automated topic decomposition, and intuitive learning assistance for students.",
    fullDescription:
      "StudyBuddy AI is designed as a student's intelligent academic companion. It investigates interactive learning methods, personalized subject breakdown techniques, and contextual AI study aids that assist students in mastering complex engineering and computer science concepts.",
    techStack: [
      "React",
      "AI Prompt Engineering",
      "Interactive Learning UI",
      "TypeScript",
      "Web Architecture"
    ],
    keyFocusAreas: [
      "AI-driven study assistance and problem walkthroughs",
      "Topic decomposition and concept simplification",
      "Interactive curriculum-aligned revision",
      "Convenient access to personalized learning support"
    ],
    url: "https://mayank-study-buddy-ai-c93aa7ff.base44.app",
    hasLiveUrl: true,
    actionLabel: "View Project"
  },
  {
    id: "skillzen",
    name: "SkillZen",
    tagline: "Learn Today. Build Tomorrow.",
    category: "EdTech",
    categories: ["EdTech", "AI"],
    badgeCategory: "AI Education | Digital Skills",
    status: "Early-Stage Project",
    statusType: "early-stage",
    accentColor: "cyan",
    logoText: "SZ",
    featured: true,
    shortDescription:
      "A learning initiative concept focused on helping beginners explore AI tools, digital skills, practical projects, and technology with a beginner-friendly approach.",
    fullDescription:
      "SkillZen addresses the overwhelming learning curve newcomers face when entering the worlds of AI and modern tech. By focusing on project-first pathways rather than dry theory, SkillZen explores curated step-by-step roadmaps, hands-on mini-builds, and tool walkthroughs that empower students to build real software early.",
    techStack: [
      "Web Technologies",
      "Curated Learning Pathways",
      "Interactive Playgrounds",
      "Modern UI/UX"
    ],
    keyFocusAreas: [
      "Beginner-friendly AI tools onboarding",
      "Project-first digital skill progression",
      "Interactive developer cheat-sheets",
      "Community peer-learning architecture"
    ],
    url: null,
    hasLiveUrl: false,
    actionLabel: "Details Coming Soon"
  }
];

export const skillsData = {
  headline: "Skills & Technical Exploration",
  subtitle: "Tools, technologies, and foundational skills I am actively learning, applying in prototypes, and expanding every day.",
  disclaimer: "Showcasing active learning progression & hands-on application — no fabricated certifications or inflated numbers.",
  categories: [
    {
      title: "Programming & Web",
      badge: "Core Engineering",
      iconName: "Code2",
      description: "Foundations for building interactive web applications and software logic.",
      skills: [
        { name: "Python", status: "Active Learning & Scripting", focus: "Data logic, scripts & AI experimentation" },
        { name: "JavaScript", status: "Active Building", focus: "Modern ES6+, DOM manipulation & interactivity" },
        { name: "HTML5", status: "Proficient", focus: "Semantic structure & accessibility standards" },
        { name: "CSS3 / Tailwind", status: "Proficient", focus: "Responsive layouts, animations & design systems" },
        { name: "Git & GitHub", status: "Daily Workflow", focus: "Version control, branching & collaboration" }
      ]
    },
    {
      title: "AI & Technology",
      badge: "Intelligent Systems",
      iconName: "Cpu",
      description: "Modern AI tooling, LLM capabilities, and technical experimentation.",
      skills: [
        { name: "AI Tools & Workflows", status: "Hands-on", focus: "Productivity, research & rapid ideation" },
        { name: "AI-Assisted Development", status: "Daily Practice", focus: "Accelerated prototyping & pair-programming" },
        { name: "API Integration", status: "Actively Practicing", focus: "Connecting frontends to REST & AI endpoints" },
        { name: "Product Experimentation", status: "Continuous", focus: "Testing prototypes with real user scenarios" }
      ]
    },
    {
      title: "Product & Entrepreneurship",
      badge: "Founder Mindset",
      iconName: "Sparkles",
      description: "Skills essential for identifying real problems and shaping useful prototypes.",
      skills: [
        { name: "Idea Validation", status: "Active Focus", focus: "Assessing viability before writing heavy code" },
        { name: "Startup Exploration", status: "Founder Journey", focus: "Understanding business models & user value" },
        { name: "Problem Solving", status: "Core Mindset", focus: "Breaking complex issues into actionable steps" },
        { name: "UI/UX Fundamentals", status: "Design Practice", focus: "Clean visual hierarchy, glassmorphism & clarity" },
        { name: "Project Collaboration", status: "Team Oriented", focus: "Working with peers, soliciting honest feedback" }
      ]
    }
  ]
};

export const journeyData = {
  headline: "My Journey So Far",
  subtitle: "An honest look at my path from curious computer science student to building early-stage tech projects.",
  milestones: [
    {
      stage: "Step 01",
      title: "Beginning My B.Tech CSE Journey",
      subtitle: "Jaipur, Rajasthan",
      description:
        "Started my formal academic journey in Computer Science and Engineering, building foundational knowledge in computer architecture, algorithmic thinking, and core mathematics.",
      tag: "Academic Foundation",
      current: false
    },
    {
      stage: "Step 02",
      title: "Exploring Programming & Web Development",
      subtitle: "Hands-on Discovery",
      description:
        "Moved beyond textbooks into hands-on programming — diving into Python, JavaScript, semantic HTML, and responsive modern CSS. Began understanding how modern web architectures fit together.",
      tag: "Technical Roots",
      current: false
    },
    {
      stage: "Step 03",
      title: "Starting to Build Technology Projects",
      subtitle: "Project-First Philosophy",
      description:
        "Embraced the philosophy that building real projects accelerates learning tenfold. Started experimenting with Git version control, small utility scripts, and exploratory user interfaces.",
      tag: "First Builds",
      current: false
    },
    {
      stage: "Step 04",
      title: "Developing the Jivexa Health Prototype",
      subtitle: "Digital Healthcare Exploration",
      description:
        "Founded and built the first working prototype for Jivexa Health (deployed live at jivexa-one.vercel.app), exploring how conversational AI interfaces can make medical records and health information easier to navigate for everyday people.",
      tag: "HealthTech Milestone",
      current: false
    },
    {
      stage: "Step 05",
      title: "Exploring AgriNext, StudyBuddy AI & SkillZen",
      subtitle: "Expanding Horizons",
      description:
        "Expanded into other critical sectors: exploring technology support for farmers through AgriNext, student learning assistance via StudyBuddy AI, and beginner-focused AI education through SkillZen.",
      tag: "Multi-Domain Exploration",
      current: false
    },
    {
      stage: "Step 06",
      title: "Continuous Learning, Experimentation & Feedback",
      subtitle: "Present & Future",
      description:
        "Actively seeking mentorship, honest product feedback, and collaboration opportunities. Committed to improving my engineering depth and building software that addresses meaningful human needs.",
      tag: "Active Phase",
      current: true
    }
  ]
};

export const visionData = {
  headline: "Technology Should Solve Real Problems.",
  description:
    "My vision is to keep learning, build useful digital products, and explore how AI and technology can improve healthcare, agriculture, and education.",
  pillars: [
    {
      id: "healthcare",
      title: "Better Healthcare",
      tagline: "Empowering Patients & Supporting Care",
      color: "emerald",
      icon: "Activity",
      summary:
        "Healthcare systems can feel complex, intimidating, and fragmented. By pairing clean digital interfaces with supportive AI health guidance, we can help people understand their health information and connect more easily with care workflows.",
      bulletPoints: [
        "Patient-first digital health record clarity",
        "Empathetic, clear health information assistance",
        "Seamless communication bridges for routine care"
      ]
    },
    {
      id: "agriculture",
      title: "Smarter Agriculture",
      tagline: "Digital Tools for Ground-Level Problem Solving",
      color: "green",
      icon: "Wheat",
      summary:
        "Agriculture is the backbone of our economy, yet grassroots growers often lack modern, localized software tools. Technology can bring actionable advisory, timely insights, and simpler market access to the agricultural ecosystem.",
      bulletPoints: [
        "Localized, simple weather & advisory insights",
        "Accessible tools tailored for rural connectivity",
        "Streamlining supply and communication channels"
      ]
    },
    {
      id: "education",
      title: "Accessible Education",
      tagline: "Demystifying AI & Modern Skills for Everyone",
      color: "cyan",
      icon: "GraduationCap",
      summary:
        "High-quality tech and AI education should not be locked behind confusing jargon or expensive paywalls. Learning by building real things allows curious minds from any background to turn ambition into capability.",
      bulletPoints: [
        "Project-driven, hands-on learning pathways",
        "Beginner-friendly AI tools and workflows",
        "Encouraging a culture of building and sharing"
      ]
    }
  ]
};

// ==============================================================
// 📱 WHATSAPP BUSINESS CONFIGURATION
// ==============================================================
export const whatsappBusiness = {
  name: "WhatsApp Business",
  accountType: "WhatsApp Business Account",
  phoneNumber: "+91 9105539049",
  displayNumber: "+91 91055 39049",
  cleanNumber: "919105539049",
  directWaUrl: "https://wa.me/919105539049",
  prefilledMessage: "Hi Mayank, I visited your portfolio and would like to discuss a business opportunity.",
  chatUrl: "https://wa.me/919105539049?text=Hi%20Mayank%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20business%20opportunity.",
  status: "Active Business Channel",
  availability: "Available for business discussions, partnerships & inquiries",
};

export const contactInfo = {
  headline: "Have an Idea? Let's Connect.",
  description:
    "I'm open to meaningful conversations, constructive feedback, learning opportunities, and collaborations. Whether you're an experienced engineer, a fellow student builder, or curious about Jivexa Health, my inbox is always open.",
  email: "mayank.gangwar.hq@gmail.com",
  location: "Jaipur, Rajasthan, India",
  availability: "Open to discussions, hackathons & project collaborations",
  whatsapp: whatsappBusiness,
  // ==============================================================
  // 🔑 Web3Forms Access Key for mayank.gangwar.hq@gmail.com
  // ==============================================================
  web3formsAccessKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "d0ff4f5b-99a5-465f-9fb8-c65940aa78fe",
  web3formsKey: import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || "d0ff4f5b-99a5-465f-9fb8-c65940aa78fe",
  socials: [
    {
      name: "WhatsApp Business",
      url: "https://wa.me/919105539049?text=Hi%20Mayank%2C%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20business%20opportunity.",
      handle: "+91 91055 39049",
      icon: "WhatsApp",
      isBusiness: true
    },
    {
      name: "GitHub",
      url: "https://github.com/mayankgangwarhq",
      handle: "@mayankgangwarhq",
      icon: "Github"
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/mayankgangwar-tech/",
      handle: "Mayank Gangwar",
      icon: "Linkedin"
    },
    {
      name: "X (Twitter)",
      url: "https://x.com/mayankfounder",
      handle: "@mayankfounder",
      icon: "X"
    },
    {
      name: "Email",
      url: "mailto:mayank.gangwar.hq@gmail.com",
      handle: "mayank.gangwar.hq@gmail.com",
      icon: "Mail"
    },
    {
      name: "Instagram",
      url: "https://instagram.com/mayankgangwarhq",
      handle: "Placeholder (Editable)",
      icon: "Instagram",
      isPlaceholder: true
    }
  ]
};

export const educationData = {
  badge: "Academic Foundation",
  heading: "Education & Academic Background",
  subtitle: "Building my technical foundation while developing real-world technology projects.",
  degree: "Bachelor of Technology (B.Tech)",
  degreeAbbr: "B.Tech",
  branch: "Computer Science and Engineering (CSE)",
  institution: "Intellipaat School of Technology, in association with Vivekananda Global University (VGU), Jaipur",
  currentStage: "Undergraduate Student",
  statusBadge: "Currently Pursuing (Undergraduate)",
  location: "Jaipur, Rajasthan, India",
  academicFocus: [
    "Computer Science",
    "Programming",
    "Software Development",
    "Artificial Intelligence (AI)",
    "Emerging Technologies"
  ],
  academicSummary:
    "Gaining strong fundamentals in computer science principles and software engineering while simultaneously applying concepts through hands-on development, prototyping, and AI experimentation."
};

export const footerData = {
  copyright: "© 2026 Mayank Gangwar. Built with curiosity.",
  statement: "Learning today. Building for tomorrow.",
  links: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Journey", href: "#journey" },
    { name: "Vision", href: "#vision" },
    { name: "Contact", href: "#contact" }
  ]
};
