const getInput = document.getElementById("input");
getInput.addEventListener("keyup", function () {
  const gettext = document.querySelector("#text");
  gettext.innerHTML = getInput.value;

  const getTes = document.getElementById("text");
  const getkotak = document.querySelector(".kotak");
  getkotak.style.height = getInput.value + "px";
  getkotak.style.width = getInput.value + "px";
  getkotak.style.background = getInput.value;
  getkotak.style.value;
});
