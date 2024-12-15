import { Menu, X, GraduationCap, Calendar, FileText, BookOpen, School, Library, Building2, Phone, Newspaper, LogIn } from "lucide-react";
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu as HoverMenu, MenuItem, HoveredLink } from "@/components/ui/navbar-menu";

const MENU_ITEMS = {
    academics: {
        label: "Academics",
        icon: GraduationCap,
        items: [
            { label: "Programs Offered", href: "/programs", icon: School },
            // { label: "Faculty", href: "/faculty", icon: Users },
            { label: "Academic Calendar", href: "/calendar", icon: Calendar },
            { label: "Admission Requirements", href: "/admission", icon: FileText },
        ],
    },
    news: {
        label: "News & Updates",
        icon: Newspaper,
        items: [
            { label: "School News", href: "/news", icon: Newspaper },
            { label: "Academic Announcements", href: "/academic-announcement", icon: Calendar },
        ],
    },
    studentServices: {
        label: "Student Services",
        icon: BookOpen,
        items: [
            { label: "Student Portal", href: "/student-portal", icon: LogIn },
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
            { label: "Facilities", href: "/facilities", icon: School },
            { label: "Policy Guidelines", href: "/student-policy-guidelines", icon: Building2 },
            { label: "Contact Us", href: "/contact", icon: Phone },
        ],
    },
};

const Block01Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [active, setActive] = useState<string | null>(null);

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
        <motion.nav 
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 20,
                duration: 0.3
            }}
            className="fixed top-4 left-0 right-0 z-50"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white/70 backdrop-blur-md rounded-full border border-white/20 shadow-lg">
                    <div className="flex justify-between items-center h-16 px-6">
                        <div className="flex items-center gap-8">
                            <a href="/" className="flex items-center">
                                <img
                                    className="h-10 w-auto"
                                    src="/images/dccp-logo.png"
                                    alt="DCCP Logo"
                                />
                            </a>

                            <div className="hidden lg:flex lg:items-center">
                                <HoverMenu setActive={setActive}>
                                    {Object.entries(MENU_ITEMS).map(([key, section]) => (
                                        <MenuItem 
                                            key={key}
                                            setActive={setActive}
                                            active={active}
                                            item={section.label}
                                        >
                                            <div className="flex flex-col space-y-3 text-sm">
                                                {section.items.map((item) => (
                                                    <HoveredLink 
                                                        key={item.label}
                                                        href={item.href}
                                                        className="flex items-center gap-2"
                                                    >
                                                        <item.icon className="w-4 h-4" />
                                                        {item.label}
                                                    </HoveredLink>
                                                ))}
                                            </div>
                                        </MenuItem>
                                    ))}
                                </HoverMenu>
                            </div>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="hidden lg:flex lg:items-center lg:space-x-3">
                                <Button variant="ghost" asChild>
                                    <a href="/student-portal" className="flex items-center">
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Student Portal
                                    </a>
                                </Button>
                                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="/enrollment" className="flex items-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Enroll Now
                                    </a>
                                </Button>
                            </div>

                            <Button
                                variant="ghost"
                                size="icon"
                                className="lg:hidden"
                                onClick={() => setIsMenuOpen(true)}
                            >
                                <Menu className="w-6 h-6" />
                            </Button>
                        </div>
                    </div>
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
                            className="fixed right-0 top-0 h-screen w-full max-w-sm bg-background z-50 overflow-y-auto"
                        >
                            <div className="sticky top-0 border-b z-10 bg-background/95">
                                <div className="flex items-center justify-between p-4">
                                    <img
                                        className="h-8 w-auto"
                                        src="/images/dccp-logo.png"
                                        alt="DCCP Logo"
                                    />
                                    <Button
                                        variant="ghost"
                                        size="icon"
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <X className="w-6 h-6" />
                                    </Button>
                                </div>
                            </div>

                            <div className="p-4 space-y-3">
                                <Button variant="outline" className="w-full" asChild>
                                    <a href="https://dccp-portal-v1-beta.vercel.app" className="flex items-center justify-center">
                                        <LogIn className="w-4 h-4 mr-2" />
                                        Student Portal
                                    </a>
                                </Button>
                                <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                                    <a href="/enrollment" className="flex items-center justify-center">
                                        <FileText className="w-4 h-4 mr-2" />
                                        Enroll Now
                                    </a>
                                </Button>
                            </div>

                            <div className="px-4 py-2">
                                {Object.entries(MENU_ITEMS).map(([key, section]) => {
                                    const Icon = section.icon;
                                    return (
                                        <div key={key} className="mb-6">
                                            <div className="flex items-center px-3 mb-2">
                                                <Icon className="w-4 h-4 mr-2 text-muted-foreground" />
                                                <h3 className="text-sm font-medium text-muted-foreground">
                                                    {section.label}
                                                </h3>
                                            </div>
                                            <div className="space-y-1">
                                                {section.items.map((item) => {
                                                    const ItemIcon = item.icon;
                                                    return (
                                                        <a
                                                            key={item.label}
                                                            href={item.href}
                                                            onClick={() => setIsMenuOpen(false)}
                                                            className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-accent hover:text-accent-foreground"
                                                        >
                                                            <ItemIcon className="w-4 h-4 mr-3" />
                                                            {item.label}
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Block01Navigation;
