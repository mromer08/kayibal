import { useState } from "react";
import Publication from "@/Components/Publication";
import NavBar from "@/Layouts/NavBarLayout";
import { Head } from "@inertiajs/react";

export default function Index({ publications, searchTerm}) {
    // const { auth } = usePage().props;
    return (
        <NavBar searchTerm={searchTerm}>
            <Head title="Home" />
            <div>
                <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <h2 className="sr-only">Publicaciones</h2>

                    <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                        {publications.length === 0 && (<p>No hay publicationos para mostrar</p>)}
                        {publications.map((publication) => (
                            <Publication
                                key={publication.id}
                                publication={publication}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </NavBar>
    );
}