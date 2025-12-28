"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from 'next-themes';
import { GoHome, GoSun, GoMoon } from 'react-icons/go';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  // 👇 Get 'resolvedTheme' to know the ACTUAL look (System vs User)
  const { theme, setTheme, resolvedTheme } = useTheme(); 
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isActive = (path: string) => pathname === path;

  const toggleTheme = () => {
    // If resolvedTheme is dark, switch to light, otherwise dark
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-1 bg-white/80 dark:bg-gray-950/80 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-full px-2 py-2 shadow-xl transition-all duration-300">
        
        {/* Zone 1: Home Icon */}
        <Link 
          href="/" 
          className={`p-2 rounded-full transition-colors ${
            isActive('/') 
              ? 'bg-gray-200 dark:bg-white/10 text-black dark:text-white' 
              : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white'
          }`}
        >
          <GoHome size={20} />
        </Link>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-800 mx-1"></div>

        {/* Zone 2: Main Links */}
        <div className="flex items-center gap-1">
          <NavLink href="/about" label="About" isActive={isActive('/about')} />
          <NavLink href="/projects" label="Work" isActive={isActive('/projects')} />
          <NavLink href="/blog" label="Blog" isActive={isActive('/blog')} />
          <NavLink href="/gallery" label="Gallery" isActive={isActive('/gallery')} />
        </div>

        {/* Divider */}
        <div className="w-[1px] h-6 bg-gray-300 dark:bg-gray-800 mx-1"></div>

        {/* Zone 3: Theme Toggle */}
        <button 
          onClick={toggleTheme}
          className="p-2 text-gray-500 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
          aria-label="Toggle Dark Mode"
        >
          {mounted ? (
            // 👇 Check resolvedTheme instead of theme
            resolvedTheme === 'dark' ? <GoSun size={20} /> : <GoMoon size={20} />
          ) : (
            <GoSun size={20} />
          )}
        </button>

      </div>
    </nav>
  );
}

function NavLink({ href, label, isActive }: { href: string; label: string; isActive: boolean }) {
  return (
    <Link
      href={href}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        isActive 
          ? 'bg-gray-200 dark:bg-gray-800 text-black dark:text-white' 
          : 'text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
      }`}
    >
      {label}
    </Link>
  );
}