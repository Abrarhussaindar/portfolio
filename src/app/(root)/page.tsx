// // "use client"
// // import React, { useState, useEffect } from 'react';
// // import { motion, AnimatePresence } from 'framer-motion';
// // import {
// //     Code2,
// //     Database,
// //     Server,
// //     Globe,
// //     Mail,
// //     Phone,
// //     Linkedin,
// //     Github,
// //     MapPin,
// //     Calendar,
// //     Building2,
// //     GraduationCap,
// //     Briefcase,
// //     Terminal,
// //     Award,
// //     ExternalLink,
// //     Download,
// //     Menu,
// //     X,
// //     ChevronDown,
// //     TrendingUp,
// //     Users,
// //     Zap,
// //     Shield
// // } from 'lucide-react';

// // const Portfolio = () => {
// //     const [activeSection, setActiveSection] = useState('hero');
// //     const [isMenuOpen, setIsMenuOpen] = useState(false);
// //     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

// //     useEffect(() => {
// //         const handleMouseMove = (e: any) => {
// //             setMousePosition({ x: e.clientX, y: e.clientY });
// //         };

// //         window.addEventListener('mousemove', handleMouseMove);
// //         return () => window.removeEventListener('mousemove', handleMouseMove);
// //     }, []);

// //     const containerVariants = {
// //         hidden: { opacity: 0 },
// //         visible: {
// //             opacity: 1,
// //             transition: { staggerChildren: 0.1 }
// //         }
// //     };

// //     const itemVariants = {
// //         hidden: { y: 20, opacity: 0 },
// //         visible: {
// //             y: 0,
// //             opacity: 1,
// //             transition: { duration: 0.6, ease: "easeOut" }
// //         }
// //     };

// //     const skillsData = [
// //         { name: 'TypeScript', level: 90, category: 'Frontend' },
// //         { name: 'Next.js', level: 85, category: 'Frontend' },
// //         { name: 'Node.js', level: 95, category: 'Backend' },
// //         { name: 'React.js', level: 88, category: 'Frontend' },
// //         { name: 'JavaScript', level: 92, category: 'Core' },
// //         { name: 'Python', level: 80, category: 'Backend' },
// //         { name: 'MongoDB', level: 85, category: 'Database' },
// //         { name: 'PostgreSQL', level: 82, category: 'Database' },
// //         { name: 'Django', level: 75, category: 'Backend' },
// //         { name: 'FastAPI', level: 78, category: 'Backend' }
// //     ];

// //     const projects = [
// //         {
// //             title: "EcomMatrix",
// //             subtitle: "E-Commerce Dashboard",
// //             period: "02/2025 – present",
// //             description: "Built EcomMatrix, a SaaS-based e-commerce dashboard using Next.js, Node.js, TypeScript, and PostgreSQL.",
// //             features: [
// //                 "Multi-tenant architecture with isolated data environments",
// //                 "Real-time analytics and interactive dashboards",
// //                 "Performance optimization tools for businesses"
// //             ],
// //             tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
// //             metrics: { users: "500+", performance: "99.9%", growth: "+150%" }
// //         },
// //         {
// //             title: "HomeBasics",
// //             subtitle: "Water Purifier Store",
// //             period: "01/2025 – 02/2025",
// //             description: "Engineered a Scalable MERN Application with secure authentication and optimized API performance.",
// //             features: [
// //                 "Secure authentication system",
// //                 "Cloud-based infrastructure deployment",
// //                 "Optimized API performance"
// //             ],
// //             tech: ["MongoDB", "Express", "React", "Node.js"],
// //             metrics: { uptime: "99.8%", speed: "2.1s", security: "A+" }
// //         },
// //         {
// //             title: "YourSportz",
// //             subtitle: "Local Football Arena",
// //             period: "04/2024 – present",
// //             description: "Designed, developed, and maintained backend services and APIs using Node.js for optimal performance.",
// //             features: [
// //                 "High-performance backend services",
// //                 "Scalable API architecture",
// //                 "Real-time booking system"
// //             ],
// //             tech: ["Node.js", "MongoDB", "Express", "JWT"],
// //             metrics: { bookings: "1000+", response: "150ms", satisfaction: "4.8/5" }
// //         }
// //     ];

// //     const experiences = [
// //         {
// //             title: "Backend Developer",
// //             company: "Navrekh Technologies Pvt. Ltd.",
// //             location: "Pune, India",
// //             period: "04/2024 – 05/2025",
// //             responsibilities: [
// //                 "Developed and maintained high-performance, scalable backend services and APIs using Node.js",
// //                 "Designed, implemented, and maintained SQL and NoSQL databases, ensuring data integrity and optimized performance"
// //             ]
// //         },
// //         {
// //             title: "Full Stack Developer",
// //             company: "Daisy Online Media and Gaming Private Limited",
// //             location: "Gurugram, India",
// //             period: "02/2023 – 12/2023",
// //             responsibilities: [
// //                 "Proficient in front-end technologies (HTML, CSS, JavaScript frameworks) and backend development",
// //                 "Skilled in server-side logic, database interactions, and API development"
// //             ]
// //         }
// //     ];

// //     const navigation = [
// //         { name: 'Home', href: '#hero' },
// //         { name: 'About', href: '#about' },
// //         { name: 'Experience', href: '#experience' },
// //         { name: 'Projects', href: '#projects' },
// //         { name: 'Skills', href: '#skills' },
// //         { name: 'Contact', href: '#contact' }
// //     ];

// //     return (
// //         <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-x-hidden">
// //             {/* Animated Background */}
// //             <div className="fixed inset-0 z-0">
// //                 <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)]"></div>
// //                 <motion.div
// //                     className="absolute w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
// //                     animate={{
// //                         x: mousePosition.x * 0.02,
// //                         y: mousePosition.y * 0.02,
// //                     }}
// //                     transition={{ type: "spring", stiffness: 50, damping: 10 }}
// //                 />
// //                 <motion.div
// //                     className="absolute right-0 bottom-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
// //                     animate={{
// //                         x: mousePosition.x * -0.01,
// //                         y: mousePosition.y * -0.01,
// //                     }}
// //                     transition={{ type: "spring", stiffness: 30, damping: 10 }}
// //                 />
// //             </div>

// //             {/* Navigation */}
// //             <motion.nav
// //                 className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-purple-500/20"
// //                 initial={{ y: -100 }}
// //                 animate={{ y: 0 }}
// //                 transition={{ duration: 0.6 }}
// //             >
// //                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
// //                     <div className="flex justify-between items-center py-4">
// //                         <motion.div
// //                             className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"
// //                             whileHover={{ scale: 1.05 }}
// //                         >
// //                             Abrar Dar
// //                         </motion.div>

// //                         {/* Desktop Navigation */}
// //                         <div className="hidden md:flex space-x-8">
// //                             {navigation.map((item) => (
// //                                 <motion.a
// //                                     key={item.name}
// //                                     href={item.href}
// //                                     className="relative text-gray-300 hover:text-white transition-colors duration-300"
// //                                     whileHover={{ scale: 1.1 }}
// //                                     whileTap={{ scale: 0.95 }}
// //                                 >
// //                                     {item.name}
// //                                     <motion.div
// //                                         className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-400"
// //                                         whileHover={{ width: "100%" }}
// //                                         transition={{ duration: 0.3 }}
// //                                     />
// //                                 </motion.a>
// //                             ))}
// //                         </div>

// //                         {/* Mobile Menu Button */}
// //                         <motion.button
// //                             className="md:hidden text-white"
// //                             onClick={() => setIsMenuOpen(!isMenuOpen)}
// //                             whileTap={{ scale: 0.95 }}
// //                         >
// //                             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
// //                         </motion.button>
// //                     </div>
// //                 </div>

// //                 {/* Mobile Navigation */}
// //                 <AnimatePresence>
// //                     {isMenuOpen && (
// //                         <motion.div
// //                             className="md:hidden bg-slate-800/95 backdrop-blur-md"
// //                             initial={{ opacity: 0, height: 0 }}
// //                             animate={{ opacity: 1, height: "auto" }}
// //                             exit={{ opacity: 0, height: 0 }}
// //                             transition={{ duration: 0.3 }}
// //                         >
// //                             <div className="px-4 py-2 space-y-2">
// //                                 {navigation.map((item) => (
// //                                     <motion.a
// //                                         key={item.name}
// //                                         href={item.href}
// //                                         className="block px-3 py-2 text-gray-300 hover:text-white transition-colors duration-300"
// //                                         onClick={() => setIsMenuOpen(false)}
// //                                         whileHover={{ x: 10 }}
// //                                     >
// //                                         {item.name}
// //                                     </motion.a>
// //                                 ))}
// //                             </div>
// //                         </motion.div>
// //                     )}
// //                 </AnimatePresence>
// //             </motion.nav>

