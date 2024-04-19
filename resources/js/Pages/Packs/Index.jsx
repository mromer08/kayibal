import { useState } from "react";
import NavBar from "@/Layouts/NavBarLayout";
import { Head } from "@inertiajs/react";
import Pack from "@/Components/Pack";

export default function Index({ packs = [
    {
        id: 1,
        title: 'Barra de chocolate',
        cocoa: 50,
        price: 100,
        image: '/images/kayibal_logo.png'
    },
    {
        id: 2,
        title: 'Tableta de chocolate',
        cocoa: 250,
        price: 500,
        image: '/images/kayibal_logo.png'
    },
    {
        id: 3,
        title: 'Bolsa de chocolates',
        cocoa: 500,
        price: 1000,
        image: '/images/kayibal_logo.png'
    },
    {
        id: 4,
        title: 'Caja de chocolates',
        cocoa: 2500,
        price: 5000,
        image: '/images/kayibal_logo.png'
    },
], searchTerm}) {
    // const { auth } = usePage().props;
    console.log(searchTerm);
    return (
        <NavBar searchTerm={searchTerm}>
            <Head title="Paquetes" />
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Publicaciones</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {packs.length === 0 && (<p>No hay publicationos para mostrar</p>)}
                        {packs.map((publication) => (
                            <Pack
                                key={publication.id}
                                pack={publication}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </NavBar>
    );
}