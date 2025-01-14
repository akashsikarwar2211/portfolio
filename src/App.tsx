import React from 'react';
import { Cloud, Server, GitBranch, Terminal, Database, Shield, Github, Linkedin, Mail, Download } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Header/Hero Section */}
      <header className="container mx-auto px-6 py-16 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Akash Sikarwar</h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8">DevOps & Cloud Engineering Specialist</p>
          <div className="flex justify-center gap-4">
            <a href="#contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors">
              Get in Touch
            </a>
            <a href="#" className="border border-white hover:bg-white hover:text-gray-900 px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2">
              <Download size={20} /> Resume
            </a>
          </div>
        </div>
      </header>

      {/* Skills Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Core Competencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <SkillCard
              icon={<Cloud />}
              title="Cloud Platforms"
              description="AWS, Azure, GCP expertise with infrastructure management and optimization"
            />
            <SkillCard
              icon={<Server />}
              title="Infrastructure as Code"
              description="Terraform, CloudFormation, and Ansible for automated infrastructure deployment"
            />
            <SkillCard
              icon={<GitBranch />}
              title="CI/CD"
              description="Jenkins, GitLab CI, GitHub Actions pipeline design and implementation"
            />
            <SkillCard
              icon={<Terminal />}
              title="Containerization"
              description="Docker, Kubernetes, and container orchestration solutions"
            />
            <SkillCard
              icon={<Database />}
              title="Database Management"
              description="MongoDB, PostgreSQL, MySQL administration and optimization"
            />
            <SkillCard
              icon={<Shield />}
              title="Security"
              description="Infrastructure security, compliance, and best practices implementation"
            />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <ProjectCard
              title="Cloud Migration Project"
              description="Led the migration of a monolithic application to microservices architecture on AWS, resulting in 40% cost reduction"
              tags={['AWS', 'Docker', 'Kubernetes']}
            />
            <ProjectCard
              title="CI/CD Pipeline Optimization"
              description="Implemented automated testing and deployment pipeline reducing deployment time by 60%"
              tags={['Jenkins', 'GitLab', 'Terraform']}
            />
            <ProjectCard
              title="Security Automation"
              description="Developed automated security scanning and compliance checking system"
              tags={['Python', 'AWS', 'Security']}
            />
            <ProjectCard
              title="Infrastructure Scaling"
              description="Designed and implemented auto-scaling infrastructure handling 2M+ daily users"
              tags={['Kubernetes', 'Prometheus', 'Grafana']}
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">Get in Touch</h2>
          <div className="flex justify-center gap-8">
            <SocialLink icon={<Github />} href="https://github.com/akashsikarwar2211" label="GitHub" />
            <SocialLink icon={<Linkedin />} href="https://linkedin.com/in/akashsikarwar" label="LinkedIn" />
            <SocialLink icon={<Mail />} href="mailto:contact@akashsikarwar.com" label="Email" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-400">
        <p>© 2024 Akash Sikarwar. All rights reserved.</p>
      </footer>
    </div>
  );
}

function SkillCard({ icon, title, description }) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
      <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}

function ProjectCard({ title, description, tags }) {
  return (
    <div className="p-6 bg-gray-800 rounded-xl hover:bg-gray-700 transition-colors">
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}

function SocialLink({ icon, href, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="p-4 bg-gray-800 rounded-full hover:bg-gray-700 transition-colors"
      aria-label={label}
    >
      {icon}
    </a>
  );
}

export default App;