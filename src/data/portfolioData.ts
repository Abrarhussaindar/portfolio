export const skillsData = [
    { name: 'TypeScript', level: 90, category: 'Frontend' },
    { name: 'Next.js', level: 85, category: 'Frontend' },
    { name: 'Node.js', level: 95, category: 'Backend' },
    { name: 'React.js', level: 88, category: 'Frontend' },
    { name: 'JavaScript', level: 92, category: 'Core' },
    { name: 'Python', level: 80, category: 'Backend' },
    { name: 'MongoDB', level: 85, category: 'Database' },
    { name: 'PostgreSQL', level: 82, category: 'Database' },
    { name: 'Django', level: 75, category: 'Backend' },
    { name: 'FastAPI', level: 78, category: 'Backend' }
];

export const projects = [
    {
        title: "Tabeeb Medical Solutions",
        subtitle: "Healthcare Made Simple",
        period: "03/2025 – present",
        description: "Built a SaaS healthcare platform using Next.js, Node.js, and PostgreSQL with authentication, Razorpay integration, and real-time video consultations.",
        features: [
            "Real-time video consultations via WebRTC & sockets",
            "In-clinic/online appointment booking",
            "Digital prescriptions & doctor-patient chat"
        ],
        link: "https://tabeeb.co.in",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Socket.IO", "Razorpay"],
        metrics: { consultations: "200+", uptime: "99.9%", feedback: "4.7/5" }
    },
    {
        title: "BillMatrix",
        subtitle: "Effortless Invoicing & Payments",
        period: "02/2025 – present",
        description: "Built BillMatrix, a SaaS platform using Next.js, Node.js, and PostgreSQL for invoicing, subscriptions, and payments.",
        features: [
            "Role-based dashboards for invoice & inventory management",
            "Integrated subscriptions and payment tracking",
            "Revenue and invoice analytics module"
        ],
        link: "https://billmatrix.in",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Razorpay"],
        metrics: { invoices: "1K+", accuracy: "99.95%", analytics: "Real-time" }
    },
    {
        title: "EcomMatrix",
        subtitle: "E-Commerce Dashboard",
        period: "02/2025 – present",
        description: "Built EcomMatrix, a SaaS-based e-commerce dashboard using Next.js, Node.js, TypeScript, and PostgreSQL.",
        features: [
            "Multi-tenant architecture with isolated data environments",
            "Real-time analytics and interactive dashboards",
            "Performance optimization tools for businesses"
        ],
        link: "#",
        tech: ["Next.js", "Node.js", "TypeScript", "PostgreSQL"],
        metrics: { users: "500+", performance: "99.9%", growth: "+150%" }
    },
    {
        title: "HomeBasics",
        subtitle: "Water Purifier Store",
        period: "01/2025 – 02/2025",
        description: "Engineered a Scalable MERN Application with secure authentication and optimized API performance.",
        features: [
            "Secure authentication system",
            "Cloud-based infrastructure deployment",
            "Optimized API performance"
        ],
        link: "#",
        tech: ["MongoDB", "Express", "React", "Node.js"],
        metrics: { uptime: "99.8%", speed: "2.1s", security: "A+" }
    },
    {
        title: "YourSportz",
        subtitle: "Local Football Arena",
        period: "04/2024 – present",
        description: "Designed, developed, and maintained backend services and APIs using Node.js for optimal performance.",
        features: [
            "High-performance backend services",
            "Scalable API architecture",
            "Real-time booking system"
        ],
        link: "https://yoursportz.in",
        tech: ["Node.js", "MongoDB", "Express", "JWT"],
        metrics: { bookings: "1000+", response: "150ms", satisfaction: "4.8/5" }
    },

];


export const experiences = [
    {
        title: "Backend Developer",
        company: "Navrekh Technologies Pvt. Ltd.",
        location: "Pune, India",
        period: "04/2024 – 05/2025",
        responsibilities: [
            "Developed and maintained high-performance, scalable backend services and APIs using Node.js",
            "Designed, implemented, and maintained SQL and NoSQL databases, ensuring data integrity and optimized performance"
        ]
    },
    {
        title: "Full Stack Developer",
        company: "Daisy Online Media and Gaming Private Limited",
        location: "Gurugram, India",
        period: "02/2023 – 12/2023",
        responsibilities: [
            "Proficient in front-end technologies (HTML, CSS, JavaScript frameworks) and backend development",
            "Skilled in server-side logic, database interactions, and API development"
        ]
    }
];

export const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
];