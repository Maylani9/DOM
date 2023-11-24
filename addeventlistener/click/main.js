const getBtn = document.querySelector("#Btn");
const getkotak = document.querySelector(".kotak");
getkotak.style.backgroundColor = "pink";

getBtn.addEventListener("click", () => {
  const getkotak = document.querySelector(".kotak");

  console.log(getkotak.style.backgroundColor);
  if (getkotak.style.backgroundColor == "pink") {
    getkotak.style.backgroundColor = "blue";
  } else if (getkotak.style.backgroundColor == "blue") {
    getkotak.style.backgroundColor = "pink";
  }
});
