/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
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


const Header = () => (
  <header id="main-nav" className="fixed top-0 left-0 w-full h-[60px] border-b-[1.5px] border-ink bg-bg/80 backdrop-blur-sm z-50 px-6 md:px-12 flex items-center justify-between opacity-0 -translate-y-full transition-all duration-700 ease-out delay-100">
    <div className="text-xs font-bold uppercase tracking-widest cursor-default">
      misham.dzn
    </div>
    
    <nav className="hidden md:flex gap-6 items-center">
      {['Works', 'About', 'Contact'].map((item) => (
        <a 
          key={item} 
          href={`#${item.toLowerCase()}`}
          className="nav-link"
        >
          ({item})
        </a>
      ))}
    </nav>
    
    <div className="badge-status">
      <span>✳</span> OPEN TO WORK
    </div>
  </header>
);

const Hero = () => (
  <section id="home" className="pt-32 pb-16 px-6 md:px-12">
    <div className="relative border-b-[1.5px] border-ink pb-12">
      <div className="crosshair -top-1.5 -left-1.5">+</div>
      <div className="crosshair -top-1.5 -right-1.5">+</div>
      
      <div className="hero-hover-area">
        <h1 className="text-[14vw] leading-[0.85] tracking-[-0.04em] flex flex-wrap">
          <span className="serif-italic font-normal hero-name-serif">Misham</span>&nbsp;
          <span className="font-[800] hero-name-bold">Samanta</span>
        </h1>
      </div>
      
      <div className="mt-12 grid grid-cols-1 md:grid-cols-12 items-end gap-8 reveal-on-scroll">
        <div className="md:col-span-4">
          <p className="max-w-[280px]">
            Developer dedicated to crafting <span className="serif-italic underline decoration-accent decoration-2 underline-offset-4">intuitive</span> digital solutions. 
            Currently <span className="serif-italic underline decoration-accent decoration-2 underline-offset-4">exploring</span> clean, functional web experiences.
          </p>
        </div>
        
        <div className="md:col-span-4 flex justify-center">
          <div className="image-reveal inline-block">
            <img 
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=600" 
              alt="Work setup" 
              className="w-full max-w-[320px] aspect-[4/5] object-cover border-[1.5px] border-ink"
            />
          </div>
        </div>
        
        <div className="md:col-span-4 md:text-right">
          <p className="label-eyebrow mb-4">Focus On</p>
          <div className="text-sm font-medium space-y-1">
            <p>Full Stack Development</p>
            <p>UI Design · Interaction</p>
            <p>Based in Jamshedpur</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="section-padding reveal-on-scroll">
    <SectionHeading outline="About" solid="ABOUT ME" />
    <div className="grid md:grid-cols-12 gap-12 border-b-[1.5px] border-ink pb-24">
      <div className="md:col-span-4">
        <h2 className="label-eyebrow mb-12">Timeline / Education</h2>
        <div className="space-y-16">
          {['2025 — 2029', '2024 — 2025'].map((period, i) => (
            <a 
              key={i}
              href={i === 0 ? "https://maps.app.goo.gl/4bYma1Z4nyrEgwx28" : "https://maps.app.goo.gl/65qehiDw8u2BXzWv5"} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="block group reveal-on-scroll"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <div className="text-[11px] font-bold mb-2 opacity-50">{period}</div>
              <h4 className="text-xl font-[800] uppercase mb-2 group-hover:text-accent transition-all underline underline-offset-4 decoration-accent decoration-0 group-hover:decoration-2">
                {i === 0 ? 'B.Tech in CSE' : 'School Diploma'}
              </h4>
              <p className="text-sm opacity-60">
                {i === 0 ? 'KIIT University · ' : 'Jusco School Kadma · '}
                <span className="serif-italic">{i === 0 ? 'First Year' : 'Jamshedpur'}</span>
              </p>
            </a>
          ))}
        </div>
      </div>
      
      <div className="md:col-span-8 md:pl-24 reveal-on-scroll">
        <h2 className="label-eyebrow mb-12">Personal Narrative</h2>
        <div className="text-2xl md:text-4xl leading-[1.2] font-normal max-w-2xl">
          I believe that great software is built at the intersection of <span className="serif-italic text-accent">robust functionality</span> and <span className="serif-italic text-accent">elegant design</span>. Focus on modern web technologies, tackling <span className="serif-italic underline decoration-accent decoration-2 underline-offset-[6px]">complex problems</span> and turning them into seamless user experiences.
        </div>
      </div>
    </div>
  </section>
);

