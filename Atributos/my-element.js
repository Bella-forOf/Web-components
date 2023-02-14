
class myElement extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow({mode:"open" })
        this.title = this.getAttribute("title");
        this.parrafo = this.getAttribute("parrafo");
        this.img = this.getAttribute("img");
    }
    getTemplate() {
        const template = document.createElement('template');
template.innerHTML= `
<h2>${this.title}</h2>
<div>
<p>${this.parrafo} </p>
<img src=${this.img}/>
</div>


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