export const projects = [
  {
    id: "dineflow",
    number: "01",
    title: "DineFlow",
    subtitle: "Restaurant Ordering & Delivery Management System",
    category: "Full-Stack Web Application",
    shortDescription:
      "A restaurant ordering and delivery platform that enables customers to explore menus, order food, track orders, and receive deliveries while administrators manage restaurant operations.",
    description:
      "DineFlow is a full-stack restaurant management and online ordering system designed for fast-food restaurants selling pizzas, burgers, deals, and other food items. Customers can browse products, select deals, place orders, choose their delivery location, and track their orders. The administration panel allows restaurant administrators to manage products, prices, orders, and delivery operations.",
    problem:
      "Customers traditionally need to visit restaurants physically or rely on manual ordering processes. Restaurants also need a centralized system to manage incoming orders and coordinate deliveries efficiently.",
    solution:
      "DineFlow brings online ordering, restaurant administration, order management, and delivery coordination into one platform, making the ordering experience more convenient for customers and easier to manage for restaurant staff.",
    targetUsers: [
      "Customers ordering food online",
      "Restaurant administrators",
      "Delivery personnel",
    ],
    features: [
      {
        title: "Online Food Ordering",
        description:
          "Customers can browse available food items, explore menus, select products, and place orders online.",
      },
      {
        title: "Deals and Product Management",
        description:
          "Administrators can manage restaurant products, prices, sizes, and special deals.",
      },
      {
        title: "Order Tracking",
        description:
          "Customers can view their orders and follow their order status throughout the delivery process.",
      },
      {
        title: "Delivery Management",
        description:
          "The system supports delivery personnel and coordination between restaurant orders and deliveries.",
      },
      {
        title: "Location-Based Delivery",
        description:
          "Map functionality supports delivery location selection within a five-kilometer radius of the restaurant.",
      },
      {
        title: "Role-Based Access",
        description:
          "Customer, administrator, and delivery personnel roles support different application workflows.",
      },
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB", "Mongoose"],
      authentication: ["JWT", "HttpOnly Cookies"],
      libraries: [
        "Axios",
        "Framer Motion",
        "Lucide React",
      ],
      integrations: [
        "Maps and Geolocation",
        "Socket.IO",
        "Cloudinary",
      ],
    },
    challenges: [
      {
        title: "Map-Based Delivery Restrictions",
        description:
          "Implementing location-based delivery functionality with a restricted delivery radius of five kilometers.",
        solution:
          "Integrated map functionality to support location selection and delivery-area restrictions.",
      },
      {
        title: "Administration Workflows",
        description:
          "Organizing restaurant products, incoming orders, and delivery operations through an administration panel.",
        solution:
          "Created centralized administrative workflows for managing restaurant operations.",
      },
    ],
    learnings: [
      "Building a complete restaurant ordering workflow.",
      "Implementing role-based authentication and authorization.",
      "Working with maps and location-based functionality.",
      "Connecting frontend interfaces with backend APIs and MongoDB.",
    ],
    screenshots: [
      {
        src: "/images/projects/dineflow-1.png",
        alt: "DineFlow restaurant ordering interface",
        caption: "Restaurant Ordering Interface",
      },
      {
        src: "/images/projects/dineflow-2.png",
        alt: "DineFlow restaurant administration dashboard",
        caption: "Administration Dashboard",
      },
      {
        src: "/images/projects/dineflow-3.png",
        alt: "DineFlow order and delivery interface",
        caption: "Order and Delivery Management",
      },
    ],
    github: "YOUR_DINEFLOW_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: true,
  },

  {
    id: "ai-customer-support",
    number: "02",
    title: "AI Customer Support System",
    subtitle: "AI-Powered Document-Based Customer Assistance",
    category: "AI Integration / Full-Stack Application",
    shortDescription:
      "An AI-powered customer support platform that answers customer questions using company-provided documents, policies, and knowledge through Gemini API and embedding-based retrieval.",
    description:
      "The AI Customer Support System helps businesses automate responses to common customer questions. Administrators can upload company documents containing information such as refund policies, product guarantees, and support guidelines. Customers can interact with a dedicated AI chatbot that retrieves relevant information and generates answers grounded in the available company knowledge.",
    problem:
      "Businesses often spend significant time manually answering repetitive customer questions through email, including questions about refunds, guarantees, and company policies.",
    solution:
      "The system provides an AI-powered chatbot that uses company documents as its knowledge source, helping customers find relevant information without requiring staff to manually answer every common question.",
    targetUsers: [
      "Customers seeking product and policy information",
      "Company administrators managing support knowledge",
      "Businesses seeking to automate repetitive support queries",
    ],
    features: [
      {
        title: "AI Customer Chatbot",
        description:
          "Customers can ask questions through a chatbot designed to answer queries about a specific company's products and policies.",
      },
      {
        title: "Document-Based Knowledge",
        description:
          "Company documents, including PDFs and text files, provide the information used to answer customer questions.",
      },
      {
        title: "Embedding-Based Retrieval",
        description:
          "Document content is divided into chunks, converted into embeddings, and searched for relevant information when a customer asks a question.",
      },
      {
        title: "Gemini API Integration",
        description:
          "Google Gemini generates conversational answers using the retrieved company information.",
      },
      {
        title: "Administration Panel",
        description:
          "Administrators can manage the knowledge documents used by the customer support system.",
      },
      {
        title: "Authentication",
        description:
          "The application includes authentication for accessing its customer and administrative functionality.",
      },
    ],
    technologies: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT", "Local Storage"],
      libraries: [
        "Axios",
        "Framer Motion",
      ],
      integrations: [
        "Google Gemini API",
        "Text Embeddings",
        "PDF and Text Document Processing",
      ],
    },
    challenges: [
      {
        title: "Integrating Generative AI",
        description:
          "Connecting the application to an AI service and building a chatbot that could answer company-specific questions.",
        solution:
          "Integrated the Gemini API and developed a document-based retrieval workflow to provide relevant context for generated answers.",
      },
      {
        title: "Retrieving Relevant Document Information",
        description:
          "Making company knowledge available to the AI in a useful format instead of relying only on general model knowledge.",
        solution:
          "Implemented document chunking, embeddings, and similarity-based retrieval to identify relevant information.",
      },
    ],
    learnings: [
      "Integrating a generative AI API into a full-stack application.",
      "Understanding embeddings, document chunking, and semantic retrieval.",
      "Building document-based question-answering workflows.",
      "Connecting AI functionality with a database and administration panel.",
    ],
    screenshots: [
      {
        src: "/images/projects/ai-support-1.png",
        alt: "AI customer support chatbot interface",
        caption: "AI Support Chatbot",
      },
      {
        src: "/images/projects/ai-support-2.png",
        alt: "AI customer support administration dashboard",
        caption: "Administration Dashboard",
      },
      {
        src: "/images/projects/ai-support-3.png",
        alt: "Document-based AI support interface",
        caption: "Knowledge-Based Responses",
      },
    ],
    github: "YOUR_AI_SUPPORT_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: true,
  },

  {
    id: "security-guard-management",
    number: "03",
    title: "Security GuardManagement System",
    subtitle: "Security Personnel and Site Operations Management",
    category: "Full-Stack Management System",
    shortDescription:
      "A management system for security companies to organize guard profiles, attendance, salaries, fines, and assignments across different project sites.",
    description:
      "The Security Guard Management System is a full-stack application built for security guard companies that provide personnel to construction sites, buildings, and other projects. It centralizes guard records and operational management, allowing administrators to maintain personnel profiles, record daily attendance, manage salaries and fines, and assign guards to different locations.",
    problem:
      "Security companies need to coordinate personnel across multiple sites while maintaining accurate attendance records, guard profiles, salary information, fines, and assignments.",
    solution:
      "The system provides a centralized administration interface for managing guards and site operations, helping company administrators organize personnel information and daily management tasks.",
    targetUsers: [
      "Security company administrators",
      "Project site managers",
      "Security guard personnel whose records are managed by the company",
    ],
    features: [
      {
        title: "Guard Profiles",
        description:
          "Maintain guard records, personal details, profile pictures, and employment information.",
      },
      {
        title: "Daily Attendance",
        description:
          "Record and manage security guards' daily attendance.",
      },
      {
        title: "Site Assignments",
        description:
          "Assign guards to different project locations, including construction sites and buildings.",
      },
      {
        title: "Salary Management",
        description:
          "Maintain salary-related information for security personnel.",
      },
      {
        title: "Fine Management",
        description:
          "Record and manage fines associated with individual guards.",
      },
      {
        title: "Site Manager Administration",
        description:
          "Administrators can add and remove project site managers and manage their access.",
      },
      {
        title: "Admin Authentication",
        description:
          "Authentication is provided for the administrator, who controls the system's management functionality.",
      },
    ],
    technologies: {
      frontend: ["React", "JavaScript"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: [
        "Local Storage",
        "Admin Authentication",
      ],
      libraries: [],
      integrations: [],
    },
    challenges: [
      {
        title: "Organizing Guard and Site Records",
        description:
          "Bringing personnel profiles, attendance, fines, salary information, and site assignments into one management system.",
        solution:
          "Developed centralized administrative functionality for managing guard information and site operations.",
      },
    ],
    learnings: [
      "Building my first full-stack management application.",
      "Connecting React interfaces to a Node.js and Express backend.",
      "Working with MongoDB to manage structured personnel records.",
      "Implementing administrator authentication and management workflows.",
      "Understanding how security companies organize guards across project sites.",
    ],
    screenshots: [
      {
        src: "/images/projects/security-guard-1.png",
        alt: "Security Guard Management System dashboard",
        caption: "Management Dashboard",
      },
      {
        src: "/images/projects/security-guard-2.png",
        alt: "Security guard profiles and personnel records",
        caption: "Guard Profiles",
      },
      {
        src: "/images/projects/security-guard-3.png",
        alt: "Security guard attendance and site assignments",
        caption: "Attendance and Site Assignments",
      },
    ],
    github: "YOUR_SECURITY_GUARD_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: true,
  },

  {
    id: "mini-ecommerce",
    number: "04",
    title: "Mini E-commerce Website",
    subtitle: "Product Discovery and Shopping Cart Experience",
    category: "Full-Stack E-commerce",
    shortDescription:
      "A mini online shopping platform where customers can browse products, explore categories, view product details, select quantities, manage a cart, and proceed to checkout.",
    description:
      "The Mini E-commerce Website is one of my earliest full-stack projects. It provides a basic online shopping experience with product listings, category-based browsing, individual product detail pages, quantity selection, cart management, and a checkout form for customer address and other details.",
    problem:
      "Online stores need a convenient way for customers to discover products, explore categories, select quantities, organize shopping items, and provide delivery information.",
    solution:
      "Built a simple e-commerce application that connects product browsing with shopping cart management and a checkout workflow.",
    targetUsers: [
      "Customers browsing online products",
      "Users selecting products and managing their carts",
    ],
    features: [
      {
        title: "Product Listing",
        description:
          "Display available products on the main page.",
      },
      {
        title: "Category Browsing",
        description:
          "Allow customers to browse product listings organized by category.",
      },
      {
        title: "Product Details",
        description:
          "Provide individual product pages where customers can view products and choose quantities.",
      },
      {
        title: "Shopping Cart",
        description:
          "Use Redux Toolkit to manage cart state and selected product quantities.",
      },
      {
        title: "Checkout Form",
        description:
          "Allow customers to proceed to checkout and enter their address and other required details.",
      },
    ],
    technologies: {
      frontend: ["React", "JavaScript"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: [],
      libraries: ["Redux Toolkit"],
      integrations: [],
    },
    challenges: [
      {
        title: "Shopping Cart State Management",
        description:
          "Maintaining selected products and quantities as customers browse the store.",
        solution:
          "Used Redux Toolkit to manage cart state across the React application.",
      },
      {
        title: "Connecting Browsing to Checkout",
        description:
          "Creating a straightforward flow from product discovery and detail pages to checkout.",
        solution:
          "Structured the application around product listings, category pages, product details, cart management, and a checkout form.",
      },
    ],
    learnings: [
      "Building my first e-commerce-style full-stack application.",
      "Managing shared frontend state with Redux Toolkit.",
      "Creating product listings, category pages, and product detail pages.",
      "Connecting a shopping workflow to a Node.js and Express backend.",
    ],
    screenshots: [
      {
        src: "/images/projects/ecommerce-1.png",
        alt: "Mini e-commerce product listing page",
        caption: "Product Listings",
      },
      {
        src: "/images/projects/ecommerce-2.png",
        alt: "Mini e-commerce product details page",
        caption: "Product Details",
      },
      {
        src: "/images/projects/ecommerce-3.png",
        alt: "Mini e-commerce shopping cart and checkout",
        caption: "Cart and Checkout",
      },
    ],
    github: "YOUR_ECOMMERCE_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: false,
  },

  {
    id: "application-tracking-system",
    number: "05",
    title: "Application Tracking System",
    subtitle: "Multi-Tenant Recruitment and Job Application Platform",
    category: "Full-Stack Recruitment Platform",
    shortDescription:
      "A multi-tenant recruitment platform connecting companies with job seekers, allowing employers to publish job opportunities and candidates to browse and apply for positions.",
    description:
      "The Application Tracking System is a recruitment platform designed to connect organizations with potential employees. Multiple companies can use the platform to publish job openings, while job seekers can explore available positions and apply for opportunities that match their interests.",
    problem:
      "Companies need a platform to publish job opportunities, while job seekers need a centralized way to discover available positions and submit applications.",
    solution:
      "Built a multi-tenant web application that brings company job listings and candidate applications together in one recruitment platform.",
    targetUsers: [
      "Companies and employers publishing job openings",
      "Job seekers searching for employment",
    ],
    features: [
      {
        title: "Multi-Tenant Architecture",
        description:
          "Support multiple companies using the recruitment platform.",
      },
      {
        title: "Company Job Publishing",
        description:
          "Allow companies to upload and publish job opportunities.",
      },
      {
        title: "Job Discovery",
        description:
          "Allow job seekers to browse available job openings.",
      },
      {
        title: "Job Applications",
        description:
          "Enable candidates to apply for positions listed on the platform.",
      },
      {
        title: "JWT Authentication",
        description:
          "Use JWT-based authentication with tokens stored in local storage.",
      },
    ],
    technologies: {
      frontend: ["Next.js", "React"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT", "Local Storage"],
      libraries: [],
      integrations: [],
    },
    challenges: [
      {
        title: "Building a Multi-Tenant Platform",
        description:
          "Structuring a recruitment application to support multiple companies and their job listings.",
        solution:
          "Designed the application around company-based recruitment workflows and job publishing.",
      },
    ],
    learnings: [
      "Understanding multi-tenant application architecture.",
      "Building job publishing and application workflows.",
      "Connecting company and candidate experiences.",
      "Implementing JWT authentication in a Next.js application.",
    ],
    screenshots: [
      {
        src: "/images/projects/ats-1.png",
        alt: "Application Tracking System job listings",
        caption: "Job Listings",
      },
      {
        src: "/images/projects/ats-2.png",
        alt: "Application Tracking System company dashboard",
        caption: "Company Dashboard",
      },
      {
        src: "/images/projects/ats-3.png",
        alt: "Application Tracking System recruitment interface",
        caption: "Recruitment Interface",
      },
    ],
    github: "YOUR_ATS_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: true,
  },

  {
    id: "disaster-management-system",
    number: "06",
    title: "Disaster Management System",
    subtitle: "Disaster Reporting and Rescue Coordination Platform",
    category: "Full-Stack Management System",
    shortDescription:
      "A disaster response platform connecting victims, administrators, and rescue teams to report emergencies, assign rescue personnel, and monitor response status.",
    description:
      "The Disaster Management System is a full-stack application designed to coordinate disaster reporting and rescue operations. Victims can create accounts and report disasters through the platform. Administrators receive reported incidents through an administration panel and assign rescue teams to respond. The system also supports monitoring the status of reported incidents and rescue assignments.",
    problem:
      "Disaster response requires coordination between people reporting emergencies, administrators handling incoming reports, and rescue teams responsible for responding to incidents.",
    solution:
      "Developed a centralized platform that connects victims, administrators, and rescue teams through disaster reporting, rescue assignment, and status monitoring workflows.",
    targetUsers: [
      "Victims reporting disasters",
      "Main administrators coordinating responses",
      "Rescue teams assigned to incidents",
    ],
    features: [
      {
        title: "Victim Registration",
        description:
          "Allow victims to create accounts and access the disaster reporting system.",
      },
      {
        title: "Disaster Reporting",
        description:
          "Enable victims to submit reports about disaster incidents.",
      },
      {
        title: "Administration Dashboard",
        description:
          "Allow administrators to receive and review reported disasters.",
      },
      {
        title: "Rescue Team Assignment",
        description:
          "Enable administrators to assign rescue teams to reported incidents.",
      },
      {
        title: "Response Status Monitoring",
        description:
          "Support checking the status of disaster reports and rescue operations.",
      },
      {
        title: "JWT Authentication",
        description:
          "Use JWT-based authentication with tokens stored in local storage.",
      },
    ],
    technologies: {
      frontend: ["Next.js", "React"],
      backend: ["Node.js", "Express.js"],
      database: ["MongoDB"],
      authentication: ["JWT", "Local Storage"],
      libraries: [],
      integrations: [],
    },
    challenges: [
      {
        title: "Coordinating Multiple User Roles",
        description:
          "Organizing disaster response workflows for victims, administrators, and rescue teams.",
        solution:
          "Structured the application around disaster reporting, administrative review, rescue team assignment, and status monitoring.",
      },
    ],
    learnings: [
      "Building role-based disaster management workflows.",
      "Connecting user-submitted reports to administrative actions.",
      "Designing rescue team assignment and status monitoring functionality.",
      "Integrating Next.js with a Node.js, Express, and MongoDB backend.",
    ],
    screenshots: [
      {
        src: "/images/projects/disaster-1.png",
        alt: "Disaster Management System incident reporting interface",
        caption: "Disaster Reporting",
      },
      {
        src: "/images/projects/disaster-2.png",
        alt: "Disaster Management System administration dashboard",
        caption: "Administration Dashboard",
      },
      {
        src: "/images/projects/disaster-3.png",
        alt: "Disaster Management System rescue coordination interface",
        caption: "Rescue Coordination",
      },
    ],
    github: "YOUR_DISASTER_MANAGEMENT_GITHUB_URL",
    liveDemo: "",
    status: "Personal Project",
    featured: true,
  },
];