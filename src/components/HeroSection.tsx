import { Download } from 'lucide-react';
import profilePicture from '@/assets/profilepicture.jpeg';

const HeroSection = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-black pt-28"
    >
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto animate-fade-in">
        {/* Full Name in One Line */}
        <h1 className="text-4xl md:text-5xl lg:text-5xl font-extrabold text-blue-400 mb-4 whitespace-nowrap">
          Narendra Kumar Rayavarapu
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 font-light">
          Java Full-Stack Developer
        </h2>

        {/* Profile Picture with Glow Ring */}
       <div className="flex justify-center mb-6">
  <div className="p-1 bg-black rounded-full animate-scale-in">
    <img
      src={profilePicture}
      alt="Narendra Kumar Rayavarapu - Java Full-Stack Developer"
      className="w-48 h-48 object-cover rounded-full shadow-lg mx-auto"
    />
  </div>
</div>
        {/* Description */}
       <p className="text-base md:text-lg text-gray-200 mb-8 leading-relaxed max-w-3xl mx-auto">
          I’m a passionate software developer who loves building modern, full-stack applications with 
          <span className="text-blue-400 font-semibold"> Java, Spring Boot, MongoDB, React</span>, and AI tools.  
          I’m driven to solve real-world problems through scalable and intelligent systems.  
          Always eager to learn new technologies and contribute to impactful projects.   
      </p>

        {/* Download Resume Button */}
      </div>
    </section>
  );
};

export default HeroSection;
