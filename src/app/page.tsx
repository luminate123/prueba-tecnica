"use client"
import React, { useEffect, useState } from 'react';
import { ChevronDownIcon, ArrowsRightLeftIcon, ChatBubbleBottomCenterTextIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import { ArrowRight, DollarSign, Users, PiggyBank, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { ArrowUp, Facebook, Youtube, Instagram, Star } from "lucide-react"


export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };
  const [offset, setOffset] = useState(0)

  const logos = [
    "/iabMIXX.png",
    "/ADEX.png",
    "/MINISTERIO2.jpg",
    "/STARTUP.png",
    "/VISA.png",
    "/ASEP.png",
  ]
  return (
    <div className='font-poppins text-shadow ' >
      <div className="bg-[url('/banner-mobile.png')] min-[480px]:bg-[url('/banner-person.webp')] bg-no-repeat bg-cover bg-center h-auto min-[1281px]:h-[682px] image-container">
        <div className='relative flex-col justify-items-center'>
          {/* Header */}

          <div className="w-full left-0 top-0 h-10 hidden min-[1025px]:block ng-star-inserted">
            <ul className="max-w-7xl max-[1919px]:max-w-[75rem] mx-auto px-2.5 py-1.5 flex gap-[30px] list-none ng-star-inserted">
              <li>
                <a href="#" className="text-white border-b-[3px] border-[#ff6e00] font-bold pb-0.4">Personas</a>
              </li>
              <li>
                <a href="#" className="text-white">Empresas</a>
              </li>
            </ul>
          </div>
          <header className="font-size-14 z-[100] h-82 w-full left-0 top-0 md:top-10 ng-star-inserted">
            <nav className="max-w-7xl max-[1919px]:max-w-[75rem] mx-auto flex items-center justify-between h-[82px] px-2.5 ng-star-inserted">
              <img src="/rextie-icon-redesign.svg" alt="Rextie Logo" className="object-cover object-left-top hidden min-[480px]:block ng-star-inserted" />
              <img _ngcontent-yqd-c63="" src="/isotipo-rextie.svg" alt="Rextie: La Casa de cambio online líder del Perú" className="object-cover object-left-top flex min-[480px]:hidden ng-star-inserted" />

              <ul className='line-menu grow-[3] flex-wrap pl-5 justify-end hidden min-[1025px]:flex ng-star-inserted'>
                <li className='flex items-center'>
                  <a href="#" className="text-white text-sm rounded-md h-6 mx-[.75rem] flex items-center relative">Nosotros</a>
                </li>
                <li className='flex items-center'>
                  <a href="#" className="text-white text-sm rounded-md h-6 mx-[.75rem] flex items-center relative">Blog</a>
                </li>
                <li className='mx-[.75rem] relative inline-block group'>
                  <button className="flex items-center w-full h-6 text-white text-sm gap-2 border-none cursor-pointer p-0">
                    Servicios
                    <svg _ngcontent-jdx-c63="" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6" fill="none"><path _ngcontent-jdx-c63="" d="M1.25 1.12506L5 4.87506L8.75 1.12506" stroke="#FF6E00" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
                </li>
              </ul>
              <span className='w-10 items-center justify-center text-[#707E9B] hidden min-[1025px]:flex ng-star-inserted'>|</span>
              <div className='flex items-center max-[599px]:grow ng-star-inserted'>
                <div className='flex-grow flex items-center justify-end'>
                  <button className="text-[#061756] min-[480px]:text-white min-w-28 h-10 px-[.75rem] rounded-xl hover:bg-gray-hover-effect text-sm font-bold mr-5 ng-star-inserted">Iniciar sesión</button>
                  <button _ngcontent-kpj-c63="" className="button-register"> Regístrate </button>
                </div>
                {/* Sidebar */}
                <button _ngcontent-ihi-c63="" aria-pressed="false" className="items-center justify-center w-6 flex min-[1025px]:hidden">
                  <div _ngcontent-ihi-c63="" className="block min-[480px]:hidden" _nghost-ihi-c62="">
                    <svg _ngcontent-ihi-c62="" xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="header" stroke="#0024B3">
                      <path _ngcontent-ihi-c62="" d="M1.25 8h19.5M1.25 1.5h19.5m-19.5 13h19.5">
                      </path>
                    </svg>
                  </div>
                  <div _ngcontent-ihi-c63="" className="hidden min-[480px]:block" _nghost-ihi-c62="">
                    <svg _ngcontent-ihi-c62="" xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="header" stroke="#FFFFFF">
                      <path _ngcontent-ihi-c62="" d="M1.25 8h19.5M1.25 1.5h19.5m-19.5 13h19.5">
                      </path>
                    </svg>
                  </div>
                </button>
              </div>
            </nav>
          </header>

          {/* Sidebar */}
          <div className={`fixed top-0 right-0 h-full bg-gray-800 text-white w-64 transform ${sidebarOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-in-out`}>
            <button onClick={toggleSidebar} className="flex items-center justify-end p-4">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
            </button>
            <nav className="mt-8">
              <a href="#" className="block px-4 py-2 text-white">Personas</a>
              <a href="#" className="block px-4 py-2 text-white">Empresas</a>
              <a href="#" className="block px-4 py-2 text-white">Nosotros</a>
              <a href="#" className="block px-4 py-2 text-white">Blog</a>
            </nav>
          </div>
          {/* Main Content */}
          <div className='w-full max-w-7xl max-[1919px]:max-w-[75rem] mx-auto z-10'>
            <div className="flex flex-col items-center min-[1281px]:flex-row min-[1281px]:items-start gap-x-48 px-2.5 pb-6 pt-0 min-[1281px]:pt-12">
              {/* izquierda */}
              <div className="flex flex-col items-start max-[1281px]:items-center min-[480px]:mt-6">
                <div className="flex-col justify-start items-start flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-[#061756] font-bold tracking-tight min-[480px]:text-white text-[32px] min-[480px]:text-[48px] leading-[48px] min-[480px]:leading-[56px] max-[945px]:text-center mb-3 min-[1281px]:mb-6 mx-4 min-[1281px]:mx-0">La casa de cambio online líder del Perú</div>
                  </div>
                </div>
                <div className=" flex-col justify-start items-start flex">
                  <div className="flex-col justify-start items-start flex">
                    <div className="text-[#061756] min-[480px]:text-white text-[12px] min-[413px]:text-[14px] min-[1281px]:text-[16px] max-[945px]:text-center mx-[10px] min-[480px]:mx-0 min-[1281px]:mr-3">Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes</div>
                  </div>
                </div>
                <div className="flex  flex-row-reverse min-[480px]:flex-row my-6 min-[1281px]:mt-12 max-[560px]:items-end gap-6 min-[480px]:gap-4">

                  <div className="flex flex-row items-center justify-start gap-2 min-[480px]:gap-4 max-[560px]:text-center max-[560px]:flex-col">
                    <img className="hidden min-[480px]:block max-[560px]:mb-[5px]" src="/visa-white-yellow-logo.svg" />
                    <img src="/visa-home.svg" alt="visa" className="w-[2.5rem] block min-[480px]:hidden" />
                    <span className=" mt-1 min-[480px]:mt-0 text-[#061756] min-[480px]:text-white w-[95px] max-[560px]:w-[100%] text-[10px] sm:text-[12px] text-[400]">Aliado Estratégico</span>
                  </div>
                  <div className="flex flex-row items-center justify-start max-[560px]:justify-center gap-2 min-[480px]:gap-4 max-[560px]:flex-col">
                    <div className="flex flex-row items-center min-[480px]:gap-4">
                      <img className="hidden min-[480px]:block" src="/citi-white.svg" />
                      <img src="/citi.png" alt="citi" className="block px-4 min-[480px]:hidden" />
                      <img className="w-8 min-[480px]:w-12" src="/rpp-home.svg" />
                    </div>
                    <span className="text-[#061756] min-[480px]:text-white w-[95px] max-[560px]:w-[100%] max-[560px]:text-center text-[10px] sm:text-[12px] text-[400]">Inversionistas estratégicos</span>

                  </div>

                </div>
                <div className="hidden min-[1281px]:flex flex-row mt-6 items-center justify-start text-white">
                  <div className="justify-start items-center inline-flex">
                    <div className="pr-2.5 flex-col justify-start items-start inline-flex">
                      <img className="w-[71px] h-10 relative" src="/iso-white.png" />
                    </div>
                    <div className="flex-col justify-start items-start inline-flex">
                      <div className="text-[#061756] min-[480px]:text-white text-xs font-normal leading-[18px]">Certificados con ISO 27001</div>
                    </div>
                  </div>
                </div>
              </div>
              {/* derecha*/}
              <div className="flex flex-col items-center justify-center z-10">
                <div className="bg-[#061756] min-[768px]:bg-[#061756] min-[1023px]:bg-[#061756] min-[1365px]:bg-[#061756] backdrop-blur-md pt-3 p-2 min-[768px]:p-4 rounded-3xl min-w-[344px] min-[768px]:w-[546px] min-[1023px]:w-[556px] min-[1365px]:w-[468px]">
                  <div className="flex flex-row items-center justify-center mb-3 gap-3">
                    <img src="/trophy-white.png" alt="" />
                    <span className="text-[10px] min-[480px]:text-[12px] text-white font-bold">Cambia al instante con todos los bancos en Perú</span>
                  </div>

                  <div className="quote-container">
                    <div className="fx-layout-1 ">
                      <div className="fx-layout-2">
                        <div className="price_buy">
                          <div className="text-[14px] font-semibold max-[480px]:text-[12px] amount">
                            <span className="operation ">Compra </span>
                            <span>S/ </span>
                            3.7765
                          </div>
                        </div>
                        <div className="price_sell_active">
                          <div className="text-[14px] font-semibold max-[480px]:text-[12px] amount">
                            <span className="operation">Venta </span>
                            <span>S/ </span>3.8145
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="offer">
                      <form className="fx-layout-3">
                        <div className="quote-input-group ">
                          <div className="switcher" _nghost-ihe-c6="">
                            <svg _ngcontent-ihe-c6="" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <rect _ngcontent-ihe-c6="" width="40" height="40" rx="20" fill="#0024B3"></rect>
                              <g _ngcontent-ihe-c6="" clip-path="url(#clip0_748_1168)">
                                <path _ngcontent-ihe-c6="" fill-rule="evenodd" clip-rule="evenodd" d="M10.2441 16.4225C9.91864 16.0971 9.91864 15.5694 10.2441 15.244L13.5774 11.9107C13.9028 11.5852 14.4305 11.5852 14.7559 11.9107L18.0893 15.244C18.4147 15.5694 18.4147 16.0971 18.0893 16.4225C17.7638 16.7479 17.2362 16.7479 16.9107 16.4225L14.1667 13.6784L11.4226 16.4225C11.0972 16.7479 10.5695 16.7479 10.2441 16.4225Z" fill="white">
                                </path>
                                <path _ngcontent-ihe-c6="" fill-rule="evenodd" clip-rule="evenodd" d="M15 24.1666C15 24.8296 15.2634 25.4655 15.7322 25.9344C16.2011 26.4032 16.837 26.6666 17.5 26.6666L19.1667 26.6666C19.6269 26.6666 20 27.0397 20 27.4999C20 27.9602 19.6269 28.3333 19.1667 28.3333L17.5 28.3333C16.3949 28.3333 15.3351 27.8943 14.5537 27.1129C13.7723 26.3315 13.3333 25.2717 13.3333 24.1666L13.3333 12.4999C13.3333 12.0397 13.7064 11.6666 14.1667 11.6666C14.6269 11.6666 15 12.0397 15 12.4999L15 24.1666Z" fill="white">
                                </path>
                                <path _ngcontent-ihe-c6="" fill-rule="evenodd" clip-rule="evenodd" d="M21.9107 23.5773C22.2362 23.2519 22.7638 23.2519 23.0893 23.5773L25.8333 26.3214L28.5774 23.5773C28.9028 23.2519 29.4305 23.2519 29.7559 23.5773C30.0814 23.9028 30.0814 24.4304 29.7559 24.7558L26.4226 28.0892C26.0972 28.4146 25.5695 28.4146 25.2441 28.0892L21.9107 24.7558C21.5853 24.4304 21.5853 23.9028 21.9107 23.5773Z" fill="white">
                                </path>
                                <path _ngcontent-ihe-c6="" fill-rule="evenodd" clip-rule="evenodd" d="M20 12.4999C20 12.0397 20.3731 11.6666 20.8333 11.6666L22.5 11.6666C23.6051 11.6666 24.6649 12.1056 25.4463 12.887C26.2277 13.6684 26.6667 14.7282 26.6667 15.8333L26.6667 27.4999C26.6667 27.9602 26.2936 28.3333 25.8333 28.3333C25.3731 28.3333 25 27.9602 25 27.4999L25 15.8333C25 15.1702 24.7366 14.5343 24.2678 14.0655C23.7989 13.5966 23.163 13.3333 22.5 13.3333L20.8333 13.3333C20.3731 13.3333 20 12.9602 20 12.4999Z" fill="white">
                                </path>
                              </g>
                              <defs _ngcontent-ihe-c6="">
                                <clipPath _ngcontent-ihe-c6="" id="clip0_748_1168">
                                  <rect _ngcontent-ihe-c6="" width="20" height="20" fill="white" transform="translate(10 10)">
                                  </rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <div className="fx-layout-4">
                            <div className="fxFlex-20">
                              <div className="title">
                                Envía
                              </div>
                              <div className="type">
                                <div _nghost-ihe-c10="">
                                  <svg _ngcontent-ihe-c10="" xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" >
                                    <path _ngcontent-ihe-c10="" d="M2.808 0C.947 0 .001 1.475.001 3.293v6.585c0 1.818.947 3.292 2.807 3.292h3.368V0H2.808zm12.351 0H11.79V13.17h3.369c1.86 0 2.807-1.474 2.807-3.292V3.293c0-1.818-.947-3.292-2.807-3.292z" fill="#ec1c24">
                                    </path>
                                  </svg>
                                </div>
                                <span className='text-[20px] max-[480px]:text-[16px] font-semibold'>PEN</span>
                              </div>
                            </div>
                            <div className="fxFlex-80">
                              <div className="amount-text-right xs:text-blue-500">
                                <div className="p-component-envia">
                                  <span className="p-component">
                                    <input inputMode="decimal" className="text-[20px] max-[480px]:text-[16px] font-semibold input-component" id="currency-send" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="fx-layout-4">
                            <div className="fxFlex-20">
                              <div className="title">Recibe</div>
                              <div className="type">
                                <div _nghost-ihe-c11="">
                                  <svg _ngcontent-ihe-c11="" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path _ngcontent-ihe-c11="" d="M7.30115 2.02318V3.03491H17.9591C17.9442 2.70864 17.9122 2.29617 17.7977 2.02318" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M17.2952 1.01266H7.30115V2.02439H17.7977C17.6837 1.64694 17.5141 1.30271 17.2952 1.01266Z" fill="#E6E7E8">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M15.1616 0.000793457H7.30115V1.01252H17.2952C16.8266 0.386927 16.0555 0.000793457 15.1616 0.000793457Z" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M17.9591 3.03593H7.30115V4.04766H17.9689V3.37328C17.9689 3.31311 17.9653 3.25444 17.9636 3.19548C17.9625 3.17931 17.9608 3.13771 17.9591 3.03593Z" fill="#E6E7E8"></path><path _ngcontent-ihe-c11="" d="M7.30115 5.05938H17.9689V4.04765H7.30115V5.05938Z" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M7.30115 6.07025H17.9689V5.05852H7.30115V6.07025Z" fill="#E6E7E8">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M7.30115 6.07011H17.9689V7.08184H7.30115V6.07011Z" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.000488281 7.0836V8.09533H17.9673V7.0836H7.29949H0.000488281Z" fill="#E6E7E8">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.000488281 8.0946H17.9673V9.10633H0.000488281V8.0946Z" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.00189194 9.72855C0.00189194 9.72855 -0.000634643 9.9737 0.0061029 10.118H17.9617C17.9695 9.97011 17.9659 9.72855 17.9659 9.72855L17.9673 9.10625H0.000488281L0.00189194 9.72855Z" fill="#E6E7E8">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M2.80701 13.1701H15.1592C16.0555 13.1701 16.8006 12.8229 17.3096 12.1404H0.653809C1.17934 12.8379 1.93843 13.1701 2.80561 13.1701" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.65522 12.1414H17.311C17.533 11.8406 17.6988 11.4972 17.7994 11.1297H0.169556C0.27205 11.4961 0.43718 11.8391 0.656624 12.1414" fill="#E6E7E8">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.167218 11.1297H17.7971C17.889 10.8006 17.9437 10.4609 17.9599 10.118H0.00439453C0.0321869 10.464 0.0580141 10.7253 0.167218 11.1297Z" fill="#EC1C24">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M7.29949 0.000778198H2.8078C0.947393 0.000778198 0.000488281 1.47497 0.000488281 3.29339V7.08288H7.29949V0.000778198Z" fill="#176496">
                                    </path>
                                    <path _ngcontent-ihe-c11="" d="M0.787854 1.78969L0.940572 1.66457L1.09301 1.78969L1.03377 1.58854L1.18565 1.46552H0.998122L0.940011 1.26347L0.88218 1.46552H0.694932L0.847369 1.58854L0.787854 1.78969ZM1.7968 1.78969L1.94952 1.66457L2.10196 1.78969L2.043 1.58854L2.1946 1.46552H2.00735L1.94924 1.26347L1.89141 1.46552H1.7036L1.85604 1.58854L1.7968 1.78969ZM2.9099 1.78969L3.06234 1.66457L3.21505 1.78969L3.15582 1.58854L3.30741 1.46552H3.12129L3.06234 1.26347L3.00423 1.46552H2.8181L2.96885 1.58854L2.9099 1.78969ZM4.01486 1.78969L4.16729 1.66457L4.32001 1.78969L4.26106 1.58854L4.41265 1.46552H4.22456L4.16729 1.26347L4.10946 1.46552H3.92193L4.07409 1.58854L4.01486 1.78969ZM5.12374 1.78969L5.27646 1.66457L5.4289 1.78969L5.36995 1.58854L5.52182 1.46552H5.33401L5.27618 1.26347L5.21835 1.46552H5.0311L5.1827 1.58854L5.12374 1.78969ZM1.32489 2.31501L1.47733 2.19019L1.62977 2.31501L1.57109 2.11416L1.72269 1.99114H1.53516L1.47705 1.78939L1.42006 1.99114H1.23197L1.38385 2.11416L1.32489 2.31501ZM2.33412 2.31501L2.48656 2.19019L2.63899 2.31501L2.58004 2.11416L2.73164 1.99114H2.54298L2.48656 1.78939L2.42845 1.99114H2.2412L2.39307 2.11416L2.33412 2.31501ZM3.44722 2.31501L3.59937 2.19019L3.75181 2.31501L3.69286 2.11416L3.84473 1.99114H3.65749L3.59937 1.78939L3.54126 1.99114H3.35374L3.50561 2.11416L3.44722 2.31501ZM4.55161 2.31501L4.70433 2.19019L4.85705 2.31501L4.79725 2.11416L4.94941 1.99114H4.76216L4.70405 1.78939L4.6465 1.99114H4.45897L4.61085 2.11416L4.55161 2.31501ZM5.6619 2.31501L5.81322 2.19019L5.96566 2.31501L5.90614 2.11416L6.0583 1.99114H5.87133L5.81294 1.78939L5.75539 1.99114H5.56786L5.71974 2.11416L5.6619 2.31501ZM6.28709 1.78969L6.43953 1.66457L6.59225 1.78969L6.53301 1.58854L6.68461 1.46552H6.49848L6.43925 1.26347L6.38142 1.46552H6.19249L6.34605 1.58854L6.28709 1.78969ZM0.772976 5.99346L0.925693 5.86984L1.07813 5.99346L1.01918 5.79411L1.17077 5.67078L0.983524 5.67138L0.925132 5.46963L0.867863 5.67138L0.680054 5.67078L0.831929 5.79411L0.772976 5.99346ZM1.7822 5.99346L1.93464 5.86984L2.08736 5.99346L2.02812 5.79411L2.17972 5.67078L1.99275 5.67138L1.93436 5.46963L1.87681 5.67138L1.68956 5.67078L1.84116 5.79411L1.7822 5.99346ZM2.8953 5.99346L3.04774 5.86984L3.20046 5.99346L3.14122 5.79411L3.29282 5.67078L3.10445 5.67138L3.04746 5.46963L2.98963 5.67138L2.80238 5.67078L2.95425 5.79411L2.8953 5.99346ZM4.00026 5.99346L4.1527 5.86984L4.30513 5.99346L4.24702 5.79411L4.39777 5.67078L4.21025 5.67138L4.15241 5.46963L4.09458 5.67138L3.90734 5.67078L4.05893 5.79411L4.00026 5.99346ZM5.10887 5.99346L5.26158 5.86984L5.4143 5.99346L5.35591 5.79411L5.50666 5.67078L5.31941 5.67138L5.2613 5.46963L5.20375 5.67138L5.01622 5.67078L5.16782 5.79411L5.10887 5.99346ZM6.27221 5.99346L6.42465 5.86984L6.57737 5.99346L6.51813 5.79411L6.67001 5.67078L6.48164 5.67138L6.42437 5.46963L6.36654 5.67138L6.17845 5.67078L6.33117 5.79411L6.27221 5.99346ZM0.787854 2.84093L0.940572 2.71581L1.09301 2.84093L1.03377 2.63978L1.18565 2.51676L0.998122 2.51736L0.940011 2.31501L0.88218 2.51736L0.694932 2.51676L0.847369 2.63978L0.787854 2.84093ZM1.7968 2.84093L1.94952 2.71581L2.10196 2.84093L2.043 2.63978L2.1946 2.51676L2.00735 2.51736L1.94924 2.31501L1.89141 2.51736L1.7036 2.51676L1.85604 2.63978L1.7968 2.84093ZM2.9099 2.84093L3.06234 2.71581L3.21505 2.84093L3.15582 2.63978L3.30741 2.51676L3.12129 2.51736L3.06234 2.31501L3.00423 2.51736L2.8181 2.51676L2.96885 2.63978L2.9099 2.84093ZM4.01486 2.84093L4.16729 2.71581L4.32001 2.84093L4.26106 2.63978L4.41265 2.51676L4.22456 2.51736L4.16729 2.31501L4.10946 2.51736L3.92193 2.51676L4.07409 2.63978L4.01486 2.84093ZM5.12374 2.84093L5.27646 2.71581L5.4289 2.84093L5.36995 2.63978L5.52182 2.51676L5.33401 2.51736L5.27618 2.31501L5.21835 2.51736L5.0311 2.51676L5.1827 2.63978L5.12374 2.84093ZM1.32489 3.36655L1.47733 3.24173L1.62977 3.36655L1.57109 3.1657L1.72269 3.04208H1.53516L1.47705 2.84093L1.42006 3.04208H1.23197L1.38385 3.1657L1.32489 3.36655ZM2.33412 3.36655L2.48656 3.24173L2.63899 3.36655L2.58004 3.1657L2.73164 3.04208H2.54298L2.48656 2.84093L2.42845 3.04208H2.2412L2.39307 3.1657L2.33412 3.36655ZM3.44722 3.36655L3.59937 3.24173L3.75181 3.36655L3.69286 3.1657L3.84473 3.04208H3.65749L3.59937 2.84093L3.54126 3.04208H3.35374L3.50561 3.1657L3.44722 3.36655ZM4.55161 3.36655L4.70433 3.24173L4.85705 3.36655L4.79725 3.1657L4.94941 3.04208H4.76216L4.70405 2.84093L4.6465 3.04208H4.45897L4.61085 3.1657L4.55161 3.36655ZM5.6619 3.36655L5.81322 3.24173L5.96566 3.36655L5.90614 3.1657L6.0583 3.04208H5.87133L5.81294 2.84093L5.75539 3.04208H5.56786L5.71974 3.1657L5.6619 3.36655ZM6.28709 2.84093L6.43953 2.71581L6.59225 2.84093L6.53301 2.63978L6.68461 2.51676L6.49848 2.51736L6.43925 2.31501L6.38142 2.51736L6.19249 2.51676L6.34605 2.63978L6.28709 2.84093ZM0.772976 3.89217L0.925693 3.76735L1.07813 3.89217L1.0189 3.69162L1.17077 3.5683L0.983243 3.5689L0.925132 3.36655L0.867863 3.5689L0.680054 3.5683L0.831929 3.69162L0.772976 3.89217ZM1.7822 3.89217L1.93464 3.76735L2.08736 3.89217L2.02812 3.69162L2.17972 3.5683L1.99275 3.5689L1.93436 3.36655L1.87681 3.5689L1.68956 3.5683L1.84088 3.69162L1.7822 3.89217ZM2.8953 3.89217L3.04774 3.76735L3.20018 3.89217L3.14122 3.69162L3.29282 3.5683L3.10445 3.5689L3.04746 3.36655L2.98963 3.5689L2.80238 3.5683L2.95425 3.69162L2.8953 3.89217ZM4.00026 3.89217L4.15241 3.76735L4.30513 3.89217L4.24702 3.69162L4.39777 3.5683L4.21025 3.5689L4.15241 3.36655L4.09458 3.5689L3.90734 3.5683L4.05893 3.69162L4.00026 3.89217ZM5.10887 3.89217L5.26158 3.76735L5.41402 3.89217L5.35591 3.69162L5.50666 3.5683L5.31913 3.5689L5.2613 3.36655L5.20375 3.5689L5.01622 3.5683L5.16782 3.69162L5.10887 3.89217ZM1.31001 4.41779L1.46245 4.29327L1.61489 4.41779L1.55621 4.21844L1.70753 4.09452H1.52L1.46217 3.89217L1.40462 4.09452H1.21709L1.36897 4.21844L1.31001 4.41779ZM2.31924 4.41779L2.47168 4.29327L2.62412 4.41779L2.56516 4.21844L2.71676 4.09452H2.52895L2.4714 3.89217L2.41357 4.09452H2.22604L2.3782 4.21844L2.31924 4.41779ZM3.43262 4.41779L3.5845 4.29327L3.73721 4.41779L3.67714 4.21844L3.82985 4.09452H3.64261L3.5845 3.89217L3.52667 4.09452H3.33914L3.49101 4.21844L3.43262 4.41779ZM4.53617 4.41779L4.68945 4.29327L4.84217 4.41779L4.78322 4.21844L4.93453 4.09452H4.74728L4.68917 3.89217L4.63162 4.09452H4.44409L4.59597 4.21844L4.53617 4.41779ZM5.64506 4.41779L5.79834 4.29327L5.95106 4.41779L5.89182 4.21844L6.04398 4.09452H5.85673L5.79834 3.89217L5.74051 4.09452H5.55298L5.70486 4.21844L5.64506 4.41779ZM6.27221 3.89217L6.42465 3.76735L6.57709 3.89217L6.51813 3.69162L6.67001 3.5683L6.48164 3.5689L6.42437 3.36655L6.36654 3.5689L6.17845 3.5683L6.33117 3.69162L6.27221 3.89217ZM0.772976 4.94371L0.925693 4.82009L1.07813 4.94371L1.0189 4.74286L1.17077 4.61954L0.983243 4.62014L0.925132 4.41779L0.867863 4.62014L0.680054 4.61954L0.831929 4.74286L0.772976 4.94371ZM1.7822 4.94371L1.93464 4.82009L2.08736 4.94371L2.02812 4.74286L2.17972 4.61954L1.99275 4.62014L1.93436 4.41779L1.87681 4.62014L1.68956 4.61954L1.84088 4.74286L1.7822 4.94371ZM2.8953 4.94371L3.04774 4.82009L3.20018 4.94371L3.14122 4.74286L3.29282 4.61954L3.10445 4.62014L3.04746 4.41779L2.98963 4.62014L2.80238 4.61954L2.95425 4.74286L2.8953 4.94371ZM4.00026 4.94371L4.15241 4.82009L4.30513 4.94371L4.24702 4.74286L4.39777 4.61954L4.21025 4.62014L4.15241 4.41779L4.09458 4.62014L3.90734 4.61954L4.05893 4.74286L4.00026 4.94371ZM5.10887 4.94371L5.26158 4.82009L5.41402 4.94371L5.35591 4.74286L5.50666 4.61954L5.31913 4.62014L5.2613 4.41779L5.20375 4.62014L5.01622 4.61954L5.16782 4.74286L5.10887 4.94371ZM1.31001 5.46963L1.46245 5.34451L1.61489 5.46963L1.55621 5.26849L1.70753 5.14636H1.52L1.46217 4.94371L1.40462 5.14636H1.21709L1.36897 5.26849L1.31001 5.46963ZM2.31924 5.46963L2.47168 5.34451L2.62412 5.46963L2.56516 5.26849L2.71676 5.14636H2.52895L2.4714 4.94371L2.41357 5.14636H2.22604L2.3782 5.26849L2.31924 5.46963ZM3.43262 5.46963L3.5845 5.34451L3.73721 5.46963L3.67714 5.26849L3.82985 5.14636H3.64261L3.5845 4.94371L3.52667 5.14636H3.33914L3.49101 5.26849L3.43262 5.46963ZM4.53617 5.46963L4.68945 5.34451L4.84217 5.46963L4.78322 5.26849L4.93453 5.14636H4.74728L4.68917 4.94371L4.63162 5.14636H4.44409L4.59597 5.26849L4.53617 5.46963ZM5.64506 5.46963L5.79834 5.34451L5.95106 5.46963L5.89182 5.26849L6.04398 5.14636H5.85673L5.79834 4.94371L5.74051 5.14636H5.55298L5.70486 5.26849L5.64506 5.46963ZM6.27221 4.94371L6.42465 4.82009L6.57709 4.94371L6.51813 4.74286L6.67001 4.61954L6.48164 4.62014L6.42437 4.41779L6.36654 4.62014L6.17845 4.61954L6.33117 4.74286L6.27221 4.94371Z" fill="white">
                                    </path>
                                  </svg>
                                </div>
                                <span className='text-[20px] max-[480px]:text-[16px] font-semibold'>USD</span>
                              </div>
                            </div>
                            <div className="fxFlex-80">
                              <div className="amount-text-right">
                                <div className="p-component-recibe" >
                                  <span className="p-component">
                                    <input className="text-[20px] max-[480px]:text-[16px] font-semibold input-component" id="currency-take" />
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <a className="have-coupon"> Usar un cupón o código </a>
                        <div className="fx-layout-5">
                          <strong className='text-[14px] font-semibold max-[480px]:text-[12px]'>Ahorro promedio* </strong>
                          <div _nghost-ihe-c9="">
                            <svg _ngcontent-ihe-c9="" width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g _ngcontent-ihe-c9="" id="AHORRO ICONO" clip-path="url(#clip0_748_1177)">
                                <g _ngcontent-ihe-c9="" id="Capa 2">
                                  <path _ngcontent-ihe-c9="" id="Vector" d="M15.9225 17.7753L14.8656 17.9693C14.5737 18.0123 14.2819 17.6797 14.2118 17.2227L14.0466 16.182C13.3175 16.3295 12.5756 16.4053 11.8317 16.4083C10.784 16.4026 9.74227 16.2503 8.73678 15.9558L8.55127 17.2205C8.48339 17.6729 8.19381 18.0146 7.90196 17.9716L5.89296 17.6752C5.60111 17.6322 5.42012 17.2227 5.48799 16.7702L5.79568 14.6753L5.81604 14.5622C4.11246 13.3405 3.04688 11.6052 3.04688 9.67992C3.0483 9.04582 3.16482 8.41725 3.39076 7.82477L3.47447 7.6121C4.60566 4.91986 7.92458 2.97195 11.8317 2.97195C12.5361 2.97156 13.2389 3.03669 13.9312 3.16651C14.4787 2.50363 15.5375 1.41543 16.8497 1.03082C16.8823 1.02225 16.9167 1.02263 16.9491 1.03191C16.9815 1.04119 17.0109 1.05904 17.034 1.08358C17.0571 1.10812 17.0733 1.13844 17.0806 1.17135C17.088 1.20427 17.0864 1.23856 17.0759 1.27063C16.7653 2.15606 16.5854 3.08208 16.542 4.01943C18.3972 4.92439 19.7795 6.3429 20.3383 8.01481H21.1437C21.3237 8.01481 21.4964 8.08631 21.6236 8.2136C21.7509 8.34088 21.8224 8.51352 21.8224 8.69352V11.2885C21.8224 11.4685 21.7509 11.6411 21.6236 11.7684C21.4964 11.8957 21.3237 11.9672 21.1437 11.9672H20.0894C19.9078 12.3246 19.6977 12.6646 19.462 12.9844" stroke="#061756" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                                  </path>
                                  <path _ngcontent-ihe-c9="" id="Vector_2" d="M1.93382 6.3611C1.6759 4.80232 2.86818 4.41771 2.89759 4.3702C2.92701 4.32269 2.88402 4.15527 2.8252 4.15527C2.81162 4.15527 1.42026 4.64621 1.7121 6.3973C1.86595 7.32035 2.66231 7.68686 3.3908 7.82487C3.41794 7.75473 3.44509 7.68233 3.4745 7.6122C2.80484 7.49456 2.06956 7.17556 1.93382 6.3611Z" fill="#061756" stroke="#061756" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round">
                                  </path>
                                  <path _ngcontent-ihe-c9="" id="Vector_3" d="M16.875 9.27614C17.4316 9.27614 17.8828 8.82492 17.8828 8.26832C17.8828 7.71172 17.4316 7.2605 16.875 7.2605C16.3184 7.2605 15.8672 7.71172 15.8672 8.26832C15.8672 8.82492 16.3184 9.27614 16.875 9.27614Z" fill="#061756">
                                  </path>
                                </g>
                                <path _ngcontent-ihe-c9="" id="Vector_4" d="M17.6719 17.1437C18.5198 17.1437 19.2071 16.4563 19.2071 15.6085C19.2071 14.7606 18.5198 14.0732 17.6719 14.0732C16.8241 14.0732 16.1367 14.7606 16.1367 15.6085C16.1367 16.4563 16.8241 17.1437 17.6719 17.1437Z" fill="#FF6E00">
                                </path>
                              </g>
                              <defs _ngcontent-ihe-c9="">
                                <clipPath _ngcontent-ihe-c9="" id="clip0_748_1177">
                                  <rect _ngcontent-ihe-c9="" width="22.2124" height="18.7281" fill="white" transform="translate(0.894531 0.135986)">
                                  </rect>
                                </clipPath>
                              </defs>
                            </svg>
                          </div>
                          <strong className='text-[14px] font-semibold max-[480px]:text-[12px]'>S/ 27.45</strong>
                        </div>
                        <button type="button" className="fx-layout-6">
                          <strong>Ingresar a Rextie</strong>
                        </button>
                      </form>
                    </div>
                  </div>
                </div>
                <span className="font-[400] text-[#061756] text-[10px] mt-2 mx-3 text-center">(*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.
                </span>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* 2da seccion */}
      <div className="app-bank">
        <h1 className="font-bold text-[32px] max-[480px]:text-xl leading-[48px] text-[#061756] text-center px-11 max-[480px]:px-6 mt-12 mb-3 min-[480px]:mb-6">
          Cambia al instante con todos los bancos en Perú
        </h1>
        <div className='grid grid-cols-1 min-[769px]:grid-cols-2 gap-3 min-[413px]:gap-6  mb-[60px] max-w-[320px] min-[413px]:max-w-[546px] min-[769px]:max-w-[960px] m-auto'>
          <div className='order-2 min-[769px]:order-1 flex flex-col items-center justify-center border border-quinary-gray border-solid rounded-3xl h-[162px] sm:h-52 p-6 min-[769px]:mt-[24.8px]'>
            <div className='flex flex-col-reverse mb-6 sm:mb-0 sm:flex-col items-center'>
              <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-[#061756] min-[480px]:mb-6">Transferencias inmediatas </span>
              <span className="block min-[480px]:hidden font-normal text-xs leading-4 text-[#061756] min-[480px]:mb-6">Transferencias Inmediatas a todo el Perú. </span>
              <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-[#061756]">15 min. </span>
              <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-[#061756] mb-6">Todo el Perú
                <span className="block min-[480px]:hidden font-normal text-xs leading-4 text-[#061756] min-[480px]:mb-6">Transferencias Inmediatas a todo el Perú.
                </span>
              </span>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:gap-8 sm:mb-[30px]">
                <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                  <img alt="logo de banco bcp" src="/bcp.svg" loading="lazy" className="h-4 sm:h-auto" />
                  <img alt="Logo de banco interbank - Rextie precio del dólar" src="interbank.svg" loading="lazy" className="h-4 sm:h-auto" />
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                  <img alt="Logo de banco pichincha Rextie- precio del dólar" src="/banco-pichincha.svg" loading="lazy" className="h-4 sm:h-auto" />
                  <img alt="Logo de banco banbif Rextie- precio del dólar" src="/banbif.svg" loading="lazy" className="h-4 sm:h-auto" />
                </div>
              </div>
            </div>
          </div>

          <div className="order-1 min-[769px]:order-2">
            <div className="flex justify-center gap-1 bg-blue-950 px-2 py-1 rounded-t-3xl rounded-b-none border-b">
              <img alt="nuevo beneficio" src="/star.svg" loading="lazy" />
              <span className="text-sixth-white text-xs max-[480px]:text-[10px] font-normal text-white">Nuevo beneficio</span>
            </div>
            <div className="flex flex-col items-center justify-center border border-quinary-gray border-solid rounded-b-3xl rounded-t-none sm:h-52 h-[278px] p-6">
              <span className="font-normal text-xs leading-4 text-[#061756] mb-6 max-[480px]:mb-2">Transferencias interbancarias</span>
              <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-[#061756]">30 min.</span>
                  <span className="font-normal text-xs leading-4 text-[#707E9B]">Lima </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-[#061756]">24 horas</span>
                  <span className="font-normal text-xs leading-4 text-[#707E9B]">Provincias </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center sm:justify-center sm:gap-8 mb-6 sm:mb-0">
                <div className="flex items-center gap-4 sm:gap-8 mb-4 sm:mb-0">
                  <img alt="Logo de banco bbva - Rextie - dólar hoy en perú" src="/bbva.svg" loading="lazy" className="h-4 sm:h-auto" />
                  <img alt="Logo de banco scotiabank - Rextie precio del dólar" src="/scotiabank.svg" loading="lazy" className="h-4 sm:h-auto" />
                </div>
                <div className="flex items-center gap-4 sm:gap-8">
                  <img alt="Logo de banco de comercio Rextie- precio del dólar" src="/banco-de-comercio-logo.svg" loading="lazy" className="h-4 sm:h-auto" />
                  <img alt="Logo de banco mibanco Rextie- precio del dólar" src="/mibanco-logo.svg" loading="lazy" className="h-4 sm:h-auto" />
                </div>
              </div>
              <button className="p-0">
                <span className="text-[#0031F7] text-xs underline">Ver bancos disponibles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3ra seccion */}
      <div className="py-[70px] why-use-rextie ">
        <div className='grid grid-cols-2'>
          <div className="flex-col justify-center px-16">
            <div className='py-3 px-1'>
              <div className='w-full'>
                <div className="flex justify-start items-center rounded-t-lg flex-grow-0 flex-shrink-0 bg-[#0032ff]">
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-60 px-2.5 py-[15px] rounded-tl-lg"
                  >
                    <div
                      className="flex justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative pt-1.5"
                    >
                      <svg
                        width="85"
                        height="26"
                        viewBox="0 0 85 26"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="flex-grow-0 flex-shrink-0 w-[84.52px] h-[25px] relative"
                        preserveAspectRatio="none"
                      >
                        <g clip-path="url(#clip0_11_6)">
                          <g clip-path="url(#clip1_11_6)">
                            <g clip-path="url(#clip2_11_6)">
                              <path
                                d="M37.9196 17.7853H34.8769L32.1342 12.9712H30.5866V17.7853H27.9844V4.56086H32.9603C34.4019 4.56086 35.5043 4.9668 36.2661 5.77747C37.028 6.58815 37.4089 7.57858 37.4089 8.74758C37.4203 9.59109 37.1817 10.4191 36.7233 11.1272C36.2781 11.8189 35.6269 12.32 34.771 12.6307L37.9185 17.7841L37.9196 17.7853ZM32.9437 7.01313H30.5878V10.5915H32.7151C33.371 10.5915 33.8698 10.4249 34.2103 10.0904C34.5615 9.75587 34.7376 9.32136 34.7376 8.78448C34.7376 8.27141 34.5734 7.84762 34.2448 7.5143C33.9282 7.17979 33.4948 7.01313 32.9437 7.01313ZM48.8787 12.6855C48.8787 12.9831 48.8489 13.3533 48.7906 13.795H41.598C41.9492 15.1794 42.8813 15.8711 44.3943 15.8711C45.5033 15.8727 46.5852 15.5286 47.4895 14.8866L48.4739 16.6579C47.2549 17.5531 45.8598 17.9995 44.2884 17.9995C42.6123 17.9995 41.3219 17.5043 40.4195 16.5139C39.5291 15.5354 39.0827 14.3307 39.0827 12.8998C39.0827 11.4082 39.5458 10.1856 40.4719 9.23089C41.3981 8.26427 42.5992 7.78096 44.0765 7.78096C45.4717 7.78096 46.6204 8.2226 47.5228 9.10471C48.4251 9.98681 48.8763 11.1808 48.8763 12.6831L48.8787 12.6855ZM44.0777 9.8761C43.4563 9.8761 42.923 10.0606 42.4778 10.4308C42.0445 10.7892 41.7504 11.2844 41.598 11.9165H46.4693C46.3514 11.2844 46.0824 10.7892 45.6598 10.4308C45.2372 10.0606 44.7098 9.8761 44.0777 9.8761ZM56.0069 12.8819L59.0842 17.7853H56.2355L54.407 14.5818L52.4904 17.7853H49.6239L52.8071 12.8105L49.9762 8.03214H52.8071L54.4427 11.0201L56.201 8.03214H58.9973L56.0069 12.8819ZM66.9398 15.2259L67.6778 17.2115C66.8802 17.7484 65.9374 18.0174 64.847 18.0174C63.7447 18.0174 62.9126 17.6948 62.3495 17.0508C61.7864 16.3949 61.5055 15.4342 61.5055 14.17V10.1439H59.9401V8.03214H61.5233V4.57872H63.9851V8.03214H67.1505V10.1439H63.9851V14.0092C63.9851 15.1544 64.4363 15.727 65.3386 15.727C65.8315 15.727 66.366 15.5604 66.9398 15.2259ZM72.0205 5.38464C72.0205 5.82628 71.8741 6.19531 71.5812 6.49411C71.4404 6.6402 71.2707 6.75543 71.083 6.83248C70.8953 6.90953 70.6936 6.94673 70.4908 6.94171C70.2879 6.94673 70.0863 6.90953 69.8986 6.83248C69.7108 6.75543 69.5412 6.6402 69.4004 6.49411C69.1075 6.19531 68.9611 5.82628 68.9611 5.38464C68.9611 4.94299 69.1075 4.57991 69.4004 4.29302C69.5412 4.14693 69.7108 4.0317 69.8986 3.95465C70.0863 3.87759 70.2879 3.8404 70.4908 3.84542C70.6936 3.8404 70.8953 3.87759 71.083 3.95465C71.2707 4.0317 71.4404 4.14693 71.5812 4.29302C71.8741 4.57991 72.0205 4.94299 72.0205 5.38464ZM71.7217 8.03333V17.7865H69.242V8.03214L71.7217 8.03333ZM83.5831 12.6855C83.5831 12.9831 83.5533 13.3533 83.495 13.795H76.3024C76.6536 15.1794 77.5857 15.8711 79.0987 15.8711C80.2077 15.8727 81.2896 15.5286 82.1938 14.8866L83.1783 16.6579C81.9593 17.5531 80.5642 17.9995 78.9928 17.9995C77.3167 17.9995 76.0263 17.5043 75.1239 16.5139C74.2335 15.5354 73.7871 14.3307 73.7871 12.8998C73.7871 11.4082 74.2501 10.1856 75.1763 9.23089C76.1024 8.26427 77.3036 7.78096 78.7809 7.78096C80.1761 7.78096 81.3248 8.2226 82.2272 9.10471C83.1295 9.98681 83.5807 11.1808 83.5807 12.6831L83.5831 12.6855ZM78.7821 9.8761C78.1607 9.8761 77.6274 10.0606 77.1822 10.4308C76.7488 10.7892 76.4548 11.2844 76.3024 11.9165H81.1736C81.057 11.2844 80.7868 10.7892 80.3642 10.4308C79.9428 10.0606 79.4142 9.8761 78.7821 9.8761Z"
                                fill="white"
                              ></path>
                              <path
                                d="M8.25562 10.9951C8.25584 11.2407 8.28379 11.4855 8.33895 11.7248H2.41779C2.32732 10.9844 2.33565 10.2654 2.33565 10.2654H8.34014C8.28394 10.5045 8.25478 10.7494 8.25562 10.9951ZM20.5574 10.2654C20.5574 10.2654 20.5705 10.8987 20.4753 11.7248H14.5518C14.608 11.4857 14.6359 11.2408 14.6351 10.9951C14.6359 10.7494 14.608 10.5045 14.5518 10.2654H20.5586H20.5574Z"
                                fill="#FF6E00"
                              ></path>
                              <path
                                d="M9.69727 8.3309C9.24266 8.62798 8.87175 9.03659 8.61993 9.51775L7.78783 8.7154C7.03905 7.98984 6.03655 7.58533 4.99391 7.58807H2.33569V5.98695H4.99272C6.45082 5.98354 7.85264 6.54948 8.89968 7.56426L9.69489 8.33328L9.69727 8.3309ZM19.7813 14.6711C19.6168 15.1311 19.4272 15.5817 19.2135 16.021L19.0885 16.2722H17.8898C16.4317 16.2756 15.0298 15.7097 13.9828 14.6949L13.0197 13.7652C13.4923 13.4973 13.8899 13.1104 14.1721 12.6486L15.0982 13.5414C15.847 14.2669 16.8495 14.6714 17.8921 14.6687H19.7837L19.7813 14.6711Z"
                                fill="#00C8FF"
                              ></path>
                              <path
                                d="M22.1585 10.0891V1.56453L20.1431 1.24907C14.3814 0.349107 8.51384 0.349107 2.74982 1.24907L0.730862 1.56453V10.0891C0.653485 14.7473 3.001 19.2411 6.158 21.6839C6.158 21.6839 8.64717 23.7838 11.4447 24.6183C14.5802 23.6052 16.7313 21.6839 16.7313 21.6839C19.8883 19.2411 22.2358 14.7473 22.1585 10.0891ZM2.33555 10.1153V2.90256L2.82958 2.82519C8.53909 1.94293 14.3502 1.94293 20.0598 2.82519L20.5538 2.90256V5.98576H17.8801C16.422 5.98235 15.0202 6.54829 13.9731 7.56307L13.1827 8.32494C12.6656 7.98719 12.0611 7.80802 11.4435 7.80948C9.68165 7.80948 8.25433 9.23442 8.25433 10.9951C8.25433 11.5962 8.42218 12.1581 8.71265 12.639L7.77816 13.5426C7.02344 14.2699 6.033 14.6699 5.33899 14.6699H3.1129C2.57959 13.1807 2.31174 11.6307 2.33674 10.1141L2.33555 10.1153ZM19.2134 16.021C18.3598 17.7876 17.1289 19.3506 15.7492 20.4173C15.7492 20.4173 13.8946 22.0207 11.434 22.9267C9.19 22.1196 7.14248 20.4173 7.14248 20.4173C5.82944 19.3994 4.65092 17.9352 3.80453 16.2722H4.98424C6.44234 16.2756 7.84417 15.7097 8.89121 14.6949L9.86021 13.7592C10.3422 14.0364 10.8887 14.1817 11.4447 14.1806C13.2065 14.1806 14.6338 12.7557 14.6338 10.9951C14.6338 10.4582 14.5005 9.95225 14.2636 9.50703L15.0862 8.71302C15.8385 7.98686 16.8313 7.58569 17.8801 7.58569H20.5538V10.1141C20.5859 12.0938 20.1217 14.1354 19.2122 16.0198"
                                fill="white"
                              ></path>
                              <path
                                d="M13.3339 10.995C13.333 11.4962 13.1333 11.9765 12.7787 12.3307C12.4241 12.6849 11.9435 12.8839 11.4424 12.8842C10.9412 12.8839 10.4606 12.6849 10.106 12.3307C9.7514 11.9765 9.55173 11.4962 9.55078 10.995C9.55173 10.4939 9.7514 10.0135 10.106 9.65937C10.4606 9.30521 10.9412 9.10615 11.4424 9.10583C11.9435 9.10615 12.4241 9.30521 12.7787 9.65937C13.1333 10.0135 13.333 10.4939 13.3339 10.995Z"
                                fill="#FF6E00"
                              ></path>
                            </g>
                          </g>
                        </g>
                        <defs>
                          <clipPath id="clip0_11_6">
                            <rect width="84.52" height="25" fill="white" transform="translate(0 0.569946)"></rect>
                          </clipPath>
                          <clipPath id="clip1_11_6">
                            <rect width="84.52" height="25" fill="white" transform="translate(0 0.569946)"></rect>
                          </clipPath>
                          <clipPath id="clip2_11_6">
                            <rect
                              width="84.52"
                              height="24.9989"
                              fill="white"
                              transform="translate(0 0.570557)"
                            ></rect>
                          </clipPath>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[0.14000000059604645px] px-2.5 pt-[9px] pb-2.5"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-white">
                      Compra:
                    </p>
                    <div
                      className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-px"
                    >
                      <p
                        className="flex-grow-0 flex-shrink-0 text-[14.899999618530273px] font-bold text-center text-white"
                      >
                        S/ 3,7815
                      </p>
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0 relative gap-[0.14000000059604645px] px-2.5 pt-[9px] pb-2.5 rounded-tr-lg"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-white">
                      Venta:
                    </p>
                    <div
                      className="flex flex-col justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative pb-px"
                    >
                      <p
                        className="flex-grow-0 flex-shrink-0 text-[14.899999618530273px] font-bold text-center text-white"
                      >
                        S/ 3,8125
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="flex justify-start items-center flex-grow-0  flex-shrink-0 bg-[#f7f8fb] border-t-0 border-r-0 border-b border-l-0 border-[#d0d6e3]"
                >
                  <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-60 p-2.5">
                    <div
                      className="flex flex-col justify-start items-start self-stretch flex-grow-0 flex-shrink-0 relative"
                    >
                      <img src="/sunat.svg" alt="Rextie Logo" className="object-cover object-left-top hidden min-[480px]:block ng-star-inserted" />

                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative px-[17px] pt-[13px] pb-[15px]"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-[#3e4045]">
                      S/ 3,7710
                    </p>
                  </div>
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative px-[17px] pt-[13px] pb-[15px]"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-[#3e4045]">
                      S/ 3,7810
                    </p>
                  </div>
                </div>
                <div className="flex justify-start items-center flex-grow-0 rounded-b-lg flex-shrink-0 bg-[#f7f8fb]">
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 w-60 p-2.5 rounded-bl-lg"
                  >
                    <div className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 gap-[5px]">
                      <div
                        className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[30px] w-5 pt-1"
                      >
                        <div
                          className="flex flex-col justify-center items-start flex-grow-0 flex-shrink-0 h-[26px] w-5 relative overflow-hidden"
                        >
                          <svg
                            width="20"
                            height="27"
                            viewBox="0 0 20 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-grow w-5 relative"
                            preserveAspectRatio="none"
                          >
                            <path
                              d="M2.3999 17.4398H16.7999M4.7999 7.83979V17.4398M14.3999 7.83979V17.4398M9.5999 7.83979V17.4398M2.3999 7.83979L9.5999 3.03979L16.7999 7.83979H2.3999Z"
                              stroke="#3E4045"
                              stroke-width="1.6"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            ></path>
                          </svg>
                        </div>
                      </div>
                      <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative pb-px">
                        <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-left text-[#3e4045]">
                          Bancos*
                        </p>
                      </div>
                    </div>
                  </div>
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative px-[17px] pt-[15px] pb-4"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-[#3e4045]">
                      s/3,7250
                    </p>
                  </div>
                  <div
                    className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 relative px-[15px] pt-[15px] pb-4 rounded-br-lg"
                  >
                    <p className="flex-grow-0 flex-shrink-0 text-[12.399999618530273px] text-center text-[#3e4045]">
                      S/ 3,8670
                    </p>
                  </div>
                </div>
                <p className="text-xs text-gray-500 mt-2">*Precios referenciales</p>
              </div>
            </div>


          </div>

          <div className="flex-1 ">
            <div className="  rounded-lg w-full">
              <div className='flex items-center mb-2 gap-3'>
                <span className="w-[15px] h-[15px] bg-[#00c8ff] rounded-full"></span>
                <h2 className="text-[#0032FF] font-bold text-[18px] ">REXTIE BUSINESS</h2>
              </div>
              <h3 className="text-[34px] font-bold mb-4 text-[#0032FF] leading-10">Tenemos un tipo de cambio exclusivo</h3>
              <p className="mb-4 text-[14px] mr-8">
                Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
              </p>
              <a className='bg-[#0032FF] py-2 font-normal text-[14px]  px-5 rounded-md text-white tracking-[.0892857143em]'>Conocer más</a>
            </div>
          </div>
        </div>

      </div>

      {/* 4ta seccion */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full bg-[#0032FF] text-white py-4  flex justify-between px-52  items-center">
          <h2 className="text-2xl font-extrabold">Cambia tu dinero rápido y seguro</h2>
          <a className="bg-white text-[15px] text-[#0032FF] tracking-[.0892857143em] px-4 py-2 rounded-md font-extrabold flex items-center">
            Cambia aquí
          </a>
        </div>
        <div className="max-w-[1100px] mx-auto py-11">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="pr-8 md:w-1/2">
              <h3 className="text-[34px] font-bold text-[#0032FF] mb-4">
                Somos la casa de cambio online líder del Perú
              </h3>
              <p className="text-[#3e4045] pr-28 text-[14px] font-normal">
                ¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-[20px]">
              <div className="bg-[#eff2ff] py-11 rounded-xl flex flex-col  items-center text-center">
                <img className='mb-6' src="/money-blue-icon.svg" alt="+ 6 mil millones" />
                <h4 className="text-lg font-extrabold text-[#0032FF]">+ 6 mil millones</h4>
                <p className="text-[#0032FF] text-lg px-2">de dólares negociados</p>
              </div>
              <div className="bg-[#eff2ff] py-11 rounded-xl flex flex-col items-center text-center">
                <img className='mb-6' src="/user-blue-icon.svg" alt="+ 200 mil clientes" />
                <h4 className="text-lg font-extrabold text-[#0032FF]">+ 200 mil clientes</h4>
                <p className="text-[#0032FF] text-lg px-2">confían en nosotros</p>
              </div>
              <div className="bg-[#eff2ff] py-11 rounded-xl flex flex-col items-center text-center">
                <img className='mb-6' src="/save-money-blue-icon.svg" alt="+ 282 millones" />
                <h4 className="text-lg font-extrabold text-[#0032FF]">+ 282 millones</h4>
                <p className="text-[#0032FF] text-lg px-2">de soles ahorrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5ta seccion */}
      <section className="w-full py-2 md:py-2  bg-[#0032FF]">
        <div className="grid gap-8 lg:gap-12 items-center">
          <div className="flex overflow-hidden w-full" style={{ transform: `translateX(-${offset}px)` }}>
            {logos.concat(logos).map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt="Logo"
                width={140}
                height={70}
                className="mx-4 h-12 w-auto object-contain"
              />
            ))}
          </div>
        </div>
      </section>
      <section className="container mx-auto max-w-[1110px]  justify-center py-[60px]">
        <div className='grid'>
          <h2 className="text-[34px] font-bold text-center text-[#0032FF]  my-[22px]">
            Descubre lo que dicen nuestros clientes
          </h2>

          <p className="text-center text-[14px] font-normal text-[#3e4045] my-[17px]">
            Conoce de primera mano lo que es cambiar dinero con Rextie.
          </p>
        </div>


        <div className='flip-card-people-think-rextie'>
          <div className="flip-card-people-think-rextie__container-cards">
            <div className="bg-[#eff2ff] rounded-lg border-[1px] border-[#707e9b] flip-card-ng-star-inserted ">
              <div className="grid h-full content-between mx-[40px]">
                <h3></h3>
                <p className="text-gray-800 mb-4 text-center text-[16px] ">
                  "Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado".
                </p>
                <p className="font-extrabold text-center text-[#3e4045] mb-4">Chanel Ramos</p>
              </div>
            </div>
            <div className="bg-[#eff2ff] rounded-lg border-[1px] border-[#707e9b] flip-card-ng-star-inserted">
              <div className="grid h-full content-between mx-[40px]">
                <h3></h3>
                <p className="text-gray-800 mb-4 text-center text-[16px]">
                  "La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido".
                </p>
                <p className="font-extrabold text-center text-[#3e4045] mb-4">Grecia Retamozo</p>
              </div>

            </div>
            <div className="bg-[#eff2ff] rounded-lg border-[1px] border-[#707e9b] flip-card-ng-star-inserted">
              <div className="grid h-full content-between mx-[40px]">
                <h3></h3>
                <p className="text-gray-800 mb-4 text-center text-[16px]">
                  "Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo".
                </p>
                <p className="font-extrabold text-[#3e4045] text-center mb-4">Jorge Suarez</p>
              </div>

            </div>
            <div className="bg-[#eff2ff] rounded-lg border-[1px] border-[#707e9b] flip-card-ng-star-inserted">
              <div className="grid h-full content-between mx-[40px]">
                <h3></h3>
                <p className="text-gray-800 mb-4 text-center text-[16px] text-shadow">
                  "Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online".
                </p>
                <p className="font-extrabold text-[#3e4045] text-center mb-4 ">Reni Ravina</p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* 6ta seccion */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-[34px] font-bold text-center text-[#0032FF] mb-4">Rextie en los medios</h1>
        <p className="text-center text-[#3e4045] py-[17px] text-[14px] ">
          Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className=" md:w-1/2">
            <div className="p-0">
              <div className="relative aspect-video">
                <div className="absolute inset-0  pl-44 pb-32 pr-6">
                  <iframe loading="lazy" id="video" src="https://www.youtube.com/embed/j3s5nfNl12Q?autoplay=1" allow="autoplay" title="rextie" className="w-full h-full rounded-lg"></iframe>
                  <button className="rounded-full bg-white/80 hover:bg-white">

                  </button>
                </div>

              </div>

            </div>
          </div>
          <div className="md:w-1/2">
            <div className="flex pr-44">
              <div className='py-[15px]'>
                <button className='bg-[#eff2ff] rounded-[50%] h-[48px] px-[15px] flex items-center justify-center'>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" >
                    <path fill-rule="evenodd" d="M8.707 1.707A1 1 0 1 0 7.293.293l-7 7a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414-1.414L3.414 9H15a1 1 0 1 0 0-2H3.414l5.293-5.293z" fill="#0032ff"></path>
                  </svg>
                </button>
              </div>

              <div className='grid'>
                <div className="flex  py-[15px]">
                  <div className="flex gap-7">
                    <img src="/semana-economica.png" alt="Semana económica" className='w-[136.667px]' />
                    <img src="/la-republica.png" alt="La República" className='w-[136.667px] h-[23px]' />
                    <img src="/peru-21.png" alt="Perú 21" className='w-[136.667px]' />
                  </div>

                </div>
                <div className='grid mb-0 pl-2 pr-5'>
                  <p className="text-[#3e4045] text-[14px]  tracking-normal">
                    "Rextie se convierte en la primera fintech de América Latina en recibir una inversión directa de uno de
                    los bancos más grandes del mundo. Con la operación, sus clientes se beneficiarán de la integración de
                    soluciones como CitiFX Pulse e Instant Payments".
                  </p>
                  <a className="text-[#0032FF] text-[14px] font-bold">
                    Ver noticia
                  </a>
                </div>

              </div>
              <div className='py-[15px]'>
                <button className='bg-[#eff2ff] rounded-[50%] h-[48px] px-[15px] flex items-center justify-center'>
                  <svg _ngcontent-luq-c44="" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none">
                    <path _ngcontent-luq-c44="" fill-rule="evenodd" d="M7.293 1.707A1 1 0 1 1 8.707.293l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L12.586 9H1a1 1 0 0 1-1-1 1 1 0 0 1 1-1h11.586L7.293 1.707z" fill="#0032ff">
                    </path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-white">
        {/* App Section */}
        <div className="p-8 flex justify-center mb-16 ">
          <div className='flex bg-[#eff2ff] p-8 rounded-xl px-28 gap-7'>
            <div className="flex flex-col items-start space-y-4 ">
              <div className="flex items-center space-x-2">
                <img src="/rextie-logo.png" alt="rextie-logo" />
                <div className='grid'>
                  <div className="flex items-center">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="text-lg font-bold ml-1">4.8</span>
                  </div>
                  <p className="text-[8.687px] text-[#3e4045] ">Rextie y tienda de aplicaciones</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold text-[#3e4045]">¡Cambia dinero desde cualquier lugar!</h2>
              <div className="flex space-x-4">
                <img src="/app-store.png" alt="App Store" className="h-10" />
                <img src="/google-play.png" alt="Google Play" className="h-10" />
                <img src="/app-gallery.png" alt="AppGallery" className="h-10" />
              </div>

            </div>
            <div className="relative w-48 h-auto">
              <img src="/apps-rextie.png?" alt="Phone 1" className="w-full h-auto absolute -top-[90px] right-0" />
            </div>
          </div>
        </div>

        {/* Footer Section */}

        <footer className="bg-white py-12 px-4 md:px-8 lg:px-16 ">
          <div className='px-20 flex items-center relative h-20'>
            <button className="absolute left-1/2 transform -translate-x-1/2 p-3 rounded-full bg-[#0032FF]">
              <img src="/v-up.svg" alt="subir" />
            </button>
            <hr className='w-full h-[3px] bg-[#0032FF]' />
          </div>
          <div className="pt-8  text-sm text-black">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <div className='grid gap-[10px]'>
                  <svg _ngcontent-yer-c55="" xmlns="http://www.w3.org/2000/svg" width="90" height="30" fill="none"><g _ngcontent-yer-c55="" clip-path="url(#A)"><g _ngcontent-yer-c55="" fill="#ff6e00"><path _ngcontent-yer-c55="" d="M9.272 12.895c0 .304.034.607.103.903H2.078a15.34 15.34 0 0 1-.101-1.806h7.398a3.98 3.98 0 0 0-.103.903zm15.154-.903a14.93 14.93 0 0 1-.101 1.806h-7.298a4.02 4.02 0 0 0 0-1.806h7.399z"></path></g><g _ngcontent-yer-c55="" fill="#00c8ff"><path _ngcontent-yer-c55="" d="M11.047 9.596a3.95 3.95 0 0 0-1.325 1.469l-1.028-.994c-.922-.897-2.157-1.397-3.441-1.395H1.979V6.694h3.273c1.797-.003 3.524.697 4.814 1.952l.981.95zm12.423 7.846a17.27 17.27 0 0 1-.7 1.671l-.153.31h-1.476c-1.797.004-3.525-.696-4.815-1.951l-1.186-1.149a3.95 3.95 0 0 0 1.418-1.382l1.141 1.105a4.92 4.92 0 0 0 3.442 1.395h2.329z"></path></g><path _ngcontent-yer-c55="" fill-rule="evenodd" d="M26.4 11.773V1.224l-2.485-.39a69.18 69.18 0 0 0-21.428 0l-2.485.39v10.549c-.095 5.765 2.796 11.323 6.685 14.348 0 0 3.067 2.598 6.513 3.631 3.866-1.255 6.512-3.631 6.512-3.631 3.891-3.024 6.781-8.582 6.687-14.347zm-24.421.033V2.88l.608-.094c7.034-1.092 14.193-1.092 21.227 0l.609.095v3.814h-3.296c-1.797-.004-3.525.697-4.815 1.952l-.973.943a3.92 3.92 0 0 0-2.518-.619c-.885.085-1.715.469-2.354 1.089s-1.05 1.439-1.166 2.323.071 1.782.53 2.546L8.68 16.046c-.927.9-2.149 1.396-3.004 1.396H2.934c-.657-1.843-.986-3.762-.955-5.637zm20.792 7.307c-1.049 2.187-2.567 4.12-4.268 5.441 0 0-2.286 1.983-5.318 3.106-2.764-.999-5.287-3.106-5.287-3.106-1.619-1.259-3.069-3.072-4.112-5.13h1.455a6.88 6.88 0 0 0 4.814-1.951l1.194-1.157a3.92 3.92 0 0 0 2.439.493c.845-.105 1.633-.483 2.245-1.076s1.016-1.37 1.15-2.214-.008-1.708-.406-2.463l1.013-.982a4.92 4.92 0 0 1 3.439-1.395h3.294v3.128c.042 2.45-.529 4.976-1.652 7.307zm18.052 1.563l-3.103-5.225h-1.711v5.225h-2.555V6.737h5.17c1.506 0 2.651.415 3.459 1.264s1.203 1.867 1.203 3.093c0 1.811-.977 3.433-2.914 4.055l3.497 5.527h-3.047zM36.01 9.133v3.999h2.331c1.56 0 2.312-.886 2.312-2.018 0-1.113-.752-1.981-2.03-1.981H36.01zm14.16 9.66a5.75 5.75 0 0 0 2.764-.687l.991 1.779c-1.126.679-2.412 1.02-3.848 1.02-3.835 0-5.527-2.64-5.527-5.356 0-1.547.489-2.829 1.466-3.829.996-1.019 2.275-1.528 3.835-1.528 1.484 0 2.688.472 3.628 1.396.959.925 1.429 2.169 1.429 3.754-.002.366-.028.731-.075 1.094H47.05c.319 1.415 1.372 2.358 3.121 2.358zm2.332-4.226c-.207-1.434-1.241-2.32-2.651-2.32h0c-1.429 0-2.482.886-2.801 2.32h5.452zm12.607 6.111h-2.82l-2.087-3.471-2.145 3.471h-2.839l3.422-5.244-3.063-4.998h2.82l1.861 3.244 1.974-3.244h2.783l-3.233 5.074 3.327 5.168zM76.743 6.115c-.884 0-1.579.66-1.579 1.547 0 .905.677 1.547 1.579 1.547a1.49 1.49 0 0 0 1.541-1.547 1.5 1.5 0 0 0-1.541-1.547zm-6.674 4.32V6.814h-2.425v3.621h-1.73v2.075h1.692v4.413c0 2.622 1.186 3.999 3.497 3.999 1.147 0 2.145-.283 2.952-.849l-.771-1.923c-.583.358-1.166.528-1.73.528-.996 0-1.485-.622-1.485-1.848v-4.32h5.414v8.167h2.464V10.435h-7.878zm15.193 8.357a5.75 5.75 0 0 0 2.764-.687l.991 1.779c-1.126.679-2.412 1.02-3.848 1.02-3.835 0-5.527-2.64-5.527-5.356 0-1.547.489-2.829 1.467-3.829.996-1.019 2.275-1.528 3.835-1.528 1.484 0 2.688.472 3.628 1.396.959.925 1.429 2.169 1.429 3.754-.002.366-.028.731-.075 1.094h-7.783c.319 1.415 1.372 2.358 3.12 2.358zm2.332-4.226c-.207-1.434-1.241-2.32-2.651-2.32h0c-1.429 0-2.482.886-2.801 2.32h5.452z" fill="#000096"></path><path _ngcontent-yer-c55="" d="M13.199 15.231c1.286 0 2.329-1.046 2.329-2.336s-1.043-2.336-2.329-2.336-2.329 1.046-2.329 2.336 1.043 2.336 2.329 2.336z" fill="#ff6e00"></path></g><defs _ngcontent-yer-c55=""><clipPath _ngcontent-yer-c55="" id="A"><path _ngcontent-yer-c55="" fill="#fff" d="M0 0h90v29.752H0z"></path></clipPath></defs></svg>
                  <div className='grid gap-3'>
                    <p className="text-xs text-[#3e4045]">Rextie S.A.C.</p>
                    <p className="text-xs font-extrabold text-[#3e4045]">RUC 20610130013</p>
                  </div>
                </div>


                <div className="flex space-x-4 mt-4">
                  <svg _ngcontent-bql-c56="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path _ngcontent-bql-c56="" fill-rule="evenodd" d="M2.853 5.719c1.023 0 1.853-.832 1.853-1.86S3.876 2 2.853 2 1 2.832 1 3.859s.83 1.86 1.853 1.86zM1 19h3.706V7.313H1V19zm17.998-6.531c-.002-1.087-.16-2.148-.697-3.116-.459-.828-1.131-1.421-2.026-1.751-.759-.281-1.544-.346-2.342-.242-.82.107-1.539.434-2.115 1.036-.127.132-.241.271-.359.415l-.282.333V7.548H7.353v.029V19h3.824v-6.346c0-.281.011-.569.088-.832.232-.783 1.129-1.439 2.047-1.5.887-.059 1.714.352 2.013 1.189.135.379.171.771.2 1.167V19h1.413 2.056H19v-6.336l-.002-.152h0v-.043z" fill="#707e9b"></path></svg>
                  <svg _ngcontent-bql-c57="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path _ngcontent-bql-c57="" fill-rule="evenodd" d="M14.618 6.948l-.213 2.699h-2.873V19H7.931V9.647H6V6.948h1.931V5.15c0-.808.023-2.027.621-2.795C9.185 1.545 10.051 1 11.533 1 13.971 1 15 1.34 15 1.34l-.487 2.753s-.79-.229-1.555-.229c-.741 0-1.426.259-1.426.991v2.093h3.086z" fill="#707e9b"></path></svg>
                  <svg _ngcontent-bql-c58="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path _ngcontent-bql-c58="" d="M18.298 4.124C17.649 3.326 16.449 3 14.158 3H5.842c-2.343 0-3.563.347-4.211 1.196C1 5.025 1 6.246 1 7.935v3.22c0 3.273.749 4.935 4.842 4.935h8.316c1.987 0 3.088-.287 3.8-.992.73-.722 1.042-1.902 1.042-3.943v-3.22c0-1.782-.049-3.01-.702-3.812zm-5.742 5.961L8.78 12.152a.56.56 0 0 1-.57-.019c-.174-.11-.28-.308-.28-.52V7.492c0-.212.106-.409.279-.52a.56.56 0 0 1 .569-.02l3.776 2.054c.192.104.313.312.313.539s-.12.435-.312.54z" fill="#707e9b"></path></svg>
                  <svg _ngcontent-bql-c60="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path _ngcontent-bql-c60="" d="M14.44 3.82s.51.5 0 0A4.28 4.28 0 0 1 13.38 1h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.61 2.61 0 0 1-2.6-2.6c0-1.72 1.66-3.01 3.37-2.48V7.66C5.02 7.2 2 9.88 2 13.3 2 16.63 4.76 19 7.69 19c3.14 0 5.69-2.55 5.69-5.7V7.01a7.35 7.35 0 0 0 4.3 1.38V5.3s-1.88.09-3.24-1.48z" fill="#707e9b"></path></svg>

                  <svg _ngcontent-bql-c59="" xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none"><path _ngcontent-bql-c59="" fill-rule="evenodd" d="M13.375 1h-6.75C3.519 1 1 3.519 1 6.625v6.75C1 16.481 3.519 19 6.625 19h6.75C16.481 19 19 16.481 19 13.375v-6.75C19 3.519 16.481 1 13.375 1zM10 5.235c-2.631 0-4.765 2.133-4.765 4.765S7.369 14.765 10 14.765s4.765-2.133 4.765-4.765S12.631 5.235 10 5.235zm0 7.743c-1.641 0-2.978-1.336-2.978-2.978A2.98 2.98 0 0 1 10 7.022 2.98 2.98 0 0 1 12.978 10c0 1.641-1.336 2.978-2.978 2.978zm5.559-8.009A1.06 1.06 0 0 1 14.5 6.028a1.06 1.06 0 0 1-1.059-1.059A1.06 1.06 0 0 1 14.5 3.91a1.06 1.06 0 0 1 1.059 1.059z" fill="#707e9b"></path></svg>
                </div>
              </div>
              <div>
                <h3 className="font-extrabold mb-4 ">Servicios</h3>
                <ul className="space-y-2 text-xs">
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Rextie Business</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Rextie Factoring</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Confirming</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Visa <span className="bg-orange-500 py-1 text-white text-xs px-1 rounded">nuevo</span></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Recursos</h3>
                <ul className="space-y-2 text-xs">
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Blog</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Tipo de cambio</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">App para cambiar dólares</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Cambio de Dólar a Soles</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Precio del Dólar</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Dólar</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Soporte</h3>
                <ul className="space-y-2 text-xs">
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Preguntas frecuentes</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Cómo cambiar dólares con REXTIE</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Términos y Condiciones</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Política de Cookies</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Política de Privacidad</Link></li>
                  <li><Link href="#" className="text-[#3e4045] hover:text-gray-800">Mapa del sitio</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Contacto</h3>
                <ul className="space-y-8 text-xs">
                  <div className="text-[#3e4045] hover:text-gray-800">
                    <li><Link href="#" className="text-blue-600 font-extrabold hover:text-gray-800">info@rextie.com</Link></li>
                    <li >T. 01 700 3301</li>
                    <li>C. 963 896 793</li>
                  </div>
                  <div className="text-[#3e4045] hover:text-gray-800">
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div className="text-[#3e4045] hover:text-gray-800">
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div className="text-[#3e4045] hover:text-gray-800">
                    <li>Sábados:</li>
                    <li>9:00 am. - 3:00 pm.</li>
                  </div>
                  <div className="text-[#3e4045] hover:text-gray-800">
                    <li>Av. José Gálvez</li>
                    <li>Barrenechea 566, Of. 101,</li>
                    <li>Urb. Corpac, San Isidro, Lima.</li>
                  </div>
                  <div>
                    <Image src="/descarga.png" alt="Perú 21" width={150} height={100} />
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div >
  );
}
