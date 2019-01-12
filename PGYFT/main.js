"use strict"

const filename = "https://nemin32.github.io/PGYFT/datas.json";
let root;
let tag;

window.onload = () => {
    root = document.getElementById("root");
    tag = document.getElementById("tag")
    tag.value = ""

    fetch(filename).then(resp => resp.json()).then(json => {
        tag.addEventListener("change", () => {
            while (root.firstChild) {root.removeChild(root.firstChild)}
            for (let i in json) {
                if (tag.value != "notag") {
                    if (json[i].tags.indexOf(tag.value) != -1) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `<h3>${json[i].question}</h3><p>${json[i].answer}</p><p class = 'tags'><b>Tags:</b> ${json[i].tags.join(", ")}</p>`
                        root.appendChild(elem)
                    }
                } else {
                    if (json[i].tags.length == 0) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `<h3>${json[i].question}</h3><p>${json[i].answer}</p><p class = 'tags'><b>Tags:</b> None yet...</p>`
                        root.appendChild(elem)
                    }
                }
            }
        })
    })
}