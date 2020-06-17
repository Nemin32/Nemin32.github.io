---
title: The Many Faces of Oddwords
summary: A short trip down memory lane, showcasing the different designs Oddwords had since its inception.
---

<style>

.showcase #rest
{
    display: grid;
    grid-template-columns: repeat(4, calc(100% / 4));
    justify-items: center;

    width: 100%;
    margin: 0 ;
}

.showcase #main_image
{
   cursor: pointer;
   max-height: 60vh;
   max-width: 100%;
}

.showcase #rest img
{
    margin: 0;
    cursor: pointer;
    border: 3px solid #2e2e2e;

    //width: 100%;
    height: 100%;
    max-height: 20vh;
}

.showcase
{
    background: #2e2e2e;
    width: 680px;
    margin: 0;

    padding: 0.5rem;
}

code
{
    font-family: monospace;
}

.highlighter-rouge
{
    width: 60%;
    margin: 0;
    background: #eee;
	color: black;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}

</style>

<script>

window.addEventListener("load", () =>
{
    let imgs = [...document.querySelectorAll("#rest img")]
    let mains = [...document.querySelectorAll("#main_image")]

    imgs.forEach(img => {
        const main = img.parentElement.parentElement.querySelector("#main_image")
        img.addEventListener("click", () => {main.src = img.src})
    })
    
    mains.forEach(m => m.addEventListener("click", () => window.open(m.src, "_blank") ))
})

</script>

# The Many Faces of Oddwords

The website is slowly nearing its first anniversary, so I figured I
would like make a page that showcases just how differently the page
used to look in the past. To do this, I took a screenshot of the frontpage and [the very first
article](/cities) every time the page's design undervent a major
change. These can be seen below:

## Old-style Frontpages

These were my very first attempts at organizing the articles on my
site. Even through they're quite flawed, I'm pretty fond of the second
design which - with some modifications of course - could become a
nice frontpage for a site.

<div class="showcase">
    <img id="main_image" src="/imgs/oddwords_timelapse/index/index_1.webp">
    <div id="rest">
    {% for i in (1..4) %}
        <img src="/imgs/oddwords_timelapse/index/index_{{i}}.webp">
    {% endfor %}
    </div>
</div>

## New-style Frontpages

Of course eventually I realized I would like to present these articles
in a more appealing fashion, so I first opted to use a list with
differently colored titles and then did away with that and instead
chose to use a grid of more traditional "blog-post" like rectangles.

<div class="showcase">
    <img id="main_image" src="/imgs/oddwords_timelapse/index/index_5.webp">
    <div id="rest">
    {% for i in (5..8) %}
        <img src="/imgs/oddwords_timelapse/index/index_{{i}}.webp">
    {% endfor %}
    </div>
</div>

# Cities

What you see below is the very first Oddwords-article I've written. It
was created even before I had the name "Oddwords" in mind. I started
the website after some encouragement from a friend, but I had
absolutely no idea what I was doing. My first "design", if we can even
call it that, was a simple white-on-black text, with minor formatting.
The page was pretty hard to read and kind of soulless.

<div class="showcase">
    <img id="main_image" src="/imgs/oddwords_timelapse/cities/cities_1.webp">
    <div id="rest">
    {% for i in (1..10) %}
        <img src="/imgs/oddwords_timelapse/cities/cities_{{i}}.webp">
    {% endfor %}
    </div>
</div>

I later attempted to alleviate this by using justified text and less
harsh colors, but I wasn't entirely convinced with the results, nor
were the people I showed the site to.

To make the site a bit more unique I started experimenting with wild
color-schemes, like yellow on purple (modelled after an early version
of [TOE](http://oddworldlibrary.net/toe/Contents?title=index.php)),
but while this gave the site character, it was still quite hard to
read. The later two green on green designs didn't exactly help either.

I ultimately realized less is sometimes more so I started utilzing a
simple dirty-white background and almost-black font, which
considerably improved readability.


        body {
            background-color: black;
        }
        
        h1 {
            text-align: center;
            margin-top: 2ch;
            margin-bottom: 1.5ch;
            color: white;
            font-size: 4ch;
            font-weight: bold;
        }
        
        p {
            width: 80ch;
            margin: auto;
            margin-bottom: 2ch;
            color: white;
            font-size: larger;
        }
        
        p.centered {
            text-align: center;
        }
        
        hr {
            width: 40ch;
            margin-top: 2ch;
            margin-bottom: 2ch;
        }
        
        img {
            width: 60ch;
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 4ch;
            margin-top: 4ch;
        }

The original CSS stylesheet of *cities.html*, only around 40 lines in
size compared to the current 250-300.
{:.subtitle}

**Thanks for sticking with Oddwords and I hope I'll see you in 2020!**
{:style="text-align: center;"}
