import Link from 'next/link';
import React from 'react';
import 'tailwindcss/tailwind.css';

function TheHeader(props) {
    return (
        <header className="bg-slate-900 py-4 flex justify-center items-center">
            <Link href="/" className="link mr-4 text-white">Home</Link>
            <Link href="/blog" className="link mr-4 text-white">Blog</Link>
            <Link href="/about" className="link mr-4 text-white">About</Link>
        </header>

    );
}

export default TheHeader;