import ApplicationLogo from '@/Components/ApplicationLogo';
import Dropdown from '@/Components/Dropdown';
import NavLink from '@/Components/NavLink';
import { Link, router, useForm, usePage } from '@inertiajs/react';
import {
    PlusCircleIcon,
    UserIcon,
    MagnifyingGlassIcon,
    Squares2X2Icon
} from "@heroicons/react/24/solid";
import CocoaLightIcon from '@/Components/CocoaLightIcon';
import TextInput from '@/Components/TextInput';

export default function NavBar({ header, children, searchTerm = '' }) {
    const { auth, tags } = usePage().props;
    const { data, setData, get, reset} = useForm({
        search: searchTerm
    })


    const submit = (e) => {
        e.preventDefault();
        get(route('search'));
    };
    return (
        <div className="min-h-screen bg-brown-50">
            {/* Barra de navegación superior */}
            <nav className="bg-brown-900">
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center h-12">
                    {/* Sección izquierda */}
                    <div className="flex items-center">
                        <Link href="/" className="flex items-center text-white">
                            <ApplicationLogo className="block h-10 w-auto fill-current text-white" />
                            <h1 className="ml-2 text-white font-bold text-3xl">K'AYIB'AL</h1>
                        </Link>

                        {/* Dropdown de Publicaciones */}
                        <div className="hidden sm:block">
                            <Dropdown>
                                <Dropdown.Trigger>
                                    <button
                                        type="button"
                                        className="ml-4 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-transparent hover:bg-brown-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <Squares2X2Icon className="text-white h-6 w-6 mr-2" />
                                        Categorias
                                    </button>
                                </Dropdown.Trigger>

                                <Dropdown.Content>
                                    {tags.map(tag => (
                                        <Dropdown.Link key={tag.id} href="#">{tag.name}</Dropdown.Link>
                                    ))}
                                </Dropdown.Content>
                            </Dropdown>
                        </div>
                    </div>

                    {/* Barra de búsqueda */}
                    <form className="flex justify-center items-center" onSubmit={submit}>
                        <TextInput
                            type="text"
                            name="search"
                            value={data.search}
                            placeholder="Buscar..."
                            className="w-96 py-1 rounded-md text-white border border-gray-300 text-sm focus:outline-none focus:border-brown-500"
                            onChange={(e) => setData('search', e.target.value)}
                            
                        />
                        
                        <button type='submit'>
                        <MagnifyingGlassIcon className="text-white h-6 w-6 ml-2 m-1 rounded-md hover:bg-brown-500" />

                        </button>
                        

                    </form>

                    {/* Sección derecha */}
                    <div className="flex items-center">
                        {/* Usuario */}
                        <Dropdown>
                            <Dropdown.Trigger>
                                <span className="inline-flex rounded-md">
                                    <button
                                        type="button"
                                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-transparent hover:bg-brown-700 focus:outline-none transition ease-in-out duration-150"
                                    >
                                        <UserIcon className="text-white h-6 w-6 mr-2" />
                                        Mi cuenta

                                    </button>
                                </span>
                            </Dropdown.Trigger>

                            {auth.user ? (
                                <Dropdown.Content>
                                    <div className="font-bold border-b border-gray-300 block w-full px-4 py-2 text-start text-sm leading-5 text-gray-700 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 transition duration-150 ease-in-out">{auth.user.name}</div> {/* Estilo para el nombre del usuario */}
                                    <Dropdown.Link href={route('profile.edit')}>Profile</Dropdown.Link>
                                    <Dropdown.Link href={route('logout')} method="post" as="button">
                                        Log Out
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            ) : (
                                <Dropdown.Content>
                                    <Dropdown.Link href={route('login')} as="button">
                                        Iniciar Sesion
                                    </Dropdown.Link>
                                    <Dropdown.Link href={route('register')} as="button">
                                        Registrarse
                                    </Dropdown.Link>
                                </Dropdown.Content>
                            )}
                        </Dropdown>

                        {/* Ícono de Carro */}
                        <Link href={route('publications.create')} title='Crear Publicacion'
                        className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-transparent hover:bg-brown-700 focus:outline-none transition ease-in-out duration-150"
                        >
                        <PlusCircleIcon className="text-white h-6 w-6 mr-2" />
                        Crear
                        </Link>
                    </div>
                </div>
            </nav>

            {/* Barra de navegación inferior */}
            <nav className="bg-brown-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-10">
                    {/* Enlaces de navegación */}
                    <div className="hidden sm:block space-x-4 text-white">
                        <NavLink href="#">Tendencias</NavLink>
                        <NavLink href="#">Acerca de</NavLink>
                        <NavLink href="#">Soporte</NavLink>
                    </div>

                    {/* Ícono de Grano y número de granos */}
                    <Link 
                    className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-transparent hover:bg-brown-700 focus:outline-none transition ease-in-out duration-150"
                    href={route('packs')}
                    >
                        <CocoaLightIcon className="text-white h-6 w-6 mr-2" />
                        <span className="ml-1 text-white">{auth?.user ? (Number(auth.wallet.nonRetirableBalance) + Number(auth.wallet.retirableBalance)).toLocaleString('en-US') : 'Compra'}</span>
                    </Link>
                </div>
            </nav>


            {/* Contenido de la página */}
            {header && (
                <header className="bg-white shadow">
                    <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">{header}</div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
