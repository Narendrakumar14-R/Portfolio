import { ExternalLink, Github, Zap, Database } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: "Microservices Banking Suite",
      description:
        "Enterprise-grade banking system built with Spring Boot microservices, featuring API Gateway, service discovery with Eureka, JWT security, and deployment on Docker/Kubernetes.",
      techStack: ["Spring Boot", "Spring Cloud", "JWT", "Docker", "Kubernetes", "Eureka"],
      icon: <Zap className="text-blue-400" size={24} />,
      codeUrl: "#",
      demoUrl: "#",
    },
    {
      title: "Event-Driven Payments System",
      description:
        "High-throughput payment processing system using Apache Kafka with exactly-once processing guarantees, schema evolution, and comprehensive dead-letter queue handling.",
      techStack: ["Apache Kafka", "Spring Boot", "PostgreSQL", "Docker", "Schema Registry"],
      icon: <Database className="text-blue-400" size={24} />,
      codeUrl: "#",
      demoUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-4xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Showcasing enterprise-grade solutions and innovative applications
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-black border border-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Header */}
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg">{project.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-black border border-gray-800 text-blue-400 rounded-full text-xs font-semibold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex space-x-6 pt-4 border-t border-gray-700 mt-4">
                <a
                  href={project.codeUrl}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <Github size={16} />
                  <span className="font-semibold">Code</span>
                </a>
                <a
                  href={project.demoUrl}
                  className="flex items-center space-x-2 text-blue-400 hover:text-blue-500 transition-colors"
                >
                  <ExternalLink size={16} />
                  <span className="font-semibold">Demo</span>
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
