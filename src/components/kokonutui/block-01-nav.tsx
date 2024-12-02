import { Menu, X, ChevronDown, GraduationCap, Users, Calendar, FileText, BookOpen, School, Library, Building2, Phone, Newspaper, LogIn } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";

const MENU_ITEMS = {
    academics: {
        label: "Academics",
        icon: GraduationCap,
        items: [
            { label: "Programs Offered", href: "/programs", icon: School },
            { label: "Faculty", href: "/faculty", icon: Users },
            { label: "Academic Calendar", href: "/calendar", icon: Calendar },
            { label: "Admission Requirements", href: "/admission", icon: FileText },
        ],
    },
    news: {
        label: "News & Updates",
        icon: Newspaper,
        items: [
            { label: "News & Announcements", href: "/news", icon: Newspaper },
            { label: "Events", href: "/events", icon: Calendar },
        ],
    },
    studentServices: {
        label: "Student Services",
        icon: BookOpen,
        items: [
            { label: "Student Portal", href: "https://dccp-portal-v1-beta.vercel.app", icon: LogIn },
            { label: "Online Enrollment", href: "/enrollment", icon: FileText },
            { label: "Scholarships", href: "/scholarships", icon: GraduationCap },
            { label: "Library", href: "/library", icon: Library },
        ],
    },
    about: {
        label: "About",
        icon: Building2,
        items: [
            { label: "About DCCP", href: "/about", icon: School },
            { label: "Our History", href: "/history", icon: BookOpen },
            { label: "Facilities", href: "/facilities", icon: Building2 },
            { label: "Contact Us", href: "/contact", icon: Phone },
        ],
    },
};

