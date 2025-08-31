import { 
  Server, 
  Globe, 
  Cloud, 
  Database, 
  Settings, 
  TestTube 
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: <Server className="text-primary" size={24} />,
      skills: [
        "Java", "Spring Boot", "Spring Cloud", "REST APIs", "SOAP", 
        "Microservices", "Hibernate", "JPA", "JMS"
      ]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-primary" size={24} />,
      skills: [
        "Angular 17/13/8/4/2", "React JS", "TypeScript", "HTML5", 
        "CSS3", "Bootstrap", "Responsive Design"
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-primary" size={24} />,
      skills: [
        "AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "Terraform", 
        "Jenkins", "CI/CD", "CloudFormation", "IAM"
      ]
    },
    {
      title: "Databases",
      icon: <Database className="text-primary" size={24} />,
      skills: [
        "Oracle", "MySQL", "PostgreSQL", "MongoDB", 
        "Cassandra", "DynamoDB", "Database Design"
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="text-primary" size={24} />,
      skills: [
        "Git", "GitHub", "GitLab", "Maven", "Gradle", 
        "SonarQube", "JIRA", "Postman", "IntelliJ"
      ]
    },
    {
      title: "Testing",
      icon: <TestTube className="text-primary" size={24} />,
      skills: [
        "JUnit", "Mockito", "Selenium", "TDD", 
        "Integration Testing", "API Testing"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={category.title} 
              className="card-portfolio animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skill} 
                    className="skill-badge text-primary"
                    style={{ animationDelay: `${(index * 100) + (skillIndex * 50)}ms` }}
                  >
                    {skill}
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

export default SkillsSection;