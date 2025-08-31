import { GraduationCap, Award, Code2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in computer science and extensive enterprise experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Education & Background */}
          <div className="space-y-8 animate-slide-up">
            <div className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Educational Background</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-primary">Master of Science in Computer Science</h4>
                      <p className="text-muted-foreground">University of South Dakota (Expected 2025)</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-primary">Bachelor of Technology in Computer Science</h4>
                      <p className="text-muted-foreground">Vignan's Lara Institute of Technology and Science (2022)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Award className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Professional Expertise</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Specialized in building enterprise-grade applications with expertise in microservices architecture, 
                    cloud-native solutions, and full-stack development. Proven track record of delivering scalable 
                    solutions for Fortune 500 companies.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Technical Summary */}
          <div className="animate-slide-up delay-100">
            <div className="card-portfolio">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Code2 className="text-primary" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4">Technical Highlights</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Java, Spring Boot, Angular, React - Full Stack Development</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Microservices Architecture with Docker & Kubernetes</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>AWS Cloud Services & Infrastructure as Code</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>CI/CD Pipelines & DevOps Best Practices</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>SQL & NoSQL Database Design & Optimization</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span>Data Engineering & ETL Pipeline Development</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;