// import Statuspublication from "./Statuspublication";
// import { BASE_URL } from "../api/axios";
// import { formatterPrice } from "../../utils/priceFormatter";
import { Link, useForm, usePage } from '@inertiajs/react';
// import { useCart } from "../hooks/useCart";
// import { ROLES } from "../App";

import {
  TrashIcon,
  PencilSquareIcon,
  CheckCircleIcon,
  XCircleIcon,
  MinusCircleIcon,
  EyeIcon,
} from "@heroicons/react/20/solid";
import CocoaDarkIcon from './CocoaDarkIcon';
import StateLabel from './StateLabel';
import ColorLabel from './ColorLabel';
export default function Publication({ publication = null, deletepublication, setEdit, updatepublication }) {
  const { auth } = usePage().props;
  const isAuthor = auth?.user?.id === publication.user_id;
  const isAdmin = auth?.user?.role === 0;

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
        <StateLabel state={(isAuthor || isAdmin) ? publication.state : false} />
        <ColorLabel color={publication.type === 'buscando' ? 'bg-pink-400' : 'bg-indigo-400'}>
          {publication.type}
        </ColorLabel>
        <ColorLabel color={publication.category === 'servicio' ? 'bg-orange-400' : 'bg-violet-400'}>
          {publication.category}
        </ColorLabel>
      </Link>
      <div className="flex justify-between mt-auto pt-2">
        <div className="flex items-center text-lg font-medium text-gray-900">
          <CocoaDarkIcon className="text-white h-6 w-6 mr-2" />
          {Number(publication.price).toLocaleString('en-US')}
        </div>

        <Link
          href={`/publications/${publication.id}`}
          className='inline-flex items-center px-4 py-2 bg-brown-500 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-brown-700 focus:bg-brown-700 active:bg-brown-900 focus:outline-none focus:ring-2 focus:ring-brown-500 focus:ring-offset-2 transition ease-in-out duration-150'
        >
          <EyeIcon className="w-6 flex-shrink-0" />
        </Link>
      </div>
    </div>
  );
}