import { Link } from '@inertiajs/react';

export default function NavLink({ active = false, className = '', children, ...props }) {
    return (
        <Link
            {...props}
            className={
                'inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 transition duration-150 ease-in-out focus:outline-none ' +
                (active
                    ? 'border-brown-500 text-white focus:border-brown-700 '
                    : 'border-transparent text-white hover:text-brown-700 hover:border-gray-300 focus:text-gray-700 focus:border-brown-500 ') +
                className
            }
        >
            {children}
        </Link>
    );
}
