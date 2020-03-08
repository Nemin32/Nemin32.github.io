let root = document.getElementById("root")

let elems = []
fetch("/assets/json/posts.json").then(e => e.json()).then(json => {
    for (let elem in json) {
        elems.push(elem)
    }
    elems.sort()

    let toc = document.createElement("select");
    for (let elem of elems) {
        let li = document.createElement("option")
        li.innerHTML = `${elem}`
        toc.appendChild(li)
    }

    toc.addEventListener("change", () => {
        console.log(toc.value)
        window.location.hash = toc.value
    })

    document.querySelector("main").insertBefore(toc, root)

    for (let elem of elems) {
        let outer_div = document.createElement("div");
        outer_div.innerHTML = `<h2><a id="${elem}"></a>${elem}<br>(Posted on: ${json[elem].month}/${json[elem].year})</h2><center><a href="#toc">Back</a></center><br>`

        for (let inner in json[elem].contents) {
            let div = document.createElement("div");
            let json_elem = json[elem].contents[inner];

            div.className = "qna"
            div.innerHTML = `
<p><strong>${json_elem.question}</strong></p>
<p>${json_elem.answer}</p>
`

            outer_div.appendChild(div)
        }

        root.appendChild(outer_div)
    }
})
