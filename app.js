// const heading = React.createElement("h1", {}, "hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// let res = fetch("https://dog.ceo/api/breeds/image/random");

// let data = JSON.parse(res);
// console.log(data);
// var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// var xhrRequest = new XMLHttpRequest();
// xhrRequest.open('get', 'https://dog.ceo/api/breeds/image/random', true);
// xhrRequest.send();
// xhrRequest.onload = function (){
//     console.log(xhrRequest.responseText);
//     var responeJSON = JSON.parse(xhrRequest.responseText);
//     console.log(responeJSON);
// }

let arg = process.argv.slice(2);

console.log(parseInt(arg[0]) + parseInt(arg[1]));