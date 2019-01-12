"use strict"

const filename = "datas.json";
let root;
let tag;

window.onload = () => {
    root = document.getElementById("root");
    tag = document.getElementById("tag")

    //root.innerHTML = "<div><h3 style = 'text-align:center'>Welcome! Please select a category to begin.</h3></div>"
    tag.value = ""

    fetch(filename).then(resp => resp.json()).then(json => {
        tag.addEventListener("change", () => {
            while (root.firstChild) {root.removeChild(root.firstChild)}
            json["data"].forEach(data => {
                if (tag.value != "notag") {
                    if (data.tags.indexOf(tag.value) != -1) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `<h3>${data.question}</h3><p>${data.answer}</p><p class = 'tags'><b>Tags:</b> ${data.tags.join(", ")}</p>`
                        root.appendChild(elem)
                    }
                } else {
                    if (data.tags.length == 0) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `<h3>${data.question}</h3><p>${data.answer}</p><p class = 'tags'><b>Tags:</b> None yet...</p>`
                        root.appendChild(elem)
                    }
                }
            })
        })
    })
}