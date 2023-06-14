
function isJavaScriptFile(string) {
    if (string.endsWith(".js") === true)
        return true;
    else return false;
}

let jsFileOrNot = isJavaScriptFile("index.js")
console.log(jsFileOrNot);
jsFileOrNot = isJavaScriptFile("index.jpg")
console.log(jsFileOrNot);
