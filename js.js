let no = document.querySelectorAll('.btn');
let abc = 0;
let operator = "";

no.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let display = document.querySelector('#show');

    // Prevent adding more if 17 characters are already present
    if (display.innerText.length >= 17) return;

    let value = e.target.value;
    display.innerText += value;

    console.log("working");
    console.log("value clicked", value);
  });
});

function all_clear() {
  console.log("all clear button pressed");
  let display = document.querySelector('#show');
  display.innerText = "";
  abc = 0;
  operator = "";
}

function del() {
  let display = document.querySelector('#show');
  let value = display.innerText;
  display.innerText = value.slice(0, -1);
}

function setOperator(op) {
  let display = document.querySelector('#show');
  let parsed = parseFloat(display.innerText);
  
  if (isNaN(parsed)) {
    display.innerText = "Err";
    return;
  }

  abc = parsed;
  operator = op;
  display.innerText = "";
}

function sum() { setOperator("+"); }
function sub() { setOperator("-"); }
function mul() { setOperator("*"); }
function divi() { setOperator("/"); }
function percen() { setOperator("%"); }

function equal() {
  let display = document.querySelector('#show');
  let current = parseFloat(display.innerText);

  if (isNaN(current)) {
    display.innerText = "Err";
    return;
  }

  let result;

  try {
    switch (operator) {
      case "+": result = abc + current; break;
      case "-": result = abc - current; break;
      case "*": result = abc * current; break;
      case "/": result = current !== 0 ? abc / current : "Err"; break;
      case "%": result = abc % current; break;
      default: result = current;
    }

    if (typeof result === "number" && !isFinite(result)) {
      result = "Err";
    }

    display.innerText = result;
    abc = typeof result === "number" ? result : 0;
    operator = "";
  } catch (e) {
    display.innerText = "Err";
    console.error("Calculation error:", e);
  }
}
