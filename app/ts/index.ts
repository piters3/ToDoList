let elems = document.querySelectorAll("li");

(function addBtnsClose(elems: NodeListOf<HTMLElement>) {
    for (let i = 0; i < elems.length; i++) {
        let button = document.createElement("button");
        button.classList.add("close");
        button.innerHTML = "\u00D7";
        elems[i].appendChild(button);
        remove();
    }
})(elems);

function remove() {
    let crosses = document.querySelectorAll(".close");
    for (let i = 0; i < crosses.length; i++) {
        crosses[i].addEventListener("click", function (e) {
            this.parentElement.style.display = "none";
        });
    }
}

function addBtnClose(elem: HTMLElement) {
    let button = document.createElement("button");
    button.classList.add("close");
    button.innerHTML = "\u00D7";
    elem.appendChild(button);
}

let addBtn = <HTMLButtonElement>document.querySelector("#add");
addBtn.addEventListener("click", add, false);
addBtn.addEventListener("click", remove, false);

function add() {
    let tekst = <HTMLInputElement>document.querySelector("#tekst");
    let ul = document.querySelector("#lista");
    let li = document.createElement("li");
    li.textContent = tekst.value;
    ul.appendChild(li);
    addBtnClose(li);
    li.addEventListener("click", function (e) {
        this.parentElement.style.display = "none";
    });
}

let ul = document.querySelector("#lista");
ul.addEventListener("click", function (e) {
    var element = e.target as HTMLElement;
    if (element.tagName === "LI") {
        element.classList.toggle("checked");
    }
}, false);