// //             {/* Hero Section */}
// //             <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
// //                 <motion.div
// //                     className="text-center max-w-4xl mx-auto px-4"
// //                     variants={containerVariants}
// //                     initial="hidden"
// //                     animate="visible"
// //                 >
// //                     <motion.div
// //                         variants={itemVariants}
// //                         className="mb-6"
// //                     >
// //                         <div className="w-32 h-32 mx-auto mb-6 relative">
// //                             <motion.div
// //                                 className="w-full h-full bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold"
// //                                 whileHover={{ scale: 1.1, rotate: 360 }}
// //                                 transition={{ duration: 0.6 }}
// //                             >
// //                                 AD
// //                             </motion.div>
// //                             <motion.div
// //                                 className="absolute -inset-2 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-lg"
// //                                 animate={{ rotate: 360 }}
// //                                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
// //                             />
// //                         </div>
// //                     </motion.div>

// //                     <motion.h1
// //                         variants={itemVariants}
// //                         className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"
// //                     >
// //                         Abrar Hussain Dar
// //                     </motion.h1>

// //                     <motion.h2
// //                         variants={itemVariants}
// //                         className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300"
// //                     >
// //                         Backend Developer
// //                     </motion.h2>

// //                     <motion.p
// //                         variants={itemVariants}
// //                         className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed"
// //                     >
// //                         Crafting scalable, high-performance backend solutions with cutting-edge technologies.
// //                         Specializing in Node.js, TypeScript, and cloud architectures.
// //                     </motion.p>

// //                     <motion.div
// //                         variants={itemVariants}
// //                         className="flex flex-col sm:flex-row gap-4 justify-center items-center"
// //                     >
// //                         <motion.button
// //                             className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
// //                             whileHover={{ scale: 1.05 }}
// //                             whileTap={{ scale: 0.95 }}
// //                         >
// //                             <Download size={20} />
// //                             <span>Download Resume</span>
// //                         </motion.button>

// //                         <motion.button
// //                             className="border border-purple-500/50 hover:border-purple-500 px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 hover:bg-purple-500/10"
// //                             whileHover={{ scale: 1.05 }}
// //                             whileTap={{ scale: 0.95 }}
// //                         >
// //                             <Mail size={20} />
// //                             <span>Get In Touch</span>
// //                         </motion.button>
// //                     </motion.div>

// //                     <motion.div
// //                         variants={itemVariants}
// //                         className="flex justify-center space-x-6 mt-8"
// //                     >
// //                         {[
// //                             { icon: Github, href: "https://github.com/Abrarhussaindar" },
// //                             { icon: Linkedin, href: "https://linkedin.com/in/abrarhussain0366" },
// //                             { icon: Mail, href: "mailto:abrardar988651@gmail.com" }
// //                         ].map(({ icon: Icon, href }, index) => (
// //                             <motion.a
// //                                 key={index}
// //                                 href={href}
// //                                 className="text-gray-400 hover:text-white transition-colors duration-300"
// //                                 whileHover={{ scale: 1.2, y: -2 }}
// //                                 whileTap={{ scale: 0.95 }}
// //                             >
// //                                 <Icon size={24} />
// //                             </motion.a>
// //                         ))}
// //                     </motion.div>
// //                 </motion.div>

// //                 <motion.div
// //                     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
// //                     animate={{ y: [0, 10, 0] }}
// //                     transition={{ duration: 2, repeat: Infinity }}
// //                 >
// //                     <ChevronDown size={32} className="text-purple-400" />
// //                 </motion.div>
// //             </section>

// //             {/* About Section */}
// //             <section id="about" className="py-20 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center mb-16"
// //                     >
// //                         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                             About Me
// //                         </h2>
// //                         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
// //                     </motion.div>

// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
// //                         <motion.div
// //                             initial={{ opacity: 0, x: -50 }}
// //                             whileInView={{ opacity: 1, x: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                         >
// //                             <h3 className="text-2xl font-semibold mb-6 text-purple-300">
// //                                 Passionate Backend Developer
// //                             </h3>
// //                             <p className="text-gray-300 mb-6 leading-relaxed">
// //                                 Based in Bengaluru, India, I'm a dedicated backend developer with extensive experience
// //                                 in building scalable, high-performance applications. My expertise spans across modern
// //                                 technologies including Node.js, TypeScript, and various database systems.
// //                             </p>
// //                             <p className="text-gray-300 mb-6 leading-relaxed">
// //                                 I've successfully delivered projects ranging from SaaS e-commerce platforms to
// //                                 real-time booking systems, always focusing on optimal performance, security, and user experience.
// //                             </p>

// //                             <div className="grid grid-cols-2 gap-4 mt-8">
// //                                 <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
// //                                     <div className="text-2xl font-bold text-purple-400 mb-2">2+</div>
// //                                     <div className="text-gray-400">Years Experience</div>
// //                                 </div>
// //                                 <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-purple-500/20">
// //                                     <div className="text-2xl font-bold text-blue-400 mb-2">15+</div>
// //                                     <div className="text-gray-400">Projects Completed</div>
// //                                 </div>
// //                             </div>
// //                         </motion.div>

// //                         <motion.div
// //                             initial={{ opacity: 0, x: 50 }}
// //                             whileInView={{ opacity: 1, x: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                             className="space-y-6"
// //                         >
// //                             <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
// //                                 <div className="flex items-center mb-4">
// //                                     <MapPin className="text-purple-400 mr-3" size={20} />
// //                                     <span className="text-gray-300">Bengaluru, India</span>
// //                                 </div>
// //                                 <div className="flex items-center mb-4">
// //                                     <Mail className="text-purple-400 mr-3" size={20} />
// //                                     <span className="text-gray-300">abrardar988651@gmail.com</span>
// //                                 </div>
// //                                 <div className="flex items-center mb-4">
// //                                     <Phone className="text-purple-400 mr-3" size={20} />
// //                                     <span className="text-gray-300">6006045264</span>
// //                                 </div>
// //                             </div>

// //                             <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
// //                                 <h4 className="text-lg font-semibold mb-4 text-purple-300">Education</h4>
// //                                 <div className="space-y-4">
// //                                     <div>
// //                                         <div className="flex items-center mb-2">
// //                                             <GraduationCap className="text-blue-400 mr-3" size={18} />
// //                                             <span className="font-medium">B.Tech Computer Science</span>
// //                                         </div>
// //                                         <div className="text-gray-400 text-sm ml-9">
// //                                             Presidency University, Bengaluru (2019-2023)
// //                                         </div>
// //                                     </div>
// //                                 </div>
// //                             </div>
// //                         </motion.div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Experience Section */}
// //             <section id="experience" className="py-20 bg-slate-800/30 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center mb-16"
// //                     >
// //                         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                             Professional Experience
// //                         </h2>
// //                         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
// //                     </motion.div>

// //                     <div className="space-y-8">
// //                         {experiences.map((exp, index) => (
// //                             <motion.div
// //                                 key={index}
// //                                 initial={{ opacity: 0, y: 50 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.6, delay: index * 0.2 }}
// //                                 viewport={{ once: true }}
// //                                 className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
// //                                 whileHover={{ scale: 1.02 }}
// //                             >
// //                                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
// //                                     <div>
// //                                         <h3 className="text-2xl font-semibold text-white mb-2">{exp.title}</h3>
// //                                         <div className="flex items-center text-purple-300 mb-2">
// //                                             <Building2 size={18} className="mr-2" />
// //                                             {exp.company}
// //                                         </div>
// //                                         <div className="flex items-center text-gray-400">
// //                                             <MapPin size={16} className="mr-2" />
// //                                             {exp.location}
// //                                         </div>
// //                                     </div>
// //                                     <div className="flex items-center text-blue-300 mt-4 md:mt-0">
// //                                         <Calendar size={16} className="mr-2" />
// //                                         {exp.period}
// //                                     </div>
// //                                 </div>

