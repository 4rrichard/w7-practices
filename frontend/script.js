let globalVariable1 = 12;

let globalVariable2 = function () {
  console.log("inside the function", globalVariable1);
  let funVariable1 = "Hello";
  let funVariable2 = function () {
    console.log("funVariable2 belseje");
    console.log(globalVariable1);
    console.log(funVariable1);

    let funInFunVariable1 = true;
    let funInFunVariable2 = function () {
      console.log(funInFunVariable1);
    };

    funInFunVariable2();
  };
  funVariable2();

  if (funVariable1 === "hello") {
    let blockVariable1 = "Bye";
  } else {
    // console.log(blockVariable1);
  }
};

globalVariable2();
// console.log(funVariable1);

var varVariable = 1;
console.log(varVariable);

let letVariable = 2;
console.log(letVariable);

const constVariable = 3;
console.log(constVariable);

const constObj1 = {};
// constObj1.key = "value"; //ezzel fel lehet tölteni a const-al deklarált object-et
// constObj1 = { key: "value" }; //így nem lehet felöltelni, mert ez egy új object-et hoz létre, új értékkel
console.log(constObj1);

const globalVariable3 = function (parameter1, parameter2, parameter3) {
  console.log(parameter1);
  console.log(parameter2);
  console.log(parameter3);
  console.log(parameter3()); //a parameter után ha rakunk zárójelet akkor is lefut a behívott fgv.
};

const globalVariable4 = "apple";

const globalVariable5 = function () {
  return "pear";
};

const globalVariable6 = function () {
  return "shoes";
};

globalVariable3(globalVariable5(), globalVariable4, globalVariable6);

const loadEvent = function (parameter1) {
  const rootElement = document.getElementById("root");
  console.log(rootElement);
  console.log(parameter1);

  rootElement.addEventListener("click", function (event) {
    console.log(event.currentTarget);
    event.currentTarget.insertAdjacentHTML("beforeend", "clicked, ");
    event.currentTarget.classList.toggle("clicked");
  });
};
window.addEventListener("load", loadEvent);
