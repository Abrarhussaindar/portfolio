// "use client"
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Github,
//     Linkedin,
//     Mail,
//     Phone,
//     MapPin,
//     Calendar,
//     Code,
//     Database,
//     Server,
//     Globe,
//     ChevronRight,
//     ExternalLink,
//     Download,
//     ArrowUp,
//     Briefcase,
//     GraduationCap,
//     User,
//     Folder,
//     Award,
//     Menu,
//     X
// } from 'lucide-react';

// const Portfolio = () => {
//     const [activeSection, setActiveSection] = useState('home');
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [showScrollTop, setShowScrollTop] = useState(false);

//     useEffect(() => {
//         const handleScroll = () => {
//             setShowScrollTop(window.scrollY > 400);

//             // Update active section based on scroll position
//             const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
//             const scrollY = window.scrollY + 100;

//             sections.forEach(section => {
//                 const element = document.getElementById(section);
//                 if (element) {
//                     const { offsetTop, offsetHeight } = element;
//                     if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
//                         setActiveSection(section);
//                     }
//                 }
//             });
//         };

//         window.addEventListener('scroll', handleScroll);
//         return () => window.removeEventListener('scroll', handleScroll);
//     }, []);

//     const scrollToSection = (sectionId: any) => {
//         document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
//         setIsMenuOpen(false);
//     };