// //                                 <div className="space-y-3">
// //                                     {exp.responsibilities.map((resp, respIndex) => (
// //                                         <motion.div
// //                                             key={respIndex}
// //                                             className="flex items-start"
// //                                             initial={{ opacity: 0, x: -20 }}
// //                                             whileInView={{ opacity: 1, x: 0 }}
// //                                             transition={{ delay: respIndex * 0.1 }}
// //                                         >
// //                                             <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
// //                                             <p className="text-gray-300 leading-relaxed">{resp}</p>
// //                                         </motion.div>
// //                                     ))}
// //                                 </div>
// //                             </motion.div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Projects Section */}
// //             <section id="projects" className="py-20 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center mb-16"
// //                     >
// //                         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                             Featured Projects
// //                         </h2>
// //                         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
// //                     </motion.div>

// //                     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
// //                         {projects.map((project, index) => (
// //                             <motion.div
// //                                 key={index}
// //                                 initial={{ opacity: 0, y: 50 }}
// //                                 whileInView={{ opacity: 1, y: 0 }}
// //                                 transition={{ duration: 0.6, delay: index * 0.2 }}
// //                                 viewport={{ once: true }}
// //                                 className="bg-slate-800/50 rounded-xl border border-purple-500/20 overflow-hidden hover:border-purple-500/40 transition-all duration-300 group"
// //                                 whileHover={{ scale: 1.05 }}
// //                             >
// //                                 <div className="p-6">
// //                                     <div className="flex items-center justify-between mb-4">
// //                                         <h3 className="text-xl font-semibold text-white">{project.title}</h3>
// //                                         <motion.div
// //                                             whileHover={{ scale: 1.1 }}
// //                                             className="text-purple-400"
// //                                         >
// //                                             <ExternalLink size={20} />
// //                                         </motion.div>
// //                                     </div>

// //                                     <p className="text-purple-300 text-sm mb-2">{project.subtitle}</p>
// //                                     <p className="text-gray-400 text-sm mb-4">{project.period}</p>

// //                                     <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

// //                                     <div className="space-y-2 mb-6">
// //                                         {project.features.map((feature, featureIndex) => (
// //                                             <div key={featureIndex} className="flex items-start">
// //                                                 <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
// //                                                 <p className="text-gray-400 text-sm">{feature}</p>
// //                                             </div>
// //                                         ))}
// //                                     </div>

// //                                     <div className="flex flex-wrap gap-2 mb-6">
// //                                         {project.tech.map((tech, techIndex) => (
// //                                             <span
// //                                                 key={techIndex}
// //                                                 className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-xs font-medium border border-purple-500/30"
// //                                             >
// //                                                 {tech}
// //                                             </span>
// //                                         ))}
// //                                     </div>

// //                                     <div className="grid grid-cols-3 gap-4">
// //                                         {Object.entries(project.metrics).map(([key, value], metricIndex) => (
// //                                             <div key={metricIndex} className="text-center">
// //                                                 <div className="text-lg font-bold text-purple-400">{value}</div>
// //                                                 <div className="text-xs text-gray-400 capitalize">{key}</div>
// //                                             </div>
// //                                         ))}
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         ))}
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Skills Section */}
// //             <section id="skills" className="py-20 bg-slate-800/30 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center mb-16"
// //                     >
// //                         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                             Technical Skills
// //                         </h2>
// //                         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
// //                     </motion.div>

// //                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
// //                         {skillsData.map((skill, index) => (
// //                             <motion.div
// //                                 key={index}
// //                                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
// //                                 whileInView={{ opacity: 1, x: 0 }}
// //                                 transition={{ duration: 0.6, delay: index * 0.1 }}
// //                                 viewport={{ once: true }}
// //                                 className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20"
// //                             >
// //                                 <div className="flex justify-between items-center mb-3">
// //                                     <span className="text-white font-medium">{skill.name}</span>
// //                                     <span className="text-purple-300 text-sm">{skill.level}%</span>
// //                                 </div>
// //                                 <div className="w-full bg-slate-700 rounded-full h-3">
// //                                     <motion.div
// //                                         className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
// //                                         initial={{ width: 0 }}
// //                                         whileInView={{ width: `${skill.level}%` }}
// //                                         transition={{ duration: 1, delay: index * 0.1 }}
// //                                     />
// //                                 </div>
// //                                 <span className="text-gray-400 text-xs mt-2 block">{skill.category}</span>
// //                             </motion.div>
// //                         ))}
// //                     </div>

// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6, delay: 0.5 }}
// //                         viewport={{ once: true }}
// //                         className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
// //                     >
// //                         {[
// //                             { icon: Code2, label: "Clean Code", count: "1000+" },
// //                             { icon: Database, label: "Databases", count: "5+" },
// //                             { icon: Server, label: "APIs Built", count: "50+" },
// //                             { icon: Zap, label: "Performance", count: "99.9%" }
// //                         ].map((stat, index) => (
// //                             <motion.div
// //                                 key={index}
// //                                 className="text-center"
// //                                 whileHover={{ scale: 1.05 }}
// //                             >
// //                                 <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center border border-purple-500/30">
// //                                     <stat.icon className="text-purple-400" size={24} />
// //                                 </div>
// //                                 <div className="text-2xl font-bold text-white mb-2">{stat.count}</div>
// //                                 <div className="text-gray-400 text-sm">{stat.label}</div>
// //                             </motion.div>
// //                         ))}
// //                     </motion.div>
// //                 </div>
// //             </section>

// //             {/* Contact Section */}
// //             <section id="contact" className="py-20 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 50 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center mb-16"
// //                     >
// //                         <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
// //                             Get In Touch
// //                         </h2>
// //                         <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto rounded-full"></div>
// //                         <p className="text-gray-400 mt-6 text-lg max-w-2xl mx-auto">
// //                             Ready to bring your next project to life? Let's discuss how we can work together.
// //                         </p>
// //                     </motion.div>

// //                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
// //                         {/* Contact Form */}
// //                         <motion.div
// //                             initial={{ opacity: 0, x: -50 }}
// //                             whileInView={{ opacity: 1, x: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                             className="bg-slate-800/50 p-8 rounded-xl border border-purple-500/20"
// //                         >
// //                             <h3 className="text-2xl font-semibold mb-6 text-white">Send a Message</h3>
// //                             <form className="space-y-6">
// //                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-300 mb-2">
// //                                             First Name
// //                                         </label>
// //                                         <input
// //                                             type="text"
// //                                             className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white"
// //                                             placeholder="John"
// //                                         />
// //                                     </div>
// //                                     <div>
// //                                         <label className="block text-sm font-medium text-gray-300 mb-2">
// //                                             Last Name
// //                                         </label>
// //                                         <input
// //                                             type="text"
// //                                             className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white"
// //                                             placeholder="Doe"
// //                                         />
// //                                     </div>
// //                                 </div>

// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-300 mb-2">
// //                                         Email Address
// //                                     </label>
// //                                     <input
// //                                         type="email"
// //                                         className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white"
// //                                         placeholder="john.doe@example.com"
// //                                     />
// //                                 </div>

// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-300 mb-2">
// //                                         Subject
// //                                     </label>
// //                                     <input
// //                                         type="text"
// //                                         className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white"
// //                                         placeholder="Project Discussion"
// //                                     />
// //                                 </div>

// //                                 <div>
// //                                     <label className="block text-sm font-medium text-gray-300 mb-2">
// //                                         Message
// //                                     </label>
// //                                     <textarea
// //                                         rows={5}
// //                                         className="w-full px-4 py-3 bg-slate-700/50 border border-purple-500/30 rounded-lg focus:border-purple-500 focus:outline-none transition-colors duration-300 text-white resize-none"
// //                                         placeholder="Tell me about your project..."
// //                                     ></textarea>
// //                                 </div>

// //                                 <motion.button
// //                                     type="submit"
// //                                     className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
// //                                     whileHover={{ scale: 1.02 }}
// //                                     whileTap={{ scale: 0.98 }}
// //                                 >
// //                                     <span>Send Message</span>
// //                                     <ExternalLink size={20} />
// //                                 </motion.button>
// //                             </form>
// //                         </motion.div>

