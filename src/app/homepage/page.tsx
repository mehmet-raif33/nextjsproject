'use client'
import {useState} from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Homepage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };
    
    return (
        <div className={`flex transition-all flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
            >
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage</h1>
            <p className="text-lg mb-8">This is the homepage of your Next.js project.</p>
            <section className={`p-6 rounded-lg shadow-md w-full max-w-2xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}>
                <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
                <p className="mb-2">Here you can find some basic information about the project.</p>
                <ul className="list-disc list-inside">
                    <li>Feature 1: Description of feature 1.</li>
                    <li>Feature 2: Description of feature 2.</li>
                    <li>Feature 3: Description of feature 3.</li>
                </ul>
            </section>
        </div>
    );
};

export default Homepage;