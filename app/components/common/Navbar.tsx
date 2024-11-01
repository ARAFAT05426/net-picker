"use client";

import Link from 'next/link';
import Image from 'next/image';
import ActionBtn from '../btns/Action_Btn';
import { usePathname } from 'next/navigation';
import { nav_links } from '@/app/arr/nav_links';
import React, { useEffect, useState } from 'react';

export default function Navbar() {
    const pathname = usePathname();
    const [isScrolled, setIsScrolled] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 75) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-primary-bg/50' : 'bg-primary-bg/5'} backdrop-blur-xl`}>
            <nav className='container flex items-center justify-between py-3.5 rounded-md'>
                <Link href={'/'}>
                    <Image src={'/201864594-removebg-preview (1) (1).png'} alt='logo' height={100} width={225} />
                </Link>
                <div className='flex items-center gap-3.5'>
                    {nav_links?.map((nav_link, i) => (
                        <Link
                            key={i}
                            href={nav_link.link}
                            className={`text-lg ${pathname === nav_link.link
                                ? "font-semibold text-primary"
                                : "font-medium"
                                }`}
                        >
                            {nav_link.title}
                        </Link>
                    ))}
                </div>
                <ActionBtn>
                    Login
                </ActionBtn>
            </nav>
        </div>
    );
}
