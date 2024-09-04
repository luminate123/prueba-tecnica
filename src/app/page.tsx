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
      <div className="min-h-screen text-white font-sans px-6 md:px-32" style={{
        backgroundImage: "url('/banner-person.webp')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center'
      }}>
        {/* Header */}
        <header className="font-size-14 z-[100] h-82 w-full left-0 top-0 md:top-10 ng-star-inserted">
          <div className="flex items-center px-8">
            <nav className="hidden md:flex space-x-4">
              <a href="#" className="border-b-2 border-red-500 pb-1">Personas</a>
              <a href="#">Empresas</a>
            </nav>
          </div>
          <nav className="max-w-7xl max-[1919px]:max-w-[75rem] mx-auto flex items-center justify-between h-[82px] px-2.5 ng-star-inserted">
            <img src="/rextie-icon-redesign.svg" alt="Rextie Logo" className="object-cover object-left-top hidden min-[480px]:block ng-star-inserted" />
            <div className='flex items-center'>
              <div className='line-menu gap-5 flex-wrap pl-5 justify-end hidden min-[1025px]:flex ng-star-inserted'>
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
        <div className="container mx-auto px-8 py-12 pt-16 flex flex-col md:flex-row justify-between">
          {/* izquierda */}
          <div className="flex flex-col items-start md:w-1/2 space-y-6 pr-12">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              La casa de cambio online líder del Perú
            </h1>
            <p className="text-base pr-28">
              Celebramos un nuevo récord: 6 mil millones de dólares cambiados para nuestros clientes
            </p>
            <div className="flex space-x-4">
              <div className="flex flex-row items-center justify-start gap-2 min-[480px]:gap-4 max-[560px]:text-center max-[560px]:flex-col">
                <img src="/visa-white-yellow-logo.svg" alt="Visa" className="" />
                <span className="mt-1 min-[480px]:mt-0 min-[480px]:text-white w-[95px] max-[560px]:w-[100%] text-[10px] sm:text-[12px] text-[400]">Aliado Estrategico</span>
              </div>
              <div className="flex flex-row items-center justify-start max-[560px]:justify-center gap-2 min-[480px]:gap-4 max-[560px]:flex-col">
                <div className="flex flex-row items-center min-[480px]:gap-4">
                  <img src="/citi-white.svg" alt="Citi" className="h-8" />
                  <img src="/rpp-home.svg" alt="RPP" className="w-8 min-[480px]:w-12" />
                </div>
                <span className='min-[480px]:text-white w-[95px] max-[560px]:w-[100%] max-[560px]:text-center text-[10px] sm:text-[12px]'> Inversionistas estratégicos </span>
              </div>
            </div>
            <div className='flex flex-row mt-6 items-center justify-start text-white'>
              <img src="/iso-white.png" alt="ISO" className="mr-[10px]" />
              <span className='font-[400] text-[12px]'>Certificados con ISO 27001</span>
            </div>
          </div>

          {/* derecha*/}
          <div className="bg-[var(--sixth-blue)] min-[768px]:bg-[var(--octonary-blue)] min-[1023px]:bg-[var(--octonary-blue)] min-[1365px]:bg-[var(--septenary-blue)] pt-3 p-2 min-[768px]:p-4 rounded-3xl min-w-[344px] min-[768px]:w-[546px] min-[1023px]:w-[556px] min-[1365px]:w-[468px]">
            <div className="bg-[#12214a] p-6 rounded-2xl max-w-md mx-auto">
              <div className="flex flex-row items-center justify-center mb-3 gap-3">
                <img src="/trophy-white.png" alt="USD" />
                <span className="font-semibold text-sm ">Cambia al instante con todos los bancos en Perú</span>
              </div>
              <div className="bg-white text-[#0A2167] p-4 h-96 w-auto rounded-xl space-y-4">
                <div className='flex justify-between items-center border-0 p-1 bg-[#bcd1f6] rounded-2xl font-bold'>
                  <div className='hidden border-2 bg-white rounded-lg bottom-0 p-3 items-center px-7 text-xs'>Compra S/ 3.7565</div>
                  <div className='rounded-lg bottom-0 p-3 items-center px-7 text-sm'>Compra S/ 3.7565</div>
                  <div className=' bg-white rounded-2xl bottom-0 p-4 items-center px-8 text-sm'>Venta S/ 3.7815</div>
                </div>

                <div className="space-y-2">

                  <div className="grid justify-between items-center border-2 border-blue-800 p-2 rounded-lg ">
                    <label className="block text-sm">Envía</label>
                    <span className="flex items-center gap-2">
                      <svg _ngcontent-xch-c11="" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path _ngcontent-xch-c11="" d="M7.30115 2.02318V3.03491H17.9591C17.9442 2.70864 17.9122 2.29617 17.7977 2.02318" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M17.2952 1.01266H7.30115V2.02439H17.7977C17.6837 1.64694 17.5141 1.30271 17.2952 1.01266Z" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M15.1616 0.000793457H7.30115V1.01252H17.2952C16.8266 0.386927 16.0555 0.000793457 15.1616 0.000793457Z" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M17.9591 3.03593H7.30115V4.04766H17.9689V3.37328C17.9689 3.31311 17.9653 3.25444 17.9636 3.19548C17.9625 3.17931 17.9608 3.13771 17.9591 3.03593Z" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M7.30115 5.05938H17.9689V4.04765H7.30115V5.05938Z" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M7.30115 6.07025H17.9689V5.05852H7.30115V6.07025Z" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M7.30115 6.07011H17.9689V7.08184H7.30115V6.07011Z" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M0.000488281 7.0836V8.09533H17.9673V7.0836H7.29949H0.000488281Z" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M0.000488281 8.0946H17.9673V9.10633H0.000488281V8.0946Z" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M0.00189194 9.72855C0.00189194 9.72855 -0.000634643 9.9737 0.0061029 10.118H17.9617C17.9695 9.97011 17.9659 9.72855 17.9659 9.72855L17.9673 9.10625H0.000488281L0.00189194 9.72855Z" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M2.80701 13.1701H15.1592C16.0555 13.1701 16.8006 12.8229 17.3096 12.1404H0.653809C1.17934 12.8379 1.93843 13.1701 2.80561 13.1701" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M0.65522 12.1414H17.311C17.533 11.8406 17.6988 11.4972 17.7994 11.1297H0.169556C0.27205 11.4961 0.43718 11.8391 0.656624 12.1414" fill="#E6E7E8"></path><path _ngcontent-xch-c11="" d="M0.167218 11.1297H17.7971C17.889 10.8006 17.9437 10.4609 17.9599 10.118H0.00439453C0.0321869 10.464 0.0580141 10.7253 0.167218 11.1297Z" fill="#EC1C24"></path><path _ngcontent-xch-c11="" d="M7.29949 0.000778198H2.8078C0.947393 0.000778198 0.000488281 1.47497 0.000488281 3.29339V7.08288H7.29949V0.000778198Z" fill="#176496"></path><path _ngcontent-xch-c11="" d="M0.787854 1.78969L0.940572 1.66457L1.09301 1.78969L1.03377 1.58854L1.18565 1.46552H0.998122L0.940011 1.26347L0.88218 1.46552H0.694932L0.847369 1.58854L0.787854 1.78969ZM1.7968 1.78969L1.94952 1.66457L2.10196 1.78969L2.043 1.58854L2.1946 1.46552H2.00735L1.94924 1.26347L1.89141 1.46552H1.7036L1.85604 1.58854L1.7968 1.78969ZM2.9099 1.78969L3.06234 1.66457L3.21505 1.78969L3.15582 1.58854L3.30741 1.46552H3.12129L3.06234 1.26347L3.00423 1.46552H2.8181L2.96885 1.58854L2.9099 1.78969ZM4.01486 1.78969L4.16729 1.66457L4.32001 1.78969L4.26106 1.58854L4.41265 1.46552H4.22456L4.16729 1.26347L4.10946 1.46552H3.92193L4.07409 1.58854L4.01486 1.78969ZM5.12374 1.78969L5.27646 1.66457L5.4289 1.78969L5.36995 1.58854L5.52182 1.46552H5.33401L5.27618 1.26347L5.21835 1.46552H5.0311L5.1827 1.58854L5.12374 1.78969ZM1.32489 2.31501L1.47733 2.19019L1.62977 2.31501L1.57109 2.11416L1.72269 1.99114H1.53516L1.47705 1.78939L1.42006 1.99114H1.23197L1.38385 2.11416L1.32489 2.31501ZM2.33412 2.31501L2.48656 2.19019L2.63899 2.31501L2.58004 2.11416L2.73164 1.99114H2.54298L2.48656 1.78939L2.42845 1.99114H2.2412L2.39307 2.11416L2.33412 2.31501ZM3.44722 2.31501L3.59937 2.19019L3.75181 2.31501L3.69286 2.11416L3.84473 1.99114H3.65749L3.59937 1.78939L3.54126 1.99114H3.35374L3.50561 2.11416L3.44722 2.31501ZM4.55161 2.31501L4.70433 2.19019L4.85705 2.31501L4.79725 2.11416L4.94941 1.99114H4.76216L4.70405 1.78939L4.6465 1.99114H4.45897L4.61085 2.11416L4.55161 2.31501ZM5.6619 2.31501L5.81322 2.19019L5.96566 2.31501L5.90614 2.11416L6.0583 1.99114H5.87133L5.81294 1.78939L5.75539 1.99114H5.56786L5.71974 2.11416L5.6619 2.31501ZM6.28709 1.78969L6.43953 1.66457L6.59225 1.78969L6.53301 1.58854L6.68461 1.46552H6.49848L6.43925 1.26347L6.38142 1.46552H6.19249L6.34605 1.58854L6.28709 1.78969ZM0.772976 5.99346L0.925693 5.86984L1.07813 5.99346L1.01918 5.79411L1.17077 5.67078L0.983524 5.67138L0.925132 5.46963L0.867863 5.67138L0.680054 5.67078L0.831929 5.79411L0.772976 5.99346ZM1.7822 5.99346L1.93464 5.86984L2.08736 5.99346L2.02812 5.79411L2.17972 5.67078L1.99275 5.67138L1.93436 5.46963L1.87681 5.67138L1.68956 5.67078L1.84116 5.79411L1.7822 5.99346ZM2.8953 5.99346L3.04774 5.86984L3.20046 5.99346L3.14122 5.79411L3.29282 5.67078L3.10445 5.67138L3.04746 5.46963L2.98963 5.67138L2.80238 5.67078L2.95425 5.79411L2.8953 5.99346ZM4.00026 5.99346L4.1527 5.86984L4.30513 5.99346L4.24702 5.79411L4.39777 5.67078L4.21025 5.67138L4.15241 5.46963L4.09458 5.67138L3.90734 5.67078L4.05893 5.79411L4.00026 5.99346ZM5.10887 5.99346L5.26158 5.86984L5.4143 5.99346L5.35591 5.79411L5.50666 5.67078L5.31941 5.67138L5.2613 5.46963L5.20375 5.67138L5.01622 5.67078L5.16782 5.79411L5.10887 5.99346ZM6.27221 5.99346L6.42465 5.86984L6.57737 5.99346L6.51813 5.79411L6.67001 5.67078L6.48164 5.67138L6.42437 5.46963L6.36654 5.67138L6.17845 5.67078L6.33117 5.79411L6.27221 5.99346ZM0.787854 2.84093L0.940572 2.71581L1.09301 2.84093L1.03377 2.63978L1.18565 2.51676L0.998122 2.51736L0.940011 2.31501L0.88218 2.51736L0.694932 2.51676L0.847369 2.63978L0.787854 2.84093ZM1.7968 2.84093L1.94952 2.71581L2.10196 2.84093L2.043 2.63978L2.1946 2.51676L2.00735 2.51736L1.94924 2.31501L1.89141 2.51736L1.7036 2.51676L1.85604 2.63978L1.7968 2.84093ZM2.9099 2.84093L3.06234 2.71581L3.21505 2.84093L3.15582 2.63978L3.30741 2.51676L3.12129 2.51736L3.06234 2.31501L3.00423 2.51736L2.8181 2.51676L2.96885 2.63978L2.9099 2.84093ZM4.01486 2.84093L4.16729 2.71581L4.32001 2.84093L4.26106 2.63978L4.41265 2.51676L4.22456 2.51736L4.16729 2.31501L4.10946 2.51736L3.92193 2.51676L4.07409 2.63978L4.01486 2.84093ZM5.12374 2.84093L5.27646 2.71581L5.4289 2.84093L5.36995 2.63978L5.52182 2.51676L5.33401 2.51736L5.27618 2.31501L5.21835 2.51736L5.0311 2.51676L5.1827 2.63978L5.12374 2.84093ZM1.32489 3.36655L1.47733 3.24173L1.62977 3.36655L1.57109 3.1657L1.72269 3.04208H1.53516L1.47705 2.84093L1.42006 3.04208H1.23197L1.38385 3.1657L1.32489 3.36655ZM2.33412 3.36655L2.48656 3.24173L2.63899 3.36655L2.58004 3.1657L2.73164 3.04208H2.54298L2.48656 2.84093L2.42845 3.04208H2.2412L2.39307 3.1657L2.33412 3.36655ZM3.44722 3.36655L3.59937 3.24173L3.75181 3.36655L3.69286 3.1657L3.84473 3.04208H3.65749L3.59937 2.84093L3.54126 3.04208H3.35374L3.50561 3.1657L3.44722 3.36655ZM4.55161 3.36655L4.70433 3.24173L4.85705 3.36655L4.79725 3.1657L4.94941 3.04208H4.76216L4.70405 2.84093L4.6465 3.04208H4.45897L4.61085 3.1657L4.55161 3.36655ZM5.6619 3.36655L5.81322 3.24173L5.96566 3.36655L5.90614 3.1657L6.0583 3.04208H5.87133L5.81294 2.84093L5.75539 3.04208H5.56786L5.71974 3.1657L5.6619 3.36655ZM6.28709 2.84093L6.43953 2.71581L6.59225 2.84093L6.53301 2.63978L6.68461 2.51676L6.49848 2.51736L6.43925 2.31501L6.38142 2.51736L6.19249 2.51676L6.34605 2.63978L6.28709 2.84093ZM0.772976 3.89217L0.925693 3.76735L1.07813 3.89217L1.0189 3.69162L1.17077 3.5683L0.983243 3.5689L0.925132 3.36655L0.867863 3.5689L0.680054 3.5683L0.831929 3.69162L0.772976 3.89217ZM1.7822 3.89217L1.93464 3.76735L2.08736 3.89217L2.02812 3.69162L2.17972 3.5683L1.99275 3.5689L1.93436 3.36655L1.87681 3.5689L1.68956 3.5683L1.84088 3.69162L1.7822 3.89217ZM2.8953 3.89217L3.04774 3.76735L3.20018 3.89217L3.14122 3.69162L3.29282 3.5683L3.10445 3.5689L3.04746 3.36655L2.98963 3.5689L2.80238 3.5683L2.95425 3.69162L2.8953 3.89217ZM4.00026 3.89217L4.15241 3.76735L4.30513 3.89217L4.24702 3.69162L4.39777 3.5683L4.21025 3.5689L4.15241 3.36655L4.09458 3.5689L3.90734 3.5683L4.05893 3.69162L4.00026 3.89217ZM5.10887 3.89217L5.26158 3.76735L5.41402 3.89217L5.35591 3.69162L5.50666 3.5683L5.31913 3.5689L5.2613 3.36655L5.20375 3.5689L5.01622 3.5683L5.16782 3.69162L5.10887 3.89217ZM1.31001 4.41779L1.46245 4.29327L1.61489 4.41779L1.55621 4.21844L1.70753 4.09452H1.52L1.46217 3.89217L1.40462 4.09452H1.21709L1.36897 4.21844L1.31001 4.41779ZM2.31924 4.41779L2.47168 4.29327L2.62412 4.41779L2.56516 4.21844L2.71676 4.09452H2.52895L2.4714 3.89217L2.41357 4.09452H2.22604L2.3782 4.21844L2.31924 4.41779ZM3.43262 4.41779L3.5845 4.29327L3.73721 4.41779L3.67714 4.21844L3.82985 4.09452H3.64261L3.5845 3.89217L3.52667 4.09452H3.33914L3.49101 4.21844L3.43262 4.41779ZM4.53617 4.41779L4.68945 4.29327L4.84217 4.41779L4.78322 4.21844L4.93453 4.09452H4.74728L4.68917 3.89217L4.63162 4.09452H4.44409L4.59597 4.21844L4.53617 4.41779ZM5.64506 4.41779L5.79834 4.29327L5.95106 4.41779L5.89182 4.21844L6.04398 4.09452H5.85673L5.79834 3.89217L5.74051 4.09452H5.55298L5.70486 4.21844L5.64506 4.41779ZM6.27221 3.89217L6.42465 3.76735L6.57709 3.89217L6.51813 3.69162L6.67001 3.5683L6.48164 3.5689L6.42437 3.36655L6.36654 3.5689L6.17845 3.5683L6.33117 3.69162L6.27221 3.89217ZM0.772976 4.94371L0.925693 4.82009L1.07813 4.94371L1.0189 4.74286L1.17077 4.61954L0.983243 4.62014L0.925132 4.41779L0.867863 4.62014L0.680054 4.61954L0.831929 4.74286L0.772976 4.94371ZM1.7822 4.94371L1.93464 4.82009L2.08736 4.94371L2.02812 4.74286L2.17972 4.61954L1.99275 4.62014L1.93436 4.41779L1.87681 4.62014L1.68956 4.61954L1.84088 4.74286L1.7822 4.94371ZM2.8953 4.94371L3.04774 4.82009L3.20018 4.94371L3.14122 4.74286L3.29282 4.61954L3.10445 4.62014L3.04746 4.41779L2.98963 4.62014L2.80238 4.61954L2.95425 4.74286L2.8953 4.94371ZM4.00026 4.94371L4.15241 4.82009L4.30513 4.94371L4.24702 4.74286L4.39777 4.61954L4.21025 4.62014L4.15241 4.41779L4.09458 4.62014L3.90734 4.61954L4.05893 4.74286L4.00026 4.94371ZM5.10887 4.94371L5.26158 4.82009L5.41402 4.94371L5.35591 4.74286L5.50666 4.61954L5.31913 4.62014L5.2613 4.41779L5.20375 4.62014L5.01622 4.61954L5.16782 4.74286L5.10887 4.94371ZM1.31001 5.46963L1.46245 5.34451L1.61489 5.46963L1.55621 5.26849L1.70753 5.14636H1.52L1.46217 4.94371L1.40462 5.14636H1.21709L1.36897 5.26849L1.31001 5.46963ZM2.31924 5.46963L2.47168 5.34451L2.62412 5.46963L2.56516 5.26849L2.71676 5.14636H2.52895L2.4714 4.94371L2.41357 5.14636H2.22604L2.3782 5.26849L2.31924 5.46963ZM3.43262 5.46963L3.5845 5.34451L3.73721 5.46963L3.67714 5.26849L3.82985 5.14636H3.64261L3.5845 4.94371L3.52667 5.14636H3.33914L3.49101 5.26849L3.43262 5.46963ZM4.53617 5.46963L4.68945 5.34451L4.84217 5.46963L4.78322 5.26849L4.93453 5.14636H4.74728L4.68917 4.94371L4.63162 5.14636H4.44409L4.59597 5.26849L4.53617 5.46963ZM5.64506 5.46963L5.79834 5.34451L5.95106 5.46963L5.89182 5.26849L6.04398 5.14636H5.85673L5.79834 4.94371L5.74051 5.14636H5.55298L5.70486 5.26849L5.64506 5.46963ZM6.27221 4.94371L6.42465 4.82009L6.57709 4.94371L6.51813 4.74286L6.67001 4.61954L6.48164 4.62014L6.42437 4.41779L6.36654 4.62014L6.17845 4.61954L6.33117 4.74286L6.27221 4.94371Z" fill="white"></path></svg>
                      <span className="text-sm">USD - Dólares</span>
                      <input type="text" className="text-right flex-1 outline-none" placeholder="0.00" />
                    </span>

                  </div>
                </div>
                <div className="grid space-y-2 ">
                  <div className="grid justify-between items-center border-2 border-blue-800 p-2 rounded-lg ">
                    <label className="block text-sm">Recibe</label>
                    <span className="flex items-center gap-2">
                      <svg _ngcontent-xch-c10="" xmlns="http://www.w3.org/2000/svg" width="18" height="14" fill="none" >
                        <path _ngcontent-xch-c10="" d="M2.808 0C.947 0 .001 1.475.001 3.293v6.585c0 1.818.947 3.292 2.807 3.292h3.368V0H2.808zm12.351 0H11.79V13.17h3.369c1.86 0 2.807-1.474 2.807-3.292V3.293c0-1.818-.947-3.292-2.807-3.292z" fill="#ec1c24">
                        </path>
                      </svg>
                      <span className="text-sm">PEN - Soles</span>
                      <input type="text" className="text-right flex-1 outline-none" placeholder="0.00" />
                    </span>
                  </div>
                  <button className="have-coupon"> Usar un cupón o código </button>
                  <div className="flex justify-center">
                    <strong>Ahorro promedio* </strong>
                    <svg _ngcontent-uvl-c9="" width="24" height="19" viewBox="0 0 24 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g _ngcontent-uvl-c9="" id="AHORRO ICONO" clip-path="url(#clip0_748_1177)"><g _ngcontent-uvl-c9="" id="Capa 2">
                        <path _ngcontent-uvl-c9="" id="Vector" d="M15.9225 17.7753L14.8656 17.9693C14.5737 18.0123 14.2819 17.6797 14.2118 17.2227L14.0466 16.182C13.3175 16.3295 12.5756 16.4053 11.8317 16.4083C10.784 16.4026 9.74227 16.2503 8.73678 15.9558L8.55127 17.2205C8.48339 17.6729 8.19381 18.0146 7.90196 17.9716L5.89296 17.6752C5.60111 17.6322 5.42012 17.2227 5.48799 16.7702L5.79568 14.6753L5.81604 14.5622C4.11246 13.3405 3.04688 11.6052 3.04688 9.67992C3.0483 9.04582 3.16482 8.41725 3.39076 7.82477L3.47447 7.6121C4.60566 4.91986 7.92458 2.97195 11.8317 2.97195C12.5361 2.97156 13.2389 3.03669 13.9312 3.16651C14.4787 2.50363 15.5375 1.41543 16.8497 1.03082C16.8823 1.02225 16.9167 1.02263 16.9491 1.03191C16.9815 1.04119 17.0109 1.05904 17.034 1.08358C17.0571 1.10812 17.0733 1.13844 17.0806 1.17135C17.088 1.20427 17.0864 1.23856 17.0759 1.27063C16.7653 2.15606 16.5854 3.08208 16.542 4.01943C18.3972 4.92439 19.7795 6.3429 20.3383 8.01481H21.1437C21.3237 8.01481 21.4964 8.08631 21.6236 8.2136C21.7509 8.34088 21.8224 8.51352 21.8224 8.69352V11.2885C21.8224 11.4685 21.7509 11.6411 21.6236 11.7684C21.4964 11.8957 21.3237 11.9672 21.1437 11.9672H20.0894C19.9078 12.3246 19.6977 12.6646 19.462 12.9844" stroke="#000F49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                        <path _ngcontent-uvl-c9="" id="Vector_2" d="M1.93382 6.3611C1.6759 4.80232 2.86818 4.41771 2.89759 4.3702C2.92701 4.32269 2.88402 4.15527 2.8252 4.15527C2.81162 4.15527 1.42026 4.64621 1.7121 6.3973C1.86595 7.32035 2.66231 7.68686 3.3908 7.82487C3.41794 7.75473 3.44509 7.68233 3.4745 7.6122C2.80484 7.49456 2.06956 7.17556 1.93382 6.3611Z" fill="#000F49" stroke="#000F49" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"></path><path _ngcontent-uvl-c9="" id="Vector_3" d="M16.875 9.27614C17.4316 9.27614 17.8828 8.82492 17.8828 8.26832C17.8828 7.71172 17.4316 7.2605 16.875 7.2605C16.3184 7.2605 15.8672 7.71172 15.8672 8.26832C15.8672 8.82492 16.3184 9.27614 16.875 9.27614Z" fill="#000F49"></path></g><path _ngcontent-uvl-c9="" id="Vector_4" d="M17.6719 17.1437C18.5198 17.1437 19.2071 16.4563 19.2071 15.6085C19.2071 14.7606 18.5198 14.0732 17.6719 14.0732C16.8241 14.0732 16.1367 14.7606 16.1367 15.6085C16.1367 16.4563 16.8241 17.1437 17.6719 17.1437Z" fill="#FF6E00">
                        </path>
                      </g>
                      <defs _ngcontent-uvl-c9="">
                        <rect _ngcontent-uvl-c9="" width="22.2124" height="18.7281" fill="white" transform="translate(0.894531 0.135986)"></rect></defs></svg> <strong>S/ 30.50</strong></div>
                </div>
                <button className="w-full bg-[#0024b3] text-white py-4 rounded-xl mt-4 font-extrabold text-base">Iniciar Sesión</button>
              </div>
            </div>

          </div>
        </div>
      </div>
      {/* 2da seccion */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-extrabold text-navy-900 text-center mb-8 text-blue-950">
          Cambia al instante con todos los bancos en Perú
        </h1>
        <div className='grid grid-cols-1 min-[769px]:grid-cols-2 gap-3 min-[413px]:gap-6 font-[Poppins] mb-[60px] max-w-[320px] min-[413px]:max-w-[546px] min-[769px]:max-w-[960px] m-auto'>
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
      <div className="flex flex-col md:flex-row  p-6 max-w-5xl mx-auto">
        <div className="flex-1">
          <table className="w-96 border border-blue-400 rounded-xl overflow-hidden">
            <thead className="bg-blue-600 text-white">
              <tr>
                <th className="pl-4 py-4 text-left">
                  <img
                    src="/rextie-white.svg"
                    alt="Rextie Logo"
                    className="h-6 object-cover hidden min-[480px]:block"
                  />
                </th>
                <th className="text-sm py-2">Compra <br />S/ 3,7655</th>
                <th className="rounded-tr-xl text-sm py-2">Venta <br />S/ 3,7655</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white border-t border-blue-400">
                <td className="pl-4 py-4">
                  <img
                    src="/sunat.svg"
                    alt="SUNAT Logo"
                    className="h-6 object-cover hidden min-[480px]:block"
                  />
                </td>
                <td className="text-sm py-2">S/ 3,7655</td>
                <td className="text-sm py-2">S/ 3,7655</td>
              </tr>
              <tr className="bg-white border-t border-x-gray-200">
                <td className="pl-4 py-4 flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="none"
                    className="mr-2"
                  >
                    <path
                      d="M2.4 17.3h14.4m-12-9.6v9.6m9.6-9.6v9.6M9.6 7.7v9.6M2.4 7.7l7.2-4.8 7.2 4.8H2.4z"
                      stroke="#3e4045"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                  <span className="text-xs">Bancos*</span>
                </td>
                <td className="text-sm py-2">S/ 3,7655</td>
                <td className="text-sm py-2">S/ 3,7655</td>
              </tr>
            </tbody>
          </table>
          <p className="text-xs text-gray-500 mt-2">*Precios referenciales</p>
        </div>

        <div className="flex-1 ">
          <div className="  rounded-lg w-full">
            <h2 className="text-blue-600 font-bold mb-2">REXTIE BUSINESS</h2>
            <h3 className="text-4xl font-bold mb-4 text-blue-600">Tenemos un tipo de cambio exclusivo</h3>
            <p className="mb-4">
              Cambia tus dólares a soles de forma segura, rápida y confiable con nuestra casa de cambio online.
            </p>
            <button className='bg-blue-600 py-2 px-6 rounded-md text-white font-sans'>Conocer más</button>
          </div>
        </div>
      </div>

      {/* 4ta seccion */}
      <div className="flex flex-col items-center w-full">
        <div className="w-full bg-blue-600 text-white py-4  flex justify-center gap-96 items-center">
          <h2 className="text-2xl font-bold">Cambia tu dinero rápido y seguro</h2>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold flex items-center">
            Cambia aquí
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="md:w-1/2">
              <h3 className="text-4xl font-bold text-blue-600 mb-4">
                Somos la casa de cambio online líder del Perú
              </h3>
              <p className="text-gray-600">
                ¡Tenemos el más alto volumen de dólares cambiados! Las personas consideran a Rextie como la casa de cambio online más confiable.
              </p>
            </div>
            <div className="md:w-1/2 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
                <img className='mb-6' src="/money-blue-icon.svg" alt="+ 6 mil millones" />
                <h4 className="text-2xl font-bold text-blue-600">+ 6 mil millones</h4>
                <p className="text-blue-600">de dólares negociados</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
                <img className='mb-6' src="/user-blue-icon.svg" alt="+ 200 mil clientes" />
                <h4 className="text-2xl font-bold text-blue-600">+ 200 mil clientes</h4>
                <p className="text-blue-600">confían en nosotros</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg flex flex-col items-center text-center">
                <img className='mb-6' src="/save-money-blue-icon.svg" alt="+ 282 millones" />
                <h4 className="text-2xl font-bold text-blue-600">+ 282 millones</h4>
                <p className="text-blue-600">de soles ahorrados</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 5ta seccion */}
      <section className="w-full py-2 md:py-2  bg-blue-600">
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
      <div className="container mx-auto px-64 py-8">
        <h2 className="text-3xl font-bold text-center text-blue-600 mb-4">
          Descubre lo que dicen nuestros clientes
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Conoce de primera mano lo que es cambiar dinero con Rextie.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-sky-100 rounded-lg border-2 border-zinc-400">
            <div className="py-16 px-8">
              <p className="text-gray-800 mb-4 text-center">
                "Mi experiencia al usar la aplicación fue estupenda. Es sencilla, transparente en las tasas de cambio, y me permitió ahorrar tiempo. Es la mejor app que he usado".
              </p>
            </div>
            <p className="font-semibold text-center text-gray-600">Chanel Ramos</p>
          </div>
          <div className="bg-sky-100 rounded-lg border-2 border-zinc-400">
            <div className="py-16 px-8">
              <p className="text-gray-800 mb-4 text-center">
                "La mejor casa de cambio online, siempre se preocupan porque sea un servicio bueno y honesto. Me llaman incluso cuando pasó algún error y lo solucionan rápido".
              </p>
            </div>
            <p className="font-semibold text-center text-gray-600">Grecia Retamozo</p>
          </div>
          <div className="bg-sky-100 rounded-lg border-2 border-zinc-400">
            <div className="py-16 px-8 ">
              <p className="text-gray-800 mb-4 text-center">
                "Hasta el momento estoy muy contento con el servicio brindado por Rextie. Nunca tuve problemas con la app, es de mucha ayuda. La recomiendo".
              </p>
            </div>
            <p className="font-semibold text-gray-600 text-center">Jorge Suarez</p>
          </div>
          <div className="bg-sky-100 rounded-lg border-2 border-zinc-400">
            <div className="py-16 px-8">
              <p className="text-gray-800 mb-4 text-center">
                "Rextie tiene una muy buena app, sencilla de usar y con muy buenos precios de venta y compra del dólar. Es la mejor casa de cambio online".
              </p>
            </div>
            <p className="font-semibold text-gray-600 text-center">Reni Ravina</p>
          </div>
        </div>

      </div>


      {/* 6ta seccion */}
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-600 mb-4">Rextie en los medios</h1>
        <p className="text-center text-gray-600 mb-8">
          Encuentra artículos y noticias en medios que hablan de nuestra casa de cambio online.
        </p>
        <div className="flex flex-col md:flex-row ">
          <div className="md:w-1/2">
            <div className="p-0">
              <div className="relative aspect-video">
                <div className="absolute inset-0 flex items-center justify-center p-32 pt-0">
                  <iframe loading="lazy" id="video" src="https://www.youtube.com/embed/j3s5nfNl12Q?autoplay=1" allow="autoplay" title="rextie" className="w-full h-full rounded-lg"></iframe>
                  <button className="rounded-full bg-white/80 hover:bg-white">

                  </button>
                </div>

              </div>

            </div>
          </div>
          <div className="md:w-1/2">
            <div className="pr-44">
              <div className="flex mb-4">
                <button  >
                  <ArrowLeft className="h-6 w-6" />
                </button>
                <div className="flex gap-4">
                  <Image src="/semana-economica.png" alt="Semana económica" width={100} height={50} />
                  <Image src="/la-republica.png" alt="La República" width={100} height={50} />
                  <Image src="/peru-21.png" alt="Perú 21" width={100} height={50} />
                </div>
                <button  >
                  <ArrowRight className="h-6 w-6" />
                </button>
              </div>
              <p className="text-gray-600 mb-4 pr-16 pl-6">
                "Rextie se convierte en la primera fintech de América Latina en recibir una inversión directa de uno de
                los bancos más grandes del mundo. Con la operación, sus clientes se beneficiarán de la integración de
                soluciones como CitiFX Pulse e Instant Payments".
                <button className="text-blue-600 p-0">
                  Ver noticia
                </button>
              </p>

            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col min-h-screen bg-white">
        {/* App Section */}
        <div className="p-8 flex justify-center ">
          <div className='flex bg-slate-100 p-8 rounded-2xl px-28 gap-7'>
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
          <div className="mt-12 pt-8 border-t border-gray-200 text-sm text-gray-600">
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
              <div className="col-span-1 lg:col-span-2">
                <svg _ngcontent-yer-c55="" xmlns="http://www.w3.org/2000/svg" width="90" height="30" fill="none"><g _ngcontent-yer-c55="" clip-path="url(#A)"><g _ngcontent-yer-c55="" fill="#ff6e00"><path _ngcontent-yer-c55="" d="M9.272 12.895c0 .304.034.607.103.903H2.078a15.34 15.34 0 0 1-.101-1.806h7.398a3.98 3.98 0 0 0-.103.903zm15.154-.903a14.93 14.93 0 0 1-.101 1.806h-7.298a4.02 4.02 0 0 0 0-1.806h7.399z"></path></g><g _ngcontent-yer-c55="" fill="#00c8ff"><path _ngcontent-yer-c55="" d="M11.047 9.596a3.95 3.95 0 0 0-1.325 1.469l-1.028-.994c-.922-.897-2.157-1.397-3.441-1.395H1.979V6.694h3.273c1.797-.003 3.524.697 4.814 1.952l.981.95zm12.423 7.846a17.27 17.27 0 0 1-.7 1.671l-.153.31h-1.476c-1.797.004-3.525-.696-4.815-1.951l-1.186-1.149a3.95 3.95 0 0 0 1.418-1.382l1.141 1.105a4.92 4.92 0 0 0 3.442 1.395h2.329z"></path></g><path _ngcontent-yer-c55="" fill-rule="evenodd" d="M26.4 11.773V1.224l-2.485-.39a69.18 69.18 0 0 0-21.428 0l-2.485.39v10.549c-.095 5.765 2.796 11.323 6.685 14.348 0 0 3.067 2.598 6.513 3.631 3.866-1.255 6.512-3.631 6.512-3.631 3.891-3.024 6.781-8.582 6.687-14.347zm-24.421.033V2.88l.608-.094c7.034-1.092 14.193-1.092 21.227 0l.609.095v3.814h-3.296c-1.797-.004-3.525.697-4.815 1.952l-.973.943a3.92 3.92 0 0 0-2.518-.619c-.885.085-1.715.469-2.354 1.089s-1.05 1.439-1.166 2.323.071 1.782.53 2.546L8.68 16.046c-.927.9-2.149 1.396-3.004 1.396H2.934c-.657-1.843-.986-3.762-.955-5.637zm20.792 7.307c-1.049 2.187-2.567 4.12-4.268 5.441 0 0-2.286 1.983-5.318 3.106-2.764-.999-5.287-3.106-5.287-3.106-1.619-1.259-3.069-3.072-4.112-5.13h1.455a6.88 6.88 0 0 0 4.814-1.951l1.194-1.157a3.92 3.92 0 0 0 2.439.493c.845-.105 1.633-.483 2.245-1.076s1.016-1.37 1.15-2.214-.008-1.708-.406-2.463l1.013-.982a4.92 4.92 0 0 1 3.439-1.395h3.294v3.128c.042 2.45-.529 4.976-1.652 7.307zm18.052 1.563l-3.103-5.225h-1.711v5.225h-2.555V6.737h5.17c1.506 0 2.651.415 3.459 1.264s1.203 1.867 1.203 3.093c0 1.811-.977 3.433-2.914 4.055l3.497 5.527h-3.047zM36.01 9.133v3.999h2.331c1.56 0 2.312-.886 2.312-2.018 0-1.113-.752-1.981-2.03-1.981H36.01zm14.16 9.66a5.75 5.75 0 0 0 2.764-.687l.991 1.779c-1.126.679-2.412 1.02-3.848 1.02-3.835 0-5.527-2.64-5.527-5.356 0-1.547.489-2.829 1.466-3.829.996-1.019 2.275-1.528 3.835-1.528 1.484 0 2.688.472 3.628 1.396.959.925 1.429 2.169 1.429 3.754-.002.366-.028.731-.075 1.094H47.05c.319 1.415 1.372 2.358 3.121 2.358zm2.332-4.226c-.207-1.434-1.241-2.32-2.651-2.32h0c-1.429 0-2.482.886-2.801 2.32h5.452zm12.607 6.111h-2.82l-2.087-3.471-2.145 3.471h-2.839l3.422-5.244-3.063-4.998h2.82l1.861 3.244 1.974-3.244h2.783l-3.233 5.074 3.327 5.168zM76.743 6.115c-.884 0-1.579.66-1.579 1.547 0 .905.677 1.547 1.579 1.547a1.49 1.49 0 0 0 1.541-1.547 1.5 1.5 0 0 0-1.541-1.547zm-6.674 4.32V6.814h-2.425v3.621h-1.73v2.075h1.692v4.413c0 2.622 1.186 3.999 3.497 3.999 1.147 0 2.145-.283 2.952-.849l-.771-1.923c-.583.358-1.166.528-1.73.528-.996 0-1.485-.622-1.485-1.848v-4.32h5.414v8.167h2.464V10.435h-7.878zm15.193 8.357a5.75 5.75 0 0 0 2.764-.687l.991 1.779c-1.126.679-2.412 1.02-3.848 1.02-3.835 0-5.527-2.64-5.527-5.356 0-1.547.489-2.829 1.467-3.829.996-1.019 2.275-1.528 3.835-1.528 1.484 0 2.688.472 3.628 1.396.959.925 1.429 2.169 1.429 3.754-.002.366-.028.731-.075 1.094h-7.783c.319 1.415 1.372 2.358 3.12 2.358zm2.332-4.226c-.207-1.434-1.241-2.32-2.651-2.32h0c-1.429 0-2.482.886-2.801 2.32h5.452z" fill="#000096"></path><path _ngcontent-yer-c55="" d="M13.199 15.231c1.286 0 2.329-1.046 2.329-2.336s-1.043-2.336-2.329-2.336-2.329 1.046-2.329 2.336 1.043 2.336 2.329 2.336z" fill="#ff6e00"></path></g><defs _ngcontent-yer-c55=""><clipPath _ngcontent-yer-c55="" id="A"><path _ngcontent-yer-c55="" fill="#fff" d="M0 0h90v29.752H0z"></path></clipPath></defs></svg>
                <p className="text-sm text-gray-600">Rextie S.A.C.</p>
                <p className="text-sm text-gray-600">RUC 20610130013</p>
                <div className="flex space-x-4 mt-4">
                  <Link href="#" className="text-gray-400 hover:text-gray-600"><Facebook size={20} /></Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600"><Youtube size={20} /></Link>
                  <Link href="#" className="text-gray-400 hover:text-gray-600"><Instagram size={20} /></Link>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Servicios</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Rextie Business</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Rextie Factoring</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Confirming</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Visa <span className="bg-orange-500 py-1 text-white text-xs px-1 rounded">nuevo</span></Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Recursos</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Blog</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Tipo de cambio</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">App para cambiar dólares</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Cambio de Dólar a Soles</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Precio del Dólar</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Dólar</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">Soporte</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Preguntas frecuentes</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Cómo cambiar dólares con REXTIE</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Términos y Condiciones</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Política de Cookies</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Política de Privacidad</Link></li>
                  <li><Link href="#" className="text-gray-600 hover:text-gray-800">Mapa del sitio</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-4">COntacto</h3>
                <ul className="space-y-8 text-sm">
                  <div>
                    <li><Link href="#" className="text-blue-600 font-extrabold hover:text-gray-800">info@rextie.com</Link></li>
                    <li>T. 01 700 3301</li>
                    <li>C. 963 896 793</li>
                  </div>
                  <div>
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div>
                    <li>Lunes a Viernes:</li>
                    <li>8:00 am. - 8:00 pm.</li>
                  </div>
                  <div>
                    <li>Sábados:</li>
                    <li>9:00 am. - 3:00 pm.</li>
                  </div>
                  <div>
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
        <button className="fixed bottom-4 right-4 rounded-full p-2">
          <ArrowUp size={24} />
          <span className="sr-only">Volver arriba</span>
        </button>
      </div>
    </div >
  );
}
