const body = document.body;
const main_text = document.createElement("h1");
const br = document.createElement("br");
const div_1 = document.createElement("div");
const div_2 = document.createElement("div");
const div_3 = document.createElement("div");
const div_4 = document.createElement("div");
const span_1 = document.createElement("span");
const span_2 = document.createElement("span");
const span_3 = document.createElement("span");
const span_4 = document.createElement("span");
const input_text_1 = document.createElement("input");
const input_text_2 = document.createElement("input");
const button = document.createElement("input");
let rnd = 0;

input_text_1.style.height = "18px";
span_1.style.fontSize = "25px";
span_1.style.fontWeight = "900";
span_1.textContent = "Generate a number between 0 and ";

input_text_2.style.height = "13px";
span_2.style.fontSize = "20px";
span_2.style.fontWeight = "500";
span_2.textContent = "Guess the number: ";

span_3.style.fontSize = "20px";
span_3.style.fontWeight = "500";

span_4.style.fontSize = "20px";
span_4.style.fontWeight = "900";

button.setAttribute("type", "button");
button.value = "Play!";
button.style.height = "25px";
button.style.width = "50px";

main_text.textContent = "Random Number Game";

div_1.append(span_1);
div_1.append(input_text_1);
div_2.append(span_2);
div_2.append(input_text_2);
div_2.append(button);
div_3.append(span_3);
div_4.append(span_4);
body.append(main_text);
body.append(div_1);
body.append(br);
body.append(div_2);
body.append(div_3);
body.append(div_4);

button.addEventListener("click", () => {
  rnd = Math.floor(Math.random() * input_text_1.value);
  span_3.textContent =
    "You chose: " + input_text_1.value + " , the machine chose: " + rnd + ".";
  if (input_text_1.value == "" || input_text_2.value == "") {
    alert("write number");
  }
  if (input_text_2.value == rnd) {
    span_4.textContent = "You won!";
    button.setAttribute("disabled", "disabled");
  }
});
