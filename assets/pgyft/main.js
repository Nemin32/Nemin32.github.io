/**
 * @typedef {{question: string, answer: string}} QnA
 * @typedef {{year: string, month: string, contents: Array<QnA>}} Entry
 * @typedef {{question: string[], answer: string[]}} QnAWord
 * @typedef {{total: string[], contents: QnAWord[] }} Word
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

/** @type {{[k: string]: Word}} */
const words = await fetch("/assets/pgyft/words.json").then(response => response.json());

/** @type {{[k: string]: Entry}} */
const raw_posts = await fetch("/assets/pgyft/posts.json").then(response => response.json());
const posts = Array.from(Object.entries(raw_posts).map(([key, entry]) => ({
    title: key,
    year: Number(entry.year),
    month: Number(entry.month),
    contents: entry.contents
})));

/**
 * @param {Post} post 
 * @param {Post} other 
 */
function sortByDate(post, other) {
    const yearDiff = post.year - other.year;

    if (yearDiff !== 0) {
        return yearDiff;
    }

    // The year is the same, so we sort by month.
    return post.month - other.month;
}

/**
 * @param {Post} post 
 */
function renderPost(post) {
    /**
     * @param {string} type Type of the elem.
     * @param {string} text Inner text of the elem. Optional.
     * @param {string} className Optional classname.
     * @returns 
     */
    const mkElem = (type, text, className) => {
        const elem = document.createElement(type);

        if (text) {
            elem.innerHTML = text;
        }

        if (className) {
            elem.className = className;
        }

        return elem;
    };

    const container = document.createElement("div");
    container.className = "post";

    const displayTitle = post.title.replaceAll("-", " ").replace(
        /\w\S*/g,
        text => text.charAt(0).toUpperCase() + text.substring(1).toLowerCase()
    )

    container.appendChild(mkElem("h1", displayTitle));

    for (const qna of post.contents) {
        container.appendChild(mkElem("p", `Question: ${qna.question}`, "question"));
        container.appendChild(mkElem("p", `Answer: ${qna.answer}`, "answer"));
    }

    return container;
}

for (const post of posts.toSorted(sortByDate)) {
    root.appendChild(renderPost(post))
}