//     const scrollToTop = () => {
//         window.scrollTo({ top: 0, behavior: 'smooth' });
//     };

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: {
//                 staggerChildren: 0.1
//             }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: {
//                 duration: 0.5
//             }
//         }
//     };

//     const skills = [
//         'TypeScript', 'Next.js', 'Node.js', 'React.js', 'JavaScript', 'Python',
//         'Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MERN Stack', 'Azure',
//         'Pandas', 'Postman', 'Git/Github', 'Linux'
//     ];

//     const projects = [
//         {
//             title: "EcomMatrix",
//             period: "02/2025 – present",
//             description: "A SaaS-based e-commerce dashboard built with Next.js, Node.js, TypeScript, and PostgreSQL",
//             features: [
//                 "Multi-tenant architecture for multiple clients",
//                 "Real-time analytics and interactive dashboards",
//                 "Performance tracking and optimization tools"
//             ],
//             tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"]
//         },
//         {
//             title: "HomeBasics",
//             period: "01/2025 – 02/2025",
//             description: "A water purifier store application built with MERN stack",
//             features: [
//                 "Scalable MERN application with secure authentication",
//                 "Optimized API performance",
//                 "Cloud-based infrastructure deployment"
//             ],
//             tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
//         },
//         {
//             title: "YourSportz",
//             period: "04/2024 – present",
//             description: "Local football arena management system",
//             features: [
//                 "Backend services and APIs using Node.js",
//                 "Optimal performance and scalability",
//                 "Comprehensive arena management features"
//             ],
//             tech: ["Node.js", "JavaScript", "API Development"]
//         }
//     ];

//     return (
//         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-x-hidden">
//             {/* Navigation */}
//             <motion.nav
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 className="fixed top-0 w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-700"
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center py-4">
//                         <motion.div
//                             whileHover={{ scale: 1.05 }}
//                             className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"
//                         >
//                             AHD
//                         </motion.div>

//                         {/* Desktop Menu */}
//                         <div className="hidden md:flex space-x-8">
//                             {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
//                                 <motion.button
//                                     key={item}
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={() => scrollToSection(item.toLowerCase())}
//                                     className={`px-3 py-2 rounded-md transition-all duration-300 ${activeSection === item.toLowerCase()
//                                             ? 'text-blue-400 bg-blue-400/10'
//                                             : 'text-gray-300 hover:text-white'
//                                         }`}
//                                 >
//                                     {item}
//                                 </motion.button>
//                             ))}
//                         </div>

//                         {/* Mobile Menu Button */}
//                         <button
//                             className="md:hidden p-2"
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                         >
//                             {isMenuOpen ? <X /> : <Menu />}
//                         </button>
//                     </div>
//                 </div>

//                 {/* Mobile Menu */}
//                 <AnimatePresence>
//                     {isMenuOpen && (
//                         <motion.div
//                             initial={{ opacity: 0, y: -20 }}
//                             animate={{ opacity: 1, y: 0 }}
//                             exit={{ opacity: 0, y: -20 }}
//                             className="md:hidden bg-slate-800 border-t border-slate-700"
//                         >
//                             <div className="px-4 py-2 space-y-2">
//                                 {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
//                                     <button
//                                         key={item}
//                                         onClick={() => scrollToSection(item.toLowerCase())}
//                                         className="block w-full text-left px-3 py-2 text-gray-300 hover:text-white hover:bg-slate-700 rounded-md transition-colors"
//                                     >
//                                         {item}
//                                     </button>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.nav>

//             {/* Hero Section */}
//             <section id="home" className="min-h-screen flex items-center justify-center pt-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         animate="visible"
//                     >
//                         <motion.div variants={itemVariants} className="mb-8">
//                             <div className="w-32 h-32 mx-auto mb-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-4xl font-bold shadow-2xl">
//                                 AHD
//                             </div>
//                         </motion.div>

//                         <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
//                             <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-teal-400 bg-clip-text text-transparent">
//                                 Abrar Hussain Dar
//                             </span>
//                         </motion.h1>

//                         <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-300 mb-8">
//                             Backend Developer & Full Stack Engineer
//                         </motion.p>

//                         <motion.p variants={itemVariants} className="text-lg text-gray-400 mb-12 max-w-2xl mx-auto">
//                             Passionate about building scalable, high-performance applications with modern technologies.
//                             Specialized in Node.js, TypeScript, and cloud architecture.
//                         </motion.p>

//                         <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 onClick={() => scrollToSection('contact')}
//                                 className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 shadow-lg hover:shadow-xl transition-all"
//                             >
//                                 <Mail className="w-5 h-5" />
//                                 Get In Touch
//                             </motion.button>

//                             <motion.button
//                                 whileHover={{ scale: 1.05 }}
//                                 whileTap={{ scale: 0.95 }}
//                                 className="border border-gray-600 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-gray-800 transition-all"
//                             >
//                                 <Download className="w-5 h-5" />
//                                 Download Resume
//                             </motion.button>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* About Section */}
//             <section id="about" className="py-20 bg-slate-800/50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
//                             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
//                                 <User className="w-10 h-10" />
//                                 About Me
//                             </span>
//                         </motion.h2>

//                         <div className="grid md:grid-cols-2 gap-12 items-center">
//                             <motion.div variants={itemVariants}>
//                                 <h3 className="text-2xl font-semibold mb-6 text-blue-400">Professional Journey</h3>
//                                 <p className="text-gray-300 mb-6 leading-relaxed">
//                                     I'm a passionate Backend Developer with expertise in building scalable, high-performance applications.
//                                     Currently based in Bengaluru, I specialize in modern web technologies including Node.js, TypeScript,
//                                     and cloud architecture.
//                                 </p>
//                                 <p className="text-gray-300 mb-6 leading-relaxed">
//                                     With experience at companies like Navrekh Technologies and Daisy Online Media, I've developed
//                                     and maintained enterprise-level applications, designed efficient database systems, and created
//                                     robust APIs that serve thousands of users.
//                                 </p>
//                                 <div className="flex items-center gap-4 text-gray-400">
//                                     <MapPin className="w-5 h-5" />
//                                     <span>Bengaluru, India</span>
//                                 </div>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="space-y-6">
//                                 <div className="bg-slate-700/50 p-6 rounded-lg border border-slate-600">
//                                     <h4 className="text-xl font-semibold mb-4 text-purple-400 flex items-center gap-2">
//                                         <Code className="w-6 h-6" />
//                                         Current Focus
//                                     </h4>
//                                     <ul className="space-y-2 text-gray-300">
//                                         <li>• Building SaaS applications with Next.js & TypeScript</li>
//                                         <li>• Developing scalable backend architectures</li>
//                                         <li>• Cloud infrastructure and deployment optimization</li>
//                                         <li>• Real-time analytics and dashboard development</li>
//                                     </ul>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Experience Section */}
//             <section id="experience" className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
//                             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
//                                 <Briefcase className="w-10 h-10" />
//                                 Experience
//                             </span>
//                         </motion.h2>

//                         <div className="space-y-8">
//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all">
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                                     <div>
//                                         <h3 className="text-2xl font-semibold text-blue-400">Backend Developer</h3>
//                                         <p className="text-xl text-gray-300">Navrekh Technologies Pvt. Ltd.</p>
//                                     </div>
//                                     <div className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
//                                         <Calendar className="w-5 h-5" />
//                                         <span>04/2024 – 05/2025 • Pune, India</span>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-3 text-gray-300">
//                                     <li className="flex items-start gap-3">
//                                         <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                                         <span>Developed and maintained high-performance, scalable backend services and APIs using Node.js</span>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <ChevronRight className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
//                                         <span>Designed, implemented, and maintained SQL and NoSQL databases, ensuring data integrity and optimized performance</span>
//                                     </li>
//                                 </ul>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all">
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
//                                     <div>
//                                         <h3 className="text-2xl font-semibold text-purple-400">Full Stack Developer</h3>
//                                         <p className="text-xl text-gray-300">Daisy Online Media and Gaming Private Limited</p>
//                                     </div>
//                                     <div className="text-gray-400 flex items-center gap-2 mt-2 md:mt-0">
//                                         <Calendar className="w-5 h-5" />
//                                         <span>02/2023 – 12/2023 • Gurugram, India</span>
//                                     </div>
//                                 </div>
//                                 <ul className="space-y-3 text-gray-300">
//                                     <li className="flex items-start gap-3">
//                                         <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
//                                         <span>Proficient in front-end technologies (HTML, CSS, JavaScript frameworks) and backend development, ensuring seamless integration</span>
//                                     </li>
//                                     <li className="flex items-start gap-3">
//                                         <ChevronRight className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
//                                         <span>Skilled in server-side logic, database interactions, and API development for efficient data exchange</span>
//                                     </li>
//                                 </ul>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-8 rounded-lg border border-slate-600 hover:border-teal-500/50 transition-all">
//                                 <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
//                                     <div>
//                                         <h3 className="text-2xl font-semibold text-teal-400 flex items-center gap-2">
//                                             <GraduationCap className="w-6 h-6" />
//                                             Education
//                                         </h3>
//                                     </div>
//                                 </div>
//                                 <div className="space-y-4">
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-gray-200">Bachelor of Technology in Computer Science and Engineering</h4>
//                                         <p className="text-gray-300">Presidency University, Bengaluru</p>
//                                         <p className="text-gray-400 text-sm">08/2019 – 10/2023</p>
//                                     </div>
//                                     <div>
//                                         <h4 className="text-lg font-semibold text-gray-200">Higher Secondary School Education</h4>
//                                         <p className="text-gray-300">Sri Pratap Higher Secondary School, Srinagar</p>
//                                         <p className="text-gray-400 text-sm">08/2016 – 11/2017</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Projects Section */}
//             <section id="projects" className="py-20 bg-slate-800/50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
//                             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
//                                 <Folder className="w-10 h-10" />
//                                 Featured Projects
//                             </span>
//                         </motion.h2>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//                             {projects.map((project, index) => (
//                                 <motion.div
//                                     key={project.title}
//                                     variants={itemVariants}
//                                     whileHover={{ y: -5 }}
//                                     className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all group"
//                                 >
//                                     <div className="flex items-center justify-between mb-4">
//                                         <h3 className="text-xl font-semibold text-blue-400">{project.title}</h3>
//                                         <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
//                                     </div>

//                                     <p className="text-sm text-gray-400 mb-3 flex items-center gap-2">
//                                         <Calendar className="w-4 h-4" />
//                                         {project.period}
//                                     </p>

//                                     <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

//                                     <ul className="space-y-2 mb-6">
//                                         {project.features.map((feature, idx) => (
//                                             <li key={idx} className="text-sm text-gray-400 flex items-start gap-2">
//                                                 <ChevronRight className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
//                                                 <span>{feature}</span>
//                                             </li>
//                                         ))}
//                                     </ul>

//                                     <div className="flex flex-wrap gap-2">
//                                         {project.tech.map((tech, idx) => (
//                                             <span
//                                                 key={idx}
//                                                 className="px-3 py-1 text-xs bg-blue-500/20 text-blue-300 rounded-full border border-blue-500/30"
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>
//                                 </motion.div>
//                             ))}
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Skills Section */}
//             <section id="skills" className="py-20">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
//                             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
//                                 <Award className="w-10 h-10" />
//                                 Technical Skills
//                             </span>
//                         </motion.h2>

