import Image from "next/image";
import Pools from "../../components/pools";
import Range from "../../components/range";
import Discord from "../../components/discord";
import Twitter from "../../components/twitter";
import IL from "../../components/IL";

export default function Home() {
  return (
    <div className="bg-black font-Jetbrains ">
      <div className="bg-[url('/images/bg.png')] bg-cover overflow-hidden px-4">
        <div className="container mx-auto flex items-center justify-between w-full pt-5">
          <Image
            src="/images/logo.png"
            width={100}
            height={100}
            className="w-[75px]"
            alt="Poolshark logo"
          />
          <div className="flex items-center gap-x-9 text-white text-sm">
            <a href="https://docs.poolshark.fi/" target="_blank" className="hover:opacity-60 transition-all">DOCUMENTATION</a>
            <a href="https://mirror.xyz/pshark.eth" target="_blank" className="hover:opacity-60 transition-all">ARTICLES</a>
            <a href="https://testnet.poolshark.fi/" target="_blank" className="bg-main1 px-8 py-2 border border-main hover:opacity-80 transition-all sm:block hidden">
              ACCESS TESTNET
            </a>
          </div>
        </div>
        <div className="flex md:flex-row flex-col gap-14 items-center md:justify-between justify-center container mx-auto h-[calc(100vh-54.78px)] px-5 md:px-0">
          <div className="text-white font-Helvetica">
            <h1 className="xl:text-6xl lg:text-5xl md:text-4xl text-4xl xl:w-[600px] lg:w-[500px] font-Helvetica">
              Traders can now provide liquidity too.
            </h1>
            <p className="text-[#A5A5A5] lg:text-base md:text-sm mt-8 xl:w-[600px] lg:w-[500px] font-Helvetica">
              Poolshark is a cutting-edge AMM where users can create directional
              positions to profit from volatility. Traders are able to utilize
              their orders to provide liquidity.
            </p>
            <div className="flex md:flex-row flex-col gap-5 md:items-center font-Jetbrains mt-10 gap-x-5">
              <a href="https://testnet.poolshark.fi/" target="_blank" className="bg-main1 py-2 border border-main text-sm w-48 flex items-center justify-center hover:opacity-80 transition-all">
                ACCESS TESTNET
              </a>
              <a href="https://docs.poolshark.fi/" target="_blank" className="bg-white/10 py-2 border border-white/20 text-sm w-48 flex items-center justify-center hover:opacity-80 transition-all">
                READ OUR DOCS
              </a>
            </div>
          </div>
          <Image
            src="/images/swap.svg"
            width={550}
            height={527}
            className="lg:mr-0 md:-mr-36 md:block hidden z-50 -mb-20 -mt-14"
            alt="Poolshark Limit Swap Interface"
          />
        </div>
      </div>
      <div className="bg-[url('/images/bg1.png')] bg-cover overflow-x-hidden lg:h-screen border-t border-white/20 py-12 lg:py-0">
        <div className="container mx-auto flex lg:flex-row flex-col lg:gap-x-20 gap-12 justify-center items-center h-full font-Helvetica md:px-0 px-5">
          <div className="text-white relative md:w-[500px] w-full">
            <div className="z-50 relative mx-auto flex justify-center items-center h-[500px]">
              <div className="rounded-[4px] border border-grey m-7 shadow-lg">
                <video className="rounded-[4px]">
                  {" "}
                  <source src="/videos/ui.mp4" type="video/mp4" />{" "}
                </video>
              </div>
            </div>
            <div className="z-50 relative px-7 pb-7">
              <h2 className="text-xl text-white font-Helvetica">
                Setting a new standard for DeFi user experience
              </h2>
              <p className="text-[#A5A5A5] mt-3 xl:text-base text-sm font-Helvetica">
                Poolshark uses a very minimalist and simple interface which
                allows users to create, view and manage they’re positions with
                ease. We are working to improve it constantly!
              </p>
            </div>
            <div className="w-full h-full bg-black/60 absolute top-0 left-0 border border-[#022E87]" />
            <div className="w-full h-full bg-black bw absolute top-0 left-0" />
          </div>
          <div className="text-white relative md:w-[500px] w-full">
            <div className="z-50 relative mx-auto flex justify-center items-center h-[500px]">
              <Pools className="md:scale-[.75] md:block hidden" />
              <svg width="218" height="360" viewBox="0 0 218 360" fill="none" className="md:hidden block" xmlns="http://www.w3.org/2000/svg">
<path d="M0.702637 1.375H216.787V77.1513H0.702637V1.375Z" fill="#0F193B" stroke="#002C85"/>
<path d="M67.1017 23.6636H53.7319V50.823H67.1017V23.6636Z" fill="#61A6FF"/>
<path d="M62.15 16.3887H58.1885V23.6635H62.15V16.3887Z" fill="#61A6FF"/>
<path d="M62.15 50.8232H58.1885V58.0982H62.15V50.8232Z" fill="#61A6FF"/>
<path d="M85.9186 37.2432H72.5488V50.8228H85.9186V37.2432Z" fill="#61A6FF"/>
<path d="M80.9674 30.4536H77.0059V37.7284H80.9674V30.4536Z" fill="#61A6FF"/>
<path d="M80.9674 50.8232H77.0059V58.0982H80.9674V50.8232Z" fill="#61A6FF"/>
<path d="M107.917 45.9587V28.1455H110.531V43.543H118.252V45.9587H107.917ZM122.163 45.9587V43.6161H125.721V30.4881H122.163V28.1455H131.941V30.4881H128.383V43.6161H131.941V45.9587H122.163ZM135.901 45.9587V28.1455H139.119L140.886 33.8555C141.064 34.3923 141.217 34.9128 141.346 35.4172C141.475 35.9052 141.564 36.2712 141.612 36.5153C141.677 36.2712 141.766 35.9052 141.878 35.4172C142.008 34.9128 142.153 34.3923 142.314 33.8555L144.008 28.1455H147.227V45.9587H144.759V39.9559C144.759 39.1913 144.775 38.3454 144.807 37.4181C144.855 36.4745 144.92 35.531 145.001 34.5875C145.081 33.6276 145.162 32.7167 145.243 31.8545C145.323 30.9761 145.396 30.2115 145.461 29.5609L142.847 38.2234H140.33L137.667 29.5609C137.748 30.1952 137.829 30.9353 137.909 31.7813C137.99 32.611 138.063 33.4976 138.127 34.4412C138.192 35.3845 138.248 36.3363 138.297 37.2962C138.345 38.2397 138.369 39.1262 138.369 39.9559V45.9587H135.901ZM151.187 45.9587V43.6161H154.745V30.4881H151.187V28.1455H160.965V30.4881H157.407V43.6161H160.965V45.9587H151.187ZM169.281 45.9587V30.5613H164.562V28.1211H176.614V30.5613H171.895V45.9587H169.281Z" fill="#61A6FF"/>
<path d="M0.702637 142.196H216.787V217.972H0.702637V142.196Z" fill="#0F193B" stroke="#002C85"/>
<path d="M62.8609 162.396C62.7621 162.279 62.6394 162.187 62.5012 162.122C62.3631 162.058 62.2129 162.024 62.0608 162.024C61.9087 162.024 61.7586 162.058 61.6204 162.122C61.4823 162.187 61.3595 162.279 61.2607 162.396C58.4813 165.673 49.4189 177.004 49.4189 185.398C49.4189 193.22 54.3035 198.143 62.0605 198.143C69.8173 198.143 74.7019 193.22 74.7019 185.398C74.7019 177.004 65.6395 165.673 62.8609 162.396ZM63.4651 193.542C63.2963 193.542 63.1299 193.501 62.98 193.423C62.83 193.345 62.7008 193.233 62.6033 193.093C62.5056 192.954 62.4427 192.793 62.4192 192.626C62.396 192.457 62.4132 192.285 62.4695 192.125C62.5414 191.915 62.6767 191.735 62.8567 191.608C63.0364 191.48 63.2516 191.413 63.4711 191.416C64.8655 191.413 66.202 190.854 67.188 189.86C68.1739 188.865 68.7293 187.518 68.7324 186.112C68.7291 185.891 68.7953 185.674 68.9213 185.492C69.0474 185.312 69.2269 185.175 69.4346 185.102C69.5937 185.045 69.7639 185.029 69.9311 185.052C70.0983 185.076 70.2572 185.139 70.3949 185.237C70.5325 185.336 70.6447 185.466 70.7221 185.617C70.7994 185.769 70.8396 185.936 70.8392 186.107C70.8371 188.078 70.0594 189.967 68.6771 191.361C67.2946 192.754 65.4201 193.538 63.4651 193.542Z" fill="#61A6FF"/>
<path d="M100.614 188.449V170.635H106.084C107.133 170.635 108.052 170.856 108.843 171.295C109.634 171.718 110.247 172.311 110.683 173.075C111.118 173.84 111.336 174.736 111.336 175.76C111.336 176.963 111.021 177.996 110.392 178.859C109.779 179.721 108.94 180.315 107.875 180.64L111.578 188.449H109.012L105.624 180.884H102.793V188.449H100.614ZM102.793 178.908H106.084C106.988 178.908 107.714 178.622 108.262 178.053C108.811 177.468 109.085 176.703 109.085 175.76C109.085 174.799 108.811 174.035 108.262 173.466C107.714 172.896 106.988 172.612 106.084 172.612H102.793V178.908ZM114.11 188.449L118.708 170.635H121.637L126.211 188.449H124.009L122.847 183.715H117.498L116.336 188.449H114.11ZM117.934 181.86H122.387L121.032 176.37C120.774 175.329 120.572 174.458 120.427 173.758C120.281 173.059 120.193 172.604 120.16 172.392C120.128 172.604 120.039 173.059 119.894 173.758C119.749 174.458 119.547 175.321 119.289 176.345L117.934 181.86ZM129.59 188.449V170.635H132.494L137.891 185.886C137.859 185.479 137.819 184.983 137.77 184.398C137.738 183.796 137.706 183.17 137.673 182.518C137.657 181.852 137.649 181.225 137.649 180.64V170.635H139.755V188.449H136.85L131.477 173.197C131.51 173.588 131.542 174.084 131.574 174.685C131.607 175.272 131.631 175.898 131.647 176.565C131.679 177.215 131.695 177.842 131.695 178.443V188.449H129.59ZM149.281 188.693C148.216 188.693 147.289 188.489 146.498 188.083C145.723 187.676 145.118 187.089 144.683 186.325C144.263 185.544 144.053 184.626 144.053 183.569V175.516C144.053 174.441 144.263 173.523 144.683 172.758C145.118 171.994 145.723 171.409 146.498 171.002C147.289 170.594 148.216 170.391 149.281 170.391C150.346 170.391 151.266 170.602 152.04 171.026C152.815 171.433 153.412 172.018 153.831 172.783C154.251 173.547 154.46 174.458 154.46 175.516H152.282C152.282 174.506 152.016 173.734 151.483 173.197C150.967 172.644 150.233 172.368 149.281 172.368C148.329 172.368 147.579 172.636 147.03 173.173C146.498 173.71 146.231 174.482 146.231 175.492V183.569C146.231 184.577 146.498 185.357 147.03 185.91C147.579 186.463 148.329 186.74 149.281 186.74C150.233 186.74 150.967 186.463 151.483 185.91C152.016 185.357 152.282 184.577 152.282 183.569V181.372H148.7V179.372H154.46V183.569C154.46 184.609 154.251 185.52 153.831 186.301C153.412 187.065 152.815 187.66 152.04 188.083C151.266 188.489 150.346 188.693 149.281 188.693ZM158.856 188.449V170.635H169.021V172.636H161.01V178.15H168.174V180.128H161.01V186.447H169.021V188.449H158.856Z" fill="#61A6FF"/>
<path d="M0.702637 283.018H216.787V358.793H0.702637V283.018Z" fill="#0F193B" stroke="#002C85"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M58.6032 301.732C58.9182 301.732 59.2207 301.858 59.4435 302.082C59.6663 302.308 59.7917 302.612 59.7917 302.929V304.162C69.597 304.698 77.6193 311.845 77.6193 320.904C77.6193 320.904 77.6193 322.103 76.4308 322.103C76.0766 322.103 75.5941 321.755 75.5941 321.755L75.5845 321.745L75.5252 321.691C75.117 321.334 74.6751 321.017 74.2059 320.747C73.0774 320.08 71.7961 319.722 70.4882 319.706C68.9717 319.706 67.688 320.217 66.7706 320.747C66.3013 321.017 65.8594 321.334 65.4514 321.691L65.3919 321.745L65.3849 321.753C65.3849 321.753 64.8999 322.103 64.5457 322.103C64.1915 322.103 63.709 321.755 63.709 321.755L63.6995 321.745L63.64 321.691C63.2318 321.334 62.79 321.017 62.3208 320.747C61.5375 320.29 60.6818 319.974 59.7917 319.812V334.086V334.18L59.7797 334.379C59.7159 335.297 59.4752 336.195 59.0714 337.019C58.6601 337.87 58.035 338.598 57.2576 339.128C56.3687 339.72 55.2444 340.078 53.8491 340.078C52.4539 340.078 51.327 339.722 50.4403 339.128C49.6631 338.598 49.0377 337.871 48.6267 337.019C48.1939 336.133 47.9495 335.166 47.909 334.18V334.12L47.9066 334.097V334.091C47.9066 334.091 47.9066 334.086 49.0951 334.086H47.9066V332.887C47.9066 332.569 48.0318 332.266 48.2546 332.04C48.4776 331.816 48.7797 331.689 49.0951 331.689C49.4102 331.689 49.7126 331.816 49.9354 332.04C50.1582 332.266 50.2836 332.569 50.2836 332.887V334.1L50.2907 334.206C50.3324 334.811 50.4896 335.401 50.7542 335.944C50.9801 336.403 51.301 336.826 51.7598 337.132C52.2114 337.437 52.8674 337.681 53.8491 337.681C54.8309 337.681 55.4869 337.437 55.9385 337.132C56.3973 336.826 56.7182 336.403 56.9463 335.944C57.2259 335.37 57.3853 334.741 57.4147 334.1V319.812C56.5243 319.974 55.6687 320.29 54.8855 320.747C54.3932 321.031 53.9312 321.365 53.5069 321.745L53.4973 321.755C53.4973 321.755 53.017 322.103 52.6606 322.103C52.3064 322.103 51.8238 321.755 51.8238 321.755L51.8144 321.745C51.3899 321.365 50.9281 321.031 50.4358 320.747C49.3071 320.08 48.0258 319.722 46.7181 319.706C45.2014 319.706 43.9202 320.217 43.0004 320.747C42.5081 321.031 42.046 321.365 41.6217 321.745L41.6121 321.755C41.6121 321.755 41.1319 322.103 40.7756 322.103C39.5869 322.103 39.5869 320.904 39.5869 320.904C39.5869 311.845 47.6094 304.698 57.4147 304.162V302.929C57.4147 302.612 57.5398 302.308 57.7626 302.082C57.9857 301.858 58.2879 301.732 58.6032 301.732Z" fill="#61A6FF"/>
<path d="M98.8303 329.863C97.7654 329.863 96.8376 329.66 96.047 329.253C95.2726 328.845 94.6674 328.26 94.2318 327.497C93.8123 326.716 93.6025 325.796 93.6025 324.739V316.686C93.6025 315.613 93.8123 314.693 94.2318 313.929C94.6674 313.164 95.2726 312.579 96.047 312.172C96.8376 311.764 97.7654 311.562 98.8303 311.562C99.8952 311.562 100.815 311.774 101.589 312.197C102.364 312.603 102.961 313.189 103.38 313.953C103.8 314.717 104.01 315.629 104.01 316.686H101.831C101.831 315.678 101.565 314.906 101.033 314.369C100.516 313.815 99.7821 313.538 98.8303 313.538C97.8782 313.538 97.128 313.807 96.5795 314.345C96.047 314.881 95.7808 315.654 95.7808 316.662V324.739C95.7808 325.747 96.047 326.528 96.5795 327.082C97.128 327.619 97.8782 327.887 98.8303 327.887C99.7821 327.887 100.516 327.619 101.033 327.082C101.565 326.528 101.831 325.747 101.831 324.739H104.01C104.01 325.78 103.8 326.692 103.38 327.473C102.961 328.235 102.364 328.83 101.589 329.253C100.815 329.66 99.8952 329.863 98.8303 329.863ZM113.245 329.863C112.181 329.863 111.261 329.66 110.486 329.253C109.728 328.845 109.139 328.26 108.719 327.497C108.316 326.716 108.114 325.796 108.114 324.739V316.686C108.114 315.613 108.316 314.693 108.719 313.929C109.139 313.164 109.728 312.579 110.486 312.172C111.261 311.764 112.181 311.562 113.245 311.562C114.31 311.562 115.222 311.764 115.98 312.172C116.755 312.579 117.344 313.164 117.747 313.929C118.167 314.693 118.376 315.605 118.376 316.662V324.739C118.376 325.796 118.167 326.716 117.747 327.497C117.344 328.26 116.755 328.845 115.98 329.253C115.222 329.66 114.31 329.863 113.245 329.863ZM113.245 327.887C114.197 327.887 114.923 327.619 115.424 327.082C115.94 326.528 116.198 325.747 116.198 324.739V316.686C116.198 315.678 115.94 314.906 115.424 314.369C114.923 313.815 114.197 313.538 113.245 313.538C112.31 313.538 111.584 313.815 111.067 314.369C110.551 314.906 110.293 315.678 110.293 316.686V324.739C110.293 325.747 110.551 326.528 111.067 327.082C111.584 327.619 112.31 327.887 113.245 327.887ZM126.257 329.619L121.707 311.806H123.958L126.959 323.91C127.168 324.755 127.346 325.544 127.491 326.277C127.636 326.991 127.741 327.536 127.806 327.912C127.87 327.536 127.967 326.991 128.096 326.277C128.241 325.544 128.419 324.755 128.629 323.91L131.606 311.806H133.808L129.234 329.619H126.257ZM137.429 329.619V311.806H147.594V313.807H139.583V319.322H146.747V321.298H139.583V327.619H147.594V329.619H137.429ZM151.747 329.619V311.806H157.217C158.266 311.806 159.185 312.026 159.976 312.465C160.767 312.886 161.38 313.481 161.815 314.247C162.251 315.01 162.469 315.906 162.469 316.93C162.469 318.134 162.154 319.166 161.525 320.03C160.912 320.89 160.073 321.485 159.008 321.81L162.711 329.619H160.145L156.757 322.054H153.926V329.619H151.747ZM153.926 320.079H157.217C158.12 320.079 158.847 319.792 159.395 319.225C159.944 318.639 160.218 317.874 160.218 316.93C160.218 315.971 159.944 315.205 159.395 314.638C158.847 314.067 158.12 313.782 157.217 313.782H153.926V320.079Z" fill="#61A6FF"/>
</svg>

            </div>
            <div className="z-50 relative px-7 pb-7">
              <h2 className="text-xl text-white font-Helvetica">
                Use a different pool for each one of your needs{" "}
              </h2>
              <p className="text-[#A5A5A5] mt-3 md:text-base text-sm font-Helvetica">
                Poolshark has 3 different types of pools: Range, Cover & Limit.
                These all have several different use cases that fit each one of
                you on-chain needs.
              </p>
            </div>
            <div className="w-full h-full bg-black/60 absolute top-0 left-0 border border-[#022E87]" />
            <div className="w-full h-full bg-black bw absolute top-0 left-0" />
          </div>
        </div>
      </div>
      <div className="md:bg-[url('/images/bg2.png')] bg-[url('/images/bgg.png')] bg-cover overflow-x-hidden border-t border-white/20 pb-20 pt-14">
        <div className="max-w-7xl mx-auto mt-20 mb-20 px-5">
          <div className="mx-auto flex flex-col md:items-start items-center justify-center text-center md:text-left px-5 md:px-0">
          <h3 className="text-[#898989]">
          We are bringing completely new liquidity primitives to the table...
          </h3>
          <h1 className="text-4xl text-white mt-3">Cover Pools</h1>
          </div>
          <div className="flex grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 max-w-lg md:max-w-none mx-auto gap-10 md:items-start items-center justify-between mt-10 font-Helvetica">
            <div className="flex flex-col">
              <div className="bg-white/5 h-[300px] border border-white/10 w-full mb-5 rounded-xl flex items-center justify-center">
              <Image
                  src="/images/balance.png"
                  width={220}
                  height={200}
                  className="mx-auto"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">Rebalance Your Portfolio</h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
              Dynamically rebalance your holdings as the prices moves. Hedge out other trades in your portfolio to protect against moves in the market.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-white/5 md:h-[300px] border border-white/10 relative w-full mb-5 rounded-xl flex items-center justify-center">
              <Image
                  src="/images/risk.svg"
                  width={400}
                  height={300}
                  className="w-full bottom-0 md:absolute"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">Reduce Risk and Losses</h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
                As the current price enters your price range, your liquidity is
                unlocked similar to that of a stop-loss.
              </p>
            </div>
            <div className="flex flex-col ">
              <div className="bg-white/5 md:h-[300px] relative border border-white/10 w-full mb-5 rounded-xl flex items-center justify-center overflow-hidden">
              <Image
                  src="/images/entry.svg"
                  width={400}
                  height={300}
                  className="w-full md:bottom-0 md:absolute"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">Take a Bullish Entry</h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
                Never miss a directional move again by accounting for the
                expected volatility range.
              </p>
            </div>
          </div>
          <div className="mx-auto flex flex-col md:items-start items-center justify-center">
          <h1 className="text-4xl text-white mt-44 flex md:flex-row flex-col text-center md:text-left gap-x-4 items-end">
            Limit Pools
            <span className="text-sm text-[#898989]">
              (Range Limit Orders)
            </span>
            
          </h1>
          </div>
          <div className="flex grid md:grid-cols-3 grid-rows-3 md:grid-rows-1 max-w-lg md:max-w-none mx-auto gap-10 md:items-start items-center justify-between mt-10 font-Helvetica">
            <div className="flex flex-col">
              <div className="bg-white/5 h-[300px] border border-white/10 w-full mb-5 rounded-xl flex items-center justify-center">
              <Image
                  src="/images/range.svg"
                  width={300}
                  height={400}
                  className="mx-auto w-full"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">Scale into a trade</h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
                Uncertain about where the market price will go? Select a range
                for your order to get filled in one single call.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-white/5 h-[300px] border border-white/10 rounded-xl w-full mb-5">
                <Image
                  src="/images/price.png"
                  width={400}
                  height={200}
                  className="mx-auto"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">Exact execution</h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
                Lock in an exact price with limit swaps, a new way to trade your favourite tokens.
              </p>
            </div>
            <div className="flex flex-col">
              <div className="bg-white/5 h-[300px] w-full mb-5 rounded-xl border border-white/10 flex items-center justify-center">
                <Image
                  src="/images/gas.png"
                  width={220}
                  height={200}
                  className="mx-auto"
                  alt="Your price"
                />
              </div>
              <h4 className="text-white text-xl font-Helvetica">
                Same gas costs no matter the range
              </h4>
              <p className="text-sm text-[#858585] mt-2 font-Helvetica">
                Our on-chain execution is proven to have less of a cost for
                users. As the price moves you have the same gas cost.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[url('/images/bg3.png')] bg-cover overflow-x-hidden border-t border-b border-white/20 text-center">
        <div className="flex items-center justify-center flex-col my-32 md:px-5 px-8 lg:px-0">
          <h1 className="text-white md:text-[40px] text-2xl font-Helvetica">
            Join the Poolshark Community
          </h1>
          <p className="text-white/60 mt-5 md:text-base text-sm font-Helvetica">
            Follow our social platforms to be the first to get progress updates!
          </p>
          <div className="flex md:flex-row flex-col items-center justify-center mt-10 md:gap-x-10 gap-y-3">
            <a href="https://discord.com/invite/HJhrD9sZ6K" target="_blank" className="bg-white/10 py-2 border border-white/20 text-sm text-white flex hover:opacity-80 items-center gap-x-4 w-48 justify-center">
              <Discord /> DISCORD
            </a>
            <a href="https://twitter.com/poolsharklabs" target="_blank" className="bg-white/10 py-2 border border-white/20 text-sm text-white flex hover:opacity-80 items-center gap-x-4 w-48 justify-center">
              <Twitter /> TWITTER
            </a>
            <a href="https://mirror.xyz/pshark.eth" target="_blank" className="bg-white/10 py-2 border border-white/20 text-sm text-white flex hover:opacity-80 items-center gap-x-4 w-48 justify-center">
            <svg width="15" height="19" viewBox="0 0 22 29" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_1727_518)">
<path d="M0 11.2258C0 5.02597 4.89839 0 10.9409 0C16.9834 0 21.8817 5.02597 21.8817 11.2258V27.2942C21.8817 28.2363 21.1374 29 20.2191 29H1.66259C0.744367 29 0 28.2363 0 27.2942V11.2258Z" fill="white"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M20.5818 27.6066V11.2585C20.5818 5.77937 16.2655 1.33765 10.9409 1.33765C5.61631 1.33765 1.2999 5.77937 1.2999 11.2585V27.6066C1.2999 27.6375 1.32415 27.6624 1.35407 27.6624H20.5277C20.5576 27.6624 20.5818 27.6375 20.5818 27.6066ZM10.9409 0C4.89839 0 0 5.04061 0 11.2585V27.6066C0 28.3761 0.606236 29 1.35407 29H20.5277C21.2755 29 21.8817 28.3761 21.8817 27.6066V11.2585C21.8817 5.04061 16.9834 0 10.9409 0Z" fill="white"/>
</g>
<defs>
<clipPath id="clip0_1727_518">
<rect width="22" height="29" fill="white"/>
</clipPath>
</defs>
</svg>

              MIRROR
            </a>
          </div>
        </div>
      </div>
      <footer className="bg-black container mx-auto my-5 flex items-center justify-between px-5 md:px-0">
        <div className="text-white flex items-center gap-x-4">
          <Image
            src="/images/logoascii.png"
            width={70}
            height={70}
            className="w-[75px]"
            alt="Poolshark logo"
          />
        </div>
        <div className="flex items-center gap-x-9 text-white/60 text-sm">
        <a href="https://docs.poolshark.fi/" target="_blank" className="hover:opacity-60 transition-all md:block hidden">DOCUMENTATION</a>
            <a href="https://mirror.xyz/pshark.eth" target="_blank" className="hover:opacity-60 transition-all md:block hidden">ARTICLES</a>
            <a href="https://testnet.poolshark.fi/" target="_blank" className="hover:opacity-60 transition-all">ACCESS TESTNET</a>
        </div>
      </footer>
    </div>
  );
}
