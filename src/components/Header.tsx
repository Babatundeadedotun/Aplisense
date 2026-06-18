import { motion } from "framer-motion";
import { Sun, Moon, Sparkles, Menu, X } from "lucide-react";
import { useState } from "react";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

export const Header = ({ theme, toggleTheme }: HeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/70 dark:bg-dark-bg/70 border-b border-gray-200 dark:border-dark-border"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-cyan to-accent-purple blur-lg opacity-50" />
              <div className="relative w-10 h-10 rounded-xl bg-gradient-to-br from-accent-cyan to-accent-purple flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
            </div>

            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-accent-cyan via-accent-purple to-accent-pink bg-clip-text text-transparent">
                ApliSense
              </span>
              <span className="text-[10px] text-gray-500 dark:text-gray-400 -mt-1">
                AI-POWERED ANALYSIS
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-gray-600 dark:text-gray-300">
            <a href="/" className="hover:text-accent-cyan transition">Home</a>
            <a href="/blog" className="hover:text-accent-cyan transition">Blog</a>
            <a href="/about" className="hover:text-accent-cyan transition">About</a>
            <a href="/contact" className="hover:text-accent-cyan transition">Contact</a>
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-3">

            {/* Theme Toggle */}
            <motion.button
              onClick={toggleTheme}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="p-2 rounded-xl bg-gray-100 dark:bg-dark-card border border-gray-200 dark:border-dark-border hover:border-accent-cyan/50 transition-colors"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-accent-purple" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden p-2 rounded-lg"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 dark:border-dark-border bg-white dark:bg-dark-bg">
          <div className="flex flex-col px-6 py-4 gap-4 text-sm font-medium">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      )}

    </motion.header>
  );
};