function run(){
    let Html=document.getElementById("html-id").value;
let css=document.getElementById("css-id").value;
let js=document.getElementById("js-id").value;
let output=document.getElementById("output");

output.contentDocument.body.innerHTML=Html+"<style>"+css+"</style>";
output.contentWindow.eval(js);
}