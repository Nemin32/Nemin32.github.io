const header = `---
title: Dear Alf, Please Get Your Facts Together!
summary: A list of (nearly) all Dear Alf questions and answers.
tags: ["spec"]
---

<script>
window.onload = () => {
  const toc = document.getElementById("tocselect")

  toc.addEventListener("change", () => window.location.hash = toc.value)
}
</script>

<link rel="stylesheet" href="/css/pgyft.css">

# Dear Alf, Please Get Your Facts Together!

"Dear Alf" was a several years long series of weekly Q&A-s in which
OWI answered some of the fans' questions in an in-universe format.

While some of these can still be accessed over at [Oddworld's
page](https://oddworld.com), a lot can only be accessed at obscure
archives, so I took the task upon myself to gather every single one of
these I can find and put them in a single page, which you can find
below.

Sadly I still can't guarantee that this is every single question and
answer ever given, but it is still the large majority of them.

So, what are you waiting for? Pick a post from the list below or use your
browser's search function to find more out about a topic that interests you!

<h2><a id="toc"></a>Table of Contents</h2>

`

const post_text = await Deno.readTextFile("./posts.json")
const posts = JSON.parse(post_text)

const ordered: any = {}
Object.keys(posts).sort().forEach(function(key: string) {
  ordered[key] = posts[key];
});

const generateToc = (posts: string[]) => {
  let TOC = "<select id='tocselect'>" + '\n'

  for (const title in ordered) {
    TOC += `<option>${title}</option>\n`
  }

  TOC += "</select>"

  return TOC;
}

const generatePost = (title: string) => {
  const json = ordered[title];

  let post = `<div><h2><a id="${title}"></a>${title}<br>(Posted on: ${json.month}/${json.year})</h2><center><a href="#toc">Back to the top</a></center><br>\n`

  for (const inner of json.contents) {
    post += `<div class='qna'>\n<p><b>Question:</b> ${inner.question}</p>\n<hr>\n<p><b>Alf:</b> ${inner.answer}</p>\n</div>\n`
  }

  post += "</div>\n"

  return post;
}

console.log(header)
console.log(generateToc(posts))

console.log("<div id='root'>")
for (const post in ordered)
  console.log(generatePost(post))
console.log("</div>")
