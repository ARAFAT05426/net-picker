import { useState, useEffect } from 'react';
import { IoArrowUp } from 'react-icons/io5';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;

            // Show the button only when scroll progress is more than 50%
            if (progress > 25) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    return (
        <button
            onClick={scrollToTop}
            className={`relative p-2.5 bg-primary rounded-sm text-white ${isVisible ? "opacity-100" : "opacity-0"} transition-all duration-300 z-20`}
            aria-label="Scroll to top"
        >
            <IoArrowUp className="text-2xl relative z-10" />
        </button>
    );
};

export default ScrollToTop;
