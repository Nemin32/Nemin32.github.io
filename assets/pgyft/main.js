/**
 * @typedef {{question: string, answer: string}} QnA
 * @typedef {{year: string, month: string, contents: Array<QnA>}} Entry
 * @typedef {{question: string[], answer: string[]}} QnAWord
 * @typedef {{title: string, year: number, month: number, contents: QnA[]}} Post
 */

const root = document.getElementById("root");

const keywords = {
    "slig": ["pant", "gun", "evil", "wildum", "shoot", "shot", "slog"],
    "slog": ["dog", "meat", "jaw", "bite"],
    "gun": ["metal", "bullet", "fire"],
    "wildum": ["beaten", "dead", "crig", "slig", "good"],
    "mudokon": ["abe", "mud", "feather", "alf", "chant", "chanting", "possess", "slave"],
    "abe": ["messiah", "savior", "saviour", "chant", "chanting", "possess", "hero", "mudokon", "good", "dead"],
    "chant": ["bird", "possess", "sing", "mudokon"],
    "molluck": ["glukkon", "wealth", "rupturefarms", "rupture", "farms", "slig", "queen"],
    "glukkon": ["greed", "wealth", "legs", "hands", "slig", "evil", "smoke", "cigar"],
    "bigface": ["shaman", "mask", "mudokon"],
};

/** @type {{[k: string]: Set<string>}} */
const words = await fetch("/assets/pgyft/words.json").then(response => response.json()).then(words => {
    return Object.fromEntries(Object.entries(words).map(([key, val]) => [key, new Set(val)]))
});

/** @type {{[k: string]: Entry}} */
const raw_posts = await fetch("/assets/pgyft/posts.json").then(response => response.json());
const posts = Array.from(Object.entries(raw_posts).map(([key, entry]) => ({
    title: key,
    year: Number(entry.year),
    month: Number(entry.month),
    contents: entry.contents
})));

function getSortDirection() {
    return document.querySelector("input[name='sort']:checked").value == "up";
}

/**
 * @param {Post} post 
 * @param {Post} other 
 */
function sortByDate(post, other, direction) {
    const yearDiff = post.year - other.year;

    if (yearDiff !== 0) {
        return direction ? yearDiff : (1 - yearDiff);
    }

    // The year is the same, so we sort by month.
    const monthDiff = post.month - other.month
    return direction ? monthDiff : (1 - monthDiff);
}

/**
 * @param {Post} post 
 */
function renderPost(post) {
    const container = document.createElement("details");
    container.className = "post";

    const displayTitle = post.title.replaceAll("-", " ").replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )

    const header = document.createElement("summary");
    header.className = "header"
    header.innerHTML = `<h3>${displayTitle}</h3><span>[${post.year}-${post.month}]</span>`
    container.appendChild(header);

    for (const qna of post.contents) {
        const question = document.createElement("p");
        question.className = "question";
        question.innerHTML = `Question: ${qna.question.trim()}`
        container.appendChild(question);

        const lines = qna.answer.split("\n\n");
        lines[0] = `<b>Answer:</b> ${lines[0]}`;
        const answerContainer = document.createElement("div");
        answerContainer.className = "answer";
        answerContainer.innerHTML = lines.map(l => `<p>${l}</p>`).join("")

        container.appendChild(answerContainer);
    }

    return container;
}

const searchInput = document.getElementById("search");
function getFilteredPost() {
    /** @type {String} */
    const search = searchInput.value;

    if (search.length == 0) {
        return posts;
    } else {
        const containingPostKeys = Object
            .entries(words)
            .filter(([_, val]) => {
                if (val.has(search)) return true;
                return Object.entries(val).some(word => word.includes(search));
            })
            .map(([key, _]) => key);

        console.log(containingPostKeys)
        return posts.filter(p => containingPostKeys.includes(p.title));
    }
}

function rerender() {
    const posts = getFilteredPost();
    const sortedPosts = posts.toSorted((a, b) => sortByDate(a, b, getSortDirection()));
    root.replaceChildren(...sortedPosts.map(renderPost))
}

document.querySelectorAll("input[name='sort']").forEach(input => {
    input.addEventListener("change", rerender)
})

let debounceTimer = null;
searchInput.addEventListener("input", () => {
    clearTimeout(debounceTimer);
    debounceTimer = setTimeout(rerender, 250);
})

document.getElementById("open-all").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => detail.open = true);
})
document.getElementById("close-all").addEventListener("click", () => {
    document.querySelectorAll("details").forEach(detail => detail.open = false);
})

rerender()