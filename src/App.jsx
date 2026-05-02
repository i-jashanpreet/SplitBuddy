import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-lg max-w-md w-full text-center">
        <h1 className="text-3xl font-bold text-blue-600 mb-4">
          React + Tailwind
        </h1>
        <p className="text-gray-600 mb-6">
          Your basic React project with Tailwind CSS is ready to go!
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;