const MarqueeStrip = () => {
  const items1 = [
    "FULL STACK DEVELOPER",
    "OPEN TO WORK",
    "REACT · NODE.JS · PYTHON",
    "BASED IN JAMSHEDPUR",
    "AVAILABLE FOR FREELANCE",
    "LET'S BUILD SOMETHING"
  ];
  
  const items2 = [
    "MISHAM.DZN",
    "PORTFOLIO 2025",
    "CREATIVE DEVELOPER",
    "UI · UX · CODE",
    "AVAILABLE NOW"
  ];

  const renderGroup = (items: string[], textColor: string, key: any) => (
    <div key={key} className={`marquee-text ${textColor}`}>
      {items.map((item, i) => (
        <React.Fragment key={i}>
          <span>{item}</span>
          <span className="marquee-sep">✳</span>
        </React.Fragment>
      ))}
    </div>
  );

  return (
    <div className="py-[60px] reveal-on-scroll">
      <div className="bg-ink marquee-strip border-y-[1.5px] border-ink">
        <div className="marquee-inner">
          {[...Array(6)].map((_, i) => renderGroup(items1, "text-bg", i))}
        </div>
      </div>
      <div className="bg-accent marquee-strip border-b-[1.5px] border-ink">
        <div className="marquee-inner-reverse">
          {[...Array(6)].map((_, i) => renderGroup(items2, "text-ink", i))}
        </div>
      </div>
    </div>
  );
};

const SectionHeading = ({ outline, solid }: { outline: string; solid: string }) => (
  <div className="section-heading-wrap">
    <span className="section-heading-outline">{outline}</span>
    <span className="section-heading-solid">{solid}</span>
  </div>
);

