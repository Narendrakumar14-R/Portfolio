import { Download, Github, Mail } from 'lucide-react';
import heroImage from '@/assets/hero-background.jpg';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Narendra Kumar Rayavarapu
        </h1>
        
        <h2 className="text-xl md:text-2xl lg:text-3xl text-muted-foreground mb-6 font-light">
          Senior Java Full-Stack & Data Engineer
        </h2>
        
        <p className="text-lg md:text-xl text-foreground mb-8 leading-relaxed max-w-3xl mx-auto">
          Building scalable microservices, enterprise-grade applications & cloud-native data pipelines. 
          8+ years of full-stack Java development with proven success across 
          <span className="text-primary font-semibold"> PNC Bank, Delta Airlines, Albertsons, and UPS</span>.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up">
          <button className="btn-hero group">
            <Download size={20} className="mr-2 group-hover:animate-bounce" />
            Download Resume
          </button>
          <button className="btn-hero-outline group">
            <Github size={20} className="mr-2 group-hover:rotate-12 transition-transform" />
            View GitHub
          </button>
          <button className="btn-hero-outline group">
            <Mail size={20} className="mr-2 group-hover:scale-110 transition-transform" />
            Contact Me
          </button>
        </div>
        
        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-12 animate-scale-in">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">8+</div>
            <div className="text-sm text-muted-foreground">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold text-primary">4</div>
            <div className="text-sm text-muted-foreground">Enterprise Companies</div>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;