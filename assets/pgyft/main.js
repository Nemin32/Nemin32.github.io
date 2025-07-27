const root = document.getElementById("root");

fetch("/assets/pgyft/posts.json").then(response => response.json()).then(json => {
const titles = Object.keys(json)
const len = Math.ceil(titles.length / 10);

let count = 0;
for (let i = 0; i < len; i++) {
    setTimeout(() => {
    for (let step = 0; step < 10 && count < titles.length; step++) {
    const title = titles[count];

    const elem = document.createElement("div");
    elem.className="post";

    const date = `${json[title].year}.${json[title].month}.`
    const displayTitle = title.replaceAll("-", " ").replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )

    const titleElem = document.createElement("h1")
    titleElem.className = "title";
    titleElem.innerHTML = `${displayTitle} <span class="date">[${date}]</span>`;

    elem.appendChild(titleElem);

    for (const content of json[title].contents) {
        const question = document.createElement("p");
        const answer = document.createElement("p");

        question.innerHTML = `Question: ${content.question}`;
        answer.innerHTML = content.answer;

        question.className = "question";
        answer.className = "answer";

        elem.appendChild(question)
        elem.appendChild(answer)
    }

    root.appendChild(elem)

    count++;
    }
    }, i * 200)
}
})