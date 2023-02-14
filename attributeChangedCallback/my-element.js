
class myElement extends HTMLElement {
    constructor () {
        super ();
        this.attachShadow({mode:"open" });
    }
    static get observedAttributes() {
        return ["title", "parrafo", "img"];
    }
    // tienes que decirle que atributos vamos a escuchar y los que no sean estos no valen,
attributeChangedCallback(actual, oldVal, newVal){
if(actual === "title") {
    this.title = newVal;
}
if(actual === "parrafo") {
    this.parrafo = newVal;
}
if(actual === "img") {
    this.img = newVal;
}

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