"use strict"

const filename = "datas.json";
let root;
let tag;

function helper(tags) {
	return tags.map(elem => `<a onclick = "tag.value = '${elem}'; tag.dispatchEvent(new Event('change'))">${elem}</a>`)
}

window.onload = () => {
    root = document.getElementById("root");
    tag = document.getElementById("tag")

    //root.innerHTML = "<div><h3 style = 'text-align:center'>Welcome! Please select a category to begin.</h3></div>"
    tag.value = ""

    fetch(filename).then(resp => resp.json()).then(json => {

        
        json["tags"].forEach(tags => {
            let elem;
            if (tags.indexOf("-- ") != -1) {
                elem = document.createElement("optgroup")
                elem.label = tags;
            } else {
                elem = document.createElement("option")
                elem.innerText = tags;
            }

            elem.value = tags;
            

            tag.appendChild(elem);
        })

        tag.addEventListener("change", () => {
            while (root.firstChild) {root.removeChild(root.firstChild)}
            json["data"].forEach(data => {
                if (tag.value != "notag") {
                    if (data.tags.indexOf(tag.value) != -1) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `
				<h3>${data.question}</h3>
				<p>${data.answer}</p>
				<hr>
				<div class = "flexer">
					<p class = 'src'><b>Source:</b> <a href = "${data.link}">[Link]</a></p>
					<p class = 'tags'><b>Tags:</b> ${helper(data.tags)}</p>
				</div>`
                        root.appendChild(elem)
                    }
                } else {
                    if (data.tags.length == 0) {
                        let elem = document.createElement("div");
                        elem.innerHTML = `
				<h3>${data.question}</h3>
				<p>${data.answer}</p>
				<hr>
				<div class = "flexer">
					<p class = 'src'><b>Source:</b> <a href = "${data.link}">[Link]</a></p>
					<p class = 'tags'><b>Tags:</b> None yet...</p>
				</div>`
                        root.appendChild(elem)
                    }
                }
            })
        })
    })
}
