

export default function Home() {
  return (
    <div className="bg-black font-Satoshi bg-[url('/images/bg.svg')] bg-cover overflow-x-hidden">
      <div className="container mx-auto md:px-0 px-5 flex justify-between items-center">
        <div className="flex items-center gap-x-5 py-6">
          <img className="w-44 mr-10" src="/images/poolsharkmain.png" />
          <a href="https://twitter.com/poolsharklabs" target="_blank" className="hover:opacity-80 transition-all">
          <svg fill="currentColor" className="text-white w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path fill-rule="evenodd" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
          </a>
          <a href="https://discord.com/invite/HJhrD9sZ6K" target="_blank" className="hover:opacity-80 transition-all">
          <svg fill="currentColor" className="text-white w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path fill-rule="evenodd" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
          </a>
        </div>
        <div className="gap-x-8 items-center md:flex hidden">
          <a href="https://poolshark-protocol.medium.com/" target="_blank" className="text-white text-sm hover:opacity-80 transition-all">Articles</a>
          <a href="https://docs.poolsharks.io/" target="_blank" className="bg-[#bdf] px-14 py-3 rounded-xl text-sm hover:opacity-80 transition-all">Docs</a>
        </div>
      </div>
      <div className="container md:px-0 px-5 mx-auto md:flex mx-auto space-y-5 md:space-y-0 md:justify-between md:items-center py-20">
        <div className="text-white ">
          <h1 className="md:text-6xl text-4xl font-bold max-w-lg md:min-w-[600px] leading-tight">Directional Liquidity for Ethereum</h1>
          <p className="text-[#615F68] md:max-w-lg mt-5">Poolshark is a directional AMM where users can profit from volatility with less maintenance. Traders can now be LPs too.</p>
        </div>
        <img alt="Poolshark UI elements" className="md:max-w-4xl" src="/images/img1.png" />
      </div>
      <div className="md:px-0 px-5">
        <h1 className="text-white md:text-6xl text-4xl text-center font-bold md:max-w-2xl mx-auto leading-tight mt-20">Directionally balance your LP Position</h1>
        <h2 className="text-[#615F68] text-center md:max-w-2xl mx-auto mt-5  md:text-base text-sm">Protect against loss from volatility by buying the in-demand side of the liquidity pool. Average into your asset of choice to catch moves in the market.</h2>
        <img alt="ETH and DAI Balance" className="md:max-w-6xl mx-auto" src="/images/img2.png" />
      </div>
      <div className="px-5 md:px-20">
      <div className="border-[#ffffff4a] border relative container  mx-auto bg-black rounded-xl shadow-xl px-5 py-10">
        <h1 className="md:text-5xl text-3xl text-white text-center font-bold leading-tight mb-0 md:mb-10">Cover Directional Moves</h1>
        <div className="md:py-14 pt-6 md:space-y-14 lg:px-24 xl:px-40 2xl:px-52 z-20 relative space-y-5">
          <div className="w-full text-white md:flex gap-x-5 justify-between space-y-5 md:space-y-0">
            <div className="bg-black px-6 py-6 rounded-xl border-[#ffffff4a] border lg:max-w-sm min-h-36">
              <div className="flex items-center gap-x-4">
                <svg width="33" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M6.49979 3.62592C5.66436 3.62592 4.86315 3.95779 4.27241 4.54853C3.68167 5.13927 3.34979 5.94048 3.34979 6.77592V9.57592C3.34979 9.85439 3.46042 10.1215 3.65733 10.3184C3.85424 10.5153 4.12132 10.6259 4.39979 10.6259C4.67827 10.6259 4.94534 10.5153 5.14225 10.3184C5.33917 10.1215 5.44979 9.85439 5.44979 9.57592V6.77592C5.44979 6.49744 5.56042 6.23037 5.75733 6.03345C5.95424 5.83654 6.22132 5.72592 6.49979 5.72592H9.29979C9.57827 5.72592 9.84534 5.61529 10.0423 5.41838C10.2392 5.22146 10.3498 4.95439 10.3498 4.67592C10.3498 4.39744 10.2392 4.13037 10.0423 3.93345C9.84534 3.73654 9.57827 3.62592 9.29979 3.62592H6.49979ZM19.7998 3.62592C19.5213 3.62592 19.2542 3.73654 19.0573 3.93345C18.8604 4.13037 18.7498 4.39744 18.7498 4.67592C18.7498 4.95439 18.8604 5.22146 19.0573 5.41838C19.2542 5.61529 19.5213 5.72592 19.7998 5.72592H22.5998C22.8783 5.72592 23.1453 5.83654 23.3423 6.03345C23.5392 6.23037 23.6498 6.49744 23.6498 6.77592V9.57592C23.6498 9.85439 23.7604 10.1215 23.9573 10.3184C24.1542 10.5153 24.4213 10.6259 24.6998 10.6259C24.9783 10.6259 25.2453 10.5153 25.4423 10.3184C25.6392 10.1215 25.7498 9.85439 25.7498 9.57592V6.77592C25.7498 5.94048 25.4179 5.13927 24.8272 4.54853C24.2364 3.95779 23.4352 3.62592 22.5998 3.62592H19.7998ZM5.44979 20.0759C5.44979 19.7974 5.33917 19.5304 5.14225 19.3335C4.94534 19.1365 4.67827 19.0259 4.39979 19.0259C4.12132 19.0259 3.85424 19.1365 3.65733 19.3335C3.46042 19.5304 3.34979 19.7974 3.34979 20.0759V22.8759C3.34979 23.7113 3.68167 24.5126 4.27241 25.1033C4.86315 25.694 5.66436 26.0259 6.49979 26.0259H9.29979C9.57827 26.0259 9.84534 25.9153 10.0423 25.7184C10.2392 25.5215 10.3498 25.2544 10.3498 24.9759C10.3498 24.6974 10.2392 24.4304 10.0423 24.2335C9.84534 24.0365 9.57827 23.9259 9.29979 23.9259H6.49979C6.22132 23.9259 5.95424 23.8153 5.75733 23.6184C5.56042 23.4215 5.44979 23.1544 5.44979 22.8759V20.0759ZM25.7498 20.0759C25.7498 19.7974 25.6392 19.5304 25.4423 19.3335C25.2453 19.1365 24.9783 19.0259 24.6998 19.0259C24.4213 19.0259 24.1542 19.1365 23.9573 19.3335C23.7604 19.5304 23.6498 19.7974 23.6498 20.0759V22.8759C23.6498 23.1544 23.5392 23.4215 23.3423 23.6184C23.1453 23.8153 22.8783 23.9259 22.5998 23.9259H19.7998C19.5213 23.9259 19.2542 24.0365 19.0573 24.2335C18.8604 24.4304 18.7498 24.6974 18.7498 24.9759C18.7498 25.2544 18.8604 25.5215 19.0573 25.7184C19.2542 25.9153 19.5213 26.0259 19.7998 26.0259H22.5998C23.4352 26.0259 24.2364 25.694 24.8272 25.1033C25.4179 24.5126 25.7498 23.7113 25.7498 22.8759V20.0759ZM10.3498 14.8259C10.3498 13.712 10.7923 12.6437 11.5799 11.8561C12.3676 11.0684 13.4359 10.6259 14.5498 10.6259C15.6637 10.6259 16.732 11.0684 17.5196 11.8561C18.3073 12.6437 18.7498 13.712 18.7498 14.8259C18.7498 15.9398 18.3073 17.0081 17.5196 17.7958C16.732 18.5834 15.6637 19.0259 14.5498 19.0259C13.4359 19.0259 12.3676 18.5834 11.5799 17.7958C10.7923 17.0081 10.3498 15.9398 10.3498 14.8259Z" fill="white" />
                </svg>
                <h1 className="font-medium text-lg">Impermanent Loss Mitigation</h1>
              </div>
              <p className="text-[#615F68] text-xs mt-4">Directionally balance your LP position by choosing the winning side. Average in as the reference price moves and capture profits using Price Pools.</p>
            </div>
            <div className="bg-black px-6 py-6 rounded-xl border-[#ffffff4a] border lg:max-w-sm min-h-36">
              <div className="flex items-center gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M18.375 2.25c-1.035 0-1.875.84-1.875 1.875v15.75c0 1.035.84 1.875 1.875 1.875h.75c1.035 0 1.875-.84 1.875-1.875V4.125c0-1.036-.84-1.875-1.875-1.875h-.75zM9.75 8.625c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-.75a1.875 1.875 0 01-1.875-1.875V8.625zM3 13.125c0-1.036.84-1.875 1.875-1.875h.75c1.036 0 1.875.84 1.875 1.875v6.75c0 1.035-.84 1.875-1.875 1.875h-.75A1.875 1.875 0 013 19.875v-6.75z" />
                </svg>
                <h1 className="font-medium text-lg">Auction Off Liquidity</h1>
              </div>
              <p className="text-[#615F68] text-sm mt-4">As each price tick unlocks liquidity, an auction will take place to automatically find the market price for you.</p>
            </div>
          </div>
          <div className="w-full text-white md:flex gap-x-5 justify-between space-y-5 md:space-y-0">
            <div className="bg-black px-6 py-6 rounded-xl border-[#ffffff4a] border lg:max-w-sm min-h-36">
              <div className="flex items-center gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7">
                  <path fill-rule="evenodd" d="M14.5 1A4.5 4.5 0 0010 5.5V9H3a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-1.5V5.5a3 3 0 116 0v2.75a.75.75 0 001.5 0V5.5A4.5 4.5 0 0014.5 1z" clip-rule="evenodd" />
                </svg>

                <h1 className="font-medium text-lg">Take a bullish entry</h1>
              </div>
              <p className="text-[#615F68] text-sm mt-4">Never miss a directional move again by accounting for the expected volatility range.</p>
            </div>
            <div className="bg-black px-6 py-6 rounded-xl border-[#ffffff4a] border lg:max-w-sm min-h-36">
              <div className="flex items-center gap-x-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-7">
                  <path fill-rule="evenodd" d="M10 1c3.866 0 7 1.79 7 4s-3.134 4-7 4-7-1.79-7-4 3.134-4 7-4zm5.694 8.13c.464-.264.91-.583 1.306-.952V10c0 2.21-3.134 4-7 4s-7-1.79-7-4V8.178c.396.37.842.688 1.306.953C5.838 10.006 7.854 10.5 10 10.5s4.162-.494 5.694-1.37zM3 13.179V15c0 2.21 3.134 4 7 4s7-1.79 7-4v-1.822c-.396.37-.842.688-1.306.953-1.532.875-3.548 1.369-5.694 1.369s-4.162-.494-5.694-1.37A7.009 7.009 0 013 13.179z" clip-rule="evenodd" />
                </svg>
                <h1 className="font-medium text-lg">Save Gas on Multiple Liquidations</h1>
              </div>
              <p className="text-[#615F68] text-xs mt-4">Cover Positions avoid the negative externalities of being on the swap side: gas fees, swap fees, and front-running.</p>
            </div>
          </div>
        </div>
        <img alt="metallic pool" className="max-w-4xl mx-auto -mt-[450px] z-10 lg:block hidden" src="/images/img3.png" />
      </div>
      </div>
      <div className="container mx-auto lg:flex flex-row-reverse lg:gap-x-20 items-center py-20 px-5 md:px-0">
        <div className="text-white lg:max-w-2xl max-w-md mx-auto mb-5">
          <h1 className="xl:text-6xl lg:text-5xl text-4xl font-bold lg:min-w-[500px] leading-tight">Automagically Closing Range Orders</h1>
          <p className="text-[#615F68]  mt-5">Price Pools offer Directional Range Orders to simulate a take-profit. Each pool has two discrete liquidity curves so traders always get the best price on either side.</p>
        </div>
        <img alt="basket of eth tokens" className="xl:max-w-lg lg:max-w-md md:max-w-sm mx-auto" src="/images/img4.png" />
      </div>
      <div className="container text-white mx-auto">
        <h1 className="md:text-5xl text-4xl font-bold text-center">Join the Poolshark community</h1>
        <p className="text-white md:text-base text-sm opacity-40 mt-5 text-center mx-auto">Follow our social platforms to be the first to get progress updates!</p>
        <div className="flex flex-wrap px-6 gap-y-5 items-center gap-x-5 justify-center mt-10">
          <a href="https://poolshark-protocol.medium.com/" target="_blank" className="flex items-center bg-[#bdf] px-9 py-3 rounded-xl text-sm w-min text-black gap-x-4 hover:opacity-80 transition-all">
            <svg fill="currentColor" className="w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Medium</title><path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/></svg>
            Medium</a>
            <a href="https://twitter.com/poolsharklabs" target="_blank" className="flex items-center bg-[#bdf] px-9 py-3 rounded-xl text-sm w-min text-black gap-x-4 hover:opacity-80 transition-all">
            <svg fill="currentColor" className=" w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Twitter</title><path fill-rule="evenodd" d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" /></svg>
            Twitter</a>
            <a href="https://discord.com/invite/HJhrD9sZ6K" target="_blank" className="flex items-center bg-[#bdf] px-9 py-3 rounded-xl text-sm w-min text-black gap-x-4 hover:opacity-80 transition-all">
                      <svg fill="currentColor" className=" w-5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Discord</title><path fill-rule="evenodd" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" /></svg>
            Discord</a>
        </div>
        <img alt="poolshark 3d logo" className="mx-auto flex justify-center mt-10" src="/images/img5.png"/>
      </div>
    </div>
  )
}