// //                         {/* Contact Information */}
// //                         <motion.div
// //                             initial={{ opacity: 0, x: 50 }}
// //                             whileInView={{ opacity: 1, x: 0 }}
// //                             transition={{ duration: 0.6 }}
// //                             viewport={{ once: true }}
// //                             className="space-y-8"
// //                         >
// //                             {/* Contact Cards */}
// //                             <div className="space-y-6">
// //                                 {[
// //                                     {
// //                                         icon: Mail,
// //                                         title: "Email",
// //                                         content: "abrardar988651@gmail.com",
// //                                         href: "mailto:abrardar988651@gmail.com",
// //                                         color: "from-purple-500 to-purple-600"
// //                                     },
// //                                     {
// //                                         icon: Phone,
// //                                         title: "Phone",
// //                                         content: "6006045264",
// //                                         href: "tel:6006045264",
// //                                         color: "from-blue-500 to-blue-600"
// //                                     },
// //                                     {
// //                                         icon: MapPin,
// //                                         title: "Location",
// //                                         content: "Bengaluru, India",
// //                                         href: "#",
// //                                         color: "from-purple-600 to-blue-500"
// //                                     }
// //                                 ].map((contact, index) => (
// //                                     <motion.a
// //                                         key={index}
// //                                         href={contact.href}
// //                                         className="block bg-slate-800/50 p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
// //                                         whileHover={{ scale: 1.02, x: 10 }}
// //                                     >
// //                                         <div className="flex items-center">
// //                                             <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${contact.color} flex items-center justify-center mr-4`}>
// //                                                 <contact.icon className="text-white" size={24} />
// //                                             </div>
// //                                             <div>
// //                                                 <h4 className="text-lg font-semibold text-white mb-1">{contact.title}</h4>
// //                                                 <p className="text-gray-300">{contact.content}</p>
// //                                             </div>
// //                                         </div>
// //                                     </motion.a>
// //                                 ))}
// //                             </div>

// //                             {/* Social Links */}
// //                             <div className="bg-slate-800/50 p-6 rounded-xl border border-purple-500/20">
// //                                 <h4 className="text-lg font-semibold text-white mb-4">Follow Me</h4>
// //                                 <div className="flex space-x-4">
// //                                     {[
// //                                         {
// //                                             icon: Github,
// //                                             href: "https://github.com/Abrarhussaindar",
// //                                             color: "hover:bg-gray-600"
// //                                         },
// //                                         {
// //                                             icon: Linkedin,
// //                                             href: "https://linkedin.com/in/abrarhussain0366",
// //                                             color: "hover:bg-blue-600"
// //                                         },
// //                                         {
// //                                             icon: Mail,
// //                                             href: "mailto:abrardar988651@gmail.com",
// //                                             color: "hover:bg-purple-600"
// //                                         }
// //                                     ].map((social, index) => (
// //                                         <motion.a
// //                                             key={index}
// //                                             href={social.href}
// //                                             target="_blank"
// //                                             rel="noopener noreferrer"
// //                                             className={`w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition-all duration-300 ${social.color}`}
// //                                             whileHover={{ scale: 1.1, y: -2 }}
// //                                             whileTap={{ scale: 0.95 }}
// //                                         >
// //                                             <social.icon size={20} />
// //                                         </motion.a>
// //                                     ))}
// //                                 </div>
// //                             </div>

// //                             {/* Availability Status */}
// //                             <motion.div
// //                                 className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-500/30"
// //                                 initial={{ opacity: 0, scale: 0.9 }}
// //                                 whileInView={{ opacity: 1, scale: 1 }}
// //                                 transition={{ duration: 0.6 }}
// //                                 viewport={{ once: true }}
// //                             >
// //                                 <div className="flex items-center">
// //                                     <motion.div
// //                                         className="w-3 h-3 bg-green-400 rounded-full mr-3"
// //                                         animate={{ scale: [1, 1.2, 1] }}
// //                                         transition={{ duration: 2, repeat: Infinity }}
// //                                     />
// //                                     <div>
// //                                         <h4 className="text-lg font-semibold text-white mb-1">Available for Work</h4>
// //                                         <p className="text-green-300 text-sm">Open to new opportunities and exciting projects</p>
// //                                     </div>
// //                                 </div>
// //                             </motion.div>
// //                         </motion.div>
// //                     </div>
// //                 </div>
// //             </section>

// //             {/* Footer */}
// //             <footer className="py-12 border-t border-purple-500/20 relative z-10">
// //                 <div className="max-w-6xl mx-auto px-4">
// //                     <motion.div
// //                         initial={{ opacity: 0, y: 20 }}
// //                         whileInView={{ opacity: 1, y: 0 }}
// //                         transition={{ duration: 0.6 }}
// //                         viewport={{ once: true }}
// //                         className="text-center"
// //                     >
// //                         <div className="mb-6">
// //                             <motion.div
// //                                 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent inline-block"
// //                                 whileHover={{ scale: 1.05 }}
// //                             >
// //                                 Abrar Hussain Dar
// //                             </motion.div>
// //                             <p className="text-gray-400 mt-2">Backend Developer & Technology Enthusiast</p>
// //                         </div>

// //                         <div className="flex justify-center space-x-6 mb-8">
// //                             {[
// //                                 { icon: Code2, label: "Clean Code" },
// //                                 { icon: Database, label: "Scalable Systems" },
// //                                 { icon: Server, label: "High Performance" },
// //                                 { icon: Shield, label: "Security First" }
// //                             ].map(({ icon: Icon, label }, index) => (
// //                                 <motion.div
// //                                     key={index}
// //                                     className="flex items-center space-x-2 text-gray-400"
// //                                     whileHover={{ scale: 1.1, color: "#a855f7" }}
// //                                 >
// //                                     <Icon size={18} />
// //                                     <span className="text-sm hidden sm:inline">{label}</span>
// //                                 </motion.div>
// //                             ))}
// //                         </div>

// //                         <div className="border-t border-purple-500/20 pt-8">
// //                             <p className="text-gray-500 text-sm">
// //                                 © 2025 Abrar Hussain Dar. Crafted with ❤️ using Next.js, TypeScript & Framer Motion.
// //                             </p>
// //                         </div>
// //                     </motion.div>
// //                 </div>
// //             </footer>

// //             {/* Floating Action Button */}
// //             <motion.div
// //                 className="fixed bottom-8 right-8 z-50"
// //                 initial={{ scale: 0 }}
// //                 animate={{ scale: 1 }}
// //                 transition={{ delay: 2 }}
// //             >
// //                 <motion.button
// //                     className="w-14 h-14 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full shadow-lg flex items-center justify-center text-white"
// //                     whileHover={{ scale: 1.1 }}
// //                     whileTap={{ scale: 0.95 }}
// //                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
// //                 >
// //                     <ChevronDown className="transform rotate-180" size={24} />
// //                 </motion.button>
// //             </motion.div>
// //         </div>
// //     );
// // };

// // export default Portfolio;


















// "use client"
// import React, { useState, useEffect } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//     Code2,
//     Database,
//     Server,
//     Mail,
//     Phone,
//     Linkedin,
//     Github,
//     MapPin,
//     Calendar,
//     Building2,
//     GraduationCap,
//     ExternalLink,
//     Download,
//     Menu,
//     X,
//     ChevronDown,
//     Zap,
//     Shield
// } from 'lucide-react';
// import colors from '@/components/Global/colors';

// const Portfolio = () => {
//     const [isMenuOpen, setIsMenuOpen] = useState(false);
//     const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

//     useEffect(() => {
//         const handleMouseMove = (e: any) => {
//             setMousePosition({ x: e.clientX, y: e.clientY });
//         };

//         window.addEventListener('mousemove', handleMouseMove);
//         return () => window.removeEventListener('mousemove', handleMouseMove);
//     }, []);

//     const containerVariants = {
//         hidden: { opacity: 0 },
//         visible: {
//             opacity: 1,
//             transition: { staggerChildren: 0.1 }
//         }
//     };

//     const itemVariants = {
//         hidden: { y: 20, opacity: 0 },
//         visible: {
//             y: 0,
//             opacity: 1,
//             transition: { duration: 0.6, ease: "easeOut" }
//         }
//     };

//     const skillsData = [
//         { name: 'TypeScript', level: 90, category: 'Frontend' },
//         { name: 'Next.js', level: 85, category: 'Frontend' },
//         { name: 'Node.js', level: 95, category: 'Backend' },
//         { name: 'React.js', level: 88, category: 'Frontend' },
//         { name: 'JavaScript', level: 92, category: 'Core' },
//         { name: 'Python', level: 80, category: 'Backend' },
//         { name: 'MongoDB', level: 85, category: 'Database' },
//         { name: 'PostgreSQL', level: 82, category: 'Database' },
//         { name: 'Django', level: 75, category: 'Backend' },
//         { name: 'FastAPI', level: 78, category: 'Backend' }
//     ];

