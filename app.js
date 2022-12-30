let disp = document.querySelector(".display");
let button = Array.from(document.getElementsByClassName("bt"));
button.map((button) => {
  button.addEventListener("click", (ele) => {
    ele.preventDefault();
    switch (ele.target.innerText) {
      case "AC":
        disp.innerText = "";
        break;
      case "clr":
        disp.innerText = disp.innerText.slice(0, -1);
        break;

      case "=":
        try {
          disp.innerText = eval(disp.innerText);
        } catch {
          disp.innerText = "Syntax Error!!";
        }
        break;
      default:
        disp.innerText += ele.target.innerText;
    }
  });
});