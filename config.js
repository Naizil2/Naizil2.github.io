/* =====================================================================
   SITE CONFIG — every setting for your portfolio lives in this file.
   Edit the values below, save, and refresh the page.
   ===================================================================== */
window.CONFIG = {
  /* ---- Basics ---- */
  siteTitle: "Naizil Francis Dcosta — Portfolio",
  name: "Naizil Francis Dcosta",
  role: "Programmer Analyst @ Cognizant",
  tagline: "Moment Contact Center | Conversational AI | Python",
  city: "Bengaluru, Karnataka, India",
  email: "naizilfrancis07@gmail.com",
  photo: "",                            // e.g. "images/photo.jpg" (put the file in the images folder)

  /* ---- Text ---- */
  badge: "Programmer Analyst @ Cognizant",
  heroText: "Computer Science graduate (AI & ML) working on Conversational AI, IVR automation and cloud-based contact centre technologies with Kore.ai, Amazon Connect, Amazon Lex and AWS.",
  bio: "Computer Science and Engineering graduate specialising in Artificial Intelligence and Machine Learning from Sahyadri College of Engineering and Management, currently working as a Programmer Analyst at Cognizant. My work centres on Conversational AI, IVR automation and cloud-based contact centre technologies, with hands-on exposure to Kore.ai, Amazon Connect, Amazon Lex and AWS services.",
  aboutExtra: "Beyond technical work, I served as Secretary of the SIGMA Association and took part in the Microsoft Learn Student Ambassadors (MLSA) community at college level. I’m driven by curiosity, continuous technical exploration and turning complex concepts into reliable, practical solutions.",
  footer: "© 2026 {name}. Designed & built with React.",

  /* ---- Look & feel ---- */
  defaultTheme: "dark",                 // "dark" or "light"
  typingMs: 1350,                       // how long your name takes to type (milliseconds)

  /* ---- Navigation (id must match a section id) ---- */
  nav: [["home", "Home"], ["about", "About"], ["experience", "Experience"], ["work", "Work"], ["education", "Education"], ["contact", "Contact"]],

  /* ---- Section headings: [small label, big heading] ---- */
  sections: {
    about: ["( 01 ) About", "A bit about me."],
    experience: ["( 02 ) Experience", "Where I’ve worked."],
    work: ["( 03 ) Selected work", "What I’ve worked on."],
    education: ["( 04 ) Education", "Learning & credentials."],
    contact: ["( 05 ) Contact", "Let’s connect."],
  },
  labels: { certifications: "Certifications", languages: "Languages", leadership: "Leadership & community" },

  /* ---- Skills (also shown in the scrolling strip) ---- */
  skills: ["Python", "SQL", "Java", "JavaScript", "REST APIs", "Spring Boot", "Conversational AI", "IVR Automation", "Kore.ai", "Amazon Connect", "Amazon Lex", "AWS", "Cyara", "OpenShift", "Argo", "Image Processing", "Machine Learning", "Deep Learning", "Computer Vision", "NLP", "MATLAB"],

  /* ---- Experience: points are [label, text] ---- */
  experience: [
    {
      role: "Programmer Analyst", org: "Cognizant", place: "Bengaluru, Karnataka", period: "Jun 2026 – Present",
      points: [
        ["Cloud infrastructure", "Worked with Amazon Connect and associated AWS services."],
        ["Call flow analysis", "Analysed Amazon Connect contact flows and Amazon Lex configurations to understand call-routing logic and validate functionality through testing."],
        ["AWS integrations", "Explored integrations involving Amazon DynamoDB, Lex, Lambda, CloudWatch and Amazon Connect."],
        ["Backend development", "Working knowledge of REST APIs, Spring Boot architecture and Java."],
      ],
    },
    {
      role: "Programmer Analyst Trainee", org: "Cognizant", place: "Bengaluru, Karnataka", period: "Jun 2025 – Jun 2026",
      points: [
        ["Bot management", "Managed Conversational AI bots across production environments."],
        ["Platform support", "Investigated platform issues and coordinated resolutions with internal teams and platform support."],
        ["Bug fixes & troubleshooting", "Diagnosed and resolved defects in IVR routing logic and Conversational AI bot workflows."],
        ["Performance & reliability", "Monitored bot stability, response performance and end-to-end functionality."],
        ["Call flow validation", "Executed call flow testing to verify conversational accuracy and functional consistency."],
        ["Test automation", "Ran automated testing through Cyara for call flow testing and quality assurance."],
        ["Production maintenance", "Continuous monitoring and maintenance to uphold service reliability."],
      ],
    },
    {
      role: "Student Intern", org: "Cognizant", place: "Chennai, Tamil Nadu", period: "Mar 2025 – Jun 2025",
      points: [
        ["Programming", "Python (basic & intermediate), SQL, JavaScript fundamentals."],
        ["Conversational AI", "Exposure to Kore.ai for IVR call and messaging automation."],
        ["Contact centre", "Understanding of contact centre workflows and IVR call flows."],
        ["Professional development", "Team collaboration, interpersonal communication and workplace coordination."],
      ],
    },
    {
      role: "Summer Intern", org: "Dept. of CSE (AI & ML)", place: "Mangaluru, Karnataka", period: "Oct 2023 – Nov 2023",
      points: [
        ["Computer vision", "Explored foundational concepts of visual data processing and image analysis."],
        ["Image processing", "Applied MATLAB techniques for image manipulation and feature extraction."],
        ["Bio-inspired algorithms", "Studied computational approaches inspired by biological processes."],
        ["Practical implementation", "Developed a MATLAB-based facial emotion classification prototype using facial feature recognition."],
      ],
    },
  ],

  /* ---- Selected work: t = title, d = description, s = tools ---- */
  projects: [
    { t: "Conversational AI bot management", d: "Managed Conversational AI bots across production environments, monitoring stability, response performance and end-to-end functionality.", s: ["Conversational AI", "IVR routing", "Monitoring"] },
    { t: "Call flow testing & automation", d: "Executed call flow testing and automated quality assurance with Cyara to verify conversational accuracy and functional consistency.", s: ["Cyara", "IVR", "QA"] },
    { t: "Amazon Connect & Lex call-flow analysis", d: "Analysed Amazon Connect contact flows and Amazon Lex configurations to understand call-routing logic and validate functionality through testing.", s: ["Amazon Connect", "Amazon Lex", "Lambda"] },
    { t: "Facial emotion classification prototype", d: "Built a MATLAB-based prototype that classifies facial emotions using facial feature recognition (summer internship).", s: ["MATLAB", "Image Processing", "Computer Vision"] },
  ],

  /* ---- Education ---- */
  education: [
    { school: "Sahyadri College of Engineering & Management", degree: "Bachelor of Engineering (BE) — Computer Science & Engineering (AI & ML)", period: "Dec 2021 – May 2025" },
    { school: "Indraprastha Pre University College, Uppinangady", degree: "Pre-University", period: "May 2019 – Jul 2021" },
    { school: "Indraprastha Vidyalaya, Uppinangady", degree: "School", period: "May 2007 – Apr 2019" },
  ],
  certifications: ["Automation AI Advanced", "Automation AI Basic", "Search AI Basic", "Amazon Connect Communication Specialist"],
  languages: [["Hindi", "Professional"], ["English", "Professional"], ["Kannada", "Professional"], ["Tulu", "Native"], ["Konkani", "Native"]],
  leadership: [
    { t: "Secretary, SIGMA Association", d: "Contributed to student leadership as Secretary of the association." },
    { t: "Microsoft Learn Student Ambassadors", d: "Participated in the MLSA community at college level." },
  ],

  /* ---- Numbers under the hero: [value, label] ---- */
  stats: [["1y 9m", "With Cognizant"], ["4", "Certifications"], ["5", "Languages"]],

  /* ---- Social links: [label, url] ---- */
  links: [["LinkedIn", "https://www.linkedin.com/in/naizil-francisd-costa"], ["GitHub", "https://github.com/naizil2"]],

  /* ---- Chatbot ---- */
  chat: {
    enabled: true,                      // false hides the chat button
    title: "Ask me anything",
    button: "Chat with me",
    placeholder: "Type a message…",
    greeting: "Hi! I’m the assistant for {name}’s portfolio. What would you like to know?",
    hello: "Hey! I’m {first}’s assistant. Ask me about experience, skills, education or how to get in touch.",
    hire: "The best way to reach out is by email or on LinkedIn — see the Contact section.",
    fallback: "I’m not sure about that one. Try asking about experience, projects, skills, education or contact.",
    chips: ["Experience", "Projects", "Skills", "Contact"],
  },
};
