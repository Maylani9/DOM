const getAlert = document.getElementById("alert");
getAlert.addEventListener("click", function () {
  alert("Hi....Mey...Makan Yuk? Udah Siang Niech,Makan Apa yang Enak Yaaa?...");
});
const getConfirm = document.getElementById("confirm");
getConfirm.addEventListener("click", function () {
  const getConfirm = confirm("Apakah Kamu Suka Makan? ");
  if (getConfirm == true) {
    alert("YA saya Suka Makan");
  } else if (getConfirm == false) {
    alert("Saya Tidak Suka Makan");
  }
});
const getPrint = document.getElementById("print");
getPrint.addEventListener("click", function () {
  print();
});