//     const projects = [
//         {
//             title: "EcomMatrix",
//             subtitle: "E-Commerce Dashboard",
//             period: "02/2025 – present",
//             description: "Built EcomMatrix, a SaaS-based e-commerce dashboard using Next.js, Node.js, TypeScript, and PostgreSQL.",
//             features: [
//                 "Multi-tenant architecture with isolated data environments",
//                 "Real-time analytics and interactive dashboards",
//                 "Performance optimization tools for businesses"
//             ],
//             tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
//             metrics: { users: "500+", performance: "99.9%", growth: "+150%" }
//         },
//         {
//             title: "HomeBasics",
//             subtitle: "Water Purifier Store",
//             period: "01/2025 – 02/2025",
//             description: "Engineered a Scalable MERN Application with secure authentication and optimized API performance.",
//             features: [
//                 "Secure authentication system",
//                 "Cloud-based infrastructure deployment",
//                 "Optimized API performance"
//             ],
//             tech: ["MongoDB", "Express", "React", "Node.js"],
//             metrics: { uptime: "99.8%", speed: "2.1s", security: "A+" }
//         },
//         {
//             title: "YourSportz",
//             subtitle: "Local Football Arena",
//             period: "04/2024 – present",
//             description: "Designed, developed, and maintained backend services and APIs using Node.js for optimal performance.",
//             features: [
//                 "High-performance backend services",
//                 "Scalable API architecture",
//                 "Real-time booking system"
//             ],
//             tech: ["Node.js", "MongoDB", "Express", "JWT"],
//             metrics: { bookings: "1000+", response: "150ms", satisfaction: "4.8/5" }
//         }
//     ];

//     const experiences = [
//         {
//             title: "Backend Developer",
//             company: "Navrekh Technologies Pvt. Ltd.",
//             location: "Pune, India",
//             period: "04/2024 – 05/2025",
//             responsibilities: [
//                 "Developed and maintained high-performance, scalable backend services and APIs using Node.js",
//                 "Designed, implemented, and maintained SQL and NoSQL databases, ensuring data integrity and optimized performance"
//             ]
//         },
//         {
//             title: "Full Stack Developer",
//             company: "Daisy Online Media and Gaming Private Limited",
//             location: "Gurugram, India",
//             period: "02/2023 – 12/2023",
//             responsibilities: [
//                 "Proficient in front-end technologies (HTML, CSS, JavaScript frameworks) and backend development",
//                 "Skilled in server-side logic, database interactions, and API development"
//             ]
//         }
//     ];

//     const navigation = [
//         { name: 'Home', href: '#hero' },
//         { name: 'About', href: '#about' },
//         { name: 'Experience', href: '#experience' },
//         { name: 'Projects', href: '#projects' },
//         { name: 'Skills', href: '#skills' },
//         { name: 'Contact', href: '#contact' }
//     ];

//     return (
//         <div className="min-h-screen relative overflow-x-hidden" style={{ background: colors.tertiary, color: colors.secondary }}>
//             <div className="fixed inset-0 z-0 opacity-50">
//                 <div className="absolute inset-0"></div>
//                 <motion.div
//                     className="absolute w-96 h-96 rounded-full blur-3xl"
//                     style={{ backgroundColor: colors.primary }}
//                     animate={{
//                         x: mousePosition.x * 0.02,
//                         y: mousePosition.y * 0.02,
//                     }}
//                     transition={{ type: "spring", stiffness: 50, damping: 10 }}
//                 />
//                 <motion.div
//                     className="absolute right-0 bottom-0 w-96 h-96 rounded-full blur-3xl"
//                     style={{ backgroundColor: colors.primaryLight }}
//                     animate={{
//                         x: mousePosition.x * -0.01,
//                         y: mousePosition.y * -0.01,
//                     }}
//                     transition={{ type: "spring", stiffness: 30, damping: 10 }}
//                 />
//             </div>

//             <motion.nav
//                 className="fixed top-0 w-full z-50 backdrop-blur-md border-b"
//                 style={{ backgroundColor: `${colors.tertiary}CC`, borderColor: colors.primary }}
//                 initial={{ y: -100 }}
//                 animate={{ y: 0 }}
//                 transition={{ duration: 0.6 }}
//             >
//                 <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                     <div className="flex justify-between items-center py-4">
//                         <motion.div
//                             className="text-2xl font-bold"
//                             style={{ color: colors.secondaryLight }}
//                             whileHover={{ scale: 1.05 }}
//                         >
//                             Abrar Dar
//                         </motion.div>

//                         <div className="hidden md:flex space-x-8">
//                             {navigation.map((item) => (
//                                 <motion.a
//                                     key={item.name}
//                                     href={item.href}
//                                     className="relative transition-colors duration-300"
//                                     style={{ color: colors.secondaryDark }}
//                                     whileHover={{ scale: 1.1, color: colors.secondaryLight }}
//                                     whileTap={{ scale: 0.95 }}
//                                 >
//                                     {item.name}
//                                     <motion.div
//                                         className="absolute -bottom-1 left-0 w-0 h-0.5"
//                                         style={{ background: colors.primaryLight }}
//                                         whileHover={{ width: "100%" }}
//                                         transition={{ duration: 0.3 }}
//                                     />
//                                 </motion.a>
//                             ))}
//                         </div>

//                         <motion.button
//                             className="md:hidden"
//                             style={{ color: colors.secondaryLight }}
//                             onClick={() => setIsMenuOpen(!isMenuOpen)}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
//                         </motion.button>
//                     </div>
//                 </div>

//                 <AnimatePresence>
//                     {isMenuOpen && (
//                         <motion.div
//                             className="md:hidden backdrop-blur-md"
//                             style={{ backgroundColor: `${colors.tertiary}EE` }}
//                             initial={{ opacity: 0, height: 0 }}
//                             animate={{ opacity: 1, height: "auto" }}
//                             exit={{ opacity: 0, height: 0 }}
//                             transition={{ duration: 0.3 }}
//                         >
//                             <div className="px-4 py-2 space-y-2">
//                                 {navigation.map((item) => (
//                                     <motion.a
//                                         key={item.name}
//                                         href={item.href}
//                                         className="block px-3 py-2 transition-colors duration-300"
//                                         style={{ color: colors.secondaryDark }}
//                                         onClick={() => setIsMenuOpen(false)}
//                                         whileHover={{ x: 10, color: colors.secondaryLight }}
//                                     >
//                                         {item.name}
//                                     </motion.a>
//                                 ))}
//                             </div>
//                         </motion.div>
//                     )}
//                 </AnimatePresence>
//             </motion.nav>

//             <section id="hero" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
//                 <motion.div
//                     className="text-center max-w-4xl mx-auto px-4"
//                     variants={containerVariants}
//                     initial="hidden"
//                     animate="visible"
//                 >
//                     <motion.div
//                         variants={itemVariants}
//                         className="mb-6"
//                     >
//                         <div className="w-32 h-32 mx-auto mb-6 relative">
//                             <motion.div
//                                 className="w-full h-full rounded-full flex items-center justify-center text-4xl font-bold"
//                                 style={{ backgroundImage: colors.primaryGradient, color: colors.secondaryLight }}
//                                 whileHover={{ scale: 1.1, rotate: 10 }}
//                                 transition={{ duration: 0.6 }}
//                             >
//                                 <img src="https://lh3.googleusercontent.com/a/ACg8ocKOGBGjyC3tdNplJ7SqTUVJvJVIdQ3FwcY6MGYrYii9_XmhlFCp=s96-c-rg-br100"/>
//                             </motion.div>
//                             <motion.div
//                                 className="absolute -inset-2 rounded-full blur-lg"
//                                 style={{ background: colors.primary }}
//                                 animate={{ rotate: 360 }}
//                                 transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//                             />
//                         </div>
//                     </motion.div>

//                     <motion.h1
//                         variants={itemVariants}
//                         className="text-5xl md:text-7xl font-bold mb-6"
//                         style={{ color: colors.secondaryLight }}
//                     >
//                         Abrar Hussain Dar
//                     </motion.h1>

