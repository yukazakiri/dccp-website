import type { LucideIcon } from 'lucide-react';

interface Program {
  title: string;
  description: string;
  icon: keyof typeof import('lucide-react');
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
  icon: keyof typeof import('lucide-react');
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
          from: "teal-700",
          to: "teal-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "coral-700",
          to: "coral-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "mint-700",
          to: "mint-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "lavender-700",
          to: "lavender-100",
          iconBg: "gray-50",
          iconText: "black"
        }
      },
      // {
      //   title: "Caregiving",
      //   description: "Healthcare Services",
      //   icon: "Heart",
      //   features: [
      //     "Basic Healthcare",
      //     "Patient Care",
      //     "First Aid and Safety",
      //     "Medical Terminology",
      //     "Healthcare Ethics"
      //   ],
      //   color: {
      //     from: "red-600",
      //     to: "red-400",
      //     iconBg: "red-100",
      //     iconText: "red-600"
      //   }
      // },
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
          from: "orange-700",
          to: "orange-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "teal-700",
          to: "teal-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "blue-600",
          to: "blue-200",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "mint-700",
          to: "mint-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "red-600",
          to: "red-400",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "yellow-50",
          to: "yellow-900",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "teal-700",
          to: "teal-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "coral-700",
          to: "coral-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "red-600",
          to: "red-400",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "lavender-700",
          to: "lavender-100",
          iconBg: "gray-50",
          iconText: "black"
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
          from: "orange-700",
          to: "orange-100",
          iconBg: "gray-50",
          iconText: "black"
        }
      }
    ]
  }
];
