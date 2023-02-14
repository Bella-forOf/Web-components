const template = document.createElement('div');
template.innerHTML= `
<style>
.texto{
    color: red;
}
.texto2{
    color: blue;
}
</style>
<p class="texto"> Hola Bella bienvenida al mundo de los Web components </p>
<p class="texto2"> Disfrutalo </p>`;

class myElement extends HTMLElement {
    constructor () {
        super ();
    this.p = document.createElement('p');
}
connectedCallback() {
    this.p.textContent = "hola mundo";
    this.appendChild(this.p);
    this.appendChild(template);
}
}
customElements.define('my-element', myElement );