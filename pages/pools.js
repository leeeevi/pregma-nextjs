import React, { useState, useContext, useEffect } from "react";
import Head from "next/head";

import { PregmaContext } from "../contexts/PregmaContext";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

import PoolBox from "../components/PoolBox";
import PoolBg from "../components/PoolBg";

import Waterfall from "../public/images/waterfall.png";
import { ChevronUpIcon } from "@heroicons/react/solid";

function Pools() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const { AOS } = useContext(PregmaContext);

  useEffect(() => {
    AOS.init({
      once: true,
      disable: window.innerWidth < 768,
      duration: 750,
      easing: "ease-out-quart",
    });
  }, []);

  return (
    <>
      <Head>
        <title>Pools | Inverted Finance</title>
        <meta name="description" content="Earn 2% daily staking $pumpkin" />
        <link rel="icon" href="/favicon.ico" />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.inverted.to/" />
        <meta property="og:title" content="Inverted Finance" />
        <meta
          property="og:description"
          content="Earn 2% daily staking $pumpkin"
        />
        <meta
          property="og:image"
          content="https://www.inverted.to/assets/images/logo.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.inverted.to/" />
        <meta property="twitter:title" content="Inverted Finance" />
        <meta
          property="twitter:description"
          content="Earn 2% daily staking $pumpkin"
        />
        <meta
          property="twitter:image"
          content="https://www.inverted.to/assets/images/logo.png"
        />
        <meta property="twitter:site" content="@InvertedFinance" />
        <meta property="twitter:creator" content="@InvertedFinance" />
      </Head>
      <div className="bg-gray-900 flex h-screen overflow-hidden">
        {/* Sidebar */}
        <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        {/* Content area */}
        <div className="bg-gray-900  relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
          {/*  Site header */}
          <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

          <main>
            <div className="hidden sm:block">
              <PoolBg />
            </div>
            <div className="relative flex">
              <div className="max-w mx-auto px-4 sm:px-6 lg:w-8/12 sm:w-11/12">
                <div className="pb-12 md:pb-20 w-full xs:pt-20">
                  {/* Section header */}
                  <div className="text-center pb-12 md:pb-6">
                    <h1
                      className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4"
                      data-aos="zoom-out"
                    >
                      <span className="bg-clip-text text-transparent bg-gradient-to-t from-gray-800 to-gray-800">
                        Pools
                      </span>
                    </h1>
                    <div className="max-w-3xl mx-auto">
                      <p
                        className="text-2xl text-custom-100 tracking-wide font-bold lg:mb-12"
                        data-aos="zoom-out"
                        data-aos-delay="150"
                      >
                        Just stake some tokens to earn. High APR, low risk.
                      </p>
                    </div>
                  </div>
                  {/* Hero image */}
                  <div>
                    <div className="flex lg:flex-row xs:flex-col justify-center w-full rounded gap-16 ">
                      <PoolBox />
                      <PoolBox />
                      <PoolBox />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}

export default Pools;
