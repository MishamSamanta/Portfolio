/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  Code, 
  Menu, 
  X, 
  Terminal, 
  Database, 
  Layout, 
  Cpu,
  User,
  Projector,
  Trophy,
  Hammer
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#home" className="text-[11px] font-black tracking-[0.2em] uppercase text-zinc-950">
          Portfolio / 2024
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="nav-link">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-zinc-950" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-0 w-full bg-white border-b border-zinc-200 p-6 flex flex-col gap-4 md:hidden"
        >
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-lg font-medium text-zinc-600 active:text-zinc-950"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="min-h-screen flex flex-col justify-center section-padding pt-40">
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-6xl"
    >
      <div className="text-[10px] font-bold uppercase tracking-[0.5em] text-zinc-400 mb-8">Creative Developer</div>
      <h1 className="mb-8">
        [Your Name]
      </h1>
      <p className="text-xl font-medium text-zinc-500 mb-12 max-w-xl italic leading-relaxed">
        "[Your Professional Title] — I build clean, functional web experiences with a focus on minimalist aesthetics."
      </p>
      <a href="#projects" className="btn-bold group">
        View Projects
      </a>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding bg-zinc-50 border-y border-zinc-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
      <div className="md:col-span-5">
        <h2 className="">Introduction</h2>
        <div className="space-y-6 text-zinc-600 leading-relaxed font-medium text-lg">
          <p>
            Hello! I'm a developer dedicated to crafting intuitive digital solutions. 
            I believe that great software is built at the intersection of robust functionality and elegant design.
          </p>
          <p>
            With a focus on modern web technologies, I enjoy tackling complex problems and turning them into 
            seamless user experiences. 
          </p>
        </div>
      </div>
      
      <div className="md:col-span-7">
        <h2 className="">Timeline / Education</h2>
        <div className="space-y-12">
          <div className="flex gap-12 group">
            <div className="text-[11px] font-black text-zinc-950 w-20 pt-1 tracking-widest">2020 — 2024</div>
            <div>
              <h4 className="text-sm font-black uppercase mb-1">Bachelor of Computer Science</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">University Name • Academic Honors</p>
            </div>
          </div>
          <div className="flex gap-12 group opacity-50 hover:opacity-100 transition-opacity">
            <div className="text-[11px] font-black text-zinc-950 w-20 pt-1 tracking-widest">2018 — 2020</div>
            <div>
              <h4 className="text-sm font-black uppercase mb-1">High School Diploma</h4>
              <p className="text-xs text-zinc-500 uppercase tracking-widest">School Name • General Excellence</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => {
  const projects = [
    {
      title: "Portfolio Website",
      desc: "Designed with a focus on minimalism and accessibility.",
      tags: ["HTML", "CSS", "JS"],
      demo: "#",
      source: "#",
    },
    {
      title: "Task Manager App",
      desc: "Real-time updates and intuitive task organization.",
      tags: ["React", "Node.js"],
      demo: "#",
      source: "#",
    },
    {
      title: "Weather Dashboard",
      desc: "Weather visualization using modern web APIs.",
      tags: ["JavaScript", "API"],
      demo: "#",
      source: "#",
    },
    {
      title: "Blog Platform",
      desc: "Markdown system with optimized reading experience.",
      tags: ["Next.js", "MongoDB"],
      demo: "#",
      source: "#",
    },
  ];

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="">Selected Works</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
          {projects.map((project, idx) => (
            <div key={idx} className="border-link group">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-black uppercase tracking-tight group-hover:translate-x-2 transition-transform duration-300">{project.title}</h3>
                <div className="flex gap-4">
                  <a href={project.demo} className="text-[10px] font-bold uppercase hover:underline">Live</a>
                  <a href={project.source} className="text-[10px] font-bold uppercase hover:underline italic text-zinc-400">Code</a>
                </div>
              </div>
              <p className="text-zinc-500 text-sm mb-6 font-medium leading-relaxed">{project.desc}</p>
              
              <div className="flex flex-wrap gap-4">
                {project.tags.map(tag => (
                  <span key={tag} className="text-[9px] font-black uppercase tracking-[0.1em] text-zinc-300 group-hover:text-zinc-950 transition-colors">
                    • {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Achievements = () => {
  const achievements = [
    {
      title: "Dean's List",
      date: "2024",
      desc: "Academic excellence award."
    },
    {
      title: "Hackathon Winner",
      date: "2023",
      desc: "First place at Global Tech Jam."
    },
    {
      title: "AWS Certified",
      date: "2024",
      desc: "Cloud Practitioner certification."
    },
  ];

  return (
    <section id="achievements" className="section-padding bg-zinc-950 text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="!text-zinc-500">Recognition</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {achievements.map((item, idx) => (
            <div key={idx} className="group">
              <div className="text-[10px] font-black text-zinc-600 mb-4 tracking-[0.2em]">{item.date}</div>
              <h3 className="text-lg font-black uppercase mb-3 leading-tight group-hover:text-amber-200 transition-colors">{item.title}</h3>
              <p className="text-zinc-400 text-xs font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      skills: ["HTML5", "CSS3", "JavaScript", "React"],
    },
    {
      title: "Backend",
      skills: ["Node.js", "Python", "SQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "VS Code", "Figma"],
    },
    {
      title: "Soft Skills",
      skills: ["Communication", "Strategy", "Collaboration"],
    },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <h2 className="">Capabilities</h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-12 gap-y-16">
          {skillCategories.map((category, idx) => (
            <div key={idx}>
              <h3 className="text-[11px] font-black uppercase tracking-widest text-zinc-950 mb-6 border-b border-zinc-200 pb-2">{category.title}</h3>
              <ul className="space-y-3">
                {category.skills.map(skill => (
                  <li key={skill} className="text-xs font-medium text-zinc-500 hover:text-zinc-950 transition-colors">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => (
  <section id="contact" className="section-padding border-t border-zinc-100">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24">
      <div>
        <h2 className="">Get In Touch</h2>
        <p className="text-zinc-500 mb-12 text-lg font-medium italic">"Every great project starts with a conversation."</p>
        
        <div className="space-y-8">
          <a href="mailto:example@email.com" className="group flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Email</div>
              <div className="text-sm font-bold">example@email.com</div>
            </div>
          </a>
          <a href="#" className="group flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
              <Linkedin size={18} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">LinkedIn</div>
              <div className="text-sm font-bold">@yourusername</div>
            </div>
          </a>
        </div>
      </div>

      <form className="space-y-4" onSubmit={e => e.preventDefault()}>
        <div>
          <label className="label-text">Your Name</label>
          <input type="text" placeholder="Alex Rivers" className="input-field" />
        </div>
        <div>
          <label className="label-text">Email Address</label>
          <input type="email" placeholder="alex@example.com" className="input-field" />
        </div>
        <div>
          <label className="label-text">Message</label>
          <textarea rows={4} placeholder="Tell me about your project" className="input-field resize-none" />
        </div>
        <button type="submit" className="btn-bold w-full mt-4">
          Send Message
        </button>
      </form>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 border-t border-zinc-100">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
      <div className="text-[10px] font-black uppercase text-zinc-400 tracking-[0.2em]">
        © {new Date().getFullYear()} [Your Name]
      </div>
      <div className="flex gap-8">
        <a href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">Github</a>
        <a href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">Linktree</a>
        <a href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">Resume</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Achievements />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