const Works = () => {
  const projects = [
    { title: "Portfolio Website", desc: "Designed with a focus on minimalism and accessibility.", tags: ["HTML", "CSS", "JS"] },
    { title: "Task Manager App", desc: "Real-time updates and intuitive task organization.", tags: ["React", "Node.js"] },
    { title: "Weather Dashboard", desc: "Weather visualization using modern web APIs.", tags: ["JavaScript", "API"] },
    { title: "Blog Platform", desc: "Markdown system with optimized reading experience.", tags: ["Next.js", "MongoDB"] },
  ];

  return (
    <section id="works" className="section-padding reveal-on-scroll">
      <SectionHeading outline="Projects" solid="WORKS" />
      <h2 className="label-eyebrow mb-16">Selected Works</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-16">
        {projects.map((project, idx) => (
          <div key={idx} className="group relative brutal-card p-10 reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <div className="crosshair -top-1.5 -left-1.5 opacity-0 group-hover:opacity-100 transition-opacity">+</div>
            <div className="flex justify-between items-end border-b-[1.5px] border-ink pb-4 mb-4">
              <h3 className="text-3xl font-[800] uppercase tracking-tighter transition-all group-hover:text-accent">{project.title}</h3>
              <div className="flex gap-4 mb-1">
                <a href="#" className="text-[11px] font-bold uppercase border-b-[1.5px] border-ink hover:text-accent transition-colors">Link</a>
              </div>
            </div>
            <p className="text-sm max-w-sm mb-6 opacity-60 leading-relaxed">{project.desc}</p>
            <div className="flex gap-6">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] font-bold uppercase tracking-widest opacity-40 group-hover:opacity-100 transition-opacity">({tag})</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const Capabilities = () => {
  const categories = [
    { title: "FRONTEND", skills: ["HTML5", "CSS3", "JavaScript", "React"] },
    { title: "BACKEND", skills: ["Node.js", "Python", "SQL"] },
    { title: "TOOLS", skills: ["Git", "VS Code", "Figma", "Premiere"] },
    { title: "SOFT SKILLS", skills: ["Video Editor", "Art", "Camera", "Strategy"] },
  ];

  return (
    <section id="skills" className="section-padding reveal-on-scroll">
      <SectionHeading outline="Skills" solid="EXPERTISE" />
      <div className="skills-grid">
        {categories.map((cat, idx) => (
          <div key={idx} className="skill-category reveal-on-scroll" style={{ transitionDelay: `${idx * 0.1}s` }}>
            <h3 className="text-[11px] font-bold uppercase tracking-widest mb-4 italic text-accent opacity-100">({cat.title})</h3>
            <div className="flex flex-col gap-3">
              {cat.skills.map(s => (
                <span key={s} className="skill-item">{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


const Contact = () => (
  <section id="contact" className="section-padding border-t-[1.5px] border-ink reveal-on-scroll">
    <SectionHeading outline="Contact" solid="GET IN TOUCH" />
    <div className="grid md:grid-cols-12 gap-12">
      <div className="md:col-span-5">
        <h2 className="label-eyebrow mb-16">Contact</h2>
        <div className="text-4xl md:text-6xl font-[800] uppercase tracking-tighter mb-12">
          Let's Start a <span className="serif-italic font-normal underline decoration-accent decoration-4 underline-offset-8">Conversation</span>
        </div>
        <div className="space-y-6">
          <a href="mailto:misham.samanta@gmail.com" className="block text-2xl font-bold hover:text-accent transition-all">misham.samanta@gmail.com</a>
          <div className="flex gap-8">
            <a href="https://www.linkedin.com/in/misham-samanta-33b838224/" target="_blank" rel="noopener noreferrer" className="label-eyebrow opacity-100 hover:text-accent transition-colors">LinkedIn</a>
            <a href="https://github.com/misham-samanta" target="_blank" rel="noopener noreferrer" className="label-eyebrow opacity-100 hover:text-accent transition-colors">Github</a>
          </div>
        </div>
      </div>
      <div className="md:col-span-7 md:flex items-end justify-end">
        <div className="text-right max-w-sm">
          <p className="opacity-60 mb-8 italic text-lg leading-relaxed">
            Every great project begins with an <span className="serif-italic underline decoration-accent decoration-2 underline-offset-4">exploratory</span> dialogue about goals and possibilities.
          </p>
          <div className="h-[1.5px] w-full bg-ink mb-8" />
          <div className="flex justify-between label-eyebrow opacity-100">
            <span>BASED IN INDIA</span>
            <span>GMT+5:30</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 px-6 md:px-12 border-t-[1.5px] border-ink flex flex-col md:flex-row justify-between items-center gap-8">
    <div className="label-eyebrow opacity-100">
      © {new Date().getFullYear()} MISHAM SAMANTA
    </div>
    <div className="flex gap-12">
      {['Github', 'LinkedIn', 'Resume'].map(item => (
        <a 
          key={item} 
          href={item === 'LinkedIn' ? "https://www.linkedin.com/in/misham-samanta-33b838224/" : item === 'Github' ? "https://github.com/misham-samanta" : "#"} 
          className="text-[11px] font-[800] uppercase tracking-widest hover:text-accent transition-colors"
        >
          {item}
        </a>
      ))}
    </div>
  </footer>
);

export default function App() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const positionRef = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2 });

  useEffect(() => {
    // 1. Initial Load Animations
    setTimeout(() => {
      document.querySelector('#main-nav')?.classList.remove('opacity-0', '-translate-y-full');
      document.querySelector('.hero-name-serif')?.classList.add('active');
      document.querySelector('.hero-name-bold')?.classList.add('active');
    }, 100);

    // 2. Intersection Observer for Scroll reveal
    const observerOptions = {
      threshold: 0.15,
      once: true
    };

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
          if (entry.target.classList.contains('label-eyebrow')) {
            entry.target.classList.add('reveal');
          }
        }
      });
    }, observerOptions);

    document.querySelectorAll('.reveal-on-scroll, .image-reveal, .label-eyebrow, .section-heading-wrap').forEach(el => {
      revealObserver.observe(el);
    });

    // 3. Scroll Progress & Background Shift
    const handleScroll = () => {
      const scrolled = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
      const progress = document.getElementById('scroll-progress');
      if (progress) progress.style.width = `${scrolled}%`;

      if (scrolled > 60) {
        document.body.classList.add('bg-darker');
      } else {
        document.body.classList.remove('bg-darker');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // 4. Custom Cursor Logic
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY };
    };

    let rafId: number;
    const updateCursorPosition = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0)`;
      }
      rafId = requestAnimationFrame(updateCursorPosition);
    };

    const handleInteraction = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      
      if (target.closest('a, button, [role="button"], .brutal-card')) {
        cursorRef.current?.classList.add('hovering');
      } else {
        cursorRef.current?.classList.remove('hovering');
      }

      if (target.closest('.hero-hover-area')) {
        cursorRef.current?.classList.add('hero-hover');
      } else {
        cursorRef.current?.classList.remove('hero-hover');
      }
    };

    if (window.innerWidth > 768) {
      window.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseover', handleInteraction);
      cursorRef.current?.classList.add('visible');
      rafId = requestAnimationFrame(updateCursorPosition);
    }

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleInteraction);
      cancelAnimationFrame(rafId);
      revealObserver.disconnect();
    };
  }, []);

  const createRipple = (e: React.MouseEvent) => {
    const ripple = document.createElement('div');
    ripple.className = 'ripple';
    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    document.body.appendChild(ripple);
    setTimeout(() => ripple.remove(), 400);
  };

  return (
    <div className="bg-bg min-h-screen text-ink relative overflow-hidden" onMouseDown={createRipple}>
      <div id="scroll-progress" />
      
      <div ref={cursorRef} className="custom-cursor hidden md:block">
        <div className="cursor-main">
          <div className="cursor-dot-inner" />
        </div>
      </div>
      
      <div className="layout-grid" />
      <div className="crosshair top-[60px] left-[20%]">+</div>
      <div className="crosshair top-[60px] left-[40%]">+</div>
      <div className="crosshair top-[60px] left-[60%]">+</div>
      <div className="crosshair top-[60px] left-[80%]">+</div>

      <Header />
      <main>
        <div className="max-w-[1600px] mx-auto">
          <Hero />
          <About />
        </div>
        <MarqueeStrip />
        <div className="max-w-[1600px] mx-auto">
          <Works />
          <Capabilities />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}
