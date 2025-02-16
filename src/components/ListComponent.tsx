import { motion } from 'framer-motion';
import { useEffect } from 'react';

interface ListComponentProps {
    darkMode: boolean;
    isMounted: boolean;
}

const ListComponent = (props:ListComponentProps) => {

    useEffect(() => {
        console.log("List component mounted");
    }, [props.isMounted]);

    const list = {
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1,
            },
        },
        hidden: {
            opacity: 0,
            transition: {
                when: "afterChildren",
            },
        },
    }

    const items = {
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 20 },
    }

    return (
        <section className={`p-6 rounded-lg shadow-md w-full max-w-2xl ${props.darkMode ? 'bg-gray-800' : 'bg-white'}`}>
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
            <p className="mb-2">Here you can find some basic information about the project.</p>
            <motion.ul initial='hidden' animate={props.isMounted ? "visible" : "hidden"} variants={list} className="list-disc list-inside">
                <motion.li variants={items}>Feature 1: Description of feature 1.</motion.li>
                <motion.li variants={items}>Feature 2: Description of feature 2.</motion.li>
                <motion.li variants={items}>Feature 3: Description of feature 3.</motion.li>
            </motion.ul>
        </section>
    );
    }
export default ListComponent;