import { useState } from "react";
import emailjs from "emailjs-com";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target as HTMLFormElement,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex items-center justify-center py-20 bg-black"
    >
      <div className="px-4 w-full max-w-lg p-6 text-center">
        {/* Heading with Social Icons */}
        <h2 className="text-3xl font-bold mb-6 text-blue-400 flex flex-col items-center gap-3">
          Get In Touch
          <span className="flex space-x-4 mt-2">
            <a
              href="https://github.com/Narendrakumar14-R"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://www.linkedin.com/in/narendra-kumar-rayavarapu-68aab3210/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="mailto:Narendrarayavarapu14@gmail.com"
              className="text-white hover:text-blue-400 transition-colors duration-300"
            >
              <FaEnvelope size={22} />
            </a>
          </span>
        </h2>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Name..."
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
          />

          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="example@gmail.com"
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
          />

          <textarea
            name="message"
            rows={5}
            required
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            placeholder="Your Message..."
            className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 transition"
          />

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactSection;
