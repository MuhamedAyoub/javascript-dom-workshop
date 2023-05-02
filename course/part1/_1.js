/*
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let idElement = document.getElementById("esiId");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("esiClass");
let myQueryElement = document.querySelector(".esiClass #esiId ");
let myQueryAllElement = document.querySelectorAll(".esiClass");

console.log(idElement);
console.log(myTagElements[1]);
console.log(myClassElement[1]);
console.log(myQueryElement);
console.log(myQueryAllElement[1]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[0].one.value);
console.log(document.links[1].href);