
export default function Theme(){
    const tema = localStorage.getItem('tema');
    var sheet = window.document.styleSheets[0];
    if(tema !== null){
        sheet.insertRule(tema, sheet.cssRules.length);
    }
}