//                         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <Code className="w-8 h-8 text-blue-400" />
//                                     <h3 className="text-xl font-semibold text-blue-400">Languages</h3>
//                                 </div>
//                                 <div className="space-y-2">
//                                     {['TypeScript', 'JavaScript', 'Python'].map((skill) => (
//                                         <div key={skill} className="text-gray-300">{skill}</div>
//                                     ))}
//                                 </div>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <Globe className="w-8 h-8 text-purple-400" />
//                                     <h3 className="text-xl font-semibold text-purple-400">Frontend</h3>
//                                 </div>
//                                 <div className="space-y-2">
//                                     {['Next.js', 'React.js', 'Tailwind CSS'].map((skill) => (
//                                         <div key={skill} className="text-gray-300">{skill}</div>
//                                     ))}
//                                 </div>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <Server className="w-8 h-8 text-teal-400" />
//                                     <h3 className="text-xl font-semibold text-teal-400">Backend</h3>
//                                 </div>
//                                 <div className="space-y-2">
//                                     {['Node.js', 'Django', 'FastAPI'].map((skill) => (
//                                         <div key={skill} className="text-gray-300">{skill}</div>
//                                     ))}
//                                 </div>
//                             </motion.div>

//                             <motion.div variants={itemVariants} className="bg-slate-800/50 p-6 rounded-lg border border-slate-600">
//                                 <div className="flex items-center gap-3 mb-4">
//                                     <Database className="w-8 h-8 text-green-400" />
//                                     <h3 className="text-xl font-semibold text-green-400">Database</h3>
//                                 </div>
//                                 <div className="space-y-2">
//                                     {['PostgreSQL', 'MongoDB', 'MySQL'].map((skill) => (
//                                         <div key={skill} className="text-gray-300">{skill}</div>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         </div>

