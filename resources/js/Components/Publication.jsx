// import Statuspublication from "./Statuspublication";
// import { BASE_URL } from "../api/axios";
// import { formatterPrice } from "../../utils/priceFormatter";
import { Link, useForm, usePage } from '@inertiajs/react';
// import { useCart } from "../hooks/useCart";
// import { ROLES } from "../App";

import {
  TrashIcon,
  ShoppingCartIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
  MinusCircleIcon,
} from "@heroicons/react/20/solid";
import PrimaryButton from './PrimaryButton';
export default function Publication({ publication = null, deletepublication, setEdit, updatepublication }) {
    const { auth } = usePage().props;
//   const { addToCart } = useCart();

  return (
    <div className="group bg-brown-100 p-3 rounded-xl flex flex-col">
      <Link href={`/publications/${publication.id}`} >
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
          <img
            src={publication.image}
            alt={publication.title}
            className="h-full w-full object-cover object-center group-hover:opacity-75"
          />
        </div>
        <h3 className="mt-4 text-sm text-gray-700">{publication.title}</h3>
        {/* <Statuspublication status={(ispublicationOwner || isDeliveryMan) ? publication.status : false} /> */}
      </Link>
      <div className="flex justify-between mt-auto">
        <div className="text-lg font-medium text-gray-900">
          {/* {formatterPrice.format(publication.price)} */}
          {publication.price}
        </div>

        <PrimaryButton
            // onClick={() => addToCart(publication)}
            className="items-center justify-center"
          >
            <ShoppingCartIcon className="w-6 flex-shrink-0" />
          </PrimaryButton>
      </div>
    </div>
  );
}