class Header extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        <header>
            <a href="index.html" class="logo">AKKKKIRA</a>
            <ul>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html#sec">About Me</a></li>
                <li><a href="work.html">Work (Coding && Music)</a></li>
                <li><a href="blog.html" class="active">Blog</a></li>
            </ul>
        </header>
      `;
    }
  }

  customElements.define('header-component', Header);