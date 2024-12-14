"use client";
import React, { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string | null) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const [isHovered, setIsHovered] = useState(false);
  let hoverTimeout: NodeJS.Timeout;

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true);
    setActive(item);
    if (hoverTimeout) clearTimeout(hoverTimeout);
  }, [setActive, item]);

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false);
    hoverTimeout = setTimeout(() => {
      if (!isHovered) {
        setActive(null);
      }
    }, 300); // 300ms delay before menu disappears
  }, [isHovered]);

  return (
    <div 
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      <motion.p
        transition={{ duration: 0.3 }}
        className="cursor-pointer text-gray-700 hover:text-blue-600 text-sm font-medium px-4 py-2"
      >
        {item}
      </motion.p>
      <AnimatePresence>
        {active === item && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 10 }}
            transition={transition}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute top-[calc(100%_+_0.5rem)] left-1/2 transform -translate-x-1/2">
              <motion.div
                transition={transition}
                layoutId="active"
                className="bg-white backdrop-blur-md rounded-xl overflow-hidden border border-white/20 shadow-xl"
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <nav className="flex items-center space-x-1">
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-gray-900">
          {title}
        </h4>
        <p className="text-gray-600 text-sm max-w-[10rem]">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <a
      {...rest}
      className="text-gray-600 hover:text-blue-600 transition-colors flex items-center gap-1 py-1 px-3 rounded-lg hover:bg-blue-50/50"
    >
      {children}
    </a>
  );
};
