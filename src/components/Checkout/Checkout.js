import React from 'react';
import { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Checkout = () => {
  const details = useLoaderData();
  const { about, id, img, price, languageName, keyFeatures } = details;
  const { user } = useContext(AuthContext);
  return (
    <>
      <div className="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
        <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
          <div className="flex flex-col mb-0 sm:text-center sm:mb-0">

            <div className="max-w-xl mb-4 md:mx-auto sm:text-center lg:max-w-2xl md:mb-2">
              <h2 className="max-w-lg mb-0 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                <span className="relative inline-block">
                  <svg
                    viewBox="0 0 52 24"
                    fill="currentColor"
                    className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
                  >
                    <defs>
                      <pattern
                        id="e77df901-b9d7-4b9b-822e-16b2d410795b"
                        x="0"
                        y="0"
                        width=".135"
                        height=".30"
                      >
                        <circle cx="1" cy="1" r=".7" />
                      </pattern>
                    </defs>
                    <rect
                      fill="url(#e77df901-b9d7-4b9b-822e-16b2d410795b)"
                      width="52"
                      height="24"
                    />
                  </svg>
                  <span className="relative">Checkout</span>
                </span>
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* checkout data */}
      <section>
        {/* <h1 className="sr-only">Checkout</h1> */}
        <div className="relative mx-auto max-w-screen-2xl">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="bg-gray-50 py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <div className="flex items-center">
                  <span className="h-10 w-10 rounded-full bg-blue-900" />
                  <h2 className="ml-4 font-medium uppercase">Courses</h2>
                </div>
                <div className="mt-8">
                  <p className="text-2xl font-medium tracking-tight">${price}</p>
                  <p className="mt-1 text-sm text-gray-500">For the purchase of</p>
                </div>
                <div className="mt-12">
                  <div className="flow-root">
                    <ul className="-my-4 divide-y divide-gray-200">
                      <li className="flex items-center justify-between py-4">
                        <div className="flex items-center">
                          <img alt="course" src={img} className="h-16 w-16 flex-shrink-0 rounded-lg object-cover" />
                          <div className="ml-4">
                            <p className="text-sm font-medium">{languageName}</p>
                            {/* <dl className="mt-1 space-y-1 text-xs text-gray-500">
                              <div>
                                <dt className="inline">Color:</dt>
                                <dd className="inline">Blue</dd>
                              </div>
                              <div>
                                <dt className="inline">Size:</dt>
                                <dd className="inline">UK 10</dd>
                              </div>
                            </dl> */}
                          </div>
                        </div>
                        <div>
                          <p className="text-sm">
                            ${price}.00
                            <small className="text-gray-500">x1</small>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white py-12 md:py-24">
              <div className="mx-auto max-w-lg px-4 lg:px-8">
                <form className="grid grid-cols-6 gap-4">
                  <div className="col-span-6">
                    <label className="mb-1 block text-sm text-gray-600" htmlFor="name">
                      Name
                    </label>
                    <input className="w-full rounded-lg border-gray-200 p-2.5 text-sm font-semibold shadow-sm" type="text" id="name" readOnly value={user.displayName} />
                  </div>
                  <fieldset className="col-span-6">
                    <legend className="mb-1 block text-sm text-gray-600">
                      Card Details
                    </legend>
                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                      <div>
                        <label className="sr-only" htmlFor="card-number">Card Number</label>
                        <input className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10" type="text" name="card-number" id="card-number" placeholder="Card number" />
                      </div>
                      <div className="flex -space-x-px">
                        <div className="flex-1">
                          <label className="sr-only" htmlFor="card-expiration-date">
                            Expiration Date
                          </label>
                          <input className="relative w-full rounded-bl-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10" type="text" name="card-expiration-date" id="card-expiration-date" placeholder="MM / YY" />
                        </div>
                        <div className="flex-1">
                          <label className="sr-only" htmlFor="card-cvc">CVC</label>
                          <input className="relative w-full rounded-br-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10" type="text" name="card-cvc" id="card-cvc" placeholder="CVC" />
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <fieldset className="col-span-6">
                    <legend className="mb-1 block text-sm text-gray-600">
                      Billing Address
                    </legend>
                    <div className="-space-y-px rounded-lg bg-white shadow-sm">
                      <div>
                        <label className="sr-only" htmlFor="country">Country</label>
                        <select className="relative w-full rounded-t-lg border-gray-200 p-2.5 text-sm focus:z-10" id="country" name="country" autoComplete="country-name">
                          <option>England</option>
                          <option>Wales</option>
                          <option>Scotland</option>
                          <option>France</option>
                          <option>Belgium</option>
                          <option>Japan</option>
                        </select>
                      </div>
                      <div>
                        <label className="sr-only" htmlFor="postal-code">
                          ZIP/Post Code
                        </label>
                        <input className="relative w-full rounded-b-lg border-gray-200 p-2.5 text-sm placeholder-gray-400 focus:z-10" type="text" name="postal-code" id="postal-code" autoComplete="postal-code" placeholder="ZIP/Post Code" />
                      </div>
                    </div>
                  </fieldset>
                  <div className="col-span-6">
                    <button className="block w-full rounded-lg bg-black p-2.5 text-sm text-white" type="submit">
                      Pay Now
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Checkout;