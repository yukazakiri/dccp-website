import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const MENU_ITEMS = {
    academics: {
        label: "Academics",
        items: [
            { href: "/programs", label: "Programs Offered" },
            { href: "/faculty", label: "Faculty" },
            { href: "/calendar", label: "Academic Calendar" },
            { href: "/requirements", label: "Admission Requirements" },
        ]
    },
    studentServices: {
        label: "Student Services",
        items: [
            { href: "https://dccp-portal-v1-beta.vercel.app", label: "Student Portal" },
            { href: "/enrollment", label: "Online Enrollment" },
            { href: "/scholarships", label: "Scholarships" },
            { href: "/library", label: "Library" },
        ]
    },
    about: {
        label: "About",
        items: [
            { href: "/about", label: "About DCCP" },
            { href: "/history", label: "Our History" },
            { href: "/facilities", label: "Facilities" },
            { href: "/contact", label: "Contact Us" },
        ]
    }
};

export default function Block01Navigation() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

    const handleDropdownEnter = (key: string) => {
        setActiveDropdown(key);
    };

    const handleDropdownLeave = () => {
        setActiveDropdown(null);
    };

    return (
        <nav className="fixed top-0 left-0 right-0 bg-white z-50">
            {/* Announcement Banner */}
            <div className="bg-blue-600 text-white py-2 px-4 text-center text-sm">
                <span className="font-medium">Enrollment for AY 2024-2025 is now open!</span>
                <a href="/enrollment" className="ml-2 underline hover:text-blue-100">Enroll now →</a>
            </div>

            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center">
                            <img src="/images/dccp-logo.png" alt="DCCP Logo" className="h-16 w-auto" />
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8">
                        {/* Main Menu Items */}
                        {Object.entries(MENU_ITEMS).map(([key, section]) => (
                            <div
                                key={key}
                                className="relative"
                                onMouseEnter={() => handleDropdownEnter(key)}
                                onMouseLeave={handleDropdownLeave}
                            >
                                <button className="flex items-center gap-1 px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                                    {section.label}
                                    <ChevronDown className="h-4 w-4" />
                                </button>

                                {activeDropdown === key && (
                                    <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 animate-fadeIn">
                                        {section.items.map((item) => (
                                            <a
                                                key={item.label}
                                                href={item.href}
                                                className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600"
                                            >
                                                {item.label}
                                            </a>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}

                        {/* News & Announcements */}
                        <a href="/news" className="px-4 py-2 text-gray-700 hover:text-blue-600 font-medium">
                            News
                        </a>

                        {/* Quick Actions */}
                        <div className="flex items-center gap-4 ml-4">
                            <a
                                href="https://dccp-portal-v1-beta.vercel.app"
                                className="px-4 py-2 text-blue-600 hover:text-blue-700 font-medium"
                            >
                                Student Portal
                            </a>
                            <a
                                href="/enrollment"
                                className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors font-medium"
                            >
                                Enroll Now
                            </a>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden p-2"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? (
                            <X className="h-6 w-6 text-gray-700" />
                        ) : (
                            <Menu className="h-6 w-6 text-gray-700" />
                        )}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto pt-20">
                    <div className="container mx-auto px-4 py-6">
                        {/* Mobile Quick Actions */}
                        <div className="flex flex-col gap-3 mb-8">
                            <a
                                href="https://dccp-portal-v1-beta.vercel.app"
                                className="w-full py-3 text-center bg-blue-50 text-blue-600 rounded-lg font-medium"
                            >
                                Student Portal
                            </a>
                            <a
                                href="/enrollment"
                                className="w-full py-3 text-center bg-blue-600 text-white rounded-lg font-medium"
                            >
                                Enroll Now
                            </a>
                        </div>

                        {/* Mobile Menu Items */}
                        {Object.entries(MENU_ITEMS).map(([key, section]) => (
                            <div key={key} className="mb-6">
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                                    {section.label}
                                </h3>
                                <div className="flex flex-col gap-2">
                                    {section.items.map((item) => (
                                        <a
                                            key={item.label}
                                            href={item.href}
                                            className="py-2 text-gray-700 hover:text-blue-600"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            {item.label}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Mobile News Link */}
                        <div className="border-t pt-4">
                            <a
                                href="/news"
                                className="block py-2 text-gray-700 hover:text-blue-600 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                News & Announcements
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
}