//                         <motion.div variants={itemVariants} className="mt-12">
//                             <h3 className="text-2xl font-semibold text-center mb-8 text-gray-300">All Technologies</h3>
//                             <div className="flex flex-wrap justify-center gap-3">
//                                 {skills.map((skill, index) => (
//                                     <motion.span
//                                         key={skill}
//                                         initial={{ opacity: 0, scale: 0 }}
//                                         whileInView={{ opacity: 1, scale: 1 }}
//                                         transition={{ delay: index * 0.1 }}
//                                         whileHover={{ scale: 1.1 }}
//                                         className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full border border-blue-500/30 hover:border-blue-400/50 transition-all cursor-default"
//                                     >
//                                         {skill}
//                                     </motion.span>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Contact Section */}
//             <section id="contact" className="py-20 bg-slate-800/50">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <motion.div
//                         variants={containerVariants}
//                         initial="hidden"
//                         whileInView="visible"
//                         viewport={{ once: true }}
//                     >
//                         <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16">
//                             <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent flex items-center justify-center gap-3">
//                                 <Mail className="w-10 h-10" />
//                                 Get In Touch
//                             </span>
//                         </motion.h2>

//                         <div className="max-w-4xl mx-auto">
//                             <motion.div variants={itemVariants} className="text-center mb-12">
//                                 <p className="text-xl text-gray-300 mb-6">
//                                     I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.
//                                 </p>
//                                 <p className="text-lg text-gray-400">
//                                     Whether you're looking for a backend developer or want to collaborate on something exciting, feel free to reach out!
//                                 </p>
//                             </motion.div>

//                             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
//                                 <motion.a
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     href="mailto:abrardar988651@gmail.com"
//                                     className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-500/50 transition-all group text-center"
//                                 >
//                                     <Mail className="w-8 h-8 text-blue-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                                     <h3 className="font-semibold text-gray-200 mb-2">Email</h3>
//                                     <p className="text-sm text-gray-400">abrardar988651@gmail.com</p>
//                                 </motion.a>

//                                 <motion.a
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     href="tel:6006045264"
//                                     className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-green-500/50 transition-all group text-center"
//                                 >
//                                     <Phone className="w-8 h-8 text-green-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                                     <h3 className="font-semibold text-gray-200 mb-2">Phone</h3>
//                                     <p className="text-sm text-gray-400">+91 6006045264</p>
//                                 </motion.a>

//                                 <motion.a
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     href="https://linkedin.com/in/abrarhussain0366"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-blue-600/50 transition-all group text-center"
//                                 >
//                                     <Linkedin className="w-8 h-8 text-blue-600 mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                                     <h3 className="font-semibold text-gray-200 mb-2">LinkedIn</h3>
//                                     <p className="text-sm text-gray-400">abrarhussain0366</p>
//                                 </motion.a>

//                                 <motion.a
//                                     variants={itemVariants}
//                                     whileHover={{ scale: 1.05 }}
//                                     href="https://github.com/Abrarhussaindar"
//                                     target="_blank"
//                                     rel="noopener noreferrer"
//                                     className="bg-slate-700/50 p-6 rounded-lg border border-slate-600 hover:border-purple-500/50 transition-all group text-center"
//                                 >
//                                     <Github className="w-8 h-8 text-purple-400 mx-auto mb-3 group-hover:scale-110 transition-transform" />
//                                     <h3 className="font-semibold text-gray-200 mb-2">GitHub</h3>
//                                     <p className="text-sm text-gray-400">Abrarhussaindar</p>
//                                 </motion.a>
//                             </div>

