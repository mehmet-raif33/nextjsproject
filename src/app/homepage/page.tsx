'use client'
import {useState , useEffect} from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import Link from 'next/link';
import ListComponent from '@/components/ListComponent';
import { useSelector , useDispatch } from 'react-redux';
import { RootState } from '@/redux/store';

const Homepage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const dispatch = useDispatch();
    const userName = useSelector((state:RootState) => state.userInfo.user);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const [isMounted, setIsMounted] = useState(false);
    
    return (
        <div className={`flex transition-all flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'}`}>
            <Link href="/" className='bg-sky-400 transition-all hover:scale-105 text-white rounded-md p-3'>
            Go back
            </Link>
            
            <button
                onClick={toggleDarkMode}
                className="absolute top-4 right-4 p-2 bg-blue-500 text-white rounded"
            >
                {darkMode ? <FaSun /> : <FaMoon />}
            </button>
            <h1 className="text-4xl font-bold mb-4">Welcome to the Homepage {userName}</h1>
            <p className="text-lg mb-8">This is the homepage of your Next.js project.</p>
            <ListComponent darkMode={darkMode} isMounted={isMounted}/>
        </div>
    );
};

export default Homepage;