const Block01Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState<string | null>(null);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white/30 backdrop-blur-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex-shrink-0">
                        <a href="/" className="flex items-center">
                            <img
                                className="h-10 w-auto"
                                src="/images/dccp-logo.png"
                                alt="DCCP Logo"
                            />
                        </a>
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:space-x-4">
                        {Object.entries(MENU_ITEMS).map(([key, section]) => {
                            const Icon = section.icon;
                            return (
                                <div
                                    key={key}
                                    className="relative group"
                                    onMouseEnter={() => setActiveSection(key)}
                                    onMouseLeave={() => setActiveSection(null)}
                                >
                                    <button 
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50/50 rounded-full transition-all duration-200 group-hover:text-blue-600"
                                    >
                                        <Icon className="w-4 h-4 mr-1.5" />
                                        {section.label}
                                        <ChevronDown 
                                            className={`ml-0.5 h-4 w-4 transition-transform duration-200 ${
                                                activeSection === key ? 'rotate-180' : ''
                                            }`}
                                        />
                                    </button>
                                    
                                    <AnimatePresence>
                                        {activeSection === key && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.15 }}
                                                className="absolute left-0 mt-2 w-64 bg-white/80 backdrop-blur-md rounded-2xl shadow-lg ring-1 ring-black/5 focus:outline-none overflow-hidden z-50"
                                                style={{ 
                                                    transformOrigin: 'top',
                                                }}
                                            >
                                                <div className="py-2">
                                                    {section.items.map((item) => {
                                                        const ItemIcon = item.icon;
                                                        return (
                                                            <motion.a
                                                                key={item.label}
                                                                href={item.href}
                                                                className="flex items-center px-4 py-3 text-sm text-gray-700 hover:bg-blue-50/50 hover:text-blue-600 transition-all"
                                                                whileHover={{ x: 6 }}
                                                                transition={{ duration: 0.2 }}
                                                            >
                                                                <ItemIcon className="w-4 h-4 mr-3 flex-shrink-0" />
                                                                {item.label}
                                                            </motion.a>
                                                        );
                                                    })}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>

                    <div className="hidden lg:flex lg:items-center lg:space-x-3">
                        <motion.a
                            href="https://dccp-portal-v1-beta.vercel.app"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-blue-600 bg-blue-50/50 rounded-full hover:bg-blue-100/50 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <LogIn className="w-4 h-4 mr-1.5" />
                            Student Portal
                        </motion.a>
                        <motion.a
                            href="/enrollment"
                            className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-blue-600/90 rounded-full hover:bg-blue-700/90 transition-all"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <FileText className="w-4 h-4 mr-1.5" />
                            Enroll Now
                        </motion.a>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMenuOpen(true)}
                        className="lg:hidden p-2 rounded-full hover:bg-gray-100/50 transition-colors"
                    >
                        <Menu className="w-6 h-6" />
                    </motion.button>
                </div>
            </div>

            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
                            onClick={() => setIsMenuOpen(false)}
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", bounce: 0, duration: 0.4 }}
                            className="fixed right-0 top-0 h-screen w-full max-w-sm bg-white/90 backdrop-blur-md z-50 overflow-y-auto"
                        >
                            <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b z-10">
                                <div className="flex items-center justify-between p-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="/images/dccp-logo.png"
                                        alt="DCCP Logo"
                                    />
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setIsMenuOpen(false)}
                                        className="p-2 rounded-full hover:bg-gray-100/50 transition-colors"
                                    >
                                        <X className="w-6 h-6" />
                                    </motion.button>
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <motion.a
                                    href="https://dccp-portal-v1-beta.vercel.app"
                                    className="flex items-center justify-center w-full p-3 text-blue-600 bg-blue-50/50 rounded-2xl font-medium hover:bg-blue-100/50 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <LogIn className="w-5 h-5 mr-2" />
                                    Student Portal
                                </motion.a>
                                <motion.a
                                    href="/enrollment"
                                    className="flex items-center justify-center w-full p-3 text-white bg-blue-600/90 rounded-2xl font-medium hover:bg-blue-700/90 transition-all"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                >
                                    <FileText className="w-5 h-5 mr-2" />
                                    Enroll Now
                                </motion.a>
                            </div>

                            <div className="px-4 py-2">
                                {Object.entries(MENU_ITEMS).map(([key, section], index) => {
                                    const Icon = section.icon;
                                    return (
                                        <motion.div
                                            key={key}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            className="mb-6"
                                        >
                                            <div className="flex items-center px-3 mb-2">
                                                <Icon className="w-4 h-4 mr-2 text-gray-500" />
                                                <h3 className="text-sm font-medium text-gray-500">
                                                    {section.label}
                                                </h3>
                                            </div>
                                            <div className="space-y-1">
                                                {section.items.map((item, itemIndex) => {
                                                    const ItemIcon = item.icon;
                                                    return (
                                                        <motion.div
                                                            key={item.label}
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: (index * 0.1) + (itemIndex * 0.05) }}
                                                        >
                                                            <motion.a
                                                                href={item.href}
                                                                onClick={() => setIsMenuOpen(false)}
                                                                className="flex items-center px-3 py-3 text-gray-700 rounded-xl hover:bg-gray-100/50 transition-all"
                                                                whileHover={{ x: 6 }}
                                                            >
                                                                <ItemIcon className="w-4 h-4 mr-3 text-gray-500" />
                                                                {item.label}
                                                            </motion.a>
                                                        </motion.div>
                                                    );
                                                })}
                                            </div>
                                        </motion.div>
                                    );
                                })}
                            </div>

                            <div className="px-4 py-2 mt-4">
                                <motion.a
                                    href="/news"
                                    onClick={() => setIsMenuOpen(false)}
                                    className="flex items-center px-3 py-3 text-gray-700 rounded-xl hover:bg-gray-100/50 transition-all"
                                    whileHover={{ x: 6 }}
                                >
                                    <Newspaper className="w-4 h-4 mr-3 text-gray-500" />
                                    <span className="font-medium">News & Announcements</span>
                                </motion.a>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Block01Navigation;
