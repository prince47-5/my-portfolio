import Navbar from '@/components/Navbar';
import MagicCard from '@/components/MagicCard';

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6">      
      <Navbar /> {/* Ensure your navbar is here */}

      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-2">Selected Work</h1>
        <p className="text-gray-400 mb-12">Projects I've built during my studies.</p>

        {/* The Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {/* Large Featured Project */}
          <MagicCard 
            size="large"
            title="Portfolio Website"
            description="You are looking at it! Built with Next.js 14, TypeScript, and Tailwind. It features a custom floating navbar, bento grid layout, and performance optimizations."
            tags={['Next.js', 'React', 'Tailwind', 'Vercel']}
          />

          {/* Standard Project */}
          <MagicCard 
            title="Python Scraper"
            description="Automated bot using Selenium to track real estate prices and alert me via SMS."
            tags={['Python', 'Selenium', 'Automation']}
          />

          {/* Standard Project */}
          <MagicCard 
            title="Java Chess Engine"
            description="A chess game logic engine with a Swing GUI. Implements Minimax algorithm for AI."
            tags={['Java', 'OOP', 'Algorithms']}
          />

          {/* Large Project */}
          <MagicCard 
            size="large"
            title="Task Manager API"
            description="A RESTful API built with Node.js and Express. Handles user authentication (JWT), CRUD operations, and MongoDB integration."
            tags={['Node.js', 'Express', 'MongoDB', 'JWT']}
          />

        </div>
      </div>
    </main>
  );
}