//                             <motion.div variants={itemVariants} className="text-center mt-12">
//                                 <motion.button
//                                     whileHover={{ scale: 1.05 }}
//                                     whileTap={{ scale: 0.95 }}
//                                     onClick={() => window.open('mailto:abrardar988651@gmail.com')}
//                                     className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-4 rounded-full font-semibold text-lg flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl transition-all"
//                                 >
//                                     <Mail className="w-6 h-6" />
//                                     Let's Work Together
//                                     <ChevronRight className="w-5 h-5" />
//                                 </motion.button>
//                             </motion.div>
//                         </div>
//                     </motion.div>
//                 </div>
//             </section>

//             {/* Footer */}
//             <footer className="py-8 border-t border-slate-700 bg-slate-900">
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="text-center">
//                         <p className="text-gray-400 mb-4">
//                             © 2025 Abrar Hussain Dar. Built with Next.js, TypeScript, and Tailwind CSS.
//                         </p>
//                         <div className="flex justify-center space-x-6">
//                             <motion.a
//                                 whileHover={{ scale: 1.1 }}
//                                 href="https://github.com/Abrarhussaindar"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-gray-400 hover:text-white transition-colors"
//                             >
//                                 <Github className="w-6 h-6" />
//                             </motion.a>
//                             <motion.a
//                                 whileHover={{ scale: 1.1 }}
//                                 href="https://linkedin.com/in/abrarhussain0366"
//                                 target="_blank"
//                                 rel="noopener noreferrer"
//                                 className="text-gray-400 hover:text-white transition-colors"
//                             >
//                                 <Linkedin className="w-6 h-6" />
//                             </motion.a>
//                             <motion.a
//                                 whileHover={{ scale: 1.1 }}
//                                 href="mailto:abrardar988651@gmail.com"
//                                 className="text-gray-400 hover:text-white transition-colors"
//                             >
//                                 <Mail className="w-6 h-6" />
//                             </motion.a>
//                         </div>
//                     </div>
//                 </div>
//             </footer>

//             {/* Scroll to Top Button */}
//             <AnimatePresence>
//                 {showScrollTop && (
//                     <motion.button
//                         initial={{ opacity: 0, scale: 0 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         exit={{ opacity: 0, scale: 0 }}
//                         whileHover={{ scale: 1.1 }}
//                         whileTap={{ scale: 0.9 }}
//                         onClick={scrollToTop}
//                         className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-full shadow-lg z-50 hover:shadow-xl transition-all"
//                     >
//                         <ArrowUp className="w-6 h-6" />
//                     </motion.button>
//                 )}
//             </AnimatePresence>

//             {/* Background Elements */}
//             <div className="fixed inset-0 overflow-hidden pointer-events-none">
//                 <div className="absolute -top-4 -right-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
//                 <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '2s' }}></div>
//                 <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse" style={{ animationDelay: '4s' }}></div>
//             </div>
//         </div>
//     );
// };

// export default Portfolio;


