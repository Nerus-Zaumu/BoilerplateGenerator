"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function NavigationAndFooterGenerator(navbarContent, footerContent) {
    return (_) => {
        window.customElements.define('app-header', class extends HTMLElement {
        });
        window.customElements.define('app-footer', class extends HTMLElement {
        });
        let navbar = document.querySelector('app-header');
        let footer = document.querySelector('app-footer');
        navbar.innerHTML = navbarContent;
        footer.innerHTML = footerContent;
    };
}
function StylesheetGenerator(styleFileList) {
    return (_) => {
        styleFileList.forEach(styleFile => {
            let link = document.createElement('link');
            link.type = styleFile.type;
            link.rel = styleFile.rel,
                link.href = styleFile.href;
            document.head.append(link);
        });
    };
}
function ScriptFileGenerator(scriptFileList) {
    return (_) => {
        scriptFileList.forEach(script => {
            const jsScript = document.createElement('script');
            jsScript.src = script.source;
            jsScript.defer = script.defer;
            document.head.append(jsScript);
        });
    };
}
const navbarContent = `
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
`;
const footerContent = `<h1>Here is the footer</h1>`;
const styles = [
    { type: 'text/css', rel: 'stylesheet', href: '../styles/index.css' },
    { type: 'text/css', rel: 'stylesheet', href: '../styles/nav-footer.css' },
];
const scripts = [
    { source: '../javascript/app.js', defer: true }
];
let GenerateInitialDocument = class GenerateInitialDocument {
    constructor() {
    }
};
GenerateInitialDocument = __decorate([
    NavigationAndFooterGenerator(navbarContent, footerContent),
    ScriptFileGenerator(scripts),
    StylesheetGenerator(styles)
], GenerateInitialDocument);
