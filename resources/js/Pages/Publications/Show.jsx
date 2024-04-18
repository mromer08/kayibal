import CocoaDarkIcon from "@/Components/CocoaDarkIcon";
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
    console.log(publication);

    return (
        <NavBar>
            <Head title={publication.title.substring(0,10)} />
            <div className="bg-brown-50">
                <div className="pt-20">
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pb-24">
                        <div className="lg:col-span-1">
                            {/* Image */}
                            <div className="aspect-h-5 aspect-w-4 sm:overflow-hidden sm:rounded-lg">
                                <img
                                    src={publication.image}
                                    alt={publication.title}
                                    className="h-3/4 w-3/4 object-cover object-center"
                                />
                            </div>
                        </div>

                        <div className="lg:col-span-1 lg:pl-8 flex flex-col justify-between">
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
                                    {publication.title}
                                </h1>
                                <div className="mt-6 space-x-2">
                                    {/* <StatusProduct status={publication.status} /> */}
                                    {publication.state}
                                    <span className="bg-indigo-100 text-sm p-1 rounded-lg">
                                        {publication.category}
                                    </span>
                                </div>

                                {/* Description */}
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Información del vendedor</h2>
                                    <Link
                                        // to={`/user/${publication.user?.username}`} REDIRIGIR HACIA EL USUARIO
                                        to={`/`}
                                        className="flex text-xl text-gray-900"
                                    >
                                        <UserCircleIcon className="mr-5 w-7 flex-shrink-0" />

                                        {publication.user.name}
                                    </Link>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Disponibilidad</h2>
                                    <p className="text-base text-gray-900">
                                        {publication.stock > 0
                                            ? `${publication.stock} unidades disponibles`
                                            : `No disponible por ahora`}

                                    </p>
                                </div>
                                <div className="mt-6">
                                    <h2 className="text-xl font-bold">Descripción</h2>
                                    <p className="text-base text-gray-900">
                                        {publication.description}

                                    </p>
                                </div>
                            </div>

                            <div className="flex mt-auto space-x-3">
                                <PrimaryButton
                                    type="button"
                                    className="mt-4 flex w-full items-center justify-center"
                                // onClick={() => addToCart(product)}                    
                                >
                                                              <CocoaDarkIcon className="text-white h-11 w-11 mr-2" />
                                        <span className="text-3xl">
                                        {Number(publication.price).toLocaleString('en-US')}
                                        </span>
                                </PrimaryButton>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </NavBar>
    );
}