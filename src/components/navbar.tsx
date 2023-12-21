'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation'

const NavigationBar = () => {
    const pathname = usePathname()

    return (
        <nav className="bg-white border-gray-200 dark:bg-black">
            <div className="flex flex-row justify-between items-center p-4">
                <div className="flex flex-row items-center">
                    <Link href="/" className="text-2xl font-bold">
                        Next.js
                    </Link>
                </div>
                <div className="flex flex-row items-center">
                <ul className="flex p-4">
                    <li className="mr-6">
                        <Link href="/" className="w-22 btn btn-blue">
                            Home
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/ping"  className="w-22 btn btn-blue">
                            Ping
                        </Link>
                    </li>
                    <li className="mr-6">
                        <Link href="/parrot"  className="w-22 btn btn-blue">
                            Parrot
                        </Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;
