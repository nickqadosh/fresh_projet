"use strict";

fetch("https://cross-origin.herokuapp.com/https://www.gabonmediatime.com/feed/").then(function (response) {
  return response.text();
}).then(function (str) {
  return new window.DOMParser().parseFromString(str, "text/xml");
}).then(function (data) {
  console.log(data);
  var items = data.querySelectorAll("item");
  var html = "";
  items.forEach(function (el) {
    html += "\n        <article>\n          <img src=\"".concat(el.querySelector("link").innerHTML, "/image/large.png\" alt=\"\">\n          <h2>\n            <a href=\"").concat(el.querySelector("link").innerHTML, "\" target=\"_blank\" rel=\"noopener\">\n              ").concat(el.querySelector("title").innerHTML, "\n            </a>\n          </h2>\n        </article>\n      ");
  });
  document.body.insertAdjacentHTML("beforeend", html);
});