import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';


function CreditCardForm() {
    const { data, setData, post, processing, errors, reset } = useForm({
        holderName: '',
        number: '',
        expirationDate: '',
        cvcCode: ''
    });
  const submit = (e) => {
    e.preventDefault();
    post(route('cards.store'));
  };

  return (
    <section className="flex min-h-full flex-1 flex-col justify-center">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={submit} className="space-y-6">
          <div className="space-y-12">
            <div>
              <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div className="col-span-full">
                  <label
                    htmlFor="number"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Número de la tarjeta
                  </label>
                  <div className="mt-2">
                    <input
                      id="number"
                      type="text"
                      placeholder="0000 0000 0000 0000"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={data.number}
                      onChange={(e) => setData('number', e.target.value)}
                    />
                  </div>
                </div>

                <div className="sm:col-span-3 sm:col-start-1">
                  <label
                    htmlFor="expirationDate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Fecha de expiración
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="expirationDate"
                      placeholder="MM/YY"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={data.expirationDate}
                      onChange={(e) => setData('expirationDate', e.target.value)}
                    />
                    {errors.expirationDate && (
                      <p className="mt-2 text-xs text-red-500">
                        {errors.expirationDate.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label
                    htmlFor="cvcCode"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    CVC
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      id="cvcCode"
                      placeholder="000"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={data.cvcCode}
                      onChange={(e) => setData('cvcCode', e.target.value)}
                    />
                  </div>
                </div>

                <div className="col-span-full">
                  <label
                    htmlFor="holderName"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Nombre del titular
                  </label>
                  <div className="mt-2">
                    <input
                      id="holderName"
                      type="text"
                      placeholder="Como aparece en la tarjeta"
                      className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={data.holderName}
                      onChange={(e) => setData('holderName', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div>
              <PrimaryButton className="w-full justify-center">
                Aceptar
              </PrimaryButton>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}

export default CreditCardForm;