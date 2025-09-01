import { GraduationCap, Award, Code2 } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-4 bg-black">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Passionate full-stack developer with a strong foundation in computer science and extensive enterprise experience.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Education & Background */}
          <div className="space-y-8 animate-slide-up">
            <div className="p-6 rounded-lg shadow-lg bg-black border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-black border border-gray-700 rounded-lg">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Educational Background</h3>
                  <div className="space-y-3 text-gray-300">
                    <div>
                      <h4 className="font-medium text-blue-400">Master of Science in Computer Science</h4>
                      <p>University of South Dakota</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-lg shadow-lg bg-black border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-black border border-gray-700 rounded-lg">
                  <Award className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-white">Professional Expertise</h3>
                  <p className="text-gray-300 leading-relaxed">
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
            <div className="p-6 rounded-lg shadow-lg bg-black border border-gray-800">
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-black border border-gray-700 rounded-lg">
                  <Code2 className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-white">Technical Highlights</h3>
                  <div className="space-y-4 text-gray-300">
                    {[
                      "Java, Spring Boot, Angular, React - Full Stack Development",
                      "Microservices Architecture with Docker & Kubernetes",
                      "AWS Cloud Services & Infrastructure as Code",
                      "CI/CD Pipelines & DevOps Best Practices",
                      "SQL & NoSQL Database Design & Optimization",
                      "System Design & Performance Optimization"
                    ].map((point, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                        <span>{point}</span>
                      </div>
                    ))}
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
