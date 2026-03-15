import { Link } from "react-router-dom";

const App = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center gap-8 text-white">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-bounce">
        Select Profile
      </h1>

      <div className="flex flex-col md:flex-row gap-6">
        {/* IT Support Profile */}
        <Link to="/it">
          <button className="w-64 py-4 bg-blue-900 border border-blue-500 rounded-xl hover:bg-blue-700 hover:scale-105 transition duration-300 text-xl font-semibold shadow-[0_0_20px_rgba(59,130,246,0.5)]">
            IT Support
          </button>
        </Link>

        {/* Developer Profile */}
        <Link to="/dev">
          <button className="w-64 py-4 bg-red-900 border border-red-500 rounded-xl hover:bg-red-700 hover:scale-105 transition duration-300 text-xl font-semibold shadow-[0_0_20px_rgba(255,255,255,0.2)]">
            Developer
          </button>
        </Link>
      </div>
    </div>
  );
};

export default App;
