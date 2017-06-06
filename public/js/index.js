var elems = document.querySelectorAll("li");
(function addBtnsClose(elems) {
    for (var i = 0; i < elems.length; i++) {
        var button = document.createElement("button");
        button.classList.add("close");
        button.innerHTML = "\u00D7";
        elems[i].appendChild(button);
        remove();
    }
})(elems);
function remove() {
    var crosses = document.querySelectorAll(".close");
    for (var i = 0; i < crosses.length; i++) {
        crosses[i].addEventListener("click", function (e) {
            this.parentElement.style.display = "none";
        });
    }
}
function addBtnClose(elem) {
    var button = document.createElement("button");
    button.classList.add("close");
    button.innerHTML = "\u00D7";
    elem.appendChild(button);
}
var addBtn = document.querySelector("#add");
addBtn.addEventListener("click", add, false);
addBtn.addEventListener("click", remove, false);
function add() {
    var tekst = document.querySelector("#tekst");
    var ul = document.querySelector("#lista");
    var li = document.createElement("li");
    li.textContent = tekst.value;
    ul.appendChild(li);
    addBtnClose(li);
    li.addEventListener("click", function (e) {
        this.parentElement.style.display = "none";
    });
}
var ul = document.querySelector("#lista");
ul.addEventListener("click", function (e) {
    var element = e.target;
    if (element.tagName === "LI") {
        element.classList.toggle("checked");
    }
}, false);
