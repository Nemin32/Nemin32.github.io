let root = document.getElementById("root")

    let elems = []
fetch("/assets/json/posts.json").then(e => e.json()).then(json => {
    for (let elem in json) {
        elems.push(elem)
    }
    elems.sort()

    for (let elem of elems) {
        let outer_div = document.createElement("div");
        outer_div.innerHTML = `<h2>${elem}</h2>`
        
        for (let inner in json[elem]) {
            let div = document.createElement("div");
            let json_elem = json[elem][inner];

            div.className = "qna"
            div.innerHTML = `
<p><strong>${json[elem][inner].question}</strong></p>
<p>${json[elem][inner].answer}</p>
`

            outer_div.appendChild(div)
        }

        root.appendChild(outer_div)
    }
})