"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Github,
    Linkedin,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Code,
    Database,
    Server,
    Globe,
    ChevronRight,
    ExternalLink,
    Download,
    ArrowUp,
    Briefcase,
    GraduationCap,
    User,
    Folder,
    Award,
    Menu,
    X
} from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('home');
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 400);

            // Update active section based on scroll position
            const sections = ['home', 'about', 'experience', 'projects', 'skills', 'contact'];
            const scrollY = window.scrollY + 150; // Add offset for better accuracy

            sections.forEach(section => {
                const element = document.getElementById(section);
                if (element) {
                    const { offsetTop, offsetHeight } = element;
                    if (scrollY >= offsetTop && scrollY < offsetTop + offsetHeight) {
                        setActiveSection(section);
                    }
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
        setIsMenuOpen(false);
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    const skills = [
        'TypeScript', 'Next.js', 'Node.js', 'React.js', 'JavaScript', 'Python',
        'Django', 'FastAPI', 'MongoDB', 'PostgreSQL', 'MERN Stack', 'Azure',
        'Pandas', 'Postman', 'Git/Github', 'Linux'
    ];

    const projects = [
        {
            title: "EcomMatrix",
            period: "02/2025 – present",
            description: "A SaaS-based e-commerce dashboard built with Next.js, Node.js, TypeScript, and PostgreSQL",
            features: [
                "Multi-tenant architecture for multiple clients",
                "Real-time analytics and interactive dashboards",
                "Performance tracking and optimization tools"
            ],
            tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"]
        },
        {
            title: "HomeBasics",
            period: "01/2025 – 02/2025",
            description: "A water purifier store application built with MERN stack",
            features: [
                "Scalable MERN application with secure authentication",
                "Optimized API performance",
                "Cloud-based infrastructure deployment"
            ],
            tech: ["MongoDB", "Express.js", "React.js", "Node.js"]
        },
        {
            title: "YourSportz",
            period: "04/2024 – present",
            description: "Local football arena management system",
            features: [
                "Backend services and APIs using Node.js",
                "Optimal performance and scalability",
                "Comprehensive arena management features"
            ],
            tech: ["Node.js", "JavaScript", "API Development"]
        }
    ];

    return (
        <div className="min-h-screen bg-[#222831] text-[#EEEEEE] font-sans overflow-x-hidden">
            {/* Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                className="fixed top-0 w-full z-50 bg-[#222831]/80 backdrop-blur-md border-b border-[#393E46]"
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center py-4">
                        <motion.div
                            whileHover={{ scale: 1.05 }}
                            className="text-2xl font-bold text-[#00ADB5]"
                        >
                            AHD
                        </motion.div>

                        {/* Desktop Menu */}
                        <div className="hidden md:flex space-x-1">
                            {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                <motion.button
                                    key={item}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    onClick={() => scrollToSection(item.toLowerCase())}
                                    className={`px-4 py-2 rounded-md transition-all duration-300 font-medium ${activeSection === item.toLowerCase()
                                        ? 'text-[#00ADB5] bg-[#00ADB5]/10'
                                        : 'text-[#EEEEEE]/80 hover:text-[#EEEEEE]'
                                        }`}
                                >
                                    {item}
                                </motion.button>
                            ))}
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="md:hidden p-2 text-[#EEEEEE]"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            className="md:hidden bg-[#222831] border-t border-[#393E46]"
                        >
                            <div className="px-2 pt-2 pb-3 space-y-1">
                                {['Home', 'About', 'Experience', 'Projects', 'Skills', 'Contact'].map((item) => (
                                    <button
                                        key={item}
                                        onClick={() => scrollToSection(item.toLowerCase())}
                                        className="block w-full text-left px-3 py-2 text-[#EEEEEE]/80 hover:text-[#EEEEEE] hover:bg-[#393E46] rounded-md transition-colors"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.nav>

            {/* Hero Section */}
            <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
                <div className="max-w-4xl mx-auto text-center">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={itemVariants} className="mb-8">
                            <div className="w-36 h-36 mx-auto mb-6 bg-[#00ADB5] rounded-full flex items-center justify-center text-5xl font-bold text-[#222831] shadow-2xl shadow-[#00ADB5]/20">
                                AHD
                            </div>
                        </motion.div>

                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-4 text-[#EEEEEE]">
                            Abrar Hussain Dar
                        </motion.h1>

                        <motion.p variants={itemVariants} className="text-2xl md:text-3xl text-[#00ADB5] mb-8 font-medium">
                            Backend Developer & Full Stack Engineer
                        </motion.p>

                        <motion.p variants={itemVariants} className="text-lg text-[#EEEEEE]/70 mb-12 max-w-2xl mx-auto">
                            Passionate about building scalable, high-performance applications with modern technologies. Specialized in Node.js, TypeScript, and cloud architecture.
                        </motion.p>

                        <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => scrollToSection('contact')}
                                className="bg-[#00ADB5] text-[#222831] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 shadow-lg shadow-[#00ADB5]/20 hover:shadow-xl hover:shadow-[#00ADB5]/30 transition-all"
                            >
                                <Mail className="w-5 h-5" />
                                Get In Touch
                            </motion.button>

                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="border-2 border-[#393E46] text-[#EEEEEE] px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-[#393E46] hover:border-[#00ADB5]/50 transition-all"
                            >
                                <Download className="w-5 h-5" />
                                Download Resume
                            </motion.button>
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Section Wrapper */}
            <div className="space-y-20 md:space-y-32">

                {/* About Section */}
                <section id="about" className="py-20 bg-[#393E46]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[#00ADB5]">
                                <User className="w-10 h-10" /> About Me
                            </motion.h2>
                            <div className="grid md:grid-cols-5 gap-12 items-center">
                                <motion.div variants={itemVariants} className="md:col-span-3">
                                    <p className="text-[#EEEEEE]/80 mb-6 leading-relaxed text-lg">
                                        I'm a passionate Backend Developer with expertise in building scalable, high-performance applications. Currently based in Bengaluru, I specialize in modern web technologies including Node.js, TypeScript, and cloud architecture.
                                    </p>
                                    <p className="text-[#EEEEEE]/80 leading-relaxed text-lg">
                                        With experience at companies like Navrekh Technologies and Daisy Online Media, I've developed and maintained enterprise-level applications, designed efficient database systems, and created robust APIs that serve thousands of users.
                                    </p>
                                </motion.div>
                                <motion.div variants={itemVariants} className="md:col-span-2 space-y-6">
                                    <div className="bg-[#222831] p-6 rounded-lg border border-[#00ADB5]/20">
                                        <h4 className="text-xl font-semibold mb-4 text-[#00ADB5] flex items-center gap-2"><Code className="w-6 h-6" />Current Focus</h4>
                                        <ul className="space-y-2 text-[#EEEEEE]/90">
                                            <li>• Building SaaS apps with Next.js</li>
                                            <li>• Scalable backend architectures</li>
                                            <li>• Cloud deployment optimization</li>
                                            <li>• Real-time analytics dashboards</li>
                                        </ul>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Experience Section */}
                <section id="experience" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[#00ADB5]">
                                <Briefcase className="w-10 h-10" /> Experience
                            </motion.h2>
                            <div className="relative border-l-2 border-[#393E46] pl-8 space-y-16">
                                <div className="absolute w-4 h-4 bg-[#00ADB5] rounded-full -left-2 top-2"></div>
                                <motion.div variants={itemVariants}>
                                    <p className="absolute -left-24 top-1 text-[#EEEEEE]/50 text-sm hidden md:block">04/2024 – 05/2025</p>
                                    <h3 className="text-2xl font-semibold text-[#EEEEEE]">Backend Developer</h3>
                                    <p className="text-xl text-[#EEEEEE]/80 mb-2">Navrekh Technologies Pvt. Ltd.</p>
                                    <p className="text-[#EEEEEE]/50 mb-4 md:hidden">04/2024 – 05/2025 • Pune, India</p>
                                    <ul className="space-y-3 text-[#EEEEEE]/80">
                                        <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#00ADB5] mt-1 flex-shrink-0" />Developed and maintained high-performance, scalable backend services and APIs using Node.js.</li>
                                        <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#00ADB5] mt-1 flex-shrink-0" />Designed, implemented, and maintained SQL and NoSQL databases for data integrity and performance.</li>
                                    </ul>
                                </motion.div>
                                <div className="absolute w-4 h-4 bg-[#00ADB5] rounded-full -left-2 top-[12.5rem]"></div>
                                <motion.div variants={itemVariants}>
                                    <p className="absolute -left-24 top-1 text-[#EEEEEE]/50 text-sm hidden md:block">02/2023 – 12/2023</p>
                                    <h3 className="text-2xl font-semibold text-[#EEEEEE]">Full Stack Developer</h3>
                                    <p className="text-xl text-[#EEEEEE]/80 mb-2">Daisy Online Media and Gaming</p>
                                    <p className="text-[#EEEEEE]/50 mb-4 md:hidden">02/2023 – 12/2023 • Gurugram, India</p>
                                    <ul className="space-y-3 text-[#EEEEEE]/80">
                                        <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#00ADB5] mt-1 flex-shrink-0" />Proficient in both front-end and backend development, ensuring seamless integration.</li>
                                        <li className="flex items-start gap-3"><ChevronRight className="w-5 h-5 text-[#00ADB5] mt-1 flex-shrink-0" />Skilled in server-side logic, database interactions, and API development for efficient data exchange.</li>
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Projects Section */}
                <section id="projects" className="py-20 bg-[#393E46]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }}>
                            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[#00ADB5]">
                                <Folder className="w-10 h-10" /> Featured Projects
                            </motion.h2>
                            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                                {projects.map((project) => (
                                    <motion.div key={project.title} variants={itemVariants} whileHover={{ y: -8, transition: { duration: 0.2 } }} className="bg-[#222831] p-6 rounded-lg border border-[#393E46] hover:border-[#00ADB5]/50 transition-colors group flex flex-col">
                                        <div className="flex-grow">
                                            <div className="flex items-center justify-between mb-4">
                                                <h3 className="text-xl font-semibold text-[#EEEEEE]">{project.title}</h3>
                                                <ExternalLink className="w-5 h-5 text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors" />
                                            </div>
                                            <p className="text-sm text-[#EEEEEE]/50 mb-4">{project.description}</p>
                                            <ul className="space-y-2 mb-6">
                                                {project.features.map((feature, idx) => (
                                                    <li key={idx} className="text-sm text-[#EEEEEE]/80 flex items-start gap-2"><ChevronRight className="w-4 h-4 text-[#00ADB5] mt-0.5 flex-shrink-0" />{feature}</li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {project.tech.map((tech, idx) => (
                                                <span key={idx} className="px-3 py-1 text-xs bg-[#00ADB5]/20 text-[#00ADB5] rounded-full">{tech}</span>
                                            ))}
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* Skills Section */}
                <section id="skills" className="py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-16 flex items-center justify-center gap-3 text-[#00ADB5]">
                                <Award className="w-10 h-10" /> Technical Skills
                            </motion.h2>
                            <motion.div variants={itemVariants} className="mt-12">
                                <div className="flex flex-wrap justify-center gap-3 md:gap-4">
                                    {skills.map((skill) => (
                                        <motion.span key={skill} whileHover={{ y: -3 }} className="px-5 py-2 bg-[#393E46] text-[#EEEEEE]/90 rounded-lg cursor-default font-medium">
                                            {skill}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </section>

                {/* Contact Section */}
                <section id="contact" className="py-20 bg-[#393E46]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }}>
                            <motion.h2 variants={itemVariants} className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-3 text-[#00ADB5]">
                                <Mail className="w-10 h-10" /> Get In Touch
                            </motion.h2>
                            <motion.p variants={itemVariants} className="text-center text-lg text-[#EEEEEE]/70 max-w-2xl mx-auto mb-12">
                                I'm currently available for freelance work and open to discussing new opportunities. Feel free to reach out—I'll get back to you soon!
                            </motion.p>

                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
                                <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="mailto:abrardar988651@gmail.com" className="bg-[#222831] p-6 rounded-lg border border-transparent hover:border-[#00ADB5]/50 transition-all group text-center">
                                    <Mail className="w-10 h-10 text-[#00ADB5] mx-auto mb-3" />
                                    <h3 className="font-semibold text-[#EEEEEE] text-lg">Email</h3>
                                    <p className="text-sm text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors">abrardar988651@gmail.com</p>
                                </motion.a>
                                <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="https://linkedin.com/in/abrarhussain0366" target="_blank" rel="noopener noreferrer" className="bg-[#222831] p-6 rounded-lg border border-transparent hover:border-[#00ADB5]/50 transition-all group text-center">
                                    <Linkedin className="w-10 h-10 text-[#00ADB5] mx-auto mb-3" />
                                    <h3 className="font-semibold text-[#EEEEEE] text-lg">LinkedIn</h3>
                                    <p className="text-sm text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors">abrarhussain0366</p>
                                </motion.a>
                                <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="https://github.com/Abrarhussaindar" target="_blank" rel="noopener noreferrer" className="bg-[#222831] p-6 rounded-lg border border-transparent hover:border-[#00ADB5]/50 transition-all group text-center">
                                    <Github className="w-10 h-10 text-[#00ADB5] mx-auto mb-3" />
                                    <h3 className="font-semibold text-[#EEEEEE] text-lg">GitHub</h3>
                                    <p className="text-sm text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors">Abrarhussaindar</p>
                                </motion.a>
                                <motion.a variants={itemVariants} whileHover={{ y: -5 }} href="tel:6006045264" className="bg-[#222831] p-6 rounded-lg border border-transparent hover:border-[#00ADB5]/50 transition-all group text-center">
                                    <Phone className="w-10 h-10 text-[#00ADB5] mx-auto mb-3" />
                                    <h3 className="font-semibold text-[#EEEEEE] text-lg">Phone</h3>
                                    <p className="text-sm text-[#EEEEEE]/50 group-hover:text-[#00ADB5] transition-colors">+91 6006045264</p>
                                </motion.a>
                            </div>
                        </motion.div>
                    </div>
                </section>
            </div>


            {/* Footer */}
            <footer className="py-8 mt-20 border-t border-[#393E46]">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <p className="text-[#EEEEEE]/50 mb-4">
                        © 2025 Abrar Hussain Dar. Designed & Built with Next.js and Tailwind CSS.
                    </p>
                    <div className="flex justify-center space-x-6">
                        <motion.a whileHover={{ scale: 1.2, color: '#00ADB5' }} href="https://github.com/Abrarhussaindar" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/60 transition-colors"><Github /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#00ADB5' }} href="https://linkedin.com/in/abrarhussain0366" target="_blank" rel="noopener noreferrer" className="text-[#EEEEEE]/60 transition-colors"><Linkedin /></motion.a>
                        <motion.a whileHover={{ scale: 1.2, color: '#00ADB5' }} href="mailto:abrardar988651@gmail.com" className="text-[#EEEEEE]/60 transition-colors"><Mail /></motion.a>
                    </div>
                </div>
            </footer>

            {/* Scroll to Top Button */}
            <AnimatePresence>
                {showScrollTop && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0 }}
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        className="fixed bottom-6 right-6 bg-[#00ADB5] text-[#222831] p-3 rounded-full shadow-lg z-50"
                    >
                        <ArrowUp className="w-6 h-6" />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Portfolio;