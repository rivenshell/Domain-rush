/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  let pronoun = ["the", "my", " "];
  let adj = [
    "great",
    "big",
    "average",
    "blue",
    "clever",
    "calm",
    "real",
    "silly",
    "shiny",
    "super"
  ];
  let noun = [
    "wife",
    "racoon",
    "device",
    "psychology",
    "power",
    "apple",
    "tongue"
  ];

  function pulldomain(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  let secone = pulldomain(pronoun);
  let sectwo = pulldomain(adj);
  let secthree = pulldomain(noun);

  let result = secone + sectwo + secthree + ".com";
  document.getElementById("root").innerHTML = result;

  // document.getElementById("excuse").innerHTML = pullexcuse(what);
  console.log("is my code working");
};
