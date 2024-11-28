interface Program {
  title: string;
  description: string;
  icon: string;
  features: string[];
  color: {
    from: string;
    to: string;
    iconBg: string;
    iconText: string;
  };
}

interface ProgramCategory {
  title: string;
  icon: string;
  programs: Program[];
}

export const programsData: ProgramCategory[] = [
  {
    title: "K-12 Senior High School",
    icon: "School",
    programs: [
      {
        title: "STEM",
        description: "Science, Technology, Engineering, and Mathematics",
        icon: "Code",
        features: [
          "Advanced Mathematics",
          "Research in Physical Sciences",
          "Engineering and Technology",
          "Computer Programming",
          "Scientific Research"
        ],
        color: {
          from: "blue-600",
          to: "blue-400",
          iconBg: "blue-100",
          iconText: "blue-600"
        }
      },
      {
        title: "ABM",
        description: "Accountancy, Business, and Management",
        icon: "Briefcase",
        features: [
          "Business Mathematics",
          "Fundamentals of Accountancy",
          "Business Ethics",
          "Economics",
          "Marketing"
        ],
        color: {
          from: "green-600",
          to: "green-400",
          iconBg: "green-100",
          iconText: "green-600"
        }
      },
      {
        title: "HUMSS",
        description: "Humanities and Social Sciences",
        icon: "Users",
        features: [
          "Creative Writing",
          "Social Sciences",
          "Political Science",
          "Psychology",
          "Philosophy"
        ],
        color: {
          from: "purple-600",
          to: "purple-400",
          iconBg: "purple-100",
          iconText: "purple-600"
        }
      },
      {
        title: "HE",
        description: "Home Economics",
        icon: "ChefHat",
        features: [
          "Food and Nutrition",
          "Culinary Arts",
          "Home Management",
          "Food Safety",
          "Hospitality"
        ],
        color: {
          from: "orange-600",
          to: "orange-400",
          iconBg: "orange-100",
          iconText: "orange-600"
        }
      },
      {
        title: "Caregiving",
        description: "Healthcare Services",
        icon: "Heart",
        features: [
          "Basic Healthcare",
          "Patient Care",
          "First Aid and Safety",
          "Medical Terminology",
          "Healthcare Ethics"
        ],
        color: {
          from: "red-600",
          to: "red-400",
          iconBg: "red-100",
          iconText: "red-600"
        }
      },
      {
        title: "ICT",
        description: "Information and Communications Technology",
        icon: "Code",
        features: [
          "Computer Programming",
          "Digital Arts",
          "Web Development",
          "Network Systems",
          "Database Management"
        ],
        color: {
          from: "indigo-600",
          to: "indigo-400",
          iconBg: "indigo-100",
          iconText: "indigo-600"
        }
      }
    ]
  },
  {
    title: "TESDA Courses",
    icon: "Award",
    programs: [
      {
        title: "Cookery NC II",
        description: "Professional Cooking and Food Preparation",
        icon: "ChefHat",
        features: [
          "Food Preparation",
          "Kitchen Operations",
          "Menu Planning",
          "Food Safety",
          "Basic Baking"
        ],
        color: {
          from: "amber-600",
          to: "amber-400",
          iconBg: "amber-100",
          iconText: "amber-600"
        }
      },
      {
        title: "Housekeeping NC II",
        description: "Professional Housekeeping Services",
        icon: "Building2",
        features: [
          "Room Preparation",
          "Cleaning Procedures",
          "Inventory Management",
          "Guest Services",
          "Safety Protocols"
        ],
        color: {
          from: "teal-600",
          to: "teal-400",
          iconBg: "teal-100",
          iconText: "teal-600"
        }
      },
      {
        title: "Caregiving NC II",
        description: "Professional Healthcare Support",
        icon: "Heart",
        features: [
          "Patient Care",
          "Medical Assistance",
          "Health Monitoring",
          "Emergency Response",
          "Healthcare Ethics"
        ],
        color: {
          from: "pink-600",
          to: "pink-400",
          iconBg: "pink-100",
          iconText: "pink-600"
        }
      },
      {
        title: "Healthcare Services NC II",
        description: "Advanced Healthcare Support",
        icon: "Heart",
        features: [
          "Clinical Procedures",
          "Patient Assessment",
          "Medical Records",
          "Healthcare Safety",
          "Basic Pharmacology"
        ],
        color: {
          from: "rose-600",
          to: "rose-400",
          iconBg: "rose-100",
          iconText: "rose-600"
        }
      },
      {
        title: "Bread and Pastry Production NC II",
        description: "Professional Baking and Pastry Arts",
        icon: "ChefHat",
        features: [
          "Baking Techniques",
          "Pastry Making",
          "Food Safety",
          "Inventory Control",
          "Product Presentation"
        ],
        color: {
          from: "yellow-600",
          to: "yellow-400",
          iconBg: "yellow-100",
          iconText: "yellow-600"
        }
      },
      {
        title: "Bartending Services NC II",
        description: "Professional Beverage Service",
        icon: "GraduationCap",
        features: [
          "Mixology",
          "Bar Operations",
          "Customer Service",
          "Beverage Knowledge",
          "Safety and Sanitation"
        ],
        color: {
          from: "violet-600",
          to: "violet-400",
          iconBg: "violet-100",
          iconText: "violet-600"
        }
      },
      {
        title: "CSS NC II",
        description: "Computer Systems Servicing",
        icon: "Code",
        features: [
          "Hardware Maintenance",
          "Software Installation",
          "Network Setup",
          "System Troubleshooting",
          "Technical Support"
        ],
        color: {
          from: "cyan-600",
          to: "cyan-400",
          iconBg: "cyan-100",
          iconText: "cyan-600"
        }
      }
    ]
  },
  {
    title: "College Programs",
    icon: "GraduationCap",
    programs: [
      {
        title: "BS in Hospitality Management",
        description: "Bachelor of Science in Hospitality Management",
        icon: "Building2",
        features: [
          "Hotel and Restaurant Management",
          "Events Planning and Management",
          "Tourism Operations",
          "Food and Beverage Service",
          "Hospitality Marketing"
        ],
        color: {
          from: "fuchsia-600",
          to: "fuchsia-400",
          iconBg: "fuchsia-100",
          iconText: "fuchsia-600"
        }
      },
      {
        title: "BS in Business Administration",
        description: "Bachelor of Science in Business Administration",
        icon: "Briefcase",
        features: [
          "Financial Management",
          "Marketing Management",
          "Human Resource Management",
          "Business Strategy",
          "Entrepreneurship"
        ],
        color: {
          from: "emerald-600",
          to: "emerald-400",
          iconBg: "emerald-100",
          iconText: "emerald-600"
        }
      },
      {
        title: "BS in Information Technology",
        description: "Bachelor of Science in Information Technology",
        icon: "Code",
        features: [
          "Web Development",
          "Mobile App Development",
          "Database Management",
          "Network Administration",
          "Cybersecurity"
        ],
        color: {
          from: "sky-600",
          to: "sky-400",
          iconBg: "sky-100",
          iconText: "sky-600"
        }
      }
    ]
  }
];
