import { Building2, Calendar, MapPin } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      company: "PNC Bank",
      position: "Full Stack Java Developer",
      duration: "Jul 2023 – Present",
      location: "Pittsburgh, PA",
      description: "Built scalable microservices architecture serving millions of banking transactions daily. Led development of customer-facing Angular 17 applications and Spring Boot APIs with comprehensive security implementations.",
      highlights: [
        "Developed microservices with Spring Boot, Angular 17, AWS, and Kafka",
        "Implemented JWT-based authentication and authorization systems",
        "Deployed containerized applications using Docker and Kubernetes",
        "Established CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers on best practices and code reviews"
      ],
      techStack: ["Spring Boot", "Angular 17", "AWS", "Kafka", "Docker", "Kubernetes", "JWT"]
    },
    {
      company: "Delta Airlines",
      position: "Full Stack Java Developer", 
      duration: "Apr 2021 – Jun 2023",
      location: "Atlanta, GA",
      description: "Developed mission-critical airline operations systems handling real-time flight data and passenger services. Built responsive React applications and robust Spring Boot microservices deployed on AWS cloud infrastructure.",
      highlights: [
        "Created React JS applications for flight operations and crew management",
        "Built Spring Boot REST APIs serving 10M+ requests daily",
        "Implemented AWS ECS/Fargate deployments with auto-scaling",
        "Optimized database queries improving response times by 40%",
        "Integrated third-party airline systems using SOAP and REST APIs"
      ],
      techStack: ["React JS", "Spring Boot", "AWS ECS", "Fargate", "PostgreSQL", "SOAP APIs"]
    },
    {
      company: "Albertsons",
      position: "Full Stack Java Developer",
      duration: "Jun 2019 – Mar 2021", 
      location: "Boise, ID",
      description: "Designed and developed retail management systems for one of America's largest grocery chains. Created Angular-based inventory management interfaces and Spring Boot microservices handling supply chain operations.",
      highlights: [
        "Developed Angular UI applications for inventory and supply chain management",
        "Built Spring Boot microservices for real-time inventory tracking",
        "Integrated Oracle and MongoDB databases for hybrid data storage",
        "Implemented automated testing reducing bugs by 50%",
        "Collaborated with product teams on requirement gathering and system design"
      ],
      techStack: ["Angular", "Spring Boot", "Oracle", "MongoDB", "JUnit", "Mockito"]
    },
    {
      company: "UPS",
      position: "Java Developer",
      duration: "Jan 2017 – May 2019",
      location: "Atlanta, GA", 
      description: "Developed logistics and package tracking systems supporting global shipping operations. Built robust web applications using Spring MVC framework with comprehensive database integration and performance optimization.",
      highlights: [
        "Built REST APIs for package tracking and logistics management",
        "Developed Spring MVC applications for internal operations",
        "Implemented Hibernate ORM for complex database operations",
        "Optimized MySQL database performance and query efficiency",
        "Participated in agile development cycles and sprint planning"
      ],
      techStack: ["Spring MVC", "Hibernate", "MySQL", "REST APIs", "Maven"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            8+ years of delivering enterprise solutions across Fortune 500 companies
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="timeline-line"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company}
                className="relative animate-slide-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 w-8 h-8 bg-primary rounded-full border-4 border-background flex items-center justify-center">
                  <Building2 size={16} className="text-primary-foreground" />
                </div>

                {/* Content Card */}
                <div className="ml-16 card-portfolio">
                  {/* Header */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-primary mb-1">{exp.position}</h3>
                      <h4 className="text-xl font-semibold mb-2">{exp.company}</h4>
                    </div>
                    <div className="flex flex-col md:items-end space-y-1">
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <Calendar size={16} />
                        <span>{exp.duration}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-muted-foreground">
                        <MapPin size={16} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h5 className="font-semibold mb-2">Key Achievements:</h5>
                    <ul className="space-y-1">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start space-x-2 text-sm text-muted-foreground">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h5 className="font-semibold mb-2">Technologies:</h5>
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech) => (
                        <span key={tech} className="skill-badge text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 animate-fade-in">
          <div className="card-portfolio text-center">
            <div className="text-3xl font-bold text-primary mb-2">4</div>
            <div className="text-muted-foreground">Fortune 500 Companies</div>
          </div>
          <div className="card-portfolio text-center">
            <div className="text-3xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Enterprise Projects</div>
          </div>
          <div className="card-portfolio text-center">
            <div className="text-3xl font-bold text-primary mb-2">8+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;