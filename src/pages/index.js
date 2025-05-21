import { motion } from "framer-motion";
import Head from "next/head";

export default function PremiumPortfolio() {
  const projects = [
    {
      title: "Skin Cancer Classification System",
      description: "An AI-based system for detecting skin cancer using image classification techniques Utilizes deep learning models to classify skin lesions as benign or malignant",
      tags: ["python","keras algorithm","tensorflow"],
      link: "https://github.com/akashkriplani/melanoma-skin-cancer-detection"
    },
     {
      title: "SMS Spam Detection Analysis",
      description: "A machine learning project to classify SMS messages as spam or not spam. Utilizes Python for data preprocessing, feature extraction, and model training to achieve high accuracy in spam detection.",
      tags: ["Python","NLP"],
      link: "https://github.com/Shaliniarul/sms-spam-detection-analysis"
    },
    {
      title: "Ikshana",
      description: "About the vellore smart city project that will collecting the data accuracy to perform the analysis and prediction of the data",
      tags: ["API Integration","Automation testing"],
      link: "#"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 100 },
    { name: "JavaScript/TypeScript", level: 95 },
    { name: "Python", level: 100 },
    { name: "Node.js/Express", level: 95 },
    { name: "Tailwind CSS", level: 100 },
    { name: "Selenium",level:100},
  ];

  return (
    <>
      <Head>
        <title>Premium Portfolio</title>
        <meta name="description" content="Professional portfolio showcasing my work" />
      </Head>

      <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900">
        {/* Animated Background Elements */}
        <motion.div 
          className="fixed top-0 left-0 w-full h-full pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-20 left-20 w-40 h-40 rounded-full bg-blue-500 blur-3xl opacity-20"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 rounded-full bg-purple-500 blur-3xl opacity-20"></div>
        </motion.div>

        {/* Floating Navigation */}
        <motion.nav
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-sm z-50"
        >
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <motion.h1 
              whileHover={{ scale: 1.05 }}
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
            >
              Portfolio
            </motion.h1>
            <div className="hidden md:flex space-x-6">
              {['home', 'projects', 'skills', 'experience', 'contact'].map((item) => (
                <a 
                  key={item}
                  href={`#${item}`}
                  className="px-3 py-1 rounded-md hover:bg-gray-100 transition-colors capitalize"
                >
                  {item}
                </a>
              ))}
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-md shadow-md"
            >
              Hire Me
            </motion.button>
          </div>
        </motion.nav>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-6">
          <motion.div
            className="text-center max-w-4xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <motion.h1 
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Shalini</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              I craft <span className="font-semibold">beautiful websites</span> with modern web technologies
            </motion.p>
            <motion.div
              className="flex justify-center space-x-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md"
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 border-2 border-gray-300 rounded-lg shadow-md"
              >
                Contact Me
              </motion.a>
            </motion.div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Featured <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Projects</span>
            </motion.h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="bg-gray-50 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all"
                >
                  <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                    <span className="text-white text-2xl font-bold">{index + 1}</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 text-xs bg-blue-100 text-blue-800 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-blue-600 hover:underline"
                    >
                      View Project
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Skills</span>
            </motion.h2>
            
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="text-gray-600">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-600"
                    />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              My <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Experience</span>
            </motion.h2>
            <div className="space-y-8">
              {/* Example Experience Items - Replace with your own */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-xl shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <span className="font-bold text-lg">Data Science</span>
                  <span className="text-gray-500 text-sm">Baaz dynamics </span>
                </div>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                  <span className="text-blue-600 font-medium">Sep 2024 - Present</span>
                </div>
                <ul className="list-disc list-inside text-gray-700 mt-2">
                  <li>Developed and maintained modern web applications using React and Next.js.</li>
                  <li>Collaborated with designers and backend developers to deliver seamless user experiences.</li>
                  <li>Automation testing can be done in the vellore smart city project </li>
                </ul>
              </motion.div>
              
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.h2 
              className="text-4xl font-bold text-center mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Get In <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Touch</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-xl shadow-lg p-8"
            >
              <form 
                className="space-y-6"
                onSubmit={async (e) => {
                  e.preventDefault();
                  const formData = new FormData(e.target);
                  const data = Object.fromEntries(formData.entries());
                  try {
                    const response = await fetch('/api/saveContact', {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json',
                      },
                      body: JSON.stringify(data),
                    });
                    const result = await response.json();
                    if (response.ok) {
                      alert('Message saved successfully!');
                      e.target.reset();
                    } else {
                      alert('Failed to save message. Please try again.');
                    }
                  } catch (error) {
                    alert('An error occurred. Please try again.');
                  }
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 font-medium">Your Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 font-medium">Your Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block mb-2 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block mb-2 font-medium">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Hello, I'd like to talk about..."
                    required
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full py-3 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-md hover:from-blue-700 hover:to-purple-700 transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 bg-gray-100 border-t border-gray-200">
          <div className="container mx-auto px-6 text-center">
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="text-gray-600 hover:text-blue-600">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
            </div>
            <p className="text-gray-600">
              © {new Date().getFullYear()} My Portfolio. All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </>
  );
}