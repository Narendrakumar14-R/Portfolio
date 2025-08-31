import { ExternalLink, Github, Zap, Database, Cloud, Bot } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Microservices Banking Suite",
      description: "Enterprise-grade banking system built with Spring Boot microservices, featuring API Gateway, service discovery with Eureka, JWT security, and deployment on Docker/Kubernetes.",
      techStack: ["Spring Boot", "Spring Cloud", "JWT", "Docker", "Kubernetes", "Eureka"],
      icon: <Zap className="text-primary" size={24} />,
      codeUrl: "#",
      demoUrl: "#"
    },
    {
      title: "Event-Driven Payments System",
      description: "High-throughput payment processing system using Apache Kafka with exactly-once processing guarantees, schema evolution, and comprehensive dead-letter queue handling.",
      techStack: ["Apache Kafka", "Spring Boot", "PostgreSQL", "Docker", "Schema Registry"],
      icon: <Database className="text-primary" size={24} />,
      codeUrl: "#",
      demoUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing enterprise-grade solutions and innovative applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={project.title} 
              className="card-project group animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  {project.icon}
                </div>
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-6">
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span key={tech} className="skill-badge text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-4 pt-4 border-t border-border">
                <a 
                  href={project.codeUrl}
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors group/link"
                >
                  <Github size={16} className="group-hover/link:rotate-12 transition-transform" />
                  <span>Code</span>
                </a>
                <a 
                  href={project.demoUrl}
                  className="flex items-center space-x-2 text-primary hover:text-primary-hover transition-colors group/link"
                >
                  <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform" />
                  <span>Demo</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProjectsSection;