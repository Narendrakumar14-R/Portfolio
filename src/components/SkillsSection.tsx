import { Server, Globe, Cloud, Database, Settings, TestTube } from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Backend & APIs",
      icon: <Server className="text-blue-400" size={24} />,
      skills: ["Java", "Spring Boot", "Spring Cloud", "REST APIs", "SOAP", "Microservices", "Hibernate", "JPA", "JMS"]
    },
    {
      title: "Frontend",
      icon: <Globe className="text-blue-400" size={24} />,
      skills: ["Angular 17/13/8/4/2", "React JS", "TypeScript", "HTML5", "CSS3", "Bootstrap", "Responsive Design"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="text-blue-400" size={24} />,
      skills: ["AWS (EC2, S3, RDS, Lambda)", "Docker", "Kubernetes", "Terraform", "Jenkins", "CI/CD", "CloudFormation", "IAM"]
    },
    {
      title: "Databases",
      icon: <Database className="text-blue-400" size={24} />,
      skills: ["Oracle", "MySQL", "PostgreSQL", "MongoDB", "Cassandra", "DynamoDB", "Database Design"]
    },
    {
      title: "Tools & Technologies",
      icon: <Settings className="text-blue-400" size={24} />,
      skills: ["Git", "GitHub", "GitLab", "Maven", "Gradle", "SonarQube", "JIRA", "Postman", "IntelliJ"]
    },
    {
      title: "Testing",
      icon: <TestTube className="text-blue-400" size={24} />,
      skills: ["JUnit", "Mockito", "Selenium", "TDD", "Integration Testing", "API Testing"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Technical Skills
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Comprehensive expertise across the full technology stack
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-black border border-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition duration-300 flex flex-col"
            >
              {/* Category Header */}
              <div className="flex items-center space-x-3 mb-4">
                <div className="p-2 bg-blue-500/20 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-white">{category.title}</h3>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-bold text-blue-400 border border-blue-400/40 rounded-full
                      hover:bg-blue-600 hover:text-white transition duration-200"
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