//                     <motion.h2
//                         variants={itemVariants}
//                         className="text-2xl md:text-3xl font-semibold mb-6"
//                         style={{ color: colors.primaryLight }}
//                     >
//                         Backend Developer
//                     </motion.h2>

//                     <motion.p
//                         variants={itemVariants}
//                         className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed"
//                         style={{ color: colors.secondaryDark }}
//                     >
//                         Crafting scalable, high-performance backend solutions with cutting-edge technologies.
//                         Specializing in Node.js, TypeScript, and cloud architectures.
//                     </motion.p>

//                     <motion.div
//                         variants={itemVariants}
//                         className="flex flex-col sm:flex-row gap-4 justify-center items-center"
//                     >
//                         <motion.button
//                             className="px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300 shadow-lg hover:shadow-xl"
//                             style={{ backgroundImage: colors.primaryGradient, color: colors.secondaryLight }}
//                             whileHover={{ scale: 1.05 }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Download size={20} />
//                             <span>Download Resume</span>
//                         </motion.button>

//                         <motion.button
//                             className="border px-8 py-4 rounded-full font-semibold flex items-center space-x-2 transition-all duration-300"
//                             style={{ borderColor: colors.primaryLight, color: colors.secondaryLight }}
//                             whileHover={{ scale: 1.05, backgroundColor: colors.primaryDark }}
//                             whileTap={{ scale: 0.95 }}
//                         >
//                             <Mail size={20} />
//                             <span>Get In Touch</span>
//                         </motion.button>
//                     </motion.div>

//                     <motion.div
//                         variants={itemVariants}
//                         className="flex justify-center space-x-6 mt-8"
//                     >
//                         {[
//                             { icon: Github, href: "https://github.com/Abrarhussaindar" },
//                             { icon: Linkedin, href: "https://linkedin.com/in/abrarhussain0366" },
//                             { icon: Mail, href: "mailto:abrardar988651@gmail.com" }
//                         ].map(({ icon: Icon, href }, index) => (
//                             <motion.a
//                                 key={index}
//                                 href={href}
//                                 className="transition-colors duration-300"
//                                 style={{ color: colors.secondaryDark }}
//                                 whileHover={{ scale: 1.2, y: -2, color: colors.secondaryLight }}
//                                 whileTap={{ scale: 0.95 }}
//                             >
//                                 <Icon size={24} />
//                             </motion.a>
//                         ))}
//                     </motion.div>
//                 </motion.div>

//                 <motion.div
//                     className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
//                     animate={{ y: [0, 10, 0] }}
//                     transition={{ duration: 2, repeat: Infinity }}
//                 >
//                     <ChevronDown size={32} style={{ color: colors.primaryLight }} />
//                 </motion.div>
//             </section>

//             <section id="about" className="py-20 relative z-10">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.secondaryLight }}>
//                             About Me
//                         </h2>
//                         <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryLight }}></div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//                         <motion.div
//                             initial={{ opacity: 0, x: -50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                         >
//                             <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.primaryLight }}>
//                                 Passionate Backend Developer
//                             </h3>
//                             <p className="mb-6 leading-relaxed" style={{ color: colors.secondaryDark }}>
//                                 Based in Bengaluru, India, I'm a dedicated backend developer with extensive experience
//                                 in building scalable, high-performance applications. My expertise spans across modern
//                                 technologies including Node.js, TypeScript, and various database systems.
//                             </p>
//                             <p className="mb-6 leading-relaxed" style={{ color: colors.secondaryDark }}>
//                                 I've successfully delivered projects ranging from SaaS e-commerce platforms to
//                                 real-time booking systems, always focusing on optimal performance, security, and user experience.
//                             </p>

//                             <div className="grid grid-cols-2 gap-4 mt-8">
//                                 <div className="text-center p-4 rounded-lg border" style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                     <div className="text-2xl font-bold mb-2" style={{ color: colors.primaryLight }}>2+</div>
//                                     <div style={{ color: colors.secondaryDark }}>Years Experience</div>
//                                 </div>
//                                 <div className="text-center p-4 rounded-lg border" style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                     <div className="text-2xl font-bold mb-2" style={{ color: colors.primaryLight }}>15+</div>
//                                     <div style={{ color: colors.secondaryDark }}>Projects Completed</div>
//                                 </div>
//                             </div>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="space-y-6"
//                         >
//                             <div className="p-6 rounded-xl border" style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                 <div className="flex items-center mb-4">
//                                     <MapPin className="mr-3" style={{ color: colors.primaryLight }} size={20} />
//                                     <span style={{ color: colors.secondaryDark }}>Bengaluru, India</span>
//                                 </div>
//                                 <div className="flex items-center mb-4">
//                                     <Mail className="mr-3" style={{ color: colors.primaryLight }} size={20} />
//                                     <span style={{ color: colors.secondaryDark }}>abrardar988651@gmail.com</span>
//                                 </div>
//                                 <div className="flex items-center mb-4">
//                                     <Phone className="mr-3" style={{ color: colors.primaryLight }} size={20} />
//                                     <span style={{ color: colors.secondaryDark }}>6006045264</span>
//                                 </div>
//                             </div>

//                             <div className="p-6 rounded-xl border" style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                 <h4 className="text-lg font-semibold mb-4" style={{ color: colors.secondaryLight }}>Education</h4>
//                                 <div className="space-y-4">
//                                     <div>
//                                         <div className="flex items-center mb-2">
//                                             <GraduationCap className="mr-3" style={{ color: colors.primaryLight }} size={18} />
//                                             <span className="font-medium" style={{ color: colors.secondary }}>B.Tech Computer Science</span>
//                                         </div>
//                                         <div className="text-sm ml-9" style={{ color: colors.secondaryDark }}>
//                                             Presidency University, Bengaluru (2019-2023)
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             <section id="experience" className="py-20 relative z-10" style={{ backgroundColor: colors.tertiaryLight }}>
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.secondaryLight }}>
//                             Professional Experience
//                         </h2>
//                         <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryLight }}></div>
//                     </motion.div>

//                     <div className="space-y-8">
//                         {experiences.map((exp, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 50 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                                 viewport={{ once: true }}
//                                 className="p-8 rounded-xl border transition-all duration-300"
//                                 style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                                 whileHover={{ scale: 1.02, borderColor: colors.primaryLight }}
//                             >
//                                 <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
//                                     <div>
//                                         <h3 className="text-2xl font-semibold mb-2" style={{ color: colors.secondaryLight }}>{exp.title}</h3>
//                                         <div className="flex items-center mb-2" style={{ color: colors.primaryLight }}>
//                                             <Building2 size={18} className="mr-2" />
//                                             {exp.company}
//                                         </div>
//                                         <div className="flex items-center" style={{ color: colors.secondaryDark }}>
//                                             <MapPin size={16} className="mr-2" />
//                                             {exp.location}
//                                         </div>
//                                     </div>
//                                     <div className="flex items-center mt-4 md:mt-0" style={{ color: colors.secondaryDark }}>
//                                         <Calendar size={16} className="mr-2" />
//                                         {exp.period}
//                                     </div>
//                                 </div>

//                                 <div className="space-y-3">
//                                     {exp.responsibilities.map((resp, respIndex) => (
//                                         <motion.div
//                                             key={respIndex}
//                                             className="flex items-start"
//                                             initial={{ opacity: 0, x: -20 }}
//                                             whileInView={{ opacity: 1, x: 0 }}
//                                             transition={{ delay: respIndex * 0.1 }}
//                                         >
//                                             <div className="w-2 h-2 rounded-full mt-2 mr-4 flex-shrink-0" style={{ backgroundColor: colors.primaryLight }}></div>
//                                             <p className="leading-relaxed" style={{ color: colors.secondaryDark }}>{resp}</p>
//                                         </motion.div>
//                                     ))}
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section id="projects" className="py-20 relative z-10">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.secondaryLight }}>
//                             Featured Projects
//                         </h2>
//                         <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryLight }}></div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
//                         {projects.map((project, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, y: 50 }}
//                                 whileInView={{ opacity: 1, y: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.2 }}
//                                 viewport={{ once: true }}
//                                 className="rounded-xl border overflow-hidden transition-all duration-300 group"
//                                 style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                                 whileHover={{ scale: 1.05, borderColor: colors.primaryLight }}
//                             >
//                                 <div className="p-6">
//                                     <div className="flex items-center justify-between mb-4">
//                                         <h3 className="text-xl font-semibold" style={{ color: colors.secondaryLight }}>{project.title}</h3>
//                                         <motion.div
//                                             whileHover={{ scale: 1.1 }}
//                                             style={{ color: colors.primaryLight }}
//                                         >
//                                             <ExternalLink size={20} />
//                                         </motion.div>
//                                     </div>

