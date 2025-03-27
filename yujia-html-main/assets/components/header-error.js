class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="sticky top-0 z-40 grid grid-cols-3 bg-white/[.64] backdrop-blur-md shadow-md p-5 md:px-10">
        <!-- Left -->
        <a href="/" class="relative flex items-center h-10 cursor-pointer my-auto">
          <img
            src="/assets/images/global/logos/primary-logo.svg"
            alt="予家"
            class="h-8 w-auto md:h-10"
          />
        </a>
      </header>
    `
  }
}

customElements.define('header-error', Header);