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
  Terminal, 
  Database, 
  Layout, 
  Cpu,
  User,
  Projector,
  Trophy,
  Hammer
} from 'lucide-react';
import PillNav from './components/PillNav';
import SplitText from './components/SplitText';

// --- Data ---
const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Projects', href: '#projects' },
  { label: 'Recognition', href: '#achievements' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
];

const logo = "https://ui-avatars.com/api/?name=M&background=000&color=fff&rounded=true";

// --- Components ---


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
        <SplitText 
          text="Misham" 
          delay={100} 
          className="text-[90px] md:text-[140px] leading-[0.85] font-black tracking-tighter uppercase"
        />
      </h1>
      <p className="text-xl font-medium text-zinc-500 mb-12 max-w-xl italic leading-relaxed">
        "Full Stack Developer — I build clean, functional web experiences with a focus on minimalist aesthetics."
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
      title: "Academics",
      date: "2026",
      desc: "Academic excellence award."
    },
    {
      title: "Hackathon Winner",
      date: "2023",
      desc: "First place at Global Tech Jam."
    },
    {
      title: "FED KIIT Society",
      date: "2026",
      desc: "Working at FED KIIT, contributing to technical projects and community growth.",
      link: "https://www.fedkiit.com/"
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
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="block hover:translate-x-1 transition-transform">
                  <h3 className="text-lg font-black uppercase mb-3 leading-tight group-hover:text-amber-200 transition-colors flex items-center gap-2">
                    {item.title} <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                </a>
              ) : (
                <h3 className="text-lg font-black uppercase mb-3 leading-tight group-hover:text-amber-200 transition-colors">{item.title}</h3>
              )}
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
      skills: ["Git", "VS Code", "Figma", "Premiere Pro"],
    },
    {
      title: "Soft Skills",
      skills: ["Video Editor", "Photographer", "Artist", "Communication"],
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
          <a href="mailto:misham.samanta@gmail.com" className="group flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
              <Mail size={18} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">Email</div>
              <div className="text-sm font-bold">misham.samanta@gmail.com</div>
            </div>
          </a>
          <a href="https://www.linkedin.com/in/misham-samanta-33b838224/" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-6">
            <div className="w-12 h-12 flex items-center justify-center bg-zinc-100 text-zinc-400 group-hover:bg-zinc-950 group-hover:text-white transition-all">
              <Linkedin size={18} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase text-zinc-400 tracking-widest">LinkedIn</div>
              <div className="text-sm font-bold">@misham-samanta</div>
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
        © {new Date().getFullYear()} Misham
      </div>
      <div className="flex gap-8">
        <a href="https://github.com/misham-samanta" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">Github</a>
        <a href="https://www.linkedin.com/in/misham-samanta-33b838224/" target="_blank" rel="noopener noreferrer" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">LinkedIn</a>
        <a href="#" className="text-[9px] font-black uppercase tracking-widest text-zinc-400 hover:text-zinc-950">Resume</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      <PillNav 
        logo={logo} 
        items={navItems} 
        baseColor="#000" 
        pillColor="#fff"
        pillTextColor="#000"
        hoveredPillTextColor="#fff"
      />
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
