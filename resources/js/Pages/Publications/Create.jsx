import PrimaryButton from "@/Components/PrimaryButton";
import TextInput from "@/Components/TextInput";
import NavBar from "@/Layouts/NavBarLayout";
import { PhotoIcon } from "@heroicons/react/24/solid";
import { Head, Link, useForm, usePage } from '@inertiajs/react';

function Create() {
    const { tags } = usePage().props;
    const { data, setData, post, processing, errors, reset } = useForm({
        title: '',
        description: '',
        category: 'producto',
        tag_id: tags[0].id,
        type: 'ofreciendo',
        price: 0,
        stock: 1,
        image: ''
    });


    const submit = (e) => {
        e.preventDefault();
        console.log(data);
        post(route('publications.store'));
    };
    return (
        <NavBar>
            <Head title="Publicacion" />
            <section className="flex  flex-1 flex-col justify-center px-6 py-10 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    {/* <form onSubmit={handleSubmit(onSubmit)} className="space-y-6"> */}
                    <form onSubmit={submit}>
                        <div className="space-y-12">
                            <div>
                                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                        {/* {edit._id ? "Editar" : "Nuevo"} producto */}
                                        Nueva Publicacion
                                    </h2>
                                </div>

                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="name"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Titulo
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="title"
                                                type="text"
                                                name="title"
                                                value={data.title}
                                                // isFocused={true}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('title', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label
                                            htmlFor="desciption"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Descripción
                                        </label>
                                        <div className="mt-2">
                                            <textarea
                                                id="desciption"
                                                name="desciption"
                                                rows={3}
                                                value={data.description}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('description', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Tipo
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="type"
                                                name="type"
                                                value={data.type}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('type', e.target.value)}
                                            >
                                                <option value="ofreciendo">ofreciendo</option>
                                                <option value="buscando">buscando</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Categoria
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="category"
                                                name="category"
                                                value={data.category}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('category', e.target.value)}
                                            >
                                                <option value="producto">producto</option>
                                                <option value="servicio">servicio</option>
                                                <option value="voluntariado">voluntariado</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3 sm:col-start-1">
                                        <label
                                            htmlFor="price"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Precio
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                id="price"
                                                name="price"
                                                value={data.price}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('price', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label
                                            htmlFor="stock"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Cantidad
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="number"
                                                id="stock"
                                                name="stock"
                                                value={data.stock}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('stock', e.target.value)}
                                            />
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label
                                            htmlFor="tag"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Etiqueta
                                        </label>
                                        <div className="mt-2">


                                            <select
                                                id="tag"
                                                type="text"
                                                value={data.tag_id}
                                                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                                onChange={(e) => setData('tag_id', e.target.value)}
                                            >
                                                {tags.map(tag => (
                                                    <option key={tag.id} value={tag.id}>{tag.name}</option>
                                                ))}
                                            </select>


                                        </div>
                                    </div>
                                    <div className="col-span-full">
                                        <label
                                            htmlFor="cover-photo"
                                            className="block text-sm font-medium leading-6 text-gray-900"
                                        >
                                            Imágen
                                        </label>
                                        <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
                                            <div className="text-center">
                                                <PhotoIcon
                                                    className="mx-auto h-12 w-12 text-gray-300"
                                                    aria-hidden="true"
                                                />
                                                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                                                    <label
                                                        htmlFor="image"
                                                        className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                                                    >
                                                        <input
                                                            id="image"
                                                            type="file"
                                                            // value={data.image}
                                                            onChange={(e) => setData('image', e.target.files[0])}
                                                        />
                                                    </label>
                                                </div>
                                                <p className="text-xs leading-5 text-gray-600">
                                                    PNG, JPG, GIF hasta 1MB
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div>
                                <PrimaryButton className="flex w-full justify-center" disabled={processing}>
                                    {/* {edit._id ? "Editar" : "Crear"} producto */}
                                    Crear producto
                                </PrimaryButton>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </NavBar>
    );
}

export default Create;