import ThreeScene from './ThreeScene'

export default function Hero({ onNavigate }) {
  return (
    <section className="relative h-screen flex flex-col items-center justify-center">
      <div className="absolute inset-0 z-0">
        <ThreeScene />
      </div>
      <div className="z-10 text-center px-4">
        <h1 className="text-6xl font-bold mb-4">Sagar Giragani</h1>
        <h2 className="text-3xl mb-8">Azure Cloud & DevOps Engineer</h2>
        <div className="flex gap-4 justify-center">
          <button 
            onClick={() => onNavigate('about')}
            className="px-6 py-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition"
          >
            About Me
          </button>
          <button 
            onClick={() => onNavigate('resume')}
            className="px-6 py-3 bg-purple-600 rounded-lg hover:bg-purple-700 transition"
          >
            View Resume
          </button>
        </div>
      </div>
    </section>
  )
}
