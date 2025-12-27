export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24 bg-gray-900 text-white">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-blue-500 mb-4">
          Hello, I'm [Your Name]
        </h1>
        <p className="text-xl text-gray-300">
          Computer Science Student | Full Stack Developer
        </p>
        
        <div className="mt-8 flex gap-4 justify-center">
          <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition">
            View My Projects
          </button>
          <button className="border border-white hover:bg-white hover:text-black px-6 py-3 rounded-lg font-semibold transition">
            Contact Me
          </button>
        </div>
      </div>
    </main>
  );
}