//                                     <p className="text-sm mb-2" style={{ color: colors.primaryLight }}>{project.subtitle}</p>
//                                     <p className="text-sm mb-4" style={{ color: colors.secondaryDark }}>{project.period}</p>

//                                     <p className="mb-4 leading-relaxed" style={{ color: colors.secondaryDark }}>{project.description}</p>

//                                     <div className="space-y-2 mb-6">
//                                         {project.features.map((feature, featureIndex) => (
//                                             <div key={featureIndex} className="flex items-start">
//                                                 <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 flex-shrink-0" style={{ backgroundColor: colors.primaryLight }}></div>
//                                                 <p className="text-sm" style={{ color: colors.secondaryDark }}>{feature}</p>
//                                             </div>
//                                         ))}
//                                     </div>

//                                     <div className="flex flex-wrap gap-2 mb-6">
//                                         {project.tech.map((tech, techIndex) => (
//                                             <span
//                                                 key={techIndex}
//                                                 className="px-3 py-1 rounded-full text-xs font-medium border"
//                                                 style={{ backgroundColor: colors.tertiaryLight, color: colors.secondaryDark, borderColor: colors.primary }}
//                                             >
//                                                 {tech}
//                                             </span>
//                                         ))}
//                                     </div>

//                                     <div className="grid grid-cols-3 gap-4">
//                                         {Object.entries(project.metrics).map(([key, value], metricIndex) => (
//                                             <div key={metricIndex} className="text-center">
//                                                 <div className="text-lg font-bold" style={{ color: colors.primaryLight }}>{value}</div>
//                                                 <div className="text-xs capitalize" style={{ color: colors.secondaryDark }}>{key}</div>
//                                             </div>
//                                         ))}
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         ))}
//                     </div>
//                 </div>
//             </section>

//             <section id="skills" className="py-20 relative z-10" style={{ backgroundColor: colors.tertiaryLight }}>
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.secondaryLight }}>
//                             Technical Skills
//                         </h2>
//                         <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryLight }}></div>
//                     </motion.div>

//                     <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//                         {skillsData.map((skill, index) => (
//                             <motion.div
//                                 key={index}
//                                 initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//                                 whileInView={{ opacity: 1, x: 0 }}
//                                 transition={{ duration: 0.6, delay: index * 0.1 }}
//                                 viewport={{ once: true }}
//                                 className="p-6 rounded-xl border"
//                                 style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                             >
//                                 <div className="flex justify-between items-center mb-3">
//                                     <span className="font-medium" style={{ color: colors.secondaryLight }}>{skill.name}</span>
//                                     <span className="text-sm" style={{ color: colors.primaryLight }}>{skill.level}%</span>
//                                 </div>
//                                 <div className="w-full rounded-full h-3" style={{ backgroundColor: colors.tertiary }}>
//                                     <motion.div
//                                         className="h-3 rounded-full"
//                                         style={{ backgroundImage: colors.primaryGradient }}
//                                         initial={{ width: 0 }}
//                                         whileInView={{ width: `${skill.level}%` }}
//                                         transition={{ duration: 1, delay: index * 0.1 }}
//                                     />
//                                 </div>
//                                 <span className="text-xs mt-2 block" style={{ color: colors.secondaryDark }}>{skill.category}</span>
//                             </motion.div>
//                         ))}
//                     </div>

//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6, delay: 0.5 }}
//                         viewport={{ once: true }}
//                         className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
//                     >
//                         {[
//                             { icon: Code2, label: "Clean Code", count: "1000+" },
//                             { icon: Database, label: "Databases", count: "5+" },
//                             { icon: Server, label: "APIs Built", count: "50+" },
//                             { icon: Zap, label: "Performance", count: "99.9%" }
//                         ].map((stat, index) => (
//                             <motion.div
//                                 key={index}
//                                 className="text-center"
//                                 whileHover={{ scale: 1.05 }}
//                             >
//                                 <div
//                                     className="w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center border"
//                                     style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                     <stat.icon size={24} style={{ color: colors.primaryLight }} />
//                                 </div>
//                                 <div className="text-2xl font-bold mb-2" style={{ color: colors.secondaryLight }}>{stat.count}</div>
//                                 <div className="text-sm" style={{ color: colors.secondaryDark }}>{stat.label}</div>
//                             </motion.div>
//                         ))}
//                     </motion.div>
//                 </div>
//             </section>

//             <section id="contact" className="py-20 relative z-10">
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 50 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center mb-16"
//                     >
//                         <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: colors.secondaryLight }}>
//                             Get In Touch
//                         </h2>
//                         <div className="w-24 h-1 mx-auto rounded-full" style={{ backgroundColor: colors.primaryLight }}></div>
//                         <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: colors.secondaryDark }}>
//                             Ready to bring your next project to life? Let's discuss how we can work together.
//                         </p>
//                     </motion.div>

//                     <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//                         <motion.div
//                             initial={{ opacity: 0, x: -50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="p-8 rounded-xl border"
//                             style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                         >
//                             <h3 className="text-2xl font-semibold mb-6" style={{ color: colors.secondaryLight }}>Send a Message</h3>
//                             <form className="space-y-6">
//                                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                                     <div>
//                                         <label className="block text-sm font-medium mb-2" style={{ color: colors.secondaryDark }}>
//                                             First Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300"
//                                             style={{ backgroundColor: colors.tertiaryLight, borderColor: colors.primary, color: colors.secondaryLight }}
//                                             placeholder="John"
//                                             onFocus={(e) => e.target.style.borderColor = colors.primaryLight}
//                                             onBlur={(e) => e.target.style.borderColor = colors.primary}
//                                         />
//                                     </div>
//                                     <div>
//                                         <label className="block text-sm font-medium mb-2" style={{ color: colors.secondaryDark }}>
//                                             Last Name
//                                         </label>
//                                         <input
//                                             type="text"
//                                             className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300"
//                                             style={{ backgroundColor: colors.tertiaryLight, borderColor: colors.primary, color: colors.secondaryLight }}
//                                             placeholder="Doe"
//                                             onFocus={(e) => e.target.style.borderColor = colors.primaryLight}
//                                             onBlur={(e) => e.target.style.borderColor = colors.primary}
//                                         />
//                                     </div>
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-2" style={{ color: colors.secondaryDark }}>
//                                         Email Address
//                                     </label>
//                                     <input
//                                         type="email"
//                                         className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300"
//                                         style={{ backgroundColor: colors.tertiaryLight, borderColor: colors.primary, color: colors.secondaryLight }}
//                                         placeholder="john.doe@example.com"
//                                         onFocus={(e) => e.target.style.borderColor = colors.primaryLight}
//                                         onBlur={(e) => e.target.style.borderColor = colors.primary}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-2" style={{ color: colors.secondaryDark }}>
//                                         Subject
//                                     </label>
//                                     <input
//                                         type="text"
//                                         className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300"
//                                         style={{ backgroundColor: colors.tertiaryLight, borderColor: colors.primary, color: colors.secondaryLight }}
//                                         placeholder="Project Discussion"
//                                         onFocus={(e) => e.target.style.borderColor = colors.primaryLight}
//                                         onBlur={(e) => e.target.style.borderColor = colors.primary}
//                                     />
//                                 </div>

//                                 <div>
//                                     <label className="block text-sm font-medium mb-2" style={{ color: colors.secondaryDark }}>
//                                         Message
//                                     </label>
//                                     <textarea
//                                         rows={5}
//                                         className="w-full px-4 py-3 border rounded-lg focus:outline-none transition-colors duration-300 resize-none"
//                                         style={{ backgroundColor: colors.tertiaryLight, borderColor: colors.primary, color: colors.secondaryLight }}
//                                         placeholder="Tell me about your project..."
//                                         onFocus={(e) => e.target.style.borderColor = colors.primaryLight}
//                                         onBlur={(e) => e.target.style.borderColor = colors.primary}
//                                     ></textarea>
//                                 </div>

//                                 <motion.button
//                                     type="submit"
//                                     className="w-full px-8 py-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all duration-300 shadow-lg"
//                                     style={{ backgroundImage: colors.primaryGradient, color: colors.secondaryLight }}
//                                     whileHover={{ scale: 1.02 }}
//                                     whileTap={{ scale: 0.98 }}
//                                 >
//                                     <span>Send Message</span>
//                                     <ExternalLink size={20} />
//                                 </motion.button>
//                             </form>
//                         </motion.div>

//                         <motion.div
//                             initial={{ opacity: 0, x: 50 }}
//                             whileInView={{ opacity: 1, x: 0 }}
//                             transition={{ duration: 0.6 }}
//                             viewport={{ once: true }}
//                             className="space-y-8"
//                         >
//                             <div className="space-y-6">
//                                 {[
//                                     {
//                                         icon: Mail,
//                                         title: "Email",
//                                         content: "abrardar988651@gmail.com",
//                                         href: "mailto:abrardar988651@gmail.com",
//                                     },
//                                     {
//                                         icon: Phone,
//                                         title: "Phone",
//                                         content: "6006045264",
//                                         href: "tel:6006045264",
//                                     },
//                                     {
//                                         icon: MapPin,
//                                         title: "Location",
//                                         content: "Bengaluru, India",
//                                         href: "#",
//                                     }
//                                 ].map((contact, index) => (
//                                     <motion.a
//                                         key={index}
//                                         href={contact.href}
//                                         className="block p-6 rounded-xl border transition-all duration-300"
//                                         style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                                         whileHover={{ scale: 1.02, x: 10, borderColor: colors.primaryLight }}
//                                     >
//                                         <div className="flex items-center">
//                                             <div className="w-14 h-14 rounded-lg flex items-center justify-center mr-4" style={{ backgroundColor: colors.primary }}>
//                                                 <contact.icon style={{ color: colors.primaryLight }} size={24} />
//                                             </div>
//                                             <div>
//                                                 <h4 className="text-lg font-semibold mb-1" style={{ color: colors.secondaryLight }}>{contact.title}</h4>
//                                                 <p style={{ color: colors.secondaryDark }}>{contact.content}</p>
//                                             </div>
//                                         </div>
//                                     </motion.a>
//                                 ))}
//                             </div>

//                             <div className="p-6 rounded-xl border" style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}>
//                                 <h4 className="text-lg font-semibold mb-4" style={{ color: colors.secondaryLight }}>Follow Me</h4>
//                                 <div className="flex space-x-4">
//                                     {[
//                                         { icon: Github, href: "https://github.com/Abrarhussaindar" },
//                                         { icon: Linkedin, href: "https://linkedin.com/in/abrarhussain0366" },
//                                         { icon: Mail, href: "mailto:abrardar988651@gmail.com" }
//                                     ].map((social, index) => (
//                                         <motion.a
//                                             key={index}
//                                             href={social.href}
//                                             target="_blank"
//                                             rel="noopener noreferrer"
//                                             className="w-12 h-12 rounded-lg flex items-center justify-center transition-all duration-300"
//                                             style={{ backgroundColor: colors.tertiaryLight, color: colors.secondaryDark }}
//                                             whileHover={{ scale: 1.1, y: -2, backgroundColor: colors.primary, color: colors.secondaryLight }}
//                                             whileTap={{ scale: 0.95 }}
//                                         >
//                                             <social.icon size={20} />
//                                         </motion.a>
//                                     ))}
//                                 </div>
//                             </div>

//                             <motion.div
//                                 className="p-6 rounded-xl border"
//                                 style={{ backgroundColor: colors.primaryDark, borderColor: colors.primary }}
//                                 initial={{ opacity: 0, scale: 0.9 }}
//                                 whileInView={{ opacity: 1, scale: 1 }}
//                                 transition={{ duration: 0.6 }}
//                                 viewport={{ once: true }}
//                             >
//                                 <div className="flex items-center">
//                                     <motion.div
//                                         className="w-3 h-3 rounded-full mr-3"
//                                         style={{ backgroundColor: colors.primaryLight }}
//                                         animate={{ scale: [1, 1.2, 1] }}
//                                         transition={{ duration: 2, repeat: Infinity }}
//                                     />
//                                     <div>
//                                         <h4 className="text-lg font-semibold mb-1" style={{ color: colors.secondaryLight }}>Available for Work</h4>
//                                         <p className="text-sm" style={{ color: colors.secondaryDark }}>Open to new opportunities and exciting projects</p>
//                                     </div>
//                                 </div>
//                             </motion.div>
//                         </motion.div>
//                     </div>
//                 </div>
//             </section>

//             <footer className="py-12 border-t relative z-10" style={{ borderColor: colors.primary }}>
//                 <div className="max-w-6xl mx-auto px-4">
//                     <motion.div
//                         initial={{ opacity: 0, y: 20 }}
//                         whileInView={{ opacity: 1, y: 0 }}
//                         transition={{ duration: 0.6 }}
//                         viewport={{ once: true }}
//                         className="text-center"
//                     >
//                         <div className="mb-6">
//                             <motion.div
//                                 className="text-3xl font-bold inline-block"
//                                 style={{ color: colors.secondaryLight }}
//                                 whileHover={{ scale: 1.05 }}
//                             >
//                                 Abrar Hussain Dar
//                             </motion.div>
//                             <p className="mt-2" style={{ color: colors.secondaryDark }}>Backend Developer & Technology Enthusiast</p>
//                         </div>

//                         <div className="flex justify-center space-x-6 mb-8">
//                             {[
//                                 { icon: Code2, label: "Clean Code" },
//                                 { icon: Database, label: "Scalable Systems" },
//                                 { icon: Server, label: "High Performance" },
//                                 { icon: Shield, label: "Security First" }
//                             ].map(({ icon: Icon, label }, index) => (
//                                 <motion.div
//                                     key={index}
//                                     className="flex items-center space-x-2"
//                                     style={{ color: colors.secondaryDark }}
//                                     whileHover={{ scale: 1.1, color: colors.primaryLight }}
//                                 >
//                                     <Icon size={18} />
//                                     <span className="text-sm hidden sm:inline">{label}</span>
//                                 </motion.div>
//                             ))}
//                         </div>

//                         <div className="border-t pt-8" style={{ borderColor: colors.primary }}>
//                             <p className="text-sm" style={{ color: colors.secondaryDark }}>
//                                 © 2025 Abrar Hussain Dar. Crafted with ❤️ using Next.js, TypeScript & Framer Motion.
//                             </p>
//                         </div>
//                     </motion.div>
//                 </div>
//             </footer>

//             <motion.div
//                 className="fixed bottom-8 right-8 z-50"
//                 initial={{ scale: 0 }}
//                 animate={{ scale: 1 }}
//                 transition={{ delay: 2 }}
//             >
//                 <motion.button
//                     className="w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-white"
//                     style={{ backgroundImage: colors.primaryGradient }}
//                     whileHover={{ scale: 1.1 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
//                 >
//                     <ChevronDown className="transform rotate-180" size={24} />
//                 </motion.button>
//             </motion.div>
//         </div>
//     );
// };

// export default Portfolio;


"use client"
import React, { useState, useEffect } from 'react';
import colors from '@/components/Global/colors';
import AnimatedBackground from '@/components/Base/Portfolio/AnimatedBackground';
import Header from '@/components/Base/Header';
import HeroSection from '@/components/Base/Portfolio/HeroSection';
import AboutSection from '@/components/Base/Portfolio/AboutSection';
import ExperienceSection from '@/components/Base/Portfolio/ExperienceSection';
import ProjectsSection from '@/components/Base/Portfolio/ProjectsSection';
import SkillsSection from '@/components/Base/Portfolio/SkillsSection';
import ContactSection from '@/components/Base/Portfolio/ContactSection';
import Footer from '@/components/Base/Footer';
import BackToTopButton from '@/components/Base/Portfolio/BackToTopButton';

const PortfolioPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="min-h-screen relative overflow-x-hidden" style={{ background: colors.tertiary, color: colors.secondary }}>
            <AnimatedBackground mousePosition={mousePosition} />
            <Header isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
            <main>
                <HeroSection />
                <AboutSection />
                <ExperienceSection />
                <ProjectsSection />
                <SkillsSection />
                <ContactSection />
            </main>
            <Footer />
            <BackToTopButton />
        </div>
    );
};

export default PortfolioPage;