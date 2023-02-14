
class myElement extends HTMLElement {
    constructor () {
        super ();
    }
    getTemplate() {
        const template = document.createElement('template');
template.innerHTML= `

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
this.appendChild(this.getTemplate().content.cloneNode(true));
}

connectedCallback() {
    this.render()
}
}
customElements.define('my-element', myElement );