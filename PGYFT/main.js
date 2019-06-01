"use strict"

const filename = "./datas.json";
let root;
let tag;

function helper(tags) {
  return tags.map(elem => ` <a class = "tag_link" onclick = "tag.value = '${elem}'; tag.dispatchEvent(new Event('change'))">${elem}</a>`)
}

function create_div_content(data, no_tags) {
  return `
  <p class = "question">${data.question}</p>
  <p class = "answer">${data.answer}</p>
  <div class = "bottom">
    <p class = "source"><a href="${data.link}">Source</a></p>
    <p class = "tags">Tags: ${(no_tags) ? "None yet..." : helper(data.tags)}</p>
  </div>
  `
}

window.onload = () => {
  root = document.getElementById("root");
  tag = document.getElementById("tag")

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
        if ((tag.value == "all") || (tag.value != "notag" && data.tags.indexOf(tag.value) != -1) || (tag.value == "notag" && data.tags.length == 0)) {
          let elem = document.createElement("div")
          elem.innerHTML = create_div_content(data, data.tags.length==0)
          root.appendChild(elem)
        }
      })
    })
  })
}
