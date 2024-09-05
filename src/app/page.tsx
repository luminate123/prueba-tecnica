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
    <div>
      <div className="bg-[ min-[480px]: bg-no-repeat bg-cover bg-position-x-center h-auto min-[1281px]:h-[682px] image-container text-white px-6 md:px-32" style={{
        backgroundImage: "url('/banner-person.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundPositionX: "center",
      }}>
        {/* Header */}
        <header className="font-size-14 z-[100] h-82 w-full left-0 top-0 md:top-10 ng-star-inserted">
          <div className="flex items-center px-8">
            <nav className="hidden md:flex space-x-4 font-bold">
              <a href="#" className="border-b-2 border-red-500 pb-1">Personas</a>
              <a href="#">Empresas</a>
            </nav>
          </div>
          <nav className="max-w-7xl max-[1919px]:max-w-[75rem] mx-auto flex items-center justify-between h-[82px] px-2.5 ng-star-inserted">
            <img src="/rextie-icon-redesign.svg" alt="Rextie Logo" className="object-cover object-left-top hidden min-[480px]:block ng-star-inserted" />
            <div className='flex items-center'>
              <div className='line-menu gap-5 flex-wrap pl-5 justify-end hidden min-[1025px]:flex ng-star-inserted text-sm'>
                <a href="#" className="hidden md:inline">Nosotros</a>
                <a href="#" className="hidden md:inline">Blog</a>
                <div className="relative group">
                  <button className="flex items-center">
                    Servicios
                    <ChevronDownIcon className="h-5 w-5 ml-1 text-orange-500" />
                  </button>
                </div>
              </div>
              <span className='w-10 items-center justify-center text-white hidden min-[1025px]:flex ng-star-inserted'>|</span>
              <a href="#" className="text-[#ffffff] px-4 py-2 rounded-full text-sm font-medium">Iniciar sesión</a>
              <a href="#" className="bg-[#212ea9] px-4 py-2 rounded-xl text-sm font-medium">Regístrate</a>
            </div>
            {/* Sidebar */}
            <div className="block lg:hidden">
              <button onClick={toggleSidebar} className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
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
        <div className="container mx-auto px-8 py-12 pt-16 flex flex-col md:flex-row justify-between ">
          {/* izquierda */}
          <div className="h-[390.50px] pt-6 pr-40 flex-col justify-start items-start inline-flex">
            <div className="flex-col justify-start items-start flex">
              <div className="pb-6 flex-col justify-start items-start flex">
                <div className="pr-[16.64px] flex-col justify-start items-start flex">
                  <div className="text-white text-5xl font-black leading-[56px]">La casa de cambio online líder del Perú</div>
                </div>
              </div>
              <div className="pr-3 flex-col justify-start items-start flex">
                <div className="pr-[15.09px] flex-col justify-start items-start flex">
                  <div className="text-white text-base font-medium leading-normal pr-14">Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes</div>
                </div>
              </div>
              <div className="pt-12 pb-6 flex-col justify-start items-start flex">
                <div className="justify-start items-start gap-4 inline-flex">
                  <div className="self-stretch py-[5.25px] justify-start items-center gap-4 flex">
                    <div className="w-[87px] h-7 relative">
                      <div className="w-[87px] h-7 left-0 top-0 absolute">
                        <img className="w-[auto] h-auto relative" src="/visa-white-yellow-logo.svg" />
                      </div>
                    </div>
                    <div className="w-[95px] flex-col justify-start items-start inline-flex">
                      <div className="text-white text-xs font-normal leading-[18px]">Aliado Estratégico</div>
                    </div>
                  </div>
                  <div className="self-stretch justify-start items-center gap-4 flex">
                    <div className="justify-start items-center gap-4 flex">
                      <div className="w-[50px] h-8 relative">
                        <div className="w-[50px] h-8 left-0 top-0 absolute">
                          <img className="w-[auto] h-auto relative" src="/citi-white.svg" />
                        </div>
                      </div>
                      <div className="w-12 h-[46.50px] relative">
                        <div className="w-12 h-[46.50px] left-0 top-0 absolute">
                          <img className="w-[72px] h-auto relative" src="/rpp-home.svg" />
                        </div>
                      </div>
                    </div>
                    <div className="w-[95px] flex-col justify-start items-start inline-flex">
                      <div className="text-white text-xs font-normal leading-[18px]">Inversionistas estratégicos</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-6 flex-col justify-start items-start flex">
                <div className="justify-start items-center inline-flex">
                  <div className="pr-2.5 flex-col justify-start items-start inline-flex">
                    <img className="w-[71px] h-10 relative" src="/iso-white.png" />
                  </div>
                  <div className="flex-col justify-start items-start inline-flex">
                    <div className="text-white text-xs font-normal leading-[18px]">Certificados con ISO 27001</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* derecha*/}
          <div className="h-[528px] flex-col justify-center items-center inline-flex">
            <div className="h-[505px] p-4 bg-[#000f49]/80 rounded-3xl backdrop-blur-md flex-col justify-start items-start gap-3 flex">
              <div className="self-stretch px-[52.08px] justify-center items-center gap-3 inline-flex">
                <img className="w-6 h-6 relative" src="/trophy-white.png" />
                <div className="flex-col justify-start items-start inline-flex">
                  <div className="text-white text-xs font-bold  leading-[18px]">Cambia al instante con todos los bancos en Perú</div>
                </div>
              </div>
              <div className="self-stretch justify-center items-start inline-flex">
                <div className="grow shrink basis-0 px-6 pt-[25px] pb-6 bg-white rounded-[22px] flex-col justify-start items-start gap-6 inline-flex">
                  <div className="self-stretch h-14 pb-[3px] bg-white rounded-xl flex-col justify-center items-center flex">
                    <div className="w-[388px] bg-[#0024b3]/10 rounded-xl justify-center items-center inline-flex">
                      <div className="grow shrink basis-0 h-[53px] p-1 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-[45px] pl-[29.42px] pr-[29.44px] py-3 rounded-xl flex-col justify-center items-center flex">
                          <div className="flex-col justify-start items-center flex">
                            <div className="text-center text-[#000f49] text-sm font-semibold  leading-[21px]">Compra S/ 3.7830</div>
                          </div>
                        </div>
                      </div>
                      <div className="grow shrink basis-0 h-[53px] p-1 flex-col justify-start items-start inline-flex">
                        <div className="self-stretch h-[45px] px-[40.50px] py-3 bg-white rounded-xl flex-col justify-center items-center flex">
                          <div className="flex-col justify-start items-center flex">
                            <div className="text-center text-[#000f49] text-sm font-semibold  leading-[21px]">Venta S/ 3.8110</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h-[308px] relative">
                    <div className="w-[388px] pl-[122.28px] pr-[122.30px] pt-px pb-0.5 left-0 top-[168px] absolute bg-white justify-center items-center inline-flex">
                      <div className="text-center text-[#0094b3] text-xs font-bold ">Usar un cupón o código</div>
                    </div>
                    <div className="w-[388px] h-[37px] left-0 top-[212px] absolute">
                      <div className="left-[81.56px] top-[3.50px] absolute flex-col justify-start items-start inline-flex">
                        <div className="text-[#000f49] text-sm font-semibold  leading-[21px]">Ahorro promedio*</div>
                      </div>
                      <div className="left-[215.31px] top-[3px] absolute flex-col justify-start items-start inline-flex">
                        <div className="w-6 h-[19px] relative">
                          <div className="w-[22.21px] h-[18.73px] left-[0.89px] top-[0.14px] absolute">
                            <div className="w-[20.15px] h-[16.95px] left-[0.78px] top-[0.89px] absolute">
                              <svg _ngcontent-hvw-c9="" width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg"><g _ngcontent-hvw-c9="" id="AHORRO ICONO" clip-path="url(#clip0_748_1177)"><g _ngcontent-hvw-c9="" id="Capa 2"><path _ngcontent-hvw-c9="" id="Vector" d="M15.9225 17.7753L14.8656 17.9693C14.5737 18.0123 14.2819 17.6797 14.2118 17.2227L14.0466 16.182C13.3175 16.3295 12.5756 16.4053 11.8317 16.4083C10.784 16.4026 9.74227 16.2503 8.73678 15.9558L8.55127 17.2205C8.48339 17.6729 8.19381 18.0146 7.90196 17.9716L5.89296 17.6752C5.60111 17.6322 5.42012 17.2227 5.48799 16.7702L5.79568 14.6753L5.81604 14.5622C4.11246 13.3405 3.04688 11.6052 3.04688 9.67992C3.0483 9.04582 3.16482 8.41725 3.39076 7.82477L3.47447 7.6121C4.60566 4.91986 7.92458 2.97195 11.8317 2.97195C12.5361 2.97156 13.2389 3.03669 13.9312 3.16651C14.4787 2.50363 15.5375 1.41543 16.8497 1.03082C16.8823 1.02225 16.9167 1.02263 16.9491 1.03191C16.9815 1.04119 17.0109 1.05904 17.034 1.08358C17.0571 1.10812 17.0733 1.13844 17.0806 1.17135C17.088 1.20427 17.0864 1.23856 17.0759 1.27063C16.7653 2.15606 16.5854 3.08208 16.542 4.01943C18.3972 4.92439 19.7795 6.3429 20.3383 8.01481H21.1437C21.3237 8.01481 21.4964 8.08631 21.6236 8.2136C21.7509 8.34088 21.8224 8.51352 21.8224 8.69352V11.2885C21.8224 11.4685 21.7509 11.6411 21.6236 11.7684C21.4964 11.8957 21.3237 11.9672 21.1437 11.9672H20.0894C19.9078 12.3246 19.6977 12.6646 19.462 12.9844" stroke="#000F49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path _ngcontent-hvw-c9="" id="Vector_2" d="M1.93382 6.3611C1.6759 4.80232 2.86818 4.41771 2.89759 4.3702C2.92701 4.32269 2.88402 4.15527 2.8252 4.15527C2.81162 4.15527 1.42026 4.64621 1.7121 6.3973C1.86595 7.32035 2.66231 7.68686 3.3908 7.82487C3.41794 7.75473 3.44509 7.68233 3.4745 7.6122C2.80484 7.49456 2.06956 7.17556 1.93382 6.3611Z" fill="#000F49" stroke="#000F49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path _ngcontent-hvw-c9="" id="Vector_3" d="M16.875 9.27614C17.4316 9.27614 17.8828 8.82492 17.8828 8.26832C17.8828 7.71172 17.4316 7.2605 16.875 7.2605C16.3184 7.2605 15.8672 7.71172 15.8672 8.26832C15.8672 8.82492 16.3184 9.27614 16.875 9.27614Z" fill="#000F49"></path></g><path _ngcontent-hvw-c9="" id="Vector_4" d="M17.6719 17.1437C18.5198 17.1437 19.2071 16.4563 19.2071 15.6085C19.2071 14.7606 18.5198 14.0732 17.6719 14.0732C16.8241 14.0732 16.1367 14.7606 16.1367 15.6085C16.1367 16.4563 16.8241 17.1437 17.6719 17.1437Z" fill="#FF6E00"></path></g><defs _ngcontent-hvw-c9=""><clipPath _ngcontent-hvw-c9="" id="clip0_748_1177"><rect _ngcontent-hvw-c9="" width="22.2124" height="18.7281" fill="white" transform="translate(0.894531 0.135986)"></rect></clipPath></defs></svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="left-[249.31px] top-[3.50px] absolute flex-col justify-start items-start inline-flex">
                        <div className="text-[#000f49] text-sm font-semibold  leading-[21px]">S/ 30.83</div>
                      </div>
                    </div>
                    <div className="w-[388px] h-14 pl-[130.05px] pr-[130.04px] py-[16.50px] left-0 top-[252px] absolute bg-[#0024b3] rounded-xl justify-center items-center inline-flex">
                      <div className="py-px flex-col justify-start items-center inline-flex">
                        <div className="text-center text-white text-[15px] font-bold ">Ingresar a Rextie</div>
                      </div>
                    </div>
                    <div className="h-[152px] left-0 top-0 absolute flex-col justify-start items-start gap-2 inline-flex">
                      <div className="self-stretch h-[72px] pl-[15px] pr-[15.02px] py-[11px] bg-white rounded-xl border border-[#000097]/60 justify-center items-center inline-flex">
                        <div className="w-[71.59px] flex-col justify-start items-start inline-flex">
                          <div className="self-stretch h-[18px] flex-col justify-start items-start flex">
                            <div className="self-stretch text-[#000f49] text-xs font-normal  leading-[18px]">Envía</div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div className="justify-start items-start flex">
                              <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M3.44801 0C1.58701 0 0.641014 1.475 0.641014 3.293V9.878C0.641014 11.696 1.58801 13.17 3.44801 13.17H6.81601V0H3.44801ZM15.799 0H12.43V13.17H15.799C17.659 13.17 18.606 11.696 18.606 9.878V3.293C18.606 1.475 17.659 0.001 15.799 0.001V0Z" fill="#EC1C24" />
                              </svg>

                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                              <div className="text-[#000f49] text-xl font-semibold  leading-[30px]">PEN</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[286.39px] flex-col justify-start items-start inline-flex">
                          <div className="self-stretch pt-5 justify-end items-start inline-flex">
                            <div className="self-stretch justify-start items-start flex">
                              <div className="self-stretch justify-start items-start flex">
                                <div className="self-stretch bg-white flex-col justify-start items-start inline-flex">
                                  <div className="self-stretch h-8 py-px flex-col justify-start items-end flex">
                                    <div className="text-right text-[#000f49] text-xl font-semibold ">S/ 1,000.00</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className='absolute top-[35%] right-[50%]'>
                        <svg width="41" height="40" viewBox="0 0 41 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M40.64 20C40.64 8.9543 31.6857 0 20.64 0C9.59432 0 0.640015 8.9543 0.640015 20C0.640015 31.0457 9.59432 40 20.64 40C31.6857 40 40.64 31.0457 40.64 20Z" fill="#0024B3" />
                          <mask id="mask0_1_369" style={{ maskType: 'luminance' }} maskUnits="userSpaceOnUse" x="10" y="10" width="21" height="20">
                            <path d="M30.64 10H10.64V30H30.64V10Z" fill="white" />
                          </mask>
                          <g mask="url(#mask0_1_369)">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.8841 16.4225C10.5586 16.0971 10.5586 15.5694 10.8841 15.244L14.2174 11.9107C14.5428 11.5852 15.0705 11.5852 15.3959 11.9107L18.7293 15.244C19.0547 15.5694 19.0547 16.0971 18.7293 16.4225C18.4038 16.7479 17.8762 16.7479 17.5507 16.4225L14.8067 13.6784L12.0626 16.4225C11.7372 16.7479 11.2095 16.7479 10.8841 16.4225Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M15.64 24.1666C15.64 24.8296 15.9034 25.4655 16.3722 25.9344C16.8411 26.4032 17.477 26.6666 18.14 26.6666H19.8067C20.2669 26.6666 20.64 27.0397 20.64 27.4999C20.64 27.9602 20.2669 28.3333 19.8067 28.3333H18.14C17.0349 28.3333 15.9751 27.8943 15.1937 27.1129C14.4123 26.3315 13.9733 25.2717 13.9733 24.1666V12.4999C13.9733 12.0397 14.3464 11.6666 14.8067 11.6666C15.2669 11.6666 15.64 12.0397 15.64 12.4999V24.1666Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M22.5507 23.5773C22.8762 23.2519 23.4038 23.2519 23.7293 23.5773L26.4733 26.3214L29.2174 23.5773C29.5428 23.2519 30.0705 23.2519 30.3959 23.5773C30.7214 23.9028 30.7214 24.4304 30.3959 24.7558L27.0626 28.0892C26.7372 28.4146 26.2095 28.4146 25.8841 28.0892L22.5507 24.7558C22.2253 24.4304 22.2253 23.9028 22.5507 23.5773Z" fill="white" />
                            <path fillRule="evenodd" clipRule="evenodd" d="M20.64 12.4999C20.64 12.0397 21.0131 11.6666 21.4733 11.6666H23.14C24.2451 11.6666 25.3049 12.1056 26.0863 12.887C26.8677 13.6684 27.3067 14.7282 27.3067 15.8333V27.4999C27.3067 27.9602 26.9336 28.3333 26.4733 28.3333C26.0131 28.3333 25.64 27.9602 25.64 27.4999V15.8333C25.64 15.1702 25.3766 14.5343 24.9078 14.0655C24.4389 13.5966 23.803 13.3333 23.14 13.3333H21.4733C21.0131 13.3333 20.64 12.9602 20.64 12.4999Z" fill="white" />
                          </g>
                        </svg>
                      </div>
                      <div className="self-stretch h-[72px] pl-[15px] pr-[15.02px] py-[11px] bg-white rounded-xl border border-[#000097]/60 justify-center items-center inline-flex">
                        <div className="w-[71.59px] flex-col justify-start items-start inline-flex">
                          <div className="self-stretch h-[18px] flex-col justify-start items-start flex">
                            <div className="self-stretch text-[#000f49] text-xs font-normal  leading-[18px]">Recibe</div>
                          </div>
                          <div className="self-stretch justify-start items-center gap-[5px] inline-flex">
                            <div className="justify-start items-start flex">
                              <svg width="19" height="14" viewBox="0 0 19 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.94117 2.02319V3.03492H18.5991C18.5842 2.70865 18.5522 2.29618 18.4377 2.02319" fill="#EC1C24" />
                                <path d="M17.9352 1.01263H7.94117V2.02436H18.4377C18.3237 1.64691 18.1541 1.30268 17.9352 1.01263Z" fill="#E6E7E8" />
                                <path d="M15.8016 0.000793457H7.94117V1.01252H17.9352C17.4666 0.386927 16.6955 0.000793457 15.8016 0.000793457Z" fill="#EC1C24" />
                                <path d="M18.5991 3.03595H7.94117V4.04768H18.6089V3.3733C18.6089 3.31313 18.6053 3.25446 18.6036 3.1955C18.6025 3.17933 18.6008 3.13773 18.5991 3.03595Z" fill="#E6E7E8" />
                                <path d="M7.94117 5.0594H18.6089V4.04767H7.94117V5.0594Z" fill="#EC1C24" />
                                <path d="M7.94117 6.07026H18.6089V5.05853H7.94117V6.07026Z" fill="#E6E7E8" />
                                <path d="M7.94117 6.07013H18.6089V7.08186H7.94117V6.07013Z" fill="#EC1C24" />
                                <path d="M0.640503 7.08362V8.09535H18.6073V7.08362H7.9395H0.640503Z" fill="#E6E7E8" />
                                <path d="M0.640503 8.0946H18.6073V9.10633H0.640503V8.0946Z" fill="#EC1C24" />
                                <path d="M0.641907 9.72856C0.641907 9.72856 0.63938 9.97371 0.646118 10.118H18.6017C18.6095 9.97012 18.6059 9.72856 18.6059 9.72856L18.6073 9.10626H0.640503L0.641907 9.72856Z" fill="#E6E7E8" />
                                <path d="M3.44702 13.1701H15.7992C16.6955 13.1701 17.4406 12.8229 17.9496 12.1404H1.29382C1.81935 12.8379 2.57844 13.1701 3.44562 13.1701" fill="#EC1C24" />
                                <path d="M1.29523 12.1414H17.951C18.173 11.8406 18.3388 11.4972 18.4394 11.1297H0.80957C0.912064 11.4961 1.07719 11.8391 1.29664 12.1414" fill="#E6E7E8" />
                                <path d="M0.807233 11.1297H18.4371C18.529 10.8006 18.5837 10.4609 18.5999 10.118H0.644409C0.672202 10.464 0.698029 10.7253 0.807233 11.1297Z" fill="#EC1C24" />
                                <path d="M7.9395 0.000793457H3.44781C1.58741 0.000793457 0.640503 1.47499 0.640503 3.29341V7.0829H7.9395V0.000793457Z" fill="#176496" />
                                <path d="M1.42787 1.78971L1.58059 1.66459L1.73302 1.78971L1.67378 1.58856L1.82566 1.46554H1.63814L1.58003 1.26349L1.52219 1.46554H1.33495L1.48738 1.58856L1.42787 1.78971ZM2.43681 1.78971L2.58953 1.66459L2.74197 1.78971L2.68301 1.58856L2.83461 1.46554H2.64736L2.58925 1.26349L2.53142 1.46554H2.34361L2.49605 1.58856L2.43681 1.78971ZM3.54991 1.78971L3.70235 1.66459L3.85506 1.78971L3.79583 1.58856L3.94742 1.46554H3.7613L3.70235 1.26349L3.64424 1.46554H3.45811L3.60886 1.58856L3.54991 1.78971ZM4.65487 1.78971L4.8073 1.66459L4.96002 1.78971L4.90107 1.58856L5.05266 1.46554H4.86457L4.8073 1.26349L4.74947 1.46554H4.56194L4.7141 1.58856L4.65487 1.78971ZM5.76375 1.78971L5.91647 1.66459L6.06891 1.78971L6.00996 1.58856L6.16183 1.46554H5.97402L5.91619 1.26349L5.85836 1.46554H5.67111L5.82271 1.58856L5.76375 1.78971ZM1.9649 2.31503L2.11734 2.19021L2.26978 2.31503L2.2111 2.11418L2.3627 1.99116H2.17517L2.11706 1.78941L2.06007 1.99116H1.87198L2.02386 2.11418L1.9649 2.31503ZM2.97413 2.31503L3.12657 2.19021L3.279 2.31503L3.22005 2.11418L3.37165 1.99116H3.18299L3.12657 1.78941L3.06846 1.99116H2.88121L3.03308 2.11418L2.97413 2.31503ZM4.08723 2.31503L4.23938 2.19021L4.39182 2.31503L4.33287 2.11418L4.48474 1.99116H4.2975L4.23938 1.78941L4.18127 1.99116H3.99375L4.14562 2.11418L4.08723 2.31503ZM5.19162 2.31503L5.34434 2.19021L5.49706 2.31503L5.43726 2.11418L5.58942 1.99116H5.40217L5.34406 1.78941L5.28651 1.99116H5.09898L5.25086 2.11418L5.19162 2.31503ZM6.30191 2.31503L6.45323 2.19021L6.60567 2.31503L6.54615 2.11418L6.69831 1.99116H6.51134L6.45295 1.78941L6.3954 1.99116H6.20787L6.35975 2.11418L6.30191 2.31503ZM6.9271 1.78971L7.07954 1.66459L7.23226 1.78971L7.17302 1.58856L7.32462 1.46554H7.13849L7.07926 1.26349L7.02143 1.46554H6.8325L6.98606 1.58856L6.9271 1.78971ZM1.41299 5.99348L1.56571 5.86986L1.71814 5.99348L1.65919 5.79413L1.81078 5.6708L1.62354 5.6714L1.56515 5.46965L1.50788 5.6714L1.32007 5.6708L1.47194 5.79413L1.41299 5.99348ZM2.42221 5.99348L2.57465 5.86986L2.72737 5.99348L2.66813 5.79413L2.81973 5.6708L2.63276 5.6714L2.57437 5.46965L2.51682 5.6714L2.32957 5.6708L2.48117 5.79413L2.42221 5.99348ZM3.53531 5.99348L3.68775 5.86986L3.84047 5.99348L3.78123 5.79413L3.93283 5.6708L3.74446 5.6714L3.68747 5.46965L3.62964 5.6714L3.44239 5.6708L3.59426 5.79413L3.53531 5.99348ZM4.64027 5.99348L4.79271 5.86986L4.94514 5.99348L4.88703 5.79413L5.03778 5.6708L4.85026 5.6714L4.79242 5.46965L4.73459 5.6714L4.54735 5.6708L4.69894 5.79413L4.64027 5.99348ZM5.74888 5.99348L5.90159 5.86986L6.05431 5.99348L5.99592 5.79413L6.14667 5.6708L5.95942 5.6714L5.90131 5.46965L5.84376 5.6714L5.65623 5.6708L5.80783 5.79413L5.74888 5.99348ZM6.91222 5.99348L7.06466 5.86986L7.21738 5.99348L7.15814 5.79413L7.31002 5.6708L7.12165 5.6714L7.06438 5.46965L7.00655 5.6714L6.81846 5.6708L6.97118 5.79413L6.91222 5.99348ZM1.42787 2.84095L1.58059 2.71583L1.73302 2.84095L1.67378 2.6398L1.82566 2.51678L1.63814 2.51738L1.58003 2.31503L1.52219 2.51738L1.33495 2.51678L1.48738 2.6398L1.42787 2.84095ZM2.43681 2.84095L2.58953 2.71583L2.74197 2.84095L2.68301 2.6398L2.83461 2.51678L2.64736 2.51738L2.58925 2.31503L2.53142 2.51738L2.34361 2.51678L2.49605 2.6398L2.43681 2.84095ZM3.54991 2.84095L3.70235 2.71583L3.85506 2.84095L3.79583 2.6398L3.94742 2.51678L3.7613 2.51738L3.70235 2.31503L3.64424 2.51738L3.45811 2.51678L3.60886 2.6398L3.54991 2.84095ZM4.65487 2.84095L4.8073 2.71583L4.96002 2.84095L4.90107 2.6398L5.05266 2.51678L4.86457 2.51738L4.8073 2.31503L4.74947 2.51738L4.56194 2.51678L4.7141 2.6398L4.65487 2.84095ZM5.76375 2.84095L5.91647 2.71583L6.06891 2.84095L6.00996 2.6398L6.16183 2.51678L5.97402 2.51738L5.91619 2.31503L5.85836 2.51738L5.67111 2.51678L5.82271 2.6398L5.76375 2.84095ZM1.9649 3.36657L2.11734 3.24175L2.26978 3.36657L2.2111 3.16572L2.3627 3.0421H2.17517L2.11706 2.84095L2.06007 3.0421H1.87198L2.02386 3.16572L1.9649 3.36657ZM2.97413 3.36657L3.12657 3.24175L3.279 3.36657L3.22005 3.16572L3.37165 3.0421H3.18299L3.12657 2.84095L3.06846 3.0421H2.88121L3.03308 3.16572L2.97413 3.36657ZM4.08723 3.36657L4.23938 3.24175L4.39182 3.36657L4.33287 3.16572L4.48474 3.0421H4.2975L4.23938 2.84095L4.18127 3.0421H3.99375L4.14562 3.16572L4.08723 3.36657ZM5.19162 3.36657L5.34434 3.24175L5.49706 3.36657L5.43726 3.16572L5.58942 3.0421H5.40217L5.34406 2.84095L5.28651 3.0421H5.09898L5.25086 3.16572L5.19162 3.36657ZM6.30191 3.36657L6.45323 3.24175L6.60567 3.36657L6.54615 3.16572L6.69831 3.0421H6.51134L6.45295 2.84095L6.3954 3.0421H6.20787L6.35975 3.16572L6.30191 3.36657ZM6.9271 2.84095L7.07954 2.71583L7.23226 2.84095L7.17302 2.6398L7.32462 2.51678L7.13849 2.51738L7.07926 2.31503L7.02143 2.51738L6.8325 2.51678L6.98606 2.6398L6.9271 2.84095ZM1.41299 3.89219L1.56571 3.76737L1.71814 3.89219L1.65891 3.69164L1.81078 3.56832L1.62326 3.56892L1.56515 3.36657L1.50788 3.56892L1.32007 3.56832L1.47194 3.69164L1.41299 3.89219ZM2.42221 3.89219L2.57465 3.76737L2.72737 3.89219L2.66813 3.69164L2.81973 3.56832L2.63276 3.56892L2.57437 3.36657L2.51682 3.56892L2.32957 3.56832L2.48089 3.69164L2.42221 3.89219ZM3.53531 3.89219L3.68775 3.76737L3.84019 3.89219L3.78123 3.69164L3.93283 3.56832L3.74446 3.56892L3.68747 3.36657L3.62964 3.56892L3.44239 3.56832L3.59426 3.69164L3.53531 3.89219ZM4.64027 3.89219L4.79242 3.76737L4.94514 3.89219L4.88703 3.69164L5.03778 3.56832L4.85026 3.56892L4.79242 3.36657L4.73459 3.56892L4.54735 3.56832L4.69894 3.69164L4.64027 3.89219ZM5.74888 3.89219L5.90159 3.76737L6.05403 3.89219L5.99592 3.69164L6.14667 3.56832L5.95914 3.56892L5.90131 3.36657L5.84376 3.56892L5.65623 3.56832L5.80783 3.69164L5.74888 3.89219ZM1.95002 4.41781L2.10246 4.29329L2.2549 4.41781L2.19622 4.21846L2.34754 4.09454H2.16001L2.10218 3.89219L2.04463 4.09454H1.8571L2.00898 4.21846L1.95002 4.41781ZM2.95925 4.41781L3.11169 4.29329L3.26413 4.41781L3.20517 4.21846L3.35677 4.09454H3.16896L3.11141 3.89219L3.05358 4.09454H2.86605L3.01821 4.21846L2.95925 4.41781ZM4.07263 4.41781L4.22451 4.29329L4.37722 4.41781L4.31715 4.21846L4.46986 4.09454H4.28262L4.22451 3.89219L4.16668 4.09454H3.97915L4.13102 4.21846L4.07263 4.41781ZM5.17618 4.41781L5.32946 4.29329L5.48218 4.41781L5.42323 4.21846L5.57454 4.09454H5.38729L5.32918 3.89219L5.27163 4.09454H5.0841L5.23598 4.21846L5.17618 4.41781ZM6.28507 4.41781L6.43835 4.29329L6.59107 4.41781L6.53183 4.21846L6.68399 4.09454H6.49674L6.43835 3.89219L6.38052 4.09454H6.19299L6.34487 4.21846L6.28507 4.41781ZM6.91222 3.89219L7.06466 3.76737L7.2171 3.89219L7.15814 3.69164L7.31002 3.56832L7.12165 3.56892L7.06438 3.36657L7.00655 3.56892L6.81846 3.56832L6.97118 3.69164L6.91222 3.89219ZM1.41299 4.94373L1.56571 4.82011L1.71814 4.94373L1.65891 4.74288L1.81078 4.61956L1.62326 4.62016L1.56515 4.41781L1.50788 4.62016L1.32007 4.61956L1.47194 4.74288L1.41299 4.94373ZM2.42221 4.94373L2.57465 4.82011L2.72737 4.94373L2.66813 4.74288L2.81973 4.61956L2.63276 4.62016L2.57437 4.41781L2.51682 4.62016L2.32957 4.61956L2.48089 4.74288L2.42221 4.94373ZM3.53531 4.94373L3.68775 4.82011L3.84019 4.94373L3.78123 4.74288L3.93283 4.61956L3.74446 4.62016L3.68747 4.41781L3.62964 4.62016L3.44239 4.61956L3.59426 4.74288L3.53531 4.94373ZM4.64027 4.94373L4.79242 4.82011L4.94514 4.94373L4.88703 4.74288L5.03778 4.61956L4.85026 4.62016L4.79242 4.41781L4.73459 4.62016L4.54735 4.61956L4.69894 4.74288L4.64027 4.94373ZM5.74888 4.94373L5.90159 4.82011L6.05403 4.94373L5.99592 4.74288L6.14667 4.61956L5.95914 4.62016L5.90131 4.41781L5.84376 4.62016L5.65623 4.61956L5.80783 4.74288L5.74888 4.94373ZM1.95002 5.46965L2.10246 5.34453L2.2549 5.46965L2.19622 5.26851L2.34754 5.14638H2.16001L2.10218 4.94373L2.04463 5.14638H1.8571L2.00898 5.26851L1.95002 5.46965ZM2.95925 5.46965L3.11169 5.34453L3.26413 5.46965L3.20517 5.26851L3.35677 5.14638H3.16896L3.11141 4.94373L3.05358 5.14638H2.86605L3.01821 5.26851L2.95925 5.46965ZM4.07263 5.46965L4.22451 5.34453L4.37722 5.46965L4.31715 5.26851L4.46986 5.14638H4.28262L4.22451 4.94373L4.16668 5.14638H3.97915L4.13102 5.26851L4.07263 5.46965ZM5.17618 5.46965L5.32946 5.34453L5.48218 5.46965L5.42323 5.26851L5.57454 5.14638H5.38729L5.32918 4.94373L5.27163 5.14638H5.0841L5.23598 5.26851L5.17618 5.46965ZM6.28507 5.46965L6.43835 5.34453L6.59107 5.46965L6.53183 5.26851L6.68399 5.14638H6.49674L6.43835 4.94373L6.38052 5.14638H6.19299L6.34487 5.26851L6.28507 5.46965ZM6.91222 4.94373L7.06466 4.82011L7.2171 4.94373L7.15814 4.74288L7.31002 4.61956L7.12165 4.62016L7.06438 4.41781L7.00655 4.62016L6.81846 4.61956L6.97118 4.74288L6.91222 4.94373Z" fill="white" />
                              </svg>
                            </div>
                            <div className="flex-col justify-start items-start inline-flex">
                              <div className="text-[#000f49] text-xl font-semibold  leading-[30px]">USD</div>
                            </div>
                          </div>
                        </div>
                        <div className="w-[286.39px] flex-col justify-start items-start inline-flex">
                          <div className="self-stretch pt-5 justify-end items-start inline-flex">
                            <div className="self-stretch justify-start items-start flex">
                              <div className="self-stretch justify-start items-start flex">
                                <div className="self-stretch bg-white flex-col justify-start items-start inline-flex">
                                  <div className="self-stretch h-8 pl-[206.21px] py-px flex-col justify-start items-start flex">
                                    <div className="text-right text-[#000f49] text-xl font-semibold ">$262.40</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-10 h-10 left-[174px] top-[56px] absolute">
                        <div className="w-5 h-5 left-[10px] top-[10px] absolute">
                          <div className="w-5 h-[16.67px] left-0 top-[1.67px] absolute">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="px-3 pt-2 flex-col justify-start items-start flex">
              <div className="flex-col justify-start items-center flex">
                <div className="text-center text-[#000f49] text-[10px] font-normal  leading-[15px]">(*)Cálculo respecto al tipo de cambio publicado por entidades bancarias.</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2da seccion */}
      <div className="container mx-auto px-4 py-8 mt-7">
        <h1 className="text-3xl font-extrabold text-navy-900 text-center mb-8 text-blue-950">
          Cambia al instante con todos los bancos en Perú
        </h1>
        <div className='grid grid-cols-1 min-[769px]:grid-cols-2 gap-3 min-[413px]:gap-6  mb-[60px] max-w-[320px] min-[413px]:max-w-[546px] min-[769px]:max-w-[960px] m-auto'>
          <div className='order-2 min-[769px]:order-1 flex flex-col items-center justify-center border border-quinary-gray border-solid rounded-3xl h-[162px] sm:h-52 p-6 min-[769px]:mt-[24.8px]'>
            <div className='flex flex-col-reverse mb-6 sm:mb-0 sm:flex-col items-center'>
              <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-stratos-950 min-[480px]:mb-6">Transferencias inmediatas </span>
              <span className="block min-[480px]:hidden font-normal text-xs leading-4 text-stratos-950 min-[480px]:mb-6">Transferencias Inmediatas a todo el Perú. </span>
              <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-stratos-950">15 min. </span>
              <span className="hidden min-[480px]:block font-normal text-xs leading-4 text-stratos-950 mb-6">Todo el Perú
                <span className="block min-[480px]:hidden font-normal text-xs leading-4 text-stratos-950 min-[480px]:mb-6">Transferencias Inmediatas a todo el Perú.
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
              <span className="font-normal text-xs leading-4 text-stratos-950 mb-6 max-[480px]:mb-2">Transferencias interbancarias</span>
              <div className="flex flex-col sm:flex-row sm:gap-6 mb-6">
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-stratos-950">30 min.</span>
                  <span className="font-normal text-xs leading-4 text-primary-gray">Lima </span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="font-bold text-2xl max-[480px]:text-base leading-8 text-stratos-950">24 horas</span>
                  <span className="font-normal text-xs leading-4 text-primary-gray">Provincias </span>
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
                <span className="text-secondary-blue-100 text-xs underline">Ver bancos disponibles</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* 3ra seccion */}
      <div className="flex flex-col md:flex-row  p-6 pr-0 max-w-5xl mx-auto">
        <div className="flex-col justify-end mr-14">
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

        <div className="flex-1 ">
          <div className="  rounded-lg w-full">
            <div className='flex items-center mb-2 gap-3'>
              <span className="w-[15px] h-[15px] bg-[#00c8ff] rounded-full"></span>
              <h2 className="text-[#0032FF] font-black text-[18px] ">REXTIE BUSINESS</h2>
            </div>
            <h3 className="text-4xl font-black mb-4 text-[#0032FF]">Tenemos un tipo de cambio exclusivo</h3>
            <p className="mb-4">
              Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
            </p>
            <button className='bg-[#0032FF] py-2 px-6 rounded-md text-white'>Conocer más</button>
          </div>
        </div>
      </div>

      {/* 4ta seccion */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full bg-[#0032FF] text-white py-4  flex justify-between px-48  items-center">
          <h2 className="text-2xl font-extrabold">Cambia tu dinero rápido y seguro</h2>
          <button className="bg-white text-[#0032FF] px-4 py-2 rounded-md font-extrabold flex items-center">
            Cambia aquí
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="pr-8 md:w-1/2">
              <h3 className="text-[34px] font-extrabold text-[#0032FF] mb-4">
                Somos la casa de cambio online líder del Perú
              </h3>
              <p className="text-gray-600 pr-36 text-sm font-semibold">
                ¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
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
      <div className="container mx-auto px-6 justify-center py-8">
        <h2 className="text-3xl font-bold text-center text-[#0032FF] mb-8">
          Descubre lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-sm font-semibold text-gray-600 mb-4">
          Conoce de primera mano lo que es cambiar dinero con Rextie.
        </p>
        <div className="flex mx-60 gap-4 ">
          <div className="bg-[#eff2ff] rounded-lg border-2 border-zinc-400 h-[391px] w-[25%]">
            <div className="grid h-full content-between mx-9">
              <h3></h3>
              <p className="text-gray-800 mb-4 text-center text-base ">
                "Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado".
              </p>
              <p className="font-extrabold text-center text-gray-600 mb-4">Chanel Ramos</p>
            </div>
          </div>
          <div className="bg-[#eff2ff] rounded-lg border-2 border-zinc-400 h-[391px] w-[25%]">
            <div className="grid h-full content-between mx-9">
              <h3></h3>
              <p className="text-gray-800 mb-4 text-center">
                "La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido".
              </p>
              <p className="font-extrabold text-center text-gray-600 mb-4">Grecia Retamozo</p>
            </div>

          </div>
          <div className="bg-[#eff2ff] rounded-lg border-2 border-zinc-400 h-[391px] w-[25%]">
            <div className="grid h-full content-between px-8">
              <h3></h3>
              <p className="text-gray-800 mb-4 text-center">
                "Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo".
              </p>
              <p className="font-extrabold text-gray-600 text-center mb-4">Jorge Suarez</p>
            </div>

          </div>
          <div className="bg-[#eff2ff] rounded-lg border-2 border-zinc-400 h-[391px] w-[25%]">
            <div className="grid h-full content-between px-8">
              <h3></h3>
              <p className="text-gray-800 mb-4 text-center">
                "Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online".
              </p>
              <p className="font-extrabold text-gray-600 text-center mb-4 ">Reni Ravina</p>
            </div>

          </div>
        </div>

      </div>


      {/* 6ta seccion */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[#0032FF] mb-4">Rextie en los medios</h1>
        <p className="text-center text-gray-600 mb-8">
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
              <div>
                <button className='bg-[#eff2ff] p-[15px] rounded-full'>
                  <ArrowLeft className="h-6 w-6 text-[#0032FF] " />
                </button>
              </div>

              <div className='grid'>
                <div className="flex  mb-4">
                  <div className="flex gap-6">
                    <Image src="/semana-economica.png" alt="Semana económica" width={136.66} height={27.33} />
                    <Image src="/la-republica.png" alt="La República" width={136.66} height={22.78} />
                    <Image src="/peru-21.png" alt="Perú 21" width={136.66} height={27.33} />
                  </div>

                </div>
                <p className="text-gray-600 mb-0 pl-6">
                  "Rextie se convierte en la primera fintech de América Latina en recibir una inversión directa de uno de
                  los bancos más grandes del mundo. Con la operación, sus clientes se beneficiarán de la integración de
                  soluciones como CitiFX Pulse e Instant Payments".
                </p>
                <button className="text-[#0032FF] font-extrabold flex justify-start  pl-6">
                  Ver noticia
                </button>
              </div>
              <div>
                <button className='bg-[#eff2ff] p-[15px] rounded-full'  >
                  <ArrowRight className="h-6 w-6 text-[#0032FF] " />
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
                  <p className="text-sm text-gray-600">Reseña en App Store</p>
                </div>
              </div>
              <h2 className="text-2xl font-bold">¡Cambia dinero desde cualquier lugar!</h2>
              <div className="flex space-x-4">
                <img src="/app-store.png" alt="App Store" className="h-10" />
                <img src="/google-play.png" alt="Google Play" className="h-10" />
                <img src="/app-gallery.png" alt="AppGallery" className="h-10" />
              </div>

            </div>
            <div className="relative w-48 h-auto">
              <img src="/apps-rextie.png?" alt="Phone 1" className="w-full h-auto absolute -top-16 right-0" />
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
                    <p className="text-xs text-gray-600">Rextie S.A.C.</p>
                    <p className="text-xs font-extrabold text-gray-600">RUC 20610130013</p>
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
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Rextie Business</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Rextie Factoring</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Confirming</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Visa <span className="bg-orange-500 py-1 text-white text-xs px-1 rounded">nuevo</span></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Recursos</h3>
                <ul className="space-y-2 text-xs">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Tipo de cambio</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">App para cambiar dólares</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Cambio de Dólar a Soles</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Precio del Dólar</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Dólar</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Soporte</h3>
                <ul className="space-y-2 text-xs">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Preguntas frecuentes</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Cómo cambiar dólares con REXTIE</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Términos y Condiciones</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Política de Cookies</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Política de Privacidad</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Mapa del sitio</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-extrabold mb-4">Contacto</h3>
                <ul className="space-y-8 text-xs">
                  <div className="text-gray-600 hover:text-gray-800">
                    <li><Link href="#" className="text-blue-600 font-extrabold hover:text-gray-800">info@rextie.com</Link></li>
                    <li >T. 01 700 3301</li>
                    <li>C. 963 896 793</li>
                  </div>
                  <div className="text-gray-600 hover:text-gray-800">
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div className="text-gray-600 hover:text-gray-800">
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div className="text-gray-600 hover:text-gray-800">
                    <li>Sábados:</li>
                    <li>9:00 am. - 3:00 pm.</li>
                  </div>
                  <div className="text-gray-600 hover:text-gray-800">
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
