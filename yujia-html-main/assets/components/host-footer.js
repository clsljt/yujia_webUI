class Footer extends HTMLElement {
  connectedCallback() {
    this.innerHTML = 
      `
        <footer class="border-t border-gray-200 mt-12 md:mt-20">
          <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div class="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
              <div>
                <div class="flex items-center text-gray-900">
                  <img src="/assets/images/global/logos/primary-logo.svg" alt="予家" class="h-10 w-10 flex-none" />
                  <div class="ml-4">
                    <p class="text-base font-semibold">
                      予家
                    </p>
                    <p class="mt-1 text-sm">
                      老共青租房平台
                    </p>
                  </div>
                </div>
                <nav class="mt-11 flex gap-8">
                  <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]" href="/rent">
                    <span class="relative z-10">
                      租房
                    </span>
                  </a>
                  <a class="relative -my-2 -mx-3 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-[0ms]" href="/host/become-a-host.html">
                    <span class="relative z-10">
                      发布房源
                    </span>
                  </a>
                </nav>
              </div>
              <div class="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                <div class="relative flex h-24 w-24 flex-none items-center justify-center">
                  <svg fill="none" aria-hidden="true" class="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-blue-500">
                    <path d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8" stroke-width="2" stroke-linecap="round"></path>
                  </svg>
                  <img src="/assets/images/global/wechat-official.png" alt="予家" class="h-18" />
                </div>
                <div class="ml-8 lg:w-64">
                  <p class="text-base font-semibold text-gray-900">
                    关注予家公众号
                  </p>
                  <p class="mt-1 text-sm text-gray-700">
                    在微信里更便捷地使用予家。
                  </p>
                </div>
              </div>
            </div>
            <div class="flex flex-col items-center border-t border-gray-200 pt-8 pb-12 md:flex-row-reverse md:justify-between md:pt-6">
              <p class="mt-6 text-sm text-gray-500 md:mt-0">
                &copy; 2022 予家 版权所有
              </p>
            </div>
          </div>
        </footer>
    `
  }
}

customElements.define('host-footer', Footer);