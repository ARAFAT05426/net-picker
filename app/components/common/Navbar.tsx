"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { CiHeart, CiMenuFries, CiShoppingBasket, CiUser } from 'react-icons/ci';
import { IoClose } from 'react-icons/io5';
import { nav_links } from '@/app/arr/nav_links';

function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            setIsVisible(currentScrollY <= 100 || currentScrollY < lastScrollY);
            setLastScrollY(currentScrollY);
            setIsScrolled(currentScrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <>
            <LargeNavbar pathname={pathname} isVisible={isVisible} isScrolled={isScrolled} />
            <SmallNavbar
                isVisible={isVisible}
                isScrolled={isScrolled}
                isMenuOpen={isMenuOpen}
                onClose={closeMenu}
                pathname={pathname}
                onMenuToggle={toggleMenu}
            />
            {isMenuOpen && <Overlay onClick={closeMenu} />}
        </>
    );
};

interface LargeNavbarProps {
    pathname: string;
    isVisible: boolean;
    isScrolled: boolean;
}

function LargeNavbar({ pathname, isVisible, isScrolled }: LargeNavbarProps) {
    return (
        <div className={`hidden lg:block fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out ${isVisible ? (isScrolled ? 'bg-primary-bg/80 backdrop-blur-xl' : 'bg-transparent') : '-translate-y-full'}`}>
            <nav className="container flex items-center justify-between py-2.5 px-3.5">
                <Link href="/">
                    <Image className='scale-75 lg:scale-100' src="/201864594-removebg-preview (1) (1).png" alt="logo" height={100} width={225} />
                </Link>
                <div className="hidden lg:flex items-center gap-3.5">
                    {nav_links.map((nav_link, i) => (
                        <Link key={i} href={nav_link.link} className={`text-lg ${pathname === nav_link.link ? 'font-bold text-primary' : 'font-semibold'}`}>
                            {nav_link.title}
                        </Link>
                    ))}
                </div>
                <div className='flex items-center gap-1.5'>
                    <Link href={'/login'}>
                        <CiUser size={25} />
                    </Link>
                    <CiHeart size={27} />
                    <CiShoppingBasket size={27} />
                </div>
            </nav>
        </div>
    );
};

interface SmallNavbarProps {
    isVisible: boolean;
    isScrolled: boolean;
    isMenuOpen: boolean;
    onClose: () => void;
    pathname: string;
    onMenuToggle: () => void;
}

function SmallNavbar({ isVisible, isScrolled, isMenuOpen, onClose, pathname, onMenuToggle }: SmallNavbarProps) {
    return (
        <>
            <nav className={`fixed top-0 inset-x-0 flex items-center justify-between px-3.5 py-2.5 z-40 transition-all duration-300 lg:hidden ${isVisible ? (isScrolled ? 'bg-primary-bg/80 backdrop-blur-xl' : 'bg-transparent') : '-translate-y-full'}`}>
                <button onClick={onMenuToggle}>
                    <CiMenuFries size={28} />
                </button>
                <Image className='mt-2.5' src="/201864594-removebg-preview (1) (1).png" alt="logo" height={100} width={200} />
                <div className='flex items-center gap-1.5'>
                    <Link href={'/login'}>
                        <CiUser size={25} />
                    </Link>
                    <CiHeart size={27} />
                    <CiShoppingBasket size={27} />
                </div>
            </nav>
            <div className={`fixed inset-y-0 left-0 h-screen w-3/5 bg-primary-bg z-50 px-10 py-5 transition-all duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}>
                <button className="absolute top-3 right-3" onClick={onClose}>
                    <IoClose size={25} />
                </button>
                <Image className='mt-2.5' src="/201864594-removebg-preview (1) (1).png" alt="logo" height={100} width={200} />
                <div className="mt-5 flex flex-col gap-2.5">
                    {nav_links.map((nav_link, i) => (
                        <Link key={i} href={nav_link.link} className={`text-lg ${pathname === nav_link.link ? 'font-bold text-primary' : 'font-semibold'}`} onClick={onClose}>
                            {nav_link.title}
                        </Link>
                    ))}
                </div>
            </div>
        </>
    );
};

interface OverlayProps {
    onClick: () => void;
}

function Overlay({ onClick }: OverlayProps) {
    return (<div className="fixed inset-0 bg-black/25 backdrop-blur-xl z-[45]" onClick={onClick} />
    )
};

export default Navbar;
