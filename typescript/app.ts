interface StyleStructure{
    type: string,
    rel: string,
    href: string
}

interface ScriptStructure{
    source: string,
    defer: boolean
}


function NavigationAndFooterGenerator(navbarContent: string, footerContent: string){
    return (_: Function) => {
        window.customElements.define('app-header', class extends HTMLElement {});
        window.customElements.define('app-footer', class extends HTMLElement {});
        let navbar = document.querySelector('app-header')
        let footer = document.querySelector('app-footer')
        navbar!.innerHTML = navbarContent
        footer!.innerHTML = footerContent
    }
}

function StylesheetGenerator(styleFileList: StyleStructure[]){
    return (_: Function) => {
        styleFileList.forEach(styleFile => {
            let link = document.createElement('link')
            link.type = styleFile.type
            link.rel = styleFile.rel,
            link.href = styleFile.href
            document.head.append(link)
        })
        }
}

function ScriptFileGenerator(scriptFileList: ScriptStructure[]){
    return (_: Function) => {
        scriptFileList.forEach(script => {
            const jsScript = document.createElement('script')
            jsScript.src = script.source
            jsScript.defer = script.defer
            document.head.append(jsScript)
        })
    }
}

const navbarContent = `
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
    <a href="#">Link</a>
`

const footerContent = `<h1>Here is the footer</h1>`

const styles: StyleStructure[] = [
    {type: 'text/css', rel: 'stylesheet', href: '../styles/index.css'},
    {type: 'text/css', rel: 'stylesheet', href: '../styles/nav-footer.css'},
]

const scripts: ScriptStructure[] = [
    {source: '../javascript/app.js', defer: true}
]

@NavigationAndFooterGenerator(navbarContent, footerContent)
@ScriptFileGenerator(scripts)
@StylesheetGenerator(styles)
class GenerateInitialDocument{
    constructor(){
    }
}