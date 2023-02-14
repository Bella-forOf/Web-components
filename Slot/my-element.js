
class myElement extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow({mode:"open" })
    }
    getTemplate() {
        const template = document.createElement('template');
template.innerHTML= `
<h2><slot name="tittle"></slot></h2>
<h2><slot name="parrafo"></slot></h2>
<p class="texto"> Hola Bella bienvenida al mundo de los Web components </p>
<p class="texto2"> Disfrutalo </p>

${this.getStyles()}`;
return template;
    }
    getStyles() {
        return `
        <style>
.texto{
    color: red;
}
.texto2{
    color: blue;
}
</style>`;

    }
render () {
this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
}

connectedCallback() {
    this.render()
}
}
customElements.define('my-element', myElement );