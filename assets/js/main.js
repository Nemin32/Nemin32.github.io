let root = document.getElementById("root")

let elems = []
fetch("/assets/json/posts.json").then(e => e.json()).then(json => {
    for (let elem in json) {
        elems.push(elem)
    }
    elems.sort()

    let toc = document.createElement("ul");
    for (let elem of elems) {
        let li = document.createElement("li")
        li.innerHTML = `<a href="#${elem}">${elem}</a>`
        toc.appendChild(li)
    }
    document.getElementById("content").insertBefore(toc, root)

    for (let elem of elems) {
        let outer_div = document.createElement("div");
        outer_div.innerHTML = `<h2><a id="${elem}"></a>${elem}</h2><center><a href="#toc">Back</a></center><br>`
        
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
