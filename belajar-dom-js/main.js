//ini untuk memanggil demo pake id = #//
const demo = document.querySelector("#demo");
demo.innerHTML = "MEYLANI";

//memanggil demo tanda id semisal pake class jadi . //
//const tes = document.querySelector(".tes");
//tes.innerHTML = "TES TES";//

const getById = document.getElementById("get-by-id");
getById.innerHTML = "berhasil get elemen by id";

const getByClass = document.getElementsByClassName("get-by-class");
for (let index = 0; index < getByClass.length; index++) {
  getByClass[index].innerHTML = "berhasil get elemen by class";
}
const getDemo1 = document.getElementById("demo");
getDemo1.className = "color";
getDemo1.style.fontSize = "100px";
getDemo1.style.color = "##000000";
getDemo1.style.fontFamily = "times new roman";

const createLoading = document.createElement("div");
createLoading.innerHTML = "loading";
getDemo1.className = "color";
createLoading.style.color = "#FF0000";
getDemo1.appendChild(createLoading);
