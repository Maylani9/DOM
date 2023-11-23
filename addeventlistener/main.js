const getKurang = document.getElementById("min");
const getAngka = document.getElementById("angka");
const getTambah = document.getElementById("plus");

getTambah.addEventListener("click", function () {
  if (getAngka.innerHTML < 10) {
    getAngka.innerHTML++;
  }
});
getKurang.addEventListener("click", function () {
  if (getAngka.innerHTML > 0) {
    getAngka.innerHTML--;
  }
});
const getBtn = document.getElementById("Btn");

getBtn.addEventListener("click", function () {
  var inputValue = document.getElementById("input").value;

  if (inputValue !== "") {
    var newListElement = document.createElement("li");
    newListElement.innerHTML = inputValue;

    //ini untuk mengapus elemen//
    newListElement.addEventListener("click", function () {
      this.parentNode.removeChild(this);
    });

    const getList = document.getElementById("list");
    getList.appendChild(newListElement);

    document.getElementById("input").value = "";
  }
});
document.getElementById("btnRemove").addEventListener("click", function () {
  var list = document.getElementById("list");

  //mengambil index halaman terakhir//
  var lastIndex = list.children.length - 1;

  //menghapus elemen terakhir dari daftar//
  list.removeChild(list.children[lastIndex]);
});
