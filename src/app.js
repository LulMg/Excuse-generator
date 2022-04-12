/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here

  document.querySelector("#boton").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });

  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let pronombre = ["A", "The"];
  let sujeto = ["racoon", "taxi driver", "comedian", "dog"];
  let verbo = ["took my", "stole my", "threw my", "peed on my", "bit my"];
  let posecion = ["homework", "car", "wallet", "breakfast"];
  let lugar = ["in my house", "in my school", "in my driveway"];

  let pronombreIndex = Math.floor(Math.random() * pronombre.length);
  let sujetoIndex = Math.floor(Math.random() * sujeto.length);
  let verboIndex = Math.floor(Math.random() * verbo.length);
  let posecionIndex = Math.floor(Math.random() * posecion.length);
  let lugarIndex = Math.floor(Math.random() * lugar.length);

  return (
    pronombre[pronombreIndex] +
    " " +
    sujeto[sujetoIndex] +
    " " +
    verbo[verboIndex] +
    " " +
    posecion[posecionIndex] +
    " " +
    lugar[lugarIndex]
  );
};
