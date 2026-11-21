/* =====================================================================
   SITE CONFIG — every setting for your portfolio lives in this file.
   Edit the values below, save, and refresh the page.
   ===================================================================== */
window.CONFIG = {
  /* ---- Basics ---- */
  siteTitle: "Your Name — Portfolio",   // text shown on the browser tab
  name: "Your Name",
  role: "Full-stack developer & designer",
  city: "Bengaluru, India",
  email: "hello@yourname.com",
  photo: "",                            // e.g. "images/photo.jpg" (put the file in the images folder)

  /* ---- Text ---- */
  badge: "Available for new projects",  // small pill above your name
  bio: "I design and build fast, minimal, thoughtful web products. I care about clean interfaces, solid engineering and the small details that make software feel good.",
  aboutExtra: "When I’m not coding, I’m exploring typography, tinkering with side projects and learning something new.",
  footer: "© 2026 {name}. Designed & built with React.",   // {name} is replaced by your name

  /* ---- Look & feel ---- */
  defaultTheme: "dark",                 // "dark" or "light" (what first-time visitors see)
  typingMs: 1350,                       // how long your name takes to type (milliseconds)

  /* ---- Navigation (id must match a section: home, about, work, contact) ---- */
  nav: [["home", "Home"], ["about", "About"], ["work", "Work"], ["contact", "Contact"]],

  /* ---- Section headings: [small label, big heading] ---- */
  sections: {
    about: ["( 01 ) About", "Craft over noise."],
    work: ["( 02 ) Selected work", "Things I’ve built."],
    contact: ["( 03 ) Contact", "Have an idea?"],
  },

  /* ---- Skills (also shown in the scrolling strip) ---- */
  skills: ["React", "TypeScript", "Node.js", "Next.js", "Python", "PostgreSQL", "Figma", "Tailwind", "AWS"],

  /* ---- Projects: t = title, d = description, s = tools used ---- */
  projects: [
    { t: "Orbit Dashboard", d: "Real-time analytics dashboard with live charts and team workspaces.", s: ["React", "D3", "WebSockets"] },
    { t: "Quill Notes", d: "A distraction-free, markdown-first notes app with offline sync.", s: ["Next.js", "Postgres", "PWA"] },
    { t: "Pixel Market", d: "Headless e-commerce storefront with blazing page speeds.", s: ["TypeScript", "Stripe", "Edge"] },
  ],

  /* ---- Numbers under the hero: [value, label] ---- */
  stats: [["4+", "Years experience"], ["25", "Projects shipped"], ["12", "Happy clients"]],

  /* ---- Social links: [label, url] ---- */
  links: [["GitHub", "https://github.com/"], ["LinkedIn", "https://linkedin.com/"], ["Twitter", "https://twitter.com/"]],

  /* ---- Chatbot ---- */
  chat: {
    enabled: true,                      // false hides the chat button
    title: "Ask me anything",
    button: "Chat with me",
    placeholder: "Type a message…",
    greeting: "Hi! I’m the assistant for {name}’s portfolio. What would you like to know?",
    hello: "Hey! I’m {first}’s assistant. Ask me about projects, skills or how to get in touch.",
    hire: "Yes — open to freelance projects and full-time roles. Best way to start is an email.",
    fallback: "I’m not sure about that one. Try asking about projects, skills, availability or contact.",
    chips: ["Projects", "Skills", "Hire you?", "Contact"],   // quick-reply buttons
  },
};
