import PrimaryButton from "@/Components/PrimaryButton";
import NavBar from "@/Layouts/NavBarLayout";
import {
    TrashIcon,
    ShoppingCartIcon,
    PencilSquareIcon,
    UserCircleIcon,
} from "@heroicons/react/20/solid";
//   import { formatterPrice } from "../../utils/priceFormatter";
import { Link, Head } from '@inertiajs/react';

export default function Show({ publication = null }) {
    // const { addToCart } = useCart();    
    // const { auth } = useContext(AuthContext);
    // const [product, setProduct] = useState(null);

    return (
        <NavBar>
            <div className="bg-brown-50 h-screen">
                <div className="pt-6">
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-24">
                        <div className="lg:col-span-1">
                            {/* Image */}
                            <div className="aspect-h-5 aspect-w-4 sm:overflow-hidden sm:rounded-lg">
                                {/* <img
                  src=
                  alt={product.name}
                  className="h-full w-full object-cover object-center"
                /> */}
                                <img src="/images/cacao_dark.svg" alt="cacao" className="h-full w-full object-cover object-center" />
                            </div>
                        </div>

                        <div className="lg:col-span-1 lg:pl-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {/* {product.name} */}
                                    Producto
                                </h1>
                                <div className="mt-6 space-x-2">
                                    {/* <StatusProduct status={product.status} /> */}
                                    estado
                                    <span className="bg-indigo-100 text-sm p-1 rounded-lg">
                                        {/* {product.category.name} */}
                                        categoria name
                                    </span>
                                </div>
                                <div className="mt-6">
                                    <p className="text-3xl tracking-tight text-gray-900">
                                        {/* {formatterPrice.format(product.price)} precio formateado*/}
                                        1,000
                                    </p>
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Información del vendedor</h2>
                                    <Link
                                        // to={`/user/${product.user?.username}`} REDIRIGIR HACIA EL USUARIO
                                        to={`/`}
                                        className="flex text-xl text-gray-900"
                                    >
                                        <UserCircleIcon className="mr-5 w-7 flex-shrink-0" />
                                        {/* {`${product.user?.firstname} ${product.user?.lastname}`} */}
                                        USUARIO 1
                                    </Link>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Disponibilidad</h2>
                                    <p className="text-base text-gray-900">
                                        {/* {product.amount > 0
                      ? `${product.amount} unidades disponibles`
                      : `No disponible por ahora`} */}
                                        5 unidades disponibles
                                    </p>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Descripción</h2>
                                    <p className="text-base text-gray-900">
                                        {/* {product.description} */}
                                        hola soy la descripcion demasiada buena para ser verdad xd
                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-auto space-x-3">
                                <PrimaryButton
                                    type="button"
                                    className="mt-4 flex w-full items-center justify-center"
                                // onClick={() => addToCart(product)}                    
                                >
                                    <ShoppingCartIcon className="mr-5 w-7 flex-shrink-0" />
                                    Añadir al carrito
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavBar>
    );
}