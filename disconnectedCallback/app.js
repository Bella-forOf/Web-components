
class MyCustomElement extends HTMLElement {
    constructor () {
        super ();
        
    }


connectedCallback() {
    
}
disconnectedCallback(){

}
}
customElements.define('my-custom-element', MyCustomElement );
document.querySelector("my-custom-element").remove();