let rang = document.getElementById("rang");
let son = document.getElementById("son");
let form = document.getElementById("form");
let number = document.getElementById("number");
let minus = document.getElementById("minus");
let plus = document.getElementById("plus");
rang.addEventListener("input", () => {
  son.style.color = rang.value;
});
form.addEventListener("submit", (e) => {
  son.innerText = +number.value;

  e.preventDefault();
});

plus.addEventListener("click", () => {
  let ok = Number(son.innerText);
  son.innerText = ok + 1;
});

minus.addEventListener("click", () => {
  let ok = Number(son.innerText);
  son.innerText = ok - 